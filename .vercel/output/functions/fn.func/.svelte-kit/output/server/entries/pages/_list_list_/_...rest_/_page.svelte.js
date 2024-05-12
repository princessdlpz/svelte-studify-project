import { c as create_ssr_component, f as escape, e as each, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { C as Card } from "../../../../chunks/Card.js";
import "../../../../chunks/index.js";
import "devalue";
import "uniqid";
import { P as Pagination } from "../../../../chunks/Pagination.js";
const css = {
  code: ".grid-items.svelte-zggvko{margin-bottom:40px}.content.svelte-zggvko{padding-bottom:60px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Card, Pagination } from '$components';\\nimport { toasts } from '$stores';\\nexport let data;\\n$: itemsData = data.data;\\nlet isLoading = false;\\nconst onLoadMoreItems = async () => {\\n    if (itemsData && 'next' in itemsData && itemsData.next) {\\n        isLoading = true;\\n        const res = await fetch(itemsData.next.replace('https://api.spotify.com/v1/', '/api/spotify/'));\\n        if (res.ok) {\\n            const resJSON = await res.json();\\n            const newData = resJSON.albums || resJSON.playlists || resJSON.artists || resJSON;\\n            itemsData = { ...newData, items: [...itemsData.items, ...newData.items] };\\n        }\\n        else {\\n            toasts.error('Could not load data!');\\n        }\\n        isLoading = false;\\n    }\\n};\\n<\/script>\\n\\n<div class=\\"content\\">\\n\\t<h1>{data.title}</h1>\\n\\t{#if itemsData?.items}\\n\\t\\t<div class=\\"grid-items\\">\\n\\t\\t\\t{#each itemsData.items as item}\\n\\t\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\t\\t<Card {item} />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t\\t{#if 'next' in itemsData}\\n\\t\\t\\t<Pagination paginatedList={itemsData} on:loadmore={onLoadMoreItems} {isLoading} />\\n\\t\\t{/if}\\n\\t{/if}\\n</div>\\n\\n<style lang=\\"scss\\">.grid-items {\\n  margin-bottom: 40px;\\n}\\n\\n.content {\\n  padding-bottom: 60px;\\n}</style>\\n"],"names":[],"mappings":"AAsCmB,yBAAY,CAC7B,aAAa,CAAE,IACjB,CAEA,sBAAS,CACP,cAAc,CAAE,IAClB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let itemsData;
  let { data } = $$props;
  let isLoading = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  itemsData = data.data;
  return `<div class="content svelte-zggvko"><h1>${escape(data.title)}</h1> ${itemsData?.items ? `<div class="grid-items svelte-zggvko">${each(itemsData.items, (item) => {
    return `<div class="grid-item">${validate_component(Card, "Card").$$render($$result, { item }, {}, {})} </div>`;
  })}</div> ${"next" in itemsData ? `${validate_component(Pagination, "Pagination").$$render($$result, { paginatedList: itemsData, isLoading }, {}, {})}` : ``}` : ``} </div>`;
});
export {
  Page as default
};
