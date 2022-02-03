import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  InlineWidget,
  CalendlyEventListener,
  EventScheduledEvent,
} from "react-calendly";
import {
  Button,
  Heading3,
  Spacer,
  styled,
  SubstrateBody,
} from "@virtahealth/components";
import { messages } from "@virtahealth/utils";
import { primitives } from "@virtahealth/styles";
import { useIntl } from "react-intl";
import { MainHeader } from "../DynamicForm";

export interface Props
  extends Pick<
    React.ComponentPropsWithoutRef<typeof InlineWidget>,
    "url" | "prefill"
  > {
  onSubmit: (appointment?: EventScheduledEvent) => void;
  isCallScheduled?: boolean;
  // `styles` is too generic so picking this separately so we can rename
  widgetStyles?: Pick<
    React.ComponentPropsWithoutRef<typeof InlineWidget>,
    "styles"
  >;
}

const CALENDLY_MIN_WIDTH = 320;
const CALENDLY_HEIGHT = 750;

const SectionDescription = styled(SubstrateBody).attrs({
  lineHeightMultiplier: 1.4,
})``;

/**
 * This component adds a `Continue` button around the Calendly
 * widget to make it a required step
 *
 * The Calendly widget relies on the DOM to insert an external
 * script, so it will only work in the browser
 *
 * The core functionality doesn't have a Storybook because Storybook's
 * Content Security Policy blocks external scripts from running
 */
export const PatientCallScheduler: React.FC<Props> = ({
  onSubmit,
  prefill,
  url,
  widgetStyles,
  isCallScheduled = false,
}) => {
  const intl = useIntl();
  const [appointment, setAppointment] =
    React.useState<EventScheduledEvent | null>(null);

  // the nested, unstyled Views here help with the Calendly widget
  // flexing to fit the container better
  return (
    <View>
      <View>
        <MainHeader>{intl.formatMessage(messages.scheduleIntake)}</MainHeader>
      </View>
      {isCallScheduled ? (
        <View style={styles.scheduledContainer}>
          <Heading3 message={messages.intakeCallScheduled} />
          <Spacer height={24} />
          <SectionDescription>
            {intl.formatMessage(messages.prepareForCallFillForms)}
          </SectionDescription>
          <Spacer height={24} />
          <Button
            onPress={() => onSubmit()}
            labelMessage={messages.continue}
            intent="secondary"
            width="wide"
          />
        </View>
      ) : (
        <View>
          <View>
            <CalendlyEventListener
              onEventScheduled={(event) => setAppointment(event)}
            >
              <InlineWidget
                pageSettings={{
                  backgroundColor: primitives.color.white,
                  primaryColor: primitives.color.oxygenBlue700,
                  textColor: primitives.color.carbonGray900,
                }}
                prefill={prefill}
                styles={{
                  minWidth: `${CALENDLY_MIN_WIDTH}px`,
                  height: `${CALENDLY_HEIGHT}px`,
                  ...widgetStyles,
                }}
                url={url}
              />
            </CalendlyEventListener>
          </View>
          {!!appointment && (
            <View style={styles.buttonRow}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => onSubmit(appointment!)}
                  labelMessage={messages.continue}
                  intent="secondary"
                  width="wide"
                />
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  buttonContainer: {
    minWidth: CALENDLY_MIN_WIDTH,
  },
  scheduledContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
  },
});
