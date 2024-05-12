import { c as create_ssr_component, f as escape, v as validate_component } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import "../../../../../chunks/index.js";
import "devalue";
import "uniqid";
import { P as PlaylistForm } from "../../../../../chunks/PlaylistForm.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let playlist;
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  playlist = data.playlist;
  return `<h2>${escape(data.title)}</h2> ${validate_component(PlaylistForm, "PlaylistForm").$$render($$result, { form, playlist, action: "?redirect" }, {}, {})}`;
});
export {
  Page as default
};
