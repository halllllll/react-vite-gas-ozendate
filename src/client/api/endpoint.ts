const API_ENDPOINT = {
  SHEET_URL: '/mock/sheet_url',
  SHEET_NAME: '/mock/sheet_name',
};

export type ApiEndpoint = keyof typeof API_ENDPOINT;

export const getApiPath = (endpointKey: ApiEndpoint): string => {
  const path = API_ENDPOINT[endpointKey];
  const url = new URL(path, 'http://localhost');
  return url.toString();
};
