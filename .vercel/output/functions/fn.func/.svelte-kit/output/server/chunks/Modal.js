import { g as attr, l as escape_html, d as slot, m as bind_props, b as pop, j as stringify, p as push } from "./index3.js";
import "./HeaderNav.svelte_svelte_type_style_lang.js";
import { X } from "./x.js";
function Modal($$payload, $$props) {
  push();
  let id = $$props["id"];
  let title = $$props["title"];
  $$payload.out += `<div${attr("id", id, false)} aria-hidden="true" class="modal svelte-ha63lw"><div tabindex="-1" data-micromodal-close="" class="modal-overlay svelte-ha63lw"><div class="modal-content svelte-ha63lw" role="dialog" aria-modal="true"${attr("aria-labelledby", `${stringify(id)}-title`, false)}><header class="svelte-ha63lw"><h2${attr("id", `${stringify(id)}-title`, false)} class="svelte-ha63lw">${escape_html(title)}</h2> <button class="close-button svelte-ha63lw" aria-label="Close modal" data-micromodal-close=""><!--[-->`;
  X($$payload, { "aria-hidden": true, focusable: "false" });
  $$payload.out += `<!--]--></button></header> <div${attr("id", `${stringify(id)}-content`, false)}><!--[-->`;
  slot($$payload, $$props.children, {});
  $$payload.out += `<!--]--></div></div></div></div>`;
  bind_props($$props, { id, title });
  pop();
}
export {
  Modal as M
};
