import { v as value_or_fallback, g as attr, j as stringify, l as escape_html, m as bind_props, b as pop, p as push } from "./index3.js";
import "./HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "./Button.js";
import "./index.js";
import "devalue";
import "uniqid";
function PlaylistForm($$payload, $$props) {
  push();
  let isLoading = false;
  let form = $$props["form"];
  let userID = value_or_fallback($$props["userID"], () => void 0);
  let action = value_or_fallback($$props["action"], () => void 0);
  let playlist = value_or_fallback($$props["playlist"], () => void 0);
  $$payload.out += `<form method="POST"${attr("action", action, false)} class="svelte-10utbli"><!--[-->`;
  if (userID) {
    $$payload.out += `<input hidden name="userID"${attr("value", userID, false)}>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <div${attr("class", `field svelte-10utbli ${stringify([form?.nameError ? "has-error" : ""].filter(Boolean).join(" "))}`, false)}><label for="playlist-name" class="svelte-10utbli">Name *</label> <input type="text" id="playlist-name" name="name" placeholder="Playlist Name"${attr("value", form?.name || playlist?.name || "", false)} class="svelte-10utbli"> <!--[-->`;
  if (form?.nameError) {
    $$payload.out += `<p class="error svelte-10utbli">${escape_html(form?.nameError)}</p>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</div> <div class="field svelte-10utbli"><label for="playlist-description" class="svelte-10utbli">Description</label> <input type="text" id="playlist-description" name="description" placeholder="Playlist Description"${attr("value", form?.description || playlist?.description || "", false)} class="svelte-10utbli"></div> <!--[-->`;
  if (form?.apiError) {
    $$payload.out += `<p class="error svelte-10utbli">${escape_html(form.apiError)}</p>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <div class="submit-button svelte-10utbli"><!--[-->`;
  Button($$payload, {
    disabled: isLoading,
    element: "button",
    type: "submit",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `${escape_html(playlist ? "Save Playlist" : "Create Playlist")}`;
    }
  });
  $$payload.out += `<!--]--></div></form>`;
  bind_props($$props, { form, userID, action, playlist });
  pop();
}
export {
  PlaylistForm as P
};
