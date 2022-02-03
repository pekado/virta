import * as React from "react";
import {
  Tooltip,
  styled,
  PopoverShadow,
  PopoverPosition,
} from "@virtahealth/components";

const Container = styled.View`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.Text`
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Subheading = styled.Text`
  font-weight: 500;
  font-size: 14px;
`;

const Body = styled.Text`
  font-size: 13px;
`;

const TooltipDocs: React.VFC = () => {
  return (
    <Container>
      <Heading>Tooltip </Heading>
      <Subheading>
        Whenever you hover on the element, the text or React element in the
        popover shows up. It accepts the following props:
      </Subheading>
      <Body>{`
    • popoverTop - top distance of popover from the trigger
    • popoverWidth - width of the popover shown on hover
    • popoverHeight - height of the popover
    • popoverContent - can be a string or a React node to be shown in popover
    • popoverColor - (optional) background color of the popover
    • popoverPosition - (optional) can be left, right or center (default)
    • popoverShadow - (optional) shadow around the popover box
    • hoverable - (optional) if it's false, the popover shows up when clicking the trigger object
    • trigger - (optional) it's the React node (default is info icon), hovering/clicking on it shows the popover
    `}</Body>
    </Container>
  );
};

export default {
  title: "Components / Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      page: TooltipDocs,
    },
  },
};

const popoverShadowValues: PopoverShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: -1.5,
  },
  shadowOpacity: 0.22,
  shadowRadius: 13.22,
};

export const Example = () => (
  <Tooltip
    popoverWidth={200}
    popoverContent={{
      id: "tooltip.example.content",
      defaultMessage: "R12.4567 (ICD-10) \n\n1234567890 (SNOMED)",
    }}
    popoverColor={"#FFF"}
    hoverable={false}
    popoverPosition={PopoverPosition.Left}
    popoverShadow={popoverShadowValues}
    popoverContentStyle={{ color: "rgb(0, 0, 0)" }}
  />
);
