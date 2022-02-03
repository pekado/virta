import * as React from "react";
import { useIntl } from "react-intl";
import { Platform } from "react-native";
import { SubstrateBody, styled } from "@virtahealth/components";
import {
  safeIntlFormatMessage,
  getMessageFromTreeOrKey,
} from "@virtahealth/utils";
import { FormikValues } from "formik";

import Page from "./components/Page";
import { DynamicFormSchema } from "./types";
import { shouldShowDynamicFormComponent } from "./utils";

export interface Props {
  initialValues?: FormikValues;
  page: number;
  schema: DynamicFormSchema;
  onSubmit: (values: FormikValues, isLastPage: boolean) => Promise<unknown>;
  onGoBack?: () => void;
  isApiLoading: boolean;
}

export const MainHeader = styled(SubstrateBody)`
  margin-bottom: 40px;
  text-align: center;
  font-size: ${({ theme }) => theme.dynamicFormsPageHeaderFontSize}px;
`;

const ErrorMessage = styled(SubstrateBody)`
  margin: 40px;
  text-align: center;
`;

export const DynamicForm: React.FC<Props> = ({
  // formik prop allowing the component to re-initialize the form with new initial values
  initialValues,
  page,
  schema,
  onGoBack,
  onSubmit,
  isApiLoading,
}: Props) => {
  const intl = useIntl();
  const formatMessage = safeIntlFormatMessage(intl);
  const headingMessage = getMessageFromTreeOrKey(schema.heading);
  const isWeb = Platform.OS === "web";
  const [formValues, setFormValues] = React.useState(initialValues || {});

  const filteredPages = schema.pages.filter((p) =>
    shouldShowDynamicFormComponent(formValues, p.showWhen)
  );

  const currentPage = filteredPages[page];
  const pageCount = filteredPages.length;

  const formOnSubmit = (values: FormikValues, isLastPage: boolean) => {
    setFormValues(values);
    return onSubmit(values, isLastPage);
  };

  React.useEffect(() => {
    if (isWeb) {
      window.scrollTo(0, 0);
    }
  }, [page, isWeb]);

  return (
    <>
      {isWeb && <MainHeader>{formatMessage(headingMessage)}</MainHeader>}
      {currentPage ? (
        <Page
          initialValues={formValues}
          onSubmit={formOnSubmit}
          onGoBack={onGoBack}
          hideBackButton={
            currentPage.hideBackButton === true || (pageCount > 0 && page == 0)
          }
          isLastPage={page === pageCount - 1}
          isFirstPage={page === 0}
          isSinglePage={pageCount === 1}
          schema={currentPage}
          isApiLoading={isApiLoading}
        />
      ) : (
        <ErrorMessage color="danger">
          Oh no that page doesn&apos;t exist
        </ErrorMessage>
      )}
    </>
  );
};
