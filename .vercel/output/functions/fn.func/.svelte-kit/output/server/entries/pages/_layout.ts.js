import { r as redirect } from "../../chunks/index.js";
const load = ({ data, url }) => {
  const { user, userAllPlaylists } = data || {};
  if (user && url.pathname === "/login") {
    throw redirect(307, "/");
  }
  if (!user && url.pathname !== "/login") {
    throw redirect(307, "/login");
  }
  return {
    user,
    userAllPlaylists
  };
};
export {
  load
};
