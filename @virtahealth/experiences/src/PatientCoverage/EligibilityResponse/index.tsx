import * as React from "react";
import {
  styled,
  Base,
  Divider,
  withVirta,
  Interpose,
  Spinner,
  HelperText,
  Body,
  Button,
  Spacer,
} from "@virtahealth/components";
import {
  EligibilityResponse,
  DocumentReference,
  Deployment,
  ImageContent,
  Coding,
  getReasonDeployment,
} from "../utils";

const REASON_URL =
  "https://fhir.virtahealth.com/StructureDefinition/EligibilityReason";
const REASON_CODE_URL =
  "https://fhir.virtahealth.com/StructureDefinition/EligibilityReasonCode";
const STATUS_URL =
  "https://fhir.virtahealth.com/StructureDefinition/EligibilityStatus";
const NO_DATA = "--";

export interface EligibilityResponseProps {
  eligibilityResponse?: EligibilityResponse;
  pollInProgress: boolean;
  deployments?: Deployment[];
  images?: ImageContent[];
  documentReferences?: DocumentReference[];
  updateImage: (documentReferenceId: string) => void;
  postImage: (file: File) => void;
  imageUpdateInProgress: boolean;
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
`;

const LoadingContainer = styled.View`
  display: flex;
  padding: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  max-width: 200px;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const BodyText = styled(Body)`
  font-weight: bold;
`;

const SpinnerContainer = styled.View`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 100px;
  padding-right: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  width: 140px;
  margin-right: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const ItemHeader = styled(HelperText)`
  padding-bottom: 4px;
`;

const Item = styled.View`
  margin: 0;
`;

const SmallerBase = styled(Base)`
  font-size: 16px;
  line-height: 16px;
`;

const OverviewCard = styled.View`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.tableRowShadedColor};
  border-color: ${({ theme }) => theme.tableRowBorderColor};
  border-width: ${({ theme }) => theme.tableRowBorderBottomWidth}px;
  padding: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  height: fit-content;
  width: 200px;
  margin-right: ${({ theme }) => theme.standardSpacingMedium}px;
`;

export const InnerEligibilityResponse: React.FC<EligibilityResponseProps> = ({
  eligibilityResponse,
  pollInProgress,
  deployments,
  images,
  updateImage,
  postImage,
  imageUpdateInProgress,
  documentReferences,
}) => {
  const fileInputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore - TODO: figure out if this can be null
    postImage(event.target.files[0]);
  };

  const getLastUpdatedText = (documentReferenceId: string) => {
    const documentReference = documentReferences!.find(
      (ref) => documentReferenceId === ref.id.value
    );
    if (documentReference && documentReference.meta) {
      const date = new Date(documentReference.meta.lastUpdated.valueUs / 1000);
      return date.toLocaleDateString("en-US") + " " + date.toLocaleTimeString();
    } else {
      return NO_DATA;
    }
  };

  const getStatusText = (eligibilityResponse: EligibilityResponse) => {
    let codeableConcept: Coding | undefined;
    if (
      eligibilityResponse &&
      eligibilityResponse.outcome &&
      eligibilityResponse.outcome.coding.length > 0
    ) {
      codeableConcept = eligibilityResponse.outcome.coding.find((code) => {
        return code!.system!.value === STATUS_URL;
      });
    }
    if (codeableConcept) {
      return (
        codeableConcept!.code!.value.charAt(0).toUpperCase() +
        codeableConcept!.code!.value.slice(1)
      );
    } else {
      return NO_DATA;
    }
  };

  const buildDeploymentLink = (deployment: Deployment) => {
    if (!deployment) {
      return NO_DATA;
    }
    const link =
      "https://virta.lightning.force.com/lightning/r/Deployment__c/" +
      deployment.id +
      "/view";
    return <a href={link}>{deployment.key}</a>;
  };

  const getReasonText = (eligibilityResponse: EligibilityResponse) => {
    let codeableConcept: Coding | undefined;
    if (
      eligibilityResponse &&
      eligibilityResponse.outcome &&
      eligibilityResponse.outcome.coding.length > 0
    ) {
      codeableConcept = eligibilityResponse.outcome.coding.find((code) => {
        return code!.system!.value == REASON_URL;
      });
    }
    return codeableConcept ? codeableConcept!.code!.value : NO_DATA;
  };
  const getReasonCode = (eligibilityResponse: EligibilityResponse) => {
    let codeableConcept: Coding | undefined;
    if (
      eligibilityResponse &&
      eligibilityResponse.outcome &&
      eligibilityResponse.outcome.coding.length > 0
    ) {
      codeableConcept = eligibilityResponse.outcome.coding.find((code) => {
        return code!.system!.value == REASON_CODE_URL;
      });
    }
    return codeableConcept ? codeableConcept!.code!.value : NO_DATA;
  };
  const getLastCheckedText = (eligibilityResponse: EligibilityResponse) => {
    if (eligibilityResponse && eligibilityResponse.meta) {
      const date = new Date(
        eligibilityResponse.meta.lastUpdated.valueUs / 1000
      );
      return date.toLocaleDateString("en-US") + " " + date.toLocaleTimeString();
    } else {
      return NO_DATA;
    }
  };

  return (
    <Container>
      <OverviewCard>
        <Interpose
          flexDirection={"column"}
          with={<Divider direction="row" />}
          style={{
            flexWrap: "nowrap",
          }}
        >
          <Item>
            <ItemHeader>Eligibility Status</ItemHeader>
            <SmallerBase>
              {
                // @ts-ignore - figure out if this can be undefined
                getStatusText(eligibilityResponse)
              }
            </SmallerBase>
          </Item>
          <Item>
            <ItemHeader>Eligibility Reason</ItemHeader>
            <SmallerBase>
              {
                // @ts-ignore - figure out if this can be undefined
                getReasonText(eligibilityResponse)
              }
            </SmallerBase>
          </Item>
          <Item>
            <ItemHeader>Eligibility Reason Code</ItemHeader>
            <SmallerBase>
              {
                // @ts-ignore - figure out if this can be undefined
                getReasonCode(eligibilityResponse)
              }
            </SmallerBase>
          </Item>
          <Item>
            <ItemHeader>Deployment</ItemHeader>
            <SmallerBase>
              {buildDeploymentLink(
                // @ts-ignore - figure out if this can be undefined
                getReasonDeployment(eligibilityResponse, deployments)
              )}
            </SmallerBase>
          </Item>
          <Item>
            <ItemHeader>Last Checked At</ItemHeader>
            <SmallerBase>
              {
                // @ts-ignore - figure out if this can be undefined
                getLastCheckedText(eligibilityResponse)
              }
            </SmallerBase>
          </Item>
          {imageUpdateInProgress && (
            <Item>
              <ItemHeader>Updating images</ItemHeader>
              <Spinner size="large" />
            </Item>
          )}
          {!imageUpdateInProgress && (
            <Item>
              <ItemHeader>Add Insurance Card Image</ItemHeader>
              <Button
                size="small"
                intent="secondary"
                labelMessage={{
                  id: "select-image",
                  defaultMessage: "Select file",
                }}
                onPress={() => fileInputRef.current?.click()}
              />
              <input
                type="file"
                ref={fileInputRef}
                hidden
                accept="image/*,application/pdf"
                onChange={onFileSelect}
                id="imageUpload"
              />
            </Item>
          )}
          {!imageUpdateInProgress &&
            Array.isArray(images) &&
            images.length > 0 &&
            images.map((imageContent) => {
              return (
                <Item key={imageContent["document_reference_id"]}>
                  <ItemHeader>
                    Last Updated:{" "}
                    {getLastUpdatedText(imageContent["document_reference_id"])}
                  </ItemHeader>
                  <SmallerBase>
                    {imageContent["mimetype"] === "application/pdf" ? (
                      <>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href={imageContent["url"]} target="_blank">
                          Click here to open in new tab
                        </a>
                        <embed
                          src={imageContent["url"]}
                          type="application/pdf"
                          width="100%"
                        />
                      </>
                    ) : (
                      <img
                        onClick={() =>
                          window.open(imageContent["url"], "_blank")
                        }
                        src={imageContent["url"]}
                        width="100%"
                        max-width="175px"
                      />
                    )}
                    <Spacer width={8} />
                    <Button
                      labelMessage={{
                        id: "update",
                        defaultMessage: "Remove image",
                      }}
                      onPress={() =>
                        updateImage(imageContent["document_reference_id"])
                      }
                      loading={imageUpdateInProgress}
                      intent="secondary"
                      size="small"
                    />
                  </SmallerBase>
                </Item>
              );
            })}
        </Interpose>
      </OverviewCard>
      {pollInProgress && (
        <LoadingContainer>
          <BodyText>Retrieving a new eligibility response...</BodyText>
          <SpinnerContainer>
            <Spinner size="large" />
          </SpinnerContainer>
        </LoadingContainer>
      )}
    </Container>
  );
};

export const EligibilityResponseTable = withVirta<EligibilityResponseProps>(
  InnerEligibilityResponse
);
