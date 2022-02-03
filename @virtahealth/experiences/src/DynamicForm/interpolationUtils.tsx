import { FormikValues } from "formik";
import { Linking } from "react-native";
import * as React from "react";
import { SubstrateBody } from "@virtahealth/components";
import { IntlValues } from "@virtahealth/utils";

import { Interpolation, StyleInterpolation } from "./types";

const linkInterpolationRegex = /^a\d*$/;
const valueInterpolationRegex = /^v\d*$/;
const styleInterpolationRegex = /^style?(\d|[A-Z][a-z]*)*$/;

export const generateInterpolationValues = (
  allFormikValues: FormikValues,
  interpolation?: Interpolation
): IntlValues => {
  /* eslint-disable-next-line react/display-name */
  return interpolation
    ? Object.keys(interpolation).reduce((result, key) => {
        if (linkInterpolationRegex.test(key)) {
          return {
            ...result,
            [key]: (chunk: string) => (
              <SubstrateBody
                weight="semibold"
                color="Secondary"
                size="small"
                onPress={() => {
                  Linking.openURL(interpolation[key] as string);
                }}
              >
                {chunk}
              </SubstrateBody>
            ),
          };
        } else if (valueInterpolationRegex.test(key)) {
          return {
            ...result,
            [key]: allFormikValues[interpolation[key] as string],
          };
        } else if (styleInterpolationRegex.test(key)) {
          return {
            ...result,
            [key]: (chunk: string) => {
              const style = (interpolation[key] || {}) as StyleInterpolation;
              return (
                <SubstrateBody
                  lineHeightMultiplier={style.lineHeight || 1.4}
                  {...style}
                >
                  {chunk}
                </SubstrateBody>
              );
            },
          };
        }
        return {
          ...result,
          [key]: interpolation[key] as string,
        };
      }, {})
    : undefined;
};
