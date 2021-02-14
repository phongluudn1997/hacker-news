import axios, { AxiosRequestConfig } from "axios";
const apiURL = process.env.REACT_APP_API_URL;

function client(
  endpoint: string,
  { data, token, headers: customHeaders, ...customConfig }: any = {}
) {
  const config: AxiosRequestConfig = {
    method: data ? "post" : "get",
    url: `${apiURL}/${endpoint}`,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    data,
  };
  return axios(config)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
}

export { client };
