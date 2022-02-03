export const slugify = (maxLength) => (input) => {
  return input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9/-]/g, "")
    .slice(0, maxLength);
};
