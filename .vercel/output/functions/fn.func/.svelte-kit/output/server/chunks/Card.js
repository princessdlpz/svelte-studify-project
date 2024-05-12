import { g as attr, j as stringify, l as escape_html, m as bind_props, b as pop, p as push } from "./index3.js";
import "./HeaderNav.svelte_svelte_type_style_lang.js";
import { M as Music } from "./music.js";
function Card($$payload, $$props) {
  push();
  let item = $$props["item"];
  const followersFormat = Intl.NumberFormat("en", { notation: "compact" });
  $$payload.out += `<div${attr("class", `card ${stringify(item.type)} svelte-1hofgv7`, false)}><!--[-->`;
  if (item.images.length > 0) {
    $$payload.out += `<img loading="lazy"${attr("src", item.images[0].url, false)}${attr("alt", `${stringify(item.type)} cover for ${stringify(item.name)}`, false)} class="svelte-1hofgv7">`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<div class="cover-placeholder svelte-1hofgv7"><!--[-->`;
    Music($$payload, {
      "aria-hidden": "true",
      focusable: "false",
      color: "var(--light-gray)"
    });
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <h4 class="truncate-1 svelte-1hofgv7"><a${attr("href", `/${stringify(item.type)}/${stringify(item.id)}`, false)}${attr("title", item.name, false)} class="svelte-1hofgv7">${escape_html(item.name)}</a></h4> <!--[-->`;
  if (item.type === "album") {
    $$payload.out += `<p class="truncate-1 svelte-1hofgv7">${escape_html(item.artists.map((item2) => item2.name).join(", "))}</p>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  if (item.type === "playlist") {
    $$payload.out += `<p class="truncate-2 svelte-1hofgv7">${escape_html(item.description)}</p>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  if (item.type === "artist") {
    $$payload.out += `<p class="truncate-1 svelte-1hofgv7">${escape_html(followersFormat.format(item.followers.total))} Followers</p>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</div>`;
  bind_props($$props, { item });
  pop();
}
export {
  Card as C
};
