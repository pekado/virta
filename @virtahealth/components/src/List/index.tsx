import * as React from "react";
import { View, Text, ViewStyle } from "react-native";
import styled from "../styled-components";
import { Base } from "../Text";
import { Interpose } from "../Interpose";
import { Spacer } from "../Spacer";

export interface ListProps {
  direction: "column" | "row";
  spacer?: React.ReactNode;
  interposeStyle?: ViewStyle | ViewStyle[];
}

interface DescriptionListItemProps {
  term: string;
  description: string | number;
  direction: "column" | "row";
  spacer?: React.ReactNode;
}

type StyledListProps = Omit<ListProps, "direction"> & {
  flexDirection: ViewStyle["flexDirection"];
};

const StyledList = styled.View<StyledListProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

export const List: React.FC<ListProps> = ({ direction, ...listProps }) => {
  return (
    <StyledList {...listProps} flexDirection={direction}>
      <Interpose
        flexDirection={direction}
        with={listProps.spacer}
        style={listProps.interposeStyle}
      >
        {listProps.children}
      </Interpose>
    </StyledList>
  );
};

const StyledTerm = styled(Base)`
  font-weight: ${({ theme }) => theme.listTermFontWeight};
  font-size: ${({ theme }) => theme.listBaseTextFontSize};
  line-height: ${({ theme }) => theme.listBaseTextLineHeight};
  color: ${({ theme }) => theme.listBaseTextFontColor};
`;

const StyledDefinition = styled(Base)`
  font-weight: ${({ theme }) => theme.listDefinitionFontWeight};
  font-size: ${({ theme }) => theme.listBaseTextFontSize};
  line-height: ${({ theme }) => theme.listBaseTextLineHeight};
  color: ${({ theme }) => theme.listBaseTextFontColor};
`;

const StyledDescriptionListItem = styled(Base)<DescriptionListItemProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;

export const DescriptionListItem: React.FC<DescriptionListItemProps> = (
  props
) => {
  return (
    <StyledDescriptionListItem {...props}>
      <StyledTerm>{props.term}</StyledTerm>
      {props.spacer}
      <StyledDefinition>{props.description}</StyledDefinition>
    </StyledDescriptionListItem>
  );
};

export const SimpleBulletedListItem: React.FC = ({ children }) => (
  <View style={{ display: "flex", flexDirection: "row" }}>
    <Text>{"\u2022"}</Text>
    <Spacer width={8} />
    {children}
  </View>
);

export const SimpleNumberedListItem: React.FC<{ itemNumber: number }> = ({
  itemNumber,
  children,
}) => (
  <View style={{ display: "flex", flexDirection: "row" }}>
    <Text>{itemNumber}</Text>
    <Spacer width={1} />
    <Text>.</Text>
    <Spacer width={8} />
    {children}
  </View>
);
