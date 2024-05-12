import { c as create_ssr_component, a as subscribe, f as escape, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { p as page } from "../../chunks/stores.js";
import { L as LogoutButton } from "../../chunks/LogoutButton.js";
import { B as Button } from "../../chunks/Button.js";
import "../../chunks/index.js";
import "devalue";
import "uniqid";
const css = {
  code: ".content.svelte-1bkjqlj{text-align:center}h1.svelte-1bkjqlj{font-size:2.5rem}p.svelte-1bkjqlj{font-size:1.25rem}.buttons.svelte-1bkjqlj{margin-top:40px}.buttons.svelte-1bkjqlj a{margin:0 5px}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { invalidate } from '$app/navigation';\\nimport { page } from '$app/stores';\\nimport { Button, LogoutButton } from '$components';\\nlet isRetrying = false;\\nconst retryRoutes = [\\n    '/album/[id]',\\n    '/playlist/[id]',\\n    '/artist/[id]',\\n    '/search/[query]',\\n    '/[list=list]/[...rest]'\\n];\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{$page.status}</title>\\n</svelte:head>\\n\\n<div class=\\"content\\">\\n\\t<h1>{$page.error?.message}</h1>\\n\\n\\t{#if $page.status === 404}\\n\\t\\t<p>The page you are trying to access cannot be found.</p>\\n\\t\\t<div class=\\"buttons\\">\\n\\t\\t\\t<Button element=\\"a\\" href=\\"/\\">Home</Button>\\n\\t\\t\\t<Button element=\\"a\\" href=\\"/search\\">Search</Button>\\n\\t\\t</div>\\n\\t{/if}\\n\\n\\t{#if $page.status === 401}\\n\\t\\t<p>Your current session has expired, please logout and login again.</p>\\n\\t\\t<div class=\\"buttons\\">\\n\\t\\t\\t<LogoutButton />\\n\\t\\t</div>\\n\\t{/if}\\n\\n\\t{#if ![404, 401].includes($page.status) && $page.route.id && retryRoutes.includes($page.route.id)}\\n\\t\\t<div class=\\"buttons\\">\\n\\t\\t\\t<Button\\n\\t\\t\\t\\tdisabled={isRetrying}\\n\\t\\t\\t\\telement=\\"button\\"\\n\\t\\t\\t\\ton:click={async () => {\\n\\t\\t\\t\\t\\tisRetrying = true;\\n\\t\\t\\t\\t\\tawait invalidate(\`app:\${$page.route.id}\`);\\n\\t\\t\\t\\t\\tisRetrying = false;\\n\\t\\t\\t\\t}}>Retry</Button\\n\\t\\t\\t>\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style lang=\\"scss\\">.content {\\n  text-align: center;\\n}\\n\\nh1 {\\n  font-size: 2.5rem;\\n}\\n\\np {\\n  font-size: 1.25rem;\\n}\\n\\n.buttons {\\n  margin-top: 40px;\\n}\\n.buttons :global(a) {\\n  margin: 0 5px;\\n}</style>\\n"],"names":[],"mappings":"AAkDmB,uBAAS,CAC1B,UAAU,CAAE,MACd,CAEA,iBAAG,CACD,SAAS,CAAE,MACb,CAEA,gBAAE,CACA,SAAS,CAAE,OACb,CAEA,uBAAS,CACP,UAAU,CAAE,IACd,CACA,uBAAQ,CAAS,CAAG,CAClB,MAAM,CAAE,CAAC,CAAC,GACZ"}`
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let isRetrying = false;
  const retryRoutes = [
    "/album/[id]",
    "/playlist/[id]",
    "/artist/[id]",
    "/search/[query]",
    "/[list=list]/[...rest]"
  ];
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1pmtc3j_START -->${$$result.title = `<title>${escape($page.status)}</title>`, ""}<!-- HEAD_svelte-1pmtc3j_END -->`, ""} <div class="content svelte-1bkjqlj"><h1 class="svelte-1bkjqlj">${escape($page.error?.message)}</h1> ${$page.status === 404 ? `<p class="svelte-1bkjqlj" data-svelte-h="svelte-1tvea6h">The page you are trying to access cannot be found.</p> <div class="buttons svelte-1bkjqlj">${validate_component(Button, "Button").$$render($$result, { element: "a", href: "/" }, {}, {
    default: () => {
      return `Home`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { element: "a", href: "/search" }, {}, {
    default: () => {
      return `Search`;
    }
  })}</div>` : ``} ${$page.status === 401 ? `<p class="svelte-1bkjqlj" data-svelte-h="svelte-thvoyz">Your current session has expired, please logout and login again.</p> <div class="buttons svelte-1bkjqlj">${validate_component(LogoutButton, "LogoutButton").$$render($$result, {}, {}, {})}</div>` : ``} ${![404, 401].includes($page.status) && $page.route.id && retryRoutes.includes($page.route.id) ? `<div class="buttons svelte-1bkjqlj">${validate_component(Button, "Button").$$render($$result, { disabled: isRetrying, element: "button" }, {}, {
    default: () => {
      return `Retry`;
    }
  })}</div>` : ``} </div>`;
});
export {
  Error as default
};
