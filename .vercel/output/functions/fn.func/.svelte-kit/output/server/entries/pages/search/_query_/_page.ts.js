import { f as fetchRefresh } from "../../../../chunks/fetch-refresh.js";
import { e as error } from "../../../../chunks/index.js";
const load = async ({ fetch, params, depends, route }) => {
  depends(`app:${route.id}`);
  const query = params.query;
  const searchParams = new URLSearchParams({
    q: query,
    type: "album,artist,playlist",
    limit: "6"
  }).toString();
  const resultsRes = await fetchRefresh(fetch, `/api/spotify/search?${searchParams}`);
  if (!resultsRes.ok) {
    throw error(resultsRes.status, "Failed to load results!");
  }
  const resultsResJSON = await resultsRes.json();
  return {
    title: `Search results for: ${query}`,
    searchResults: resultsResJSON
  };
};
export {
  load
};
