import { e as error } from "../../../../chunks/index.js";
import { f as fetchRefresh } from "../../../../chunks/fetch-refresh.js";
const load = async ({ fetch: _fetch, params, parent, depends, route }) => {
  depends(`app:${route.id}`);
  const fetch = (path) => fetchRefresh(_fetch, path);
  const { user } = await parent();
  const artistRes = await fetch(`/api/spotify/artists/${params.id}`);
  if (!artistRes.ok) {
    throw error(artistRes.status, "Failed to load artist!");
  }
  const artistResJSON = await artistRes.json();
  let colorReq;
  if (artistResJSON?.images?.length > 0) {
    colorReq = fetch(
      `/api/average-color?${new URLSearchParams({
        image: artistResJSON?.images[0].url
      }).toString()}`
    );
  }
  const [albumsRes, appearsOnRes, topTracksRes, relatedArtistsRes, colorRes] = await Promise.all([
    fetch(`/api/spotify/artists/${params.id}/albums?limit=6&include_groups=album,single`),
    fetch(`/api/spotify/artists/${params.id}/albums?limit=6&include_groups=appears_on`),
    fetch(`/api/spotify/artists/${params.id}/top-tracks?market=${user?.country}`),
    fetch(`/api/spotify/artists/${params.id}/related-artists`),
    colorReq
  ]);
  return {
    title: artistResJSON.name,
    artist: artistResJSON,
    artistAlbums: albumsRes.ok ? albumsRes.json() : void 0,
    artistAppearsOn: appearsOnRes.ok ? appearsOnRes.json() : void 0,
    artistTopTracks: topTracksRes.ok ? topTracksRes.json() : void 0,
    artistRelatedArtists: relatedArtistsRes.ok ? relatedArtistsRes.json() : void 0,
    color: colorRes?.ok ? colorRes.json().then((r) => r.color) : null
  };
};
export {
  load
};
