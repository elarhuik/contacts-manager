export const API_KEY = 'insert your unique api key here';

const API_PATH = `https://api.pipedrive.com/v1/persons`;

export const persons = {
  uri: API_PATH,
  qs: {
      api_token: API_KEY,
  },
  headers: {
      'User-Agent': 'Request-Promise'
  },
  json: true,
};