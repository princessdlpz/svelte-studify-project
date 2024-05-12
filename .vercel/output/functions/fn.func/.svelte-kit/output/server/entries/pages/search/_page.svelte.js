import { f as ensure_array_like, g as attr, j as stringify, l as escape_html, m as bind_props, b as pop, p as push } from "../../../chunks/index3.js";
function _page($$payload, $$props) {
  push();
  let items;
  let data = $$props["data"];
  items = data.categories?.categories.items;
  $$payload.out += `<!--[-->`;
  if (items) {
    const each_array = ensure_array_like(items);
    $$payload.out += `<h2>Browse Categories</h2> <div class="items svelte-dua48j"><!--[-->`;
    for (let $$index = 0; $$index < each_array.length; $$index++) {
      const item = each_array[$$index];
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="item svelte-dua48j"><a${attr("href", `/category/${stringify(item.id)}`, false)} class="svelte-dua48j"><!--[-->`;
      if (item.icons.length > 0) {
        $$payload.out += `<img${attr("src", item.icons[0].url, false)} alt="" class="svelte-dua48j">`;
        $$payload.out += "<!--]-->";
      } else {
        $$payload.out += "<!--]!-->";
      }
      $$payload.out += ` <span class="truncate-1 svelte-dua48j">${escape_html(item.name)}</span></a></div>`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
