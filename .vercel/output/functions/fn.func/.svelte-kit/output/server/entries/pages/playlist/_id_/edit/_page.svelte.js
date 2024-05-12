import { l as escape_html, m as bind_props, b as pop, p as push } from "../../../../../chunks/index3.js";
import "../../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import "../../../../../chunks/index.js";
import "devalue";
import "uniqid";
import { P as PlaylistForm } from "../../../../../chunks/PlaylistForm.js";
function _page($$payload, $$props) {
  push();
  let playlist;
  let form = $$props["form"];
  let data = $$props["data"];
  playlist = data.playlist;
  $$payload.out += `<h2>${escape_html(data.title)}</h2> <!--[-->`;
  PlaylistForm($$payload, { form, playlist, action: "?redirect" });
  $$payload.out += `<!--]-->`;
  bind_props($$props, { form, data });
  pop();
}
export {
  _page as default
};
