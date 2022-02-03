import * as React from "react";
import { Formik, FormikConfig, FormikValues } from "formik";
import { StyleProp, View, ViewStyle } from "react-native";

export interface FormProps<FormikValues>
  extends Pick<
    FormikConfig<FormikValues>,
    | "initialValues"
    | "onSubmit"
    | "children"
    | "validate"
    | "validationSchema"
    | "enableReinitialize"
  > {
  style?: StyleProp<ViewStyle>;
}

export function Form<Values extends FormikValues>({
  initialValues,
  onSubmit,
  style,
  validate,
  validationSchema,
  children,
  enableReinitialize = false,
}: FormProps<Values>) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
      validationSchema={validationSchema}
      enableReinitialize={enableReinitialize}
    >
      <View style={style}>{children}</View>
    </Formik>
  );
}
