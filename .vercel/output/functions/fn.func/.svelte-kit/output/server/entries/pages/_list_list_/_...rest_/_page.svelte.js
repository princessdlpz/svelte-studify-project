import { l as escape_html, f as ensure_array_like, m as bind_props, b as pop, p as push } from "../../../../chunks/index3.js";
import "../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { C as Card } from "../../../../chunks/Card.js";
import "../../../../chunks/index.js";
import "devalue";
import "uniqid";
import { P as Pagination } from "../../../../chunks/Pagination.js";
function _page($$payload, $$props) {
  push();
  let itemsData;
  let data = $$props["data"];
  let isLoading = false;
  itemsData = data.data;
  $$payload.out += `<div class="content svelte-zggvko"><h1>${escape_html(data.title)}</h1> <!--[-->`;
  if (itemsData?.items) {
    const each_array = ensure_array_like(itemsData.items);
    $$payload.out += `<div class="grid-items svelte-zggvko"><!--[-->`;
    for (let $$index = 0; $$index < each_array.length; $$index++) {
      const item = each_array[$$index];
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="grid-item"><!--[-->`;
      Card($$payload, { item });
      $$payload.out += `<!--]--></div>`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</div> <!--[-->`;
    if ("next" in itemsData) {
      $$payload.out += `<!--[-->`;
      Pagination($$payload, { paginatedList: itemsData, isLoading });
      $$payload.out += `<!--]-->`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
