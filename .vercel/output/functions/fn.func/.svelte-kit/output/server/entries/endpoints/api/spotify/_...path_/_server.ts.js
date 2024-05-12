import { b as SPOTIFY_BASE_URL } from "../../../../../chunks/private.js";
import { e as error, j as json } from "../../../../../chunks/index.js";
const GET = async ({ fetch, cookies, params, url }) => {
  const accessToken = cookies.get("access_token");
  const response = await fetch(`${SPOTIFY_BASE_URL}/${params.path}${url.search}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  const responseJSON = await response.json();
  if (responseJSON.error) {
    throw error(responseJSON.error.status, responseJSON.error.message);
  }
  return json(responseJSON);
};
export {
  GET
};
