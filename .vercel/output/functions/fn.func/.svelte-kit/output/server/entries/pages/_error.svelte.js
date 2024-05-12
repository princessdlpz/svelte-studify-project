import { h as head, l as escape_html, k as store_get, u as unsubscribe_stores, b as pop, p as push } from "../../chunks/index3.js";
import "../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { p as page } from "../../chunks/stores.js";
import { L as LogoutButton } from "../../chunks/LogoutButton.js";
import { B as Button } from "../../chunks/Button.js";
import "../../chunks/index.js";
import "devalue";
import "uniqid";
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  let isRetrying = false;
  const retryRoutes = [
    "/album/[id]",
    "/playlist/[id]",
    "/artist/[id]",
    "/search/[query]",
    "/[list=list]/[...rest]"
  ];
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</title>`;
  });
  $$payload.out += `<div class="content svelte-1bkjqlj"><h1 class="svelte-1bkjqlj">${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</h1> <!--[-->`;
  if (store_get($$store_subs ??= {}, "$page", page).status === 404) {
    $$payload.out += `<p class="svelte-1bkjqlj">The page you are trying to access cannot be found.</p> <div class="buttons svelte-1bkjqlj"><!--[-->`;
    Button($$payload, {
      element: "a",
      href: "/",
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `Home`;
      }
    });
    $$payload.out += `<!--]--> <!--[-->`;
    Button($$payload, {
      element: "a",
      href: "/search",
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `Search`;
      }
    });
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  if (store_get($$store_subs ??= {}, "$page", page).status === 401) {
    $$payload.out += `<p class="svelte-1bkjqlj">Your current session has expired, please logout and login again.</p> <div class="buttons svelte-1bkjqlj"><!--[-->`;
    LogoutButton($$payload);
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  if (![404, 401].includes(store_get($$store_subs ??= {}, "$page", page).status) && store_get($$store_subs ??= {}, "$page", page).route.id && retryRoutes.includes(store_get($$store_subs ??= {}, "$page", page).route.id)) {
    $$payload.out += `<div class="buttons svelte-1bkjqlj"><!--[-->`;
    Button($$payload, {
      disabled: isRetrying,
      element: "button",
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `Retry`;
      }
    });
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</div>`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
