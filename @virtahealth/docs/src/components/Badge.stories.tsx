import * as React from "react";
import { Badge, Table, TableRow } from "@virtahealth/components";

export default {
  title: "Components / Badge",
  component: Badge,
};

export const Examples = () => (
  <Table style={{ backgroundColor: "#FFF" }}>
    <TableRow name={"Header"} data={["Color", "Color value", "Icon"]} />
    <TableRow
      name={"Default"}
      data={["Undefined", "calciumTeal900", <Badge key={1} label="1" />]}
    />
    <TableRow
      name={"orange"}
      data={[
        "orange",
        "phosphorousOrange900",
        <Badge key={1} label="1" color="orange" />,
      ]}
    />
    <TableRow
      name={"blue"}
      data={[
        "blue",
        "calciumTeal900",
        <Badge key={1} label="1" color="blue" />,
      ]}
    />
    <TableRow
      name={"pink"}
      data={[
        "pink",
        "magnesiumPink700",
        <Badge key={1} label="1" color="pink" />,
      ]}
    />
    <TableRow
      name={"rgb(5, 5, 5)"}
      data={[
        "rgb(5, 5, 5)",
        "rgb(5, 5, 5)",
        <Badge key={1} label="1" color="rgb(5, 5, 5)" />,
      ]}
    />
    <TableRow
      name={"Pink with 2 characters"}
      data={[
        "Pink with 2 characters",
        "magnesiumPink700",
        <Badge key={1} label="9+" color="pink" />,
      ]}
    />
    <TableRow
      name={"Pink with 2 characters"}
      data={[
        "Pink with 2 characters",
        "magnesiumPink700",
        <Badge key={1} label="AB" color="pink" />,
      ]}
    />
    <TableRow
      name={"Empty yellow"}
      data={[
        "HTML yellow with no label",
        "yellow",
        <Badge key={1} color="yellow" />,
      ]}
    />
    <TableRow
      name={"Pink with size 48"}
      data={[
        "Pink with size 48",
        "pink",
        <Badge key={1} label="5" color="pink" size={48} />,
      ]}
    />
    <TableRow
      name={"Pink with optional styling"}
      data={[
        "Pink with optional styling\n`{ position: 'absolute', left: 10, top: 0 }`",
        "pink",
        <Badge
          key={1}
          label="2"
          color="pink"
          containerStyle={{ position: "absolute", left: 10, top: 0 }}
        />,
      ]}
    />
  </Table>
);
