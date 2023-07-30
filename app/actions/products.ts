import axios from "axios";

const baseUrl =
  "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live";

export async function getProduct(query: string) {
  return await axios.get(`${baseUrl}${query}`);
}
