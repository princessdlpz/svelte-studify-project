import { f as fetchRefresh } from "../../../../../chunks/fetch-refresh.js";
import { e as error } from "../../../../../chunks/index.js";
const load = async ({ fetch, params }) => {
  const playlistRes = await fetchRefresh(
    fetch,
    `/api/spotify/playlists/${params.id}?${new URLSearchParams({
      fields: "id,name,description"
    }).toString()}`
  );
  if (!playlistRes.ok) {
    throw error(playlistRes.status, "Failed to load playlist!");
  }
  const playlistJSON = await playlistRes.json();
  return {
    playlist: playlistJSON,
    title: `Edit ${playlistJSON.name}`
  };
};
export {
  load
};
