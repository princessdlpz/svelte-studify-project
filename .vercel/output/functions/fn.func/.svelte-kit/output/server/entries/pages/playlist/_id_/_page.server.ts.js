import { b as SPOTIFY_BASE_URL } from "../../../../chunks/private.js";
import { f as fail, r as redirect } from "../../../../chunks/index.js";
const actions = {
  followPlaylist: async ({ cookies, params, fetch: fetch2 }) => {
    const res = await fetch2(`${SPOTIFY_BASE_URL}/playlists/${params.id}/followers`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${cookies.get("access_token")}`
      }
    });
    if (!res.ok) {
      return fail(res.status, { followError: res.statusText, followForm: true });
    }
  },
  unFollowPlaylist: async ({ cookies, params, fetch: fetch2 }) => {
    const res = await fetch2(`${SPOTIFY_BASE_URL}/playlists/${params.id}/followers`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${cookies.get("access_token")}`
      }
    });
    if (!res.ok) {
      return fail(res.status, { followError: res.statusText, followForm: true });
    }
  },
  removeItem: async ({ request, cookies, params }) => {
    const data = await request.formData();
    const track = data.get("track");
    const playlist = params.id;
    const res = await fetch(`${SPOTIFY_BASE_URL}/playlists/${playlist}/tracks`, {
      method: "DELETE",
      body: JSON.stringify({
        uris: [`spotify:track:${track}`]
      }),
      headers: {
        Authorization: `Bearer ${cookies.get("access_token")}`
      }
    });
    if (!res.ok) {
      throw redirect(303, `/playlist/${playlist}?error=${res.statusText}`);
    }
    throw redirect(303, `/playlist/${playlist}?success=Track removed successfully!`);
  }
};
export {
  actions
};
