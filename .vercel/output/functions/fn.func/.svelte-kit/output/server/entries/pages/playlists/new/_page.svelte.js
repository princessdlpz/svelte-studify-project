import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import "../../../../chunks/index.js";
import "devalue";
import "uniqid";
import { P as PlaylistForm } from "../../../../chunks/PlaylistForm.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h2 data-svelte-h="svelte-1aedqym">Add a New Playlist</h2> ${validate_component(PlaylistForm, "PlaylistForm").$$render($$result, { userID: data.user?.id, form }, {}, {})}`;
});
export {
  Page as default
};
