import * as React from "react";
import { Row } from "../Row";
import { SubTabItem } from "../SubTabItem";

interface SubTabGroupProps {
  children: React.ReactElement<typeof SubTabItem>[];
}

export const SubTabGroup: React.FC<SubTabGroupProps> = ({ children }) => {
  return <Row>{children}</Row>;
};
