import { b as SPOTIFY_BASE_URL } from "../../chunks/private.js";
import { r as redirect } from "../../chunks/index.js";
const load = async ({ cookies, fetch, url }) => {
  const accessToken = cookies.get("access_token");
  const refreshToken = cookies.get("refresh_token");
  if (!accessToken) {
    return {
      user: null
    };
  }
  const profileRes = await fetch(`${SPOTIFY_BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (profileRes.ok) {
    const profile = await profileRes.json();
    let userAllPlaylists = [];
    const userPlaylistsRes = await fetch("/api/spotify/me/playlists?limit=50");
    if (userPlaylistsRes.ok) {
      const userPlaylistsResJSON = await userPlaylistsRes.json();
      userAllPlaylists = userPlaylistsResJSON.items;
    }
    return {
      user: profile,
      userAllPlaylists
    };
  }
  if (profileRes.status === 401 && refreshToken) {
    const refreshRes = await fetch("/api/auth/refresh");
    if (refreshRes.ok) {
      throw redirect(307, url.pathname);
    }
    return {
      user: null
    };
  } else {
    return {
      user: null
    };
  }
};
export {
  load
};
