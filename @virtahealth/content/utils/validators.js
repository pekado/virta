export const validateMaxLength = (Rule, max, warn) => {
  const rules = [
    Rule.custom((field) =>
      // Purposely returns true if field === undefined to not make any assumptions about if the field is required
      field?.length > max
        ? `Must be less than ${max} characters. Current length: ${field.length}`
        : true
    ),
  ];

  if (warn) {
    rules.push(
      Rule.custom((field) =>
        field?.length > warn
          ? `<${warn} characters is recommended. Current length: ${field.length}`
          : true
      ).warning()
    );
  }

  return rules;
};
