import * as React from "react";
import {
  styled,
  Base,
  Spinner,
  Toast,
  withVirta,
  VirtaClient,
} from "@virtahealth/components";
import { useQuery, useMutation, isUndefined } from "@virtahealth/utils";
import { MessageDescriptor } from "react-intl";
import { FormikValues } from "formik";

import {
  ELIGIBILTY_EXCLUSION_URI,
  UPDATE_COVERAGE,
  UPDATE_PATIENT,
  CREATE_COVERAGE,
  GET_COVERAGES,
  GET_PATIENT,
  GET_ELIGIBILITY_RESPONSES,
  GET_DEPLOYMENTS,
  GET_DEPLOYMENTS_PAYERS,
  Name,
  Grouping,
  Subscriber,
  EligibilityResponse,
  Patient,
  DocumentReference,
  ImageContent,
  Coverage,
  Deployment,
  DeploymentPayor,
  UpdateDocumentReferencePayload,
  Payor,
  getBirthDateString,
  getEligibilityExclusion,
  getCarrierDropdownOptions,
  getReasonDeployment,
} from "./utils";
import { CoverageInput } from "./CoverageInput";
import { EligibilityResponseTable } from "./EligibilityResponse";
import { EligibilityWarningTable } from "./EligibilityWarning";

declare global {
  interface Window {
    virta: any;
  }
}

window.virta = window.virta || {};

export interface PatientCoverageProps {
  /**
   * A React component that will appear above the form. May be used in conjunction
   * with `hideSubmitButton` to pass in a common header component, for instance,
   * which contains or can be passed a submit button.
   */
  headerComponent?: React.ReactNode;
  /**
   * Error handler for a failed API call to Identity.
   */
  onError?: (e: Error) => void;
  /**
   * Virta id for the patient
   */
  virtaId: string;

  client: VirtaClient;
  isEaUser?: boolean;
  structuredPayersEnabled?: boolean;
  sendAmplitudeLogEvent?: (
    eventName: string,
    eventProperties: any,
    patientUserId?: number | null,
    patientVirtaId?: string
  ) => void;
}

export const OFFICIAL_USE = 2;
const DEFAULT_INTERVAL = 6000;
const TIMEOUT = 120000; // two minutes
const SUPERSEDED = "SUPERSEDED";

const TOAST_MESSAGES = {
  eligibilityResponseTimeout: {
    id: "eligibilityResponseTimeout",
    description: "Timeout Error getting new Eligibility Response",
    defaultMessage:
      "Timeout getting new eligibility response. Please try again.",
  },
  deleteImageError: {
    id: "deleteImageError",
    description: "Error deleting insurance card image",
    defaultMessage: "Error deleting insurance card image. Please try again.",
  },
  fetchImagesError: {
    id: "fetchImagesError",
    description: "Error fetching insurance card images",
    defaultMessage: "Error fetching insurance card images. Please try again.",
  },
  addCoverageBefore: {
    id: "addCoverageBefore",
    description:
      "Please add coverage information before creating/deleting images",
    defaultMessage:
      "Please add coverage information before creating/deleting images",
  },
  documentReferenceId: {
    id: "documentReferenceId",
    description: "Error deleting images",
    defaultMessage: "Error deleting images, please try again.",
  },
  uploadImageError: {
    id: "uploadImageError",
    description: "Error updating images",
    defaultMessage:
      "There was an issue uploading the insurance card, please try again",
  },
};

export interface ToastContent {
  type: "error";
  message: MessageDescriptor;
}

const StyledToastText = styled(Base)`
  font-weight: bold;
  text-align: center;
  color: white;
`;

const SpinnerContainer = styled.View`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const CoverageContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const PatientCoverage: React.FC<PatientCoverageProps> = ({
  headerComponent,
  virtaId,
  client,
  isEaUser,
  structuredPayersEnabled,
  sendAmplitudeLogEvent,
}) => {
  const [eligibilityResponse, setEligibilityResponse] =
    React.useState<EligibilityResponse>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [coverage, setCoverage] = React.useState<Coverage>();
  const [patient, setPatient] = React.useState<Patient>();
  const [deployments, setDeployments] = React.useState<Deployment[]>();
  const [deploymentsPayors, setDeploymentsPayors] =
    React.useState<DeploymentPayor[]>();
  const [documentReferences, setDocumentReferences] =
    React.useState<DocumentReference[]>();
  const [images, setImages] = React.useState<ImageContent[]>();
  const [pollInProgress, setPollInProgress] = React.useState(false);
  const [shouldShowToast, setShouldShowToast] = React.useState(false);
  const [imageUpdateInProgress, setImageUpdateInProgress] =
    React.useState(false);
  const [checkDiscrepancies, setCheckDiscrepancies] = React.useState(true);
  const [toastContent, setToastContent] = React.useState<
    ToastContent | undefined
  >();
  const [showToast, setShowToast] = React.useState(false);

  const { data: coverageData, refetch: refetchCoverage } = useQuery<{
    coverages: Coverage[];
  }>(GET_COVERAGES, {
    variables: { patientId: virtaId },
  });

  const { data: patientData, refetch: refetchPatient } = useQuery(GET_PATIENT, {
    variables: { patientId: virtaId },
  });

  const { data: deploymentData } = useQuery(GET_DEPLOYMENTS);
  const { data: deploymentPayorData } = useQuery(GET_DEPLOYMENTS_PAYERS);

  const {
    data: eligibilityResponseData,
    refetch: refetchEligibilityResponses,
  } = useQuery<{ eligibilityResponses: EligibilityResponse[] }>(
    GET_ELIGIBILITY_RESPONSES,
    {
      variables: { patientId: virtaId },
    }
  );

  const [updateCoverage] = useMutation(UPDATE_COVERAGE, {
    onCompleted: () => {
      refetchCoverage();
      refetchPatient();
    },
  });
  const [updatePatient] = useMutation(UPDATE_PATIENT, {
    onCompleted: () => {
      refetchCoverage();
      refetchPatient();
    },
  });
  const [createCoverage] = useMutation(CREATE_COVERAGE, {
    onCompleted: () => {
      refetchCoverage();
      refetchPatient();
    },
  });
  const patientDeployment = getReasonDeployment(
    eligibilityResponse,
    deployments
  );

  const dropdownOptions = getCarrierDropdownOptions(
    deploymentsPayors,
    patientDeployment
  );

  React.useEffect(() => {
    if (toastContent && !showToast) {
      setShowToast(true);
    }
  }, [toastContent]);

  React.useEffect(() => {
    if (!showToast && toastContent) {
      setToastContent(undefined); // Clear the message if not showing toast anymore
    }
  }, [showToast]);

  React.useEffect(() => {
    if (deploymentData?.sfDeployments) {
      setDeployments(deploymentData.sfDeployments);
    }
  }, [deploymentData]);

  React.useEffect(() => {
    if (deploymentPayorData?.sfDeploymentsPayors) {
      setDeploymentsPayors(deploymentPayorData.sfDeploymentsPayors);
    }
  }, [deploymentPayorData]);

  React.useEffect(() => {
    setIsLoading(true);
    if (
      coverageData &&
      coverageData.coverages &&
      coverageData.coverages.length > 0
    ) {
      const coverages = coverageData.coverages;
      coverages.sort(
        (a, b) => b.meta!.lastUpdated.valueUs - a.meta!.lastUpdated.valueUs
      );
      coverages.sort((a, b) => a.order!.value - b.order!.value);
      setCoverage(coverages[0]);
    } else {
      const newCoverage: Coverage = {};
      setCoverage(newCoverage);
    }
    setIsLoading(false);
  }, [coverageData]);

  React.useEffect(() => {
    const abortController = new AbortController();
    if (!documentReferences) {
      setIsLoading(true);
      fetchDocumentReferences();
    }
    setIsLoading(false);
    return () => {
      abortController.abort();
    };
  }, [documentReferences]);

  React.useEffect(() => {
    setImageUpdateInProgress(true);
    setShowToast(true);
    const abortController = new AbortController();
    async function fetchDocumentReferencesBinary() {
      const responses = documentReferences?.map((reference) => {
        let mimetype: ImageContent["mimetype"];
        return fetch(`/get_document_reference_binary/${reference.id.value}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed fetching image");
            }
            mimetype = response.headers.get(
              "Content-Type"
            ) as ImageContent["mimetype"];
            return response.blob();
          })
          .then((blob) => {
            const data: ImageContent = {
              mimetype: mimetype,
              document_reference_id: reference.id.value,
              url: URL.createObjectURL(blob),
            };
            return data;
          })
          .catch(() => {
            setImageUpdateInProgress(false);
            setShowToast(true);
            setToastContent({
              type: "error",
              message: TOAST_MESSAGES.fetchImagesError,
            });
          });
      }) as Promise<ImageContent>[];
      Promise.all(responses!)
        .then((results: ImageContent[]) => {
          setImages(results);
        })
        .catch(() => {
          setImageUpdateInProgress(false);
          setShowToast(true);
          setToastContent({
            type: "error",
            message: TOAST_MESSAGES.fetchImagesError,
          });
        });
    }

    if (Array.isArray(documentReferences) && documentReferences.length > 0) {
      setIsLoading(true);
      fetchDocumentReferencesBinary();
      setImageUpdateInProgress(false);
    } else {
      setImages([]);
      setImageUpdateInProgress(false);
    }
    setIsLoading(false);
    return () => {
      abortController.abort();
    };
  }, [documentReferences]);

  React.useEffect(() => {
    setIsLoading(true);
    if (patientData && patientData.patient) {
      setPatient(patientData.patient);
      setIsLoading(false);
    }
  }, [patientData]);

  React.useEffect(() => {
    setIsLoading(true);
    if (
      eligibilityResponseData &&
      eligibilityResponseData.eligibilityResponses &&
      eligibilityResponseData.eligibilityResponses.length > 0
    ) {
      const eligibilityResponses = eligibilityResponseData.eligibilityResponses;
      eligibilityResponseData.eligibilityResponses.sort(
        (a, b) => b.meta!.lastUpdated.valueUs - a.meta!.lastUpdated.valueUs
      );
      const newResponse = eligibilityResponses[0];
      if (
        eligibilityResponse &&
        eligibilityResponse.meta &&
        newResponse.meta &&
        newResponse.meta.versionId.value !==
          eligibilityResponse.meta.versionId.value
      ) {
        setPollInProgress(false);
        setCheckDiscrepancies(true);
      }
      if (
        pollInProgress &&
        isUndefined(eligibilityResponse) &&
        newResponse &&
        newResponse.meta
      ) {
        setPollInProgress(false);
        setCheckDiscrepancies(true);
      }
      setEligibilityResponse(newResponse);
    } else {
      const newEligibilityResponse: EligibilityResponse = {};
      setEligibilityResponse(newEligibilityResponse);
    }
    setIsLoading(false);
  }, [eligibilityResponseData]);

  React.useEffect(() => {
    if (pollInProgress) {
      setPollInProgress(false);
      setToastContent({
        type: "error",
        message: TOAST_MESSAGES.eligibilityResponseTimeout,
      });
      setShowToast(true);
    }
  }, [shouldShowToast]);

  const fetchDocumentReferences = async () => {
    setShowToast(false);
    const documentReferencesUrl = `/coverage_document_references/${virtaId}`;
    try {
      const fetchedDocumentReferences = (await client.get(
        documentReferencesUrl
      )) as DocumentReference[];
      const docReferences = fetchedDocumentReferences.filter(
        (reference) => reference.status.value !== SUPERSEDED
      );
      setDocumentReferences(docReferences);
    } catch (e) {
      setToastContent({
        type: "error",
        message: TOAST_MESSAGES.fetchImagesError,
      });
      setShowToast(true);
    }
  };

  const updateImage = async (documentReferenceId: string) => {
    sendAmplitudeLogEvent?.(
      "Patient Coverage: User created image",
      null,
      null,
      virtaId
    );
    setImageUpdateInProgress(true);
    setShowToast(false);
    if (!coverage || Object.keys(coverage).length === 0) {
      setToastContent({
        type: "error",
        message: TOAST_MESSAGES.addCoverageBefore,
      });
      setShowToast(true);
      setImageUpdateInProgress(false);
      return;
    }
    const documentReference = documentReferences!.find(
      (ref) => documentReferenceId === ref.id.value
    );
    documentReference!.status.value = SUPERSEDED;
    const putData: UpdateDocumentReferencePayload = {
      virta_id: virtaId,
      document_reference: documentReference!,
      coverage_id: coverage!.id!.value,
    };

    const documentReferencePutUrl = `/coverage_document_reference/${
      documentReference!.id.value
    }`;
    client
      .patch(documentReferencePutUrl, putData)
      .then(() => {
        const newDocReferences: DocumentReference[] =
          documentReferences!.filter(
            (reference) => !(reference.id.value === documentReferenceId)
          );
        const newImages: ImageContent[] = images!.filter(
          (image) => !(image["document_reference_id"] === documentReferenceId)
        );
        setDocumentReferences(newDocReferences);
        setImages(newImages);
        setImageUpdateInProgress(false);
      })
      .catch(() => {
        setToastContent({
          type: "error",
          message: TOAST_MESSAGES.deleteImageError,
        });
        setShowToast(true);
        setImageUpdateInProgress(false);
      });
  };

  const postImage = async (file: File) => {
    sendAmplitudeLogEvent?.(
      "Patient Coverage: User added image",
      null,
      null,
      virtaId
    );
    setImageUpdateInProgress(true);
    setShowToast(false);
    if (!coverage || Object.keys(coverage).length === 0) {
      setToastContent({
        type: "error",
        message: TOAST_MESSAGES.addCoverageBefore,
      });
      setShowToast(true);
      setImageUpdateInProgress(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("coverage_id", coverage.id!.value);
    formData.append("csrf_token", window.virta.csrf_token);
    const documentReferencePostUrl = `/coverage_document_reference/${virtaId}`;
    fetch(documentReferencePostUrl, {
      credentials: "same-origin",
      mode: "no-cors",
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed posting image");
        }
        response.json().then((data) => {
          const documentReference: DocumentReference = data;
          let newDocumentReferences;
          if (documentReferences && documentReferences.length > 0) {
            newDocumentReferences = documentReferences.map((a) =>
              Object.assign({}, a)
            );
            newDocumentReferences.unshift(documentReference);
          } else {
            newDocumentReferences = [documentReference];
          }
          setDocumentReferences(newDocumentReferences);

          let newImages: ImageContent[];
          if (images && images.length > 0) {
            newImages = images.map((a) => Object.assign({}, a));
          } else {
            newImages = [];
          }

          fetch(
            `/get_document_reference_binary/${documentReference["id"]["value"]}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed fetching image");
              }
              return response.blob();
            })
            .then((blob) => {
              const data: ImageContent = {
                document_reference_id: documentReference.id.value,
                url: URL.createObjectURL(blob),
              };
              newImages.unshift(data);
            })
            .catch(() => {
              setToastContent({
                type: "error",
                message: TOAST_MESSAGES.fetchImagesError,
              });
              setShowToast(true);
              setImageUpdateInProgress(false);
            });
          setImages(newImages);
          setDocumentReferences(newDocumentReferences);
          setImageUpdateInProgress(false);
        });
      })
      .catch(() => {
        setToastContent({
          type: "error",
          message: TOAST_MESSAGES.uploadImageError,
        });
        setShowToast(true);
        setImageUpdateInProgress(false);
      });
  };

  const sendAmplitudeEventsOnCoverageChanges = (
    oldCoverage: Coverage,
    newCoverage: Coverage
  ) => {
    if (oldCoverage?.subscriberId?.value !== newCoverage?.subscriberId?.value) {
      sendAmplitudeLogEvent?.(
        "Patient Coverage: User updated member id",
        null,
        null,
        virtaId
      );
    }

    if (
      oldCoverage?.grouping?.group?.value !==
      newCoverage?.grouping?.group?.value
    ) {
      sendAmplitudeLogEvent?.(
        "Patient Coverage: User updated group id",
        null,
        null,
        virtaId
      );
    }

    if (
      oldCoverage?.grouping?.plan?.value !== newCoverage?.grouping?.plan?.value
    ) {
      sendAmplitudeLogEvent?.(
        "Patient Coverage: User updated insurance name",
        null,
        null,
        virtaId
      );
    }

    if (oldCoverage?.payor?.[0]?.uri !== newCoverage?.payor?.[0]?.uri) {
      sendAmplitudeLogEvent?.(
        "Patient Coverage: User updated payor id",
        null,
        null,
        virtaId
      );
    }
  };

  const sendAmplitudeEventsOnPatientChanges = (
    oldPatient: Patient | undefined,
    newFirstName: string,
    newLastName: string,
    newBirthDate: number,
    newGender: number
  ) => {
    const oldPatientName = oldPatient?.name?.filter(
      (n) => n?.use?.value === OFFICIAL_USE
    );
    if (oldPatientName?.[0]?.given?.[0]?.value !== newFirstName) {
      sendAmplitudeLogEvent?.(
        "Patient Coverage: User updated first name",
        null,
        null,
        virtaId
      );
    }

    if (oldPatientName?.[0]?.family?.value !== newLastName) {
      sendAmplitudeLogEvent?.(
        "Patient Coverage: User updated last name",
        null,
        null,
        virtaId
      );
    }

    if (
      getBirthDateString(oldPatient?.birthDate) !==
      getBirthDateString({ valueUs: newBirthDate })
    ) {
      sendAmplitudeLogEvent?.(
        "Patient Coverage: User updated DOB",
        null,
        null,
        virtaId
      );
    }

    if (oldPatient?.gender?.value !== newGender) {
      sendAmplitudeLogEvent?.(
        "Patient Coverage: User updated gender",
        null,
        null,
        virtaId
      );
    }
  };

  const handleUpdate = async (values: FormikValues) => {
    setCheckDiscrepancies(false);
    setShowToast(false);
    const extraGiven = patient!.name!.find((name) => {
      if (name!.use!.value == OFFICIAL_USE) {
        return name.given!.length > 1 ? name.given![1].value : undefined;
      }
    });
    const officialName: Name = {};
    officialName.use = { value: OFFICIAL_USE };
    officialName.family = { value: values.lastName };
    officialName.given = [{ value: values.firstName }];
    extraGiven
      ? (officialName.given = [{ value: values.firstName }])
      : (officialName.given = [
          { value: values.firstName },
          { value: extraGiven },
        ]);
    const birthDate = Date.parse(values.birthDateString) * 1000;
    const gender = parseInt(values.genderString);
    sendAmplitudeEventsOnPatientChanges(
      patient,
      values.firstName,
      values.lastName,
      birthDate,
      gender
    );

    updatePatient({
      variables: {
        gender: gender,
        name: officialName,
        birthDate: birthDate,
        patientId: virtaId,
        versionId: patient!.meta!.versionId.value,
      },
    });

    if (coverage && coverage.id && coverage.meta) {
      const newCoverage: Coverage = {};

      const newGrouping: Grouping = {};
      newGrouping.group = { value: values.grouping.group.value };
      newGrouping.plan = { value: values.grouping.plan!.value };
      newCoverage.grouping = newGrouping;

      const newSubscriberId = { value: values.subscriberId.value };
      newCoverage.subscriberId = newSubscriberId;

      const subscriber: Subscriber = {};
      subscriber.uri = { value: "Patient/" + virtaId };
      newCoverage.subscriber = subscriber;

      const payor: Payor = {
        display: { value: values.payerDisplay },
      };
      if (values.payerOrganization && values.payerOrganization !== "NONE") {
        payor.uri = { value: "Organization/" + values.payerOrganization };
      }
      newCoverage.payor = [payor];

      const d = new Date();
      let month = "" + (d.getMonth() + 1),
        day = "" + d.getDate();
      const year = d.getFullYear();
      if (month.length < 2) {
        month = "0" + month;
      }
      if (day.length < 2) {
        day = "0" + day;
      }
      const formatted_date = [year, month, day].join("-");

      const newEligibilityExclusion = {
        system: { value: ELIGIBILTY_EXCLUSION_URI },
        code: { value: values.eligibilityExclusion },
        version: { value: formatted_date },
      };
      newCoverage.type = {
        coding: [newEligibilityExclusion],
      };

      // We don't want to keep updating the date if the value hasn't changed
      if (getEligibilityExclusion(coverage) !== values.eligibilityExclusion) {
        const endDate = new Date();
        if (values.eligibilityExclusion === "Bug") {
          endDate.setMonth(endDate.getMonth() + 1);
        } else {
          endDate.setFullYear(endDate.getFullYear() + 1);
        }

        newCoverage.period = {
          end: {
            valueUs: (endDate.getTime() * 1000).toString(),
          },
        };
      }
      sendAmplitudeEventsOnCoverageChanges(coverage, newCoverage);
      updateCoverage({
        variables: {
          coverage: newCoverage,
          coverageId: coverage.id.value,
          versionId: coverage.meta.versionId.value,
        },
      });
    } else {
      const planName = structuredPayersEnabled
        ? values.payerDisplay
        : values.grouping.plan.value;
      let organizationId;
      if (values.payerOrganization && values.payerOrganization !== "NONE") {
        organizationId = values.payerOrganization;
      }
      sendAmplitudeLogEvent?.(
        "Patient Coverage: User created new coverage",
        null,
        null,
        virtaId
      );
      createCoverage({
        variables: {
          patientId: virtaId,
          memberId: values.subscriberId.value,
          groupId: values.grouping.group.value,
          planName: planName,
          organizationId: organizationId,
        },
      });
    }

    refetchCoverage();
    refetchPatient();
    setPollInProgress(true);
    pollEligibilityResponse(
      refetchEligibilityResponses,
      TIMEOUT,
      DEFAULT_INTERVAL
    );
  };

  const pollEligibilityResponse = async (
    fn: typeof refetchEligibilityResponses,
    timeout: number,
    interval: number
  ) => {
    const endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    const checkCondition = function (
      resolve: (value?: unknown) => void,
      reject: (reason?: any) => void
    ) {
      fn();
      if (Number(new Date()) < endTime) {
        setTimeout(checkCondition, interval, resolve, reject);
      } else {
        setShouldShowToast(true);
      }
    };
    return new Promise(checkCondition);
  };

  if (isLoading || !patient) {
    return (
      <>
        <SpinnerContainer>
          <Spinner size="large" />
        </SpinnerContainer>
      </>
    );
  }

  return (
    <>
      {headerComponent}
      <Container>
        {toastContent && (
          <Toast
            isOpen={showToast}
            handleClose={() => setShowToast(false)}
            height={50}
            positionValues={{ left: 10 }}
            slideEndPosition={10}
            notificationType="error"
            timeoutDuration={200000}
            style={{ padding: 15 }}
          >
            <StyledToastText message={toastContent.message} />
          </Toast>
        )}
        <EligibilityResponseTable
          pollInProgress={pollInProgress}
          eligibilityResponse={eligibilityResponse}
          deployments={deployments}
          images={images}
          updateImage={updateImage}
          postImage={postImage}
          documentReferences={documentReferences}
          imageUpdateInProgress={imageUpdateInProgress}
        />
        <CoverageContainer>
          {patient && coverage && (
            <EligibilityWarningTable
              patient={patient}
              coverage={coverage}
              eligibilityResponse={eligibilityResponse}
              checkDiscrepancies={checkDiscrepancies}
            />
          )}
          <CoverageInput
            isLoading={isLoading}
            patient={patient}
            coverage={coverage}
            onSubmit={(values: FormikValues) => {
              sendAmplitudeLogEvent?.(
                'Patient Coverage: User clicked "Update and Check Eligibility"',
                null,
                null,
                virtaId
              );
              return handleUpdate(values);
            }}
            isEaUser={isEaUser}
            structuredPayersOptions={dropdownOptions}
            structuredPayersEnabled={!!structuredPayersEnabled}
          />
        </CoverageContainer>
      </Container>
    </>
  );
};

export const PatientCoverageExperience =
  withVirta<PatientCoverageProps>(PatientCoverage);
