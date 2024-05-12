import { f as fetchRefresh } from "../../../../chunks/fetch-refresh.js";
import { e as error } from "../../../../chunks/index.js";
const load = async ({ fetch, params, depends, route }) => {
  depends(`app:${route.id}`);
  const albumRes = await fetchRefresh(fetch, `/api/spotify/albums/${params.id}`);
  if (!albumRes.ok) {
    throw error(albumRes.status, "Failed to load album!");
  }
  const albumJSON = await albumRes.json();
  let color = null;
  if (albumJSON.images.length > 0) {
    const colorRes = await fetch(
      `/api/average-color?${new URLSearchParams({
        image: albumJSON.images[0].url
      }).toString()}`
    );
    if (colorRes.ok) {
      color = (await colorRes.json()).color;
    }
  }
  return {
    album: albumJSON,
    title: albumJSON.name,
    color
  };
};
export {
  load
};
