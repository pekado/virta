export default {
  name: "careProtocol",
  title: "Care Protocol",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Ex. "Reversal" or "Diabetes Management"',
    },
    {
      name: "fhirPlanDefinition",
      title: "FHIR Plan Definition",
      type: "fhirReference",
      description:
        "A reference to a specific PlanDefinition resource in the FHIR store",
    },
  ],
};
