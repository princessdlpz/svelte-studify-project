import { m as bind_props, b as pop, p as push } from "../../../../chunks/index3.js";
import "../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import "../../../../chunks/index.js";
import "devalue";
import "uniqid";
import { P as PlaylistForm } from "../../../../chunks/PlaylistForm.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let form = $$props["form"];
  $$payload.out += `<h2>Add a New Playlist</h2> <!--[-->`;
  PlaylistForm($$payload, { userID: data.user?.id, form });
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data, form });
  pop();
}
export {
  _page as default
};
