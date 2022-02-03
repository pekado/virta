import * as _ from "lodash";

/**
 * exports methods for processing API payloads and responses
 */

// helper method that iterates through a js object's keys and performs a specified callback
const mapKeysDeep = (obj: any, cb: (value: any, key: any) => any): any => {
  return _.mapValues(_.mapKeys(obj, cb), (val) => {
    if (_.isArray(val)) {
      return val.map((innerVal) =>
        _.isObject(innerVal) ? mapKeysDeep(innerVal, cb) : innerVal
      );
    }
    return _.isObject(val) ? mapKeysDeep(val, cb) : val;
  });
};

// iterates through object body keys and converts them to snake case keys
export const formatBody = (body: object | FormData) => {
  if (body instanceof FormData) {
    return body;
  }
  const formattedBody = mapKeysDeep(body, (_value: any, key: any) => {
    return _.snakeCase(key);
  });

  return JSON.stringify(formattedBody || {});
};

// iterates through API response and converts to camel case keys
export const formatResponse = (responseBody: object) => {
  const formattedResponseBody = mapKeysDeep(responseBody, (_value, key) => {
    // silly case for the understore metadata fields that exist like _type
    if (key.startsWith("_")) {
      return "_" + _.camelCase(key.substr(1, key.length));
    }
    return _.camelCase(key);
  });
  return formattedResponseBody || {};
};
