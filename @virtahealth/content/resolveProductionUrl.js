export default function resolveProductionUrl(document) {
  const PA_WEBSITE_URL = process.env.SANITY_STUDIO_PA_WEB_URL;
  switch (document._type) {
    case "article":
    case "recipe":
      return `${PA_WEBSITE_URL}/discover/content/${document._id}`;
    case "resourceCollection":
      return `${PA_WEBSITE_URL}/discover`;
    default:
      return "";
  }
}
