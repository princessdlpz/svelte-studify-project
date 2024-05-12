import { c as create_ssr_component, a as subscribe, o as createEventDispatcher, v as validate_component } from "./ssr.js";
import { p as page } from "./stores.js";
import "./HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "./Button.js";
import "./index.js";
import "devalue";
import "uniqid";
const css = {
  code: ".pagination.svelte-iagcvk{display:none;justify-content:space-between}html.no-js .pagination.svelte-iagcvk{display:flex}.load-more.svelte-iagcvk{padding:15px;text-align:center}html.no-js .load-more.svelte-iagcvk{display:none}",
  map: `{"version":3,"file":"Pagination.svelte","sources":["Pagination.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from '$app/stores';\\nimport { Button } from '$components';\\nimport { createEventDispatcher } from 'svelte';\\nexport let paginatedList;\\nexport let isLoading;\\n$: currentPage = $page.url.searchParams.get('page') || 1;\\nconst dispatch = createEventDispatcher();\\n<\/script>\\n\\n{#if paginatedList.next}\\n\\t<div class=\\"load-more\\">\\n\\t\\t<Button\\n\\t\\t\\telement=\\"button\\"\\n\\t\\t\\tvariant=\\"outline\\"\\n\\t\\t\\tdisabled={isLoading}\\n\\t\\t\\ton:click={() => dispatch('loadmore')}\\n\\t\\t>\\n\\t\\t\\tLoad More <span class=\\"visually-hidden\\">Items</span>\\n\\t\\t</Button>\\n\\t</div>\\n{/if}\\n\\n{#if 'previous' in paginatedList}\\n\\t<div class=\\"pagination\\">\\n\\t\\t<div class=\\"previous\\">\\n\\t\\t\\t{#if paginatedList.previous}\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\telement=\\"a\\"\\n\\t\\t\\t\\t\\tvariant=\\"outline\\"\\n\\t\\t\\t\\t\\thref=\\"{$page.url.pathname}?{new URLSearchParams({\\n\\t\\t\\t\\t\\t\\tpage: \`\${Number(currentPage) - 1}\`\\n\\t\\t\\t\\t\\t})}\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t← Previous Page\\n\\t\\t\\t\\t</Button>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t\\t<div class=\\"next\\">\\n\\t\\t\\t{#if paginatedList.next}\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\telement=\\"a\\"\\n\\t\\t\\t\\t\\tvariant=\\"outline\\"\\n\\t\\t\\t\\t\\thref=\\"{$page.url.pathname}?{new URLSearchParams({\\n\\t\\t\\t\\t\\t\\tpage: \`\${Number(currentPage) + 1}\`\\n\\t\\t\\t\\t\\t})}\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tNext Page →\\n\\t\\t\\t\\t</Button>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n{/if}\\n\\n<style lang=\\"scss\\">.pagination {\\n  display: none;\\n  justify-content: space-between;\\n}\\n:global(html.no-js) .pagination {\\n  display: flex;\\n}\\n\\n.load-more {\\n  padding: 15px;\\n  text-align: center;\\n}\\n:global(html.no-js) .load-more {\\n  display: none;\\n}</style>\\n"],"names":[],"mappings":"AAqDmB,yBAAY,CAC7B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aACnB,CACQ,UAAW,CAAC,yBAAY,CAC9B,OAAO,CAAE,IACX,CAEA,wBAAW,CACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MACd,CACQ,UAAW,CAAC,wBAAW,CAC7B,OAAO,CAAE,IACX"}`
};
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { paginatedList } = $$props;
  let { isLoading } = $$props;
  createEventDispatcher();
  if ($$props.paginatedList === void 0 && $$bindings.paginatedList && paginatedList !== void 0)
    $$bindings.paginatedList(paginatedList);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  $$result.css.add(css);
  currentPage = $page.url.searchParams.get("page") || 1;
  $$unsubscribe_page();
  return `${paginatedList.next ? `<div class="load-more svelte-iagcvk">${validate_component(Button, "Button").$$render(
    $$result,
    {
      element: "button",
      variant: "outline",
      disabled: isLoading
    },
    {},
    {
      default: () => {
        return `Load More <span class="visually-hidden" data-svelte-h="svelte-xhlkvb">Items</span>`;
      }
    }
  )}</div>` : ``} ${"previous" in paginatedList ? `<div class="pagination svelte-iagcvk"><div class="previous">${paginatedList.previous ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      element: "a",
      variant: "outline",
      href: $page.url.pathname + "?" + new URLSearchParams({ page: `${Number(currentPage) - 1}` })
    },
    {},
    {
      default: () => {
        return `← Previous Page`;
      }
    }
  )}` : ``}</div> <div class="next">${paginatedList.next ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      element: "a",
      variant: "outline",
      href: $page.url.pathname + "?" + new URLSearchParams({ page: `${Number(currentPage) + 1}` })
    },
    {},
    {
      default: () => {
        return `Next Page →`;
      }
    }
  )}` : ``}</div></div>` : ``}`;
});
export {
  Pagination as P
};
