import { f as fetchRefresh } from "../../../chunks/fetch-refresh.js";
const load = async ({ fetch, parent }) => {
  const { user } = await parent();
  const followingReq = fetchRefresh(fetch, `/api/spotify/me/following?type=artist&limit=6`);
  let colorReq;
  if (user?.images && user.images.length > 0) {
    colorReq = fetchRefresh(
      fetch,
      `/api/average-color?${new URLSearchParams({
        image: user.images[0].url
      }).toString()}`
    );
  }
  const [followingRes, colorRes] = await Promise.all([followingReq, colorReq]);
  return {
    following: followingRes.ok ? followingRes.json() : void 0,
    title: user?.display_name,
    color: colorRes?.ok ? colorRes.json().then((r) => r.color) : null
  };
};
export {
  load
};
