import * as React from "react";
import { View } from "react-native";
import {
  Body,
  List,
  styled,
  RectangleBulletIcon,
  Link,
  Button,
  Spacer,
  Heading4,
} from "@virtahealth/components";
import { messages } from "@virtahealth/utils";
import { useIntl } from "react-intl";
import { FormikValues } from "formik";
import {
  InsuranceCard,
  InsuranceHeading2,
  InsuranceHeadingContainer,
} from "..";
import { InsuranceForm } from "../InsuranceForm";

const ListRow: React.FC<{ text: string }> = ({ text }) => (
  <View style={{ alignItems: "center", flexDirection: "row" }}>
    <Spacer width={8} />
    <RectangleBulletIcon />
    <Spacer width={16} />
    <View style={{ width: "80%" }}>
      <Body>{text}</Body>
    </View>
  </View>
);

const StyledHelpContainer = styled(View)`
  align-items: flex-start;
`;

const StyledContainer = styled(View)`
  align-items: flex-start;
  text-align: left;
`;

export const Tips: React.FC = () => {
  const intl = useIntl();
  return (
    <StyledContainer>
      <Heading4>{intl.formatMessage(messages.helpScreenTipHeader)}</Heading4>
      <Spacer height={16} />
      <List direction="column">
        <ListRow text={intl.formatMessage(messages.helpScreenTip1)} />
        <Spacer height={16} />
        <ListRow text={intl.formatMessage(messages.helpScreenTip2)} />
        <Spacer height={16} />
        <ListRow text={intl.formatMessage(messages.helpScreenTip3)} />
      </List>
    </StyledContainer>
  );
};

interface ManualInputProps {
  onRetry?: () => void;
  onContinue: (values: FormikValues) => void;
  card: InsuranceCard;
  displayHelpScreen?: boolean;
  insurerOptions: Array<string>;
  onSkipManualInput?: () => void;
  hideInsuranceGroupId?: boolean;
  isDtp?: boolean;
  isSubmitting: boolean;
}

export const ManualInputInsurance: React.FC<ManualInputProps> = ({
  onRetry,
  onContinue,
  card,
  displayHelpScreen = true,
  insurerOptions,
  onSkipManualInput,
  hideInsuranceGroupId = false,
  isDtp = false,
  isSubmitting,
}) => {
  const [displayHelp, setDisplayHelp] = React.useState(displayHelpScreen);
  const intl = useIntl();

  const HelpScreen: React.FC = () => (
    <StyledHelpContainer>
      <InsuranceHeadingContainer>
        <InsuranceHeading2>
          {intl.formatMessage(messages.helpScreenHeader)}
        </InsuranceHeading2>
        <Spacer height={16} />
        <Body>{intl.formatMessage(messages.helpScreenDescription)}</Body>
        <Spacer height={16} />
      </InsuranceHeadingContainer>
      <Tips />
      <Spacer height={16} />
      {onRetry && (
        <>
          <Button
            intent="secondary"
            labelMessage={messages.retryButton}
            onPress={onRetry}
          />
          <Spacer height={16} />
        </>
      )}
      <Link onPress={() => setDisplayHelp(false)}>
        {intl.formatMessage(messages.manualInputLink)}
      </Link>
    </StyledHelpContainer>
  );

  return displayHelp ? (
    <HelpScreen />
  ) : (
    <View style={{ alignItems: "center" }}>
      <InsuranceForm
        card={card}
        onSkip={onSkipManualInput}
        onContinue={onContinue}
        editable={true}
        insurerOptions={insurerOptions}
        hideInsuranceGroupId={hideInsuranceGroupId}
        isDtp={isDtp}
        isSubmitting={isSubmitting}
      />
    </View>
  );
};
