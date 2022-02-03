import Url from "url-parse";

export const addSearchParam = (url: string, key: string, value: string) => {
  // tell url-parse to parse the query string into an object
  const urlObj = new Url(url, true);

  // this can come back as a string or as an object depending on the value apssed into the constructor above
  const queryStr = urlObj.query as Record<string, string>;
  const searchParams = new URLSearchParams(queryStr);

  // update the search params and set the updated value in the url object
  searchParams.append(key, value);
  urlObj.set("query", searchParams.toString());

  return urlObj.href;
};
