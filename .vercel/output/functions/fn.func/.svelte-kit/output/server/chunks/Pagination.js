import { k as store_get, j as stringify, u as unsubscribe_stores, m as bind_props, b as pop, p as push } from "./index3.js";
import { p as page } from "./stores.js";
import "./HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "./Button.js";
import "./index.js";
import "devalue";
import "uniqid";
function Pagination($$payload, $$props) {
  push();
  var $$store_subs;
  let currentPage;
  let paginatedList = $$props["paginatedList"];
  let isLoading = $$props["isLoading"];
  currentPage = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("page") || 1;
  $$payload.out += `<!--[-->`;
  if (paginatedList.next) {
    $$payload.out += `<div class="load-more svelte-iagcvk"><!--[-->`;
    Button($$payload, {
      element: "button",
      variant: "outline",
      disabled: isLoading,
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `Load More <span class="visually-hidden">Items</span>`;
      }
    });
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  if ("previous" in paginatedList) {
    $$payload.out += `<div class="pagination svelte-iagcvk"><div class="previous"><!--[-->`;
    if (paginatedList.previous) {
      $$payload.out += `<!--[-->`;
      Button($$payload, {
        element: "a",
        variant: "outline",
        href: `${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname)}?${stringify(new URLSearchParams({ page: `${Number(currentPage) - 1}` }))}`,
        children: ($$payload2, $$slotProps) => {
          $$payload2.out += `← Previous Page`;
        }
      });
      $$payload.out += `<!--]-->`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += `</div> <div class="next"><!--[-->`;
    if (paginatedList.next) {
      $$payload.out += `<!--[-->`;
      Button($$payload, {
        element: "a",
        variant: "outline",
        href: `${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname)}?${stringify(new URLSearchParams({ page: `${Number(currentPage) + 1}` }))}`,
        children: ($$payload2, $$slotProps) => {
          $$payload2.out += `Next Page →`;
        }
      });
      $$payload.out += `<!--]-->`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += `</div></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, { paginatedList, isLoading });
  pop();
}
export {
  Pagination as P
};
