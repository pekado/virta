import * as React from "react";
import { View } from "react-native";
import {
  styled,
  Spacer,
  Button,
  Body,
  SubstrateBody,
} from "@virtahealth/components";
import { useIntl } from "react-intl";
import { isUndefined, messages } from "@virtahealth/utils";
import { InsuranceHeading2, InsuranceHeadingContainer } from "..";

const PATHNAME = "/image-upload";

const StyledButtons = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StyledButton = styled(Button)`
  min-width: 150px;
`;
const StyledDiv = styled(Body)`
  min-width: 150px;
  border-radius: 5px;
  margin: 0 10px;
  padding: 0 6px;
  align-items: center;
  display: inline-flex;
  font-size: ${({ theme }) => theme.textLabelFontSize}px;
  border: 1px solid ${({ theme }) => theme.avatarBaseBorderColor};
`;
const ItemText = styled(Body)`
  font-weight: ${({ theme }) => theme.strongBaseFontWeight};
  font-size: ${({ theme }) => theme.textLabelFontSize}px;
`;
const Item = styled(Body)`
  display: flex;
  flex-direction: row;
`;
interface ImageUploadProps {
  isUploadingImages: boolean;
  onSkip: () => void;
  postImages: (front: File, back?: File) => void;
  trackPageViewed: (pathname: string) => void;
  trackButtonClicked: (pathname: string, descriptor: string) => void;
}
export const ImageUpload: React.FC<ImageUploadProps> = ({
  onSkip,
  trackPageViewed,
  trackButtonClicked,
  postImages,
  isUploadingImages,
}) => {
  const intl = useIntl();
  const [front, setFront] = React.useState<File>();
  const [back, setBack] = React.useState<File>();
  const fileInputRefFront: React.RefObject<HTMLInputElement> =
    React.createRef();
  const fileInputRefBack: React.RefObject<HTMLInputElement> = React.createRef();

  React.useEffect(() => {
    trackPageViewed(PATHNAME);
  }, [trackPageViewed]);

  return (
    <InsuranceHeadingContainer>
      <InsuranceHeading2>
        {intl.formatMessage(messages.uploadImage)}
      </InsuranceHeading2>
      <Spacer height={16} />
      <SubstrateBody size={"small"}>
        {intl.formatMessage(messages.attachImageTroubleShooting)}
      </SubstrateBody>
      <Spacer height={16} />
      <ul
        style={{
          listStyleType: "square",
          margin: "0 18px",
        }}
      >
        <li>
          <SubstrateBody size={"small"}>
            {intl.formatMessage(messages.fileTypes)}
          </SubstrateBody>
        </li>
        <li>
          <SubstrateBody size={"small"}>
            {intl.formatMessage(messages.imageFileSize)}
          </SubstrateBody>
        </li>
      </ul>
      <Spacer height={16} />
      <SubstrateBody size={"small"}>
        <Item>
          <ItemText>{intl.formatMessage(messages.front)}</ItemText>
          <StyledDiv>{front ? front.name : " "}</StyledDiv>
          <Button
            size="small"
            intent="secondary"
            labelMessage={{
              id: "select-image",
              defaultMessage: "Browse Files",
            }}
            onPress={() => fileInputRefFront.current?.click()}
          />
          <input
            type="file"
            ref={fileInputRefFront}
            hidden
            accept="image/*,application/pdf"
            onChange={(event) => {
              if (event.target && event.target.files && event.target.files[0]) {
                setFront(event.target!.files![0]);
              }
            }}
            id="imageUpload"
          />
        </Item>
        <Spacer height={16} />
        <Item>
          <ItemText>{intl.formatMessage(messages.back)}</ItemText>
          <StyledDiv>{back ? back.name : " "}</StyledDiv>
          <Button
            size="small"
            intent="secondary"
            labelMessage={{
              id: "select-image",
              defaultMessage: "Browse Files",
            }}
            onPress={() => fileInputRefBack.current?.click()}
          />
          <input
            type="file"
            ref={fileInputRefBack}
            hidden
            accept="image/*,application/pdf"
            onChange={(event) => {
              if (event.target && event.target.files && event.target.files[0]) {
                setBack(event.target!.files![0]);
              }
            }}
            id="imageUpload"
          />
        </Item>
      </SubstrateBody>
      <Spacer height={16} />
      <StyledButtons>
        <StyledButton
          loading={isUploadingImages}
          intent="secondary"
          testID="timeoutContinueButton"
          onPress={() => {
            trackButtonClicked(PATHNAME, "Upload");
            if (front) {
              postImages(front, back);
            }
          }}
          disabled={isUndefined(front)}
          labelMessage={messages.upload}
        />
        <StyledButton
          intent="secondary"
          appearance="link"
          testID="primaryInsuranceSubmitButton"
          onPress={() => {
            trackButtonClicked(PATHNAME, "Skip");
            onSkip();
          }}
          labelMessage={messages.skip}
        />
      </StyledButtons>
    </InsuranceHeadingContainer>
  );
};
