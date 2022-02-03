export default {
  name: "fhirReference",
  title: "FHIR Reference",
  type: "object",
  fields: [
    {
      name: "fhirReference",
      title: "FHIR Reference",
      type: "string",
      description:
        'A reference to a specific resource in the FHIR store. Ex. "PlanDefinition/f6e66dcd-591f-4d33-813a-d74e3f5a98f8" or "Flag/d5c13abc-591f-4d33-813a-b22a6c2c92c1',
      validation: (Rule) =>
        Rule.custom((fhirRef) => {
          const parts = fhirRef.split("/");
          if (parts.length != 2 || !parts[0].match(/^[a-zA-Z]+$/)) {
            return 'Must be in the format {fhir type}/{fhir id}. Ex. "PlanDefinition/f6e66dcd-591f-4d33-813a-d74e3f5a98f8"';
          }

          if (
            !parts[1].match(
              /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
            )
          ) {
            return 'Invalid UUID"';
          }
          return true;
        }),
    },
  ],
};
