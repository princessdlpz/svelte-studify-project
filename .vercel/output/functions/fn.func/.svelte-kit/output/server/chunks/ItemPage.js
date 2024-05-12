import { i as add_styles, g as attr, l as escape_html, d as slot, m as bind_props, b as pop, p as push, j as stringify } from "./index3.js";
import "./HeaderNav.svelte_svelte_type_style_lang.js";
import { M as Music } from "./music.js";
function ItemPage($$payload, $$props) {
  push();
  let color = $$props["color"];
  let image = $$props["image"];
  let title = $$props["title"];
  let type = $$props["type"];
  $$payload.out += `<div class="banner svelte-10vrha0"><div${add_styles({
    "background-image": `linear-gradient(0deg, transparent, ${stringify(color || "var(--light-gray)")})`
  })} class="banner-gradient svelte-10vrha0"></div> <div class="cover svelte-10vrha0"><!--[-->`;
  if (image) {
    $$payload.out += `<img class="cover-img svelte-10vrha0"${attr("src", image, false)}${attr("alt", title, false)}>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<div class="cover-placeholder svelte-10vrha0"><!--[-->`;
    Music($$payload, {
      focusable: "false",
      "aria-hidden": true,
      color: "var(--light-gray)"
    });
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</div> <div class="info svelte-10vrha0"><!--[-->`;
  if (type) {
    $$payload.out += `<p class="type svelte-10vrha0">${escape_html(type)}</p>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <h1 class="title svelte-10vrha0">${escape_html(title)}</h1> <!--[-->`;
  slot($$payload, $$props.$$slots?.["meta"], {});
  $$payload.out += `<!--]--></div></div> <div class="content svelte-10vrha0"><!--[-->`;
  slot($$payload, $$props.children, {});
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { color, image, title, type });
  pop();
}
export {
  ItemPage as I
};
