import { f as fetchRefresh } from "../../../chunks/fetch-refresh.js";
import { e as error } from "../../../chunks/index.js";
const load = async ({ fetch, url }) => {
  const limit = 18;
  const page = url.searchParams.get("page");
  const searchParams = new URLSearchParams({
    limit: `${limit}`,
    offset: page ? `${limit * (Number(page) - 1)}` : "0"
  }).toString();
  const playlistsRes = await fetchRefresh(fetch, `/api/spotify/me/playlists?${searchParams}`);
  if (!playlistsRes.ok) {
    throw error(playlistsRes.status, "Failed to load playlists!");
  }
  const playlistsJSON = await playlistsRes.json();
  return {
    userPlaylists: playlistsJSON,
    title: "Your Playlists"
  };
};
export {
  load
};
