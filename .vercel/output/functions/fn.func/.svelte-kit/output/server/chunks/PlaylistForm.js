import { c as create_ssr_component, o as createEventDispatcher, d as add_attribute, f as escape, v as validate_component } from "./ssr.js";
import "./HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "./Button.js";
import "./index.js";
import "devalue";
import "uniqid";
const css = {
  code: "form.svelte-10utbli.svelte-10utbli{max-width:400px}form.svelte-10utbli .field.svelte-10utbli{margin-bottom:20px}form.svelte-10utbli .field.has-error input.svelte-10utbli{outline:2px solid var(--error)}form.svelte-10utbli .field label.svelte-10utbli{display:inline-block;margin-bottom:10px;font-size:0.875rem}form.svelte-10utbli .field input.svelte-10utbli{width:100%}form.svelte-10utbli p.error.svelte-10utbli{color:var(--error);font-size:0.875rem;margin:10px 0 0}form.svelte-10utbli .submit-button.svelte-10utbli{text-align:right;margin-top:40px}",
  map: `{"version":3,"file":"PlaylistForm.svelte","sources":["PlaylistForm.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Button } from '$components';\\nimport { applyAction, enhance } from '$app/forms';\\nimport { createEventDispatcher } from 'svelte';\\nconst dispatch = createEventDispatcher();\\nlet isLoading = false;\\nexport let form;\\nexport let userID = undefined;\\nexport let action = undefined;\\nexport let playlist = undefined;\\n<\/script>\\n\\n<form\\n\\tmethod=\\"POST\\"\\n\\t{action}\\n\\tuse:enhance={() => {\\n\\t\\tisLoading = true;\\n\\t\\treturn async ({ result }) => {\\n\\t\\t\\tawait applyAction(result);\\n\\t\\t\\tisLoading = false;\\n\\t\\t\\tif (result.type === 'success') {\\n\\t\\t\\t\\tdispatch('success');\\n\\t\\t\\t}\\n\\t\\t\\tif (result.type === 'redirect') {\\n\\t\\t\\t\\tdispatch('redirect');\\n\\t\\t\\t}\\n\\t\\t};\\n\\t}}\\n>\\n\\t{#if userID}<input hidden name=\\"userID\\" value={userID} />{/if}\\n\\t<div class=\\"field\\" class:has-error={form?.nameError}>\\n\\t\\t<label for=\\"playlist-name\\">Name *</label>\\n\\t\\t<input\\n\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\tid=\\"playlist-name\\"\\n\\t\\t\\tname=\\"name\\"\\n\\t\\t\\tplaceholder=\\"Playlist Name\\"\\n\\t\\t\\tvalue={form?.name || playlist?.name || ''}\\n\\t\\t/>\\n\\t\\t{#if form?.nameError}\\n\\t\\t\\t<p class=\\"error\\">{form?.nameError}</p>\\n\\t\\t{/if}\\n\\t</div>\\n\\t<div class=\\"field\\">\\n\\t\\t<label for=\\"playlist-description\\">Description</label>\\n\\t\\t<input\\n\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\tid=\\"playlist-description\\"\\n\\t\\t\\tname=\\"description\\"\\n\\t\\t\\tplaceholder=\\"Playlist Description\\"\\n\\t\\t\\tvalue={form?.description || playlist?.description || ''}\\n\\t\\t/>\\n\\t</div>\\n\\n\\t{#if form?.apiError}\\n\\t\\t<p class=\\"error\\">{form.apiError}</p>\\n\\t{/if}\\n\\n\\t<div class=\\"submit-button\\">\\n\\t\\t<Button disabled={isLoading} element=\\"button\\" type=\\"submit\\"\\n\\t\\t\\t>{playlist ? 'Save Playlist' : 'Create Playlist'}</Button\\n\\t\\t>\\n\\t</div>\\n</form>\\n\\n<style lang=\\"scss\\">form {\\n  max-width: 400px;\\n}\\nform .field {\\n  margin-bottom: 20px;\\n}\\nform .field.has-error input {\\n  outline: 2px solid var(--error);\\n}\\nform .field label {\\n  display: inline-block;\\n  margin-bottom: 10px;\\n  font-size: 0.875rem;\\n}\\nform .field input {\\n  width: 100%;\\n}\\nform p.error {\\n  color: var(--error);\\n  font-size: 0.875rem;\\n  margin: 10px 0 0;\\n}\\nform .submit-button {\\n  text-align: right;\\n  margin-top: 40px;\\n}</style>\\n"],"names":[],"mappings":"AAgEmB,kCAAK,CACtB,SAAS,CAAE,KACb,CACA,mBAAI,CAAC,qBAAO,CACV,aAAa,CAAE,IACjB,CACA,mBAAI,CAAC,MAAM,UAAU,CAAC,oBAAM,CAC1B,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,OAAO,CAChC,CACA,mBAAI,CAAC,MAAM,CAAC,oBAAM,CAChB,OAAO,CAAE,YAAY,CACrB,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,QACb,CACA,mBAAI,CAAC,MAAM,CAAC,oBAAM,CAChB,KAAK,CAAE,IACT,CACA,mBAAI,CAAC,CAAC,qBAAO,CACX,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,QAAQ,CACnB,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,CACjB,CACA,mBAAI,CAAC,6BAAe,CAClB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,IACd"}`
};
const PlaylistForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let isLoading = false;
  let { form } = $$props;
  let { userID = void 0 } = $$props;
  let { action = void 0 } = $$props;
  let { playlist = void 0 } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.userID === void 0 && $$bindings.userID && userID !== void 0)
    $$bindings.userID(userID);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.playlist === void 0 && $$bindings.playlist && playlist !== void 0)
    $$bindings.playlist(playlist);
  $$result.css.add(css);
  return `<form method="POST"${add_attribute("action", action, 0)} class="svelte-10utbli">${userID ? `<input hidden name="userID"${add_attribute("value", userID, 0)} class="svelte-10utbli">` : ``} <div class="${["field svelte-10utbli", form?.nameError ? "has-error" : ""].join(" ").trim()}"><label for="playlist-name" class="svelte-10utbli" data-svelte-h="svelte-19zppfb">Name *</label> <input type="text" id="playlist-name" name="name" placeholder="Playlist Name"${add_attribute("value", form?.name || playlist?.name || "", 0)} class="svelte-10utbli"> ${form?.nameError ? `<p class="error svelte-10utbli">${escape(form?.nameError)}</p>` : ``}</div> <div class="field svelte-10utbli"><label for="playlist-description" class="svelte-10utbli" data-svelte-h="svelte-v1e6ph">Description</label> <input type="text" id="playlist-description" name="description" placeholder="Playlist Description"${add_attribute("value", form?.description || playlist?.description || "", 0)} class="svelte-10utbli"></div> ${form?.apiError ? `<p class="error svelte-10utbli">${escape(form.apiError)}</p>` : ``} <div class="submit-button svelte-10utbli">${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: isLoading,
      element: "button",
      type: "submit"
    },
    {},
    {
      default: () => {
        return `${escape(playlist ? "Save Playlist" : "Create Playlist")}`;
      }
    }
  )}</div> </form>`;
});
export {
  PlaylistForm as P
};
