import { j as json, r as redirect } from "../../../../../chunks/index.js";
const POST = ({ cookies, request }) => {
  cookies.delete("refresh_token", { path: "/" });
  cookies.delete("access_token", { path: "/" });
  if (request.headers.get("accept") === "application/json") {
    return json({ success: true });
  }
  throw redirect(303, "/login");
};
export {
  POST
};
