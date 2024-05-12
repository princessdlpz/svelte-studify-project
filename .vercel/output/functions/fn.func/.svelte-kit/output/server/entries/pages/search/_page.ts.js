import { f as fetchRefresh } from "../../../chunks/fetch-refresh.js";
import { r as redirect } from "../../../chunks/index.js";
const load = async ({ fetch, url }) => {
  const query = url.searchParams.get("q");
  if (query) {
    throw redirect(307, `/search/${query}`);
  }
  const catsRes = await fetchRefresh(fetch, `/api/spotify/browse/categories?limit=50`);
  return {
    title: "Search",
    categories: catsRes.ok ? catsRes.json() : void 0
  };
};
export {
  load
};
