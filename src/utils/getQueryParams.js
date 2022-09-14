const queryString = require('query-string');

export default function getQueryParams(string) {
  return queryString.parse(string);
}
