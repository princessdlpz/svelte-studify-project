import { c as create_ssr_component, f as escape, v as validate_component, e as each } from "../../../chunks/ssr.js";
import "../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import "../../../chunks/index.js";
import "devalue";
import "uniqid";
import { P as Pagination } from "../../../chunks/Pagination.js";
import { P as PlaylistForm } from "../../../chunks/PlaylistForm.js";
import { M as Modal } from "../../../chunks/Modal.js";
import "micromodal";
const css = {
  code: ".content.svelte-ap3in5.svelte-ap3in5{padding-bottom:60px}.content.svelte-ap3in5 .title.svelte-ap3in5{display:flex;align-items:center;justify-content:space-between}.content.svelte-ap3in5 .grid-items.svelte-ap3in5{margin-bottom:40px}.content.svelte-ap3in5 .empty.svelte-ap3in5{text-align:center;margin-top:40px}.content.svelte-ap3in5 .empty p.svelte-ap3in5{font-size:1.375rem;font-weight:600}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Button, Card, Modal, Pagination } from '$components';\\nimport PlaylistForm from '$components/PlaylistForm.svelte';\\nimport { toasts } from '$stores';\\nimport MicroModal from 'micromodal';\\nexport let data;\\nexport let form;\\nlet isLoading = false;\\n$: playlists = data.userPlaylists;\\nasync function loadMoreItems() {\\n    if (!playlists.next)\\n        return;\\n    isLoading = true;\\n    const res = await fetch(playlists.next.replace('https://api.spotify.com/v1/', '/api/spotify/'));\\n    if (res.ok) {\\n        const resJSON = await res.json();\\n        playlists = {\\n            ...resJSON,\\n            items: [...playlists.items, ...resJSON.items]\\n        };\\n    }\\n    else {\\n        toasts.error('Could not load data!');\\n    }\\n    isLoading = false;\\n}\\n<\/script>\\n\\n<div class=\\"content\\">\\n\\t{#if playlists.items.length > 0}\\n\\t\\t<div class=\\"title\\">\\n\\t\\t\\t<h1>{data.title}</h1>\\n\\t\\t\\t<Button\\n\\t\\t\\t\\telement=\\"a\\"\\n\\t\\t\\t\\thref=\\"/playlists/new\\"\\n\\t\\t\\t\\ton:click={(e) => {\\n\\t\\t\\t\\t\\te.preventDefault();\\n\\t\\t\\t\\t\\tMicroModal.show('add-playlist-modal');\\n\\t\\t\\t\\t}}>+ Add New</Button\\n\\t\\t\\t>\\n\\t\\t</div>\\n\\t\\t<div class=\\"grid-items\\">\\n\\t\\t\\t{#each playlists.items as item}\\n\\t\\t\\t\\t<Card {item} />\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t\\t<Pagination paginatedList={playlists} on:loadmore={loadMoreItems} {isLoading} />\\n\\t{:else}\\n\\t\\t<div class=\\"empty\\">\\n\\t\\t\\t<p>No Playlists Yet!</p>\\n\\t\\t\\t<Button element=\\"a\\" href=\\"/playlists/new\\">+ Add New</Button>\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<Modal id=\\"add-playlist-modal\\" title=\\"Add a New Playlist\\">\\n\\t<PlaylistForm {form} userID={data.user?.id} action=\\"/playlists/new\\" />\\n</Modal>\\n\\n<style lang=\\"scss\\">.content {\\n  padding-bottom: 60px;\\n}\\n.content .title {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.content .grid-items {\\n  margin-bottom: 40px;\\n}\\n.content .empty {\\n  text-align: center;\\n  margin-top: 40px;\\n}\\n.content .empty p {\\n  font-size: 1.375rem;\\n  font-weight: 600;\\n}</style>\\n"],"names":[],"mappings":"AA0DmB,oCAAS,CAC1B,cAAc,CAAE,IAClB,CACA,sBAAQ,CAAC,oBAAO,CACd,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aACnB,CACA,sBAAQ,CAAC,yBAAY,CACnB,aAAa,CAAE,IACjB,CACA,sBAAQ,CAAC,oBAAO,CACd,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IACd,CACA,sBAAQ,CAAC,MAAM,CAAC,eAAE,CAChB,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,GACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let playlists;
  let { data } = $$props;
  let { form } = $$props;
  let isLoading = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  playlists = data.userPlaylists;
  return `<div class="content svelte-ap3in5">${playlists.items.length > 0 ? `<div class="title svelte-ap3in5"><h1>${escape(data.title)}</h1> ${validate_component(Button, "Button").$$render($$result, { element: "a", href: "/playlists/new" }, {}, {
    default: () => {
      return `+ Add New`;
    }
  })}</div> <div class="grid-items svelte-ap3in5">${each(playlists.items, (item) => {
    return `${validate_component(Card, "Card").$$render($$result, { item }, {}, {})}`;
  })}</div> ${validate_component(Pagination, "Pagination").$$render($$result, { paginatedList: playlists, isLoading }, {}, {})}` : `<div class="empty svelte-ap3in5"><p class="svelte-ap3in5" data-svelte-h="svelte-1d6ogv9">No Playlists Yet!</p> ${validate_component(Button, "Button").$$render($$result, { element: "a", href: "/playlists/new" }, {}, {
    default: () => {
      return `+ Add New`;
    }
  })}</div>`}</div> ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      id: "add-playlist-modal",
      title: "Add a New Playlist"
    },
    {},
    {
      default: () => {
        return `${validate_component(PlaylistForm, "PlaylistForm").$$render(
          $$result,
          {
            form,
            userID: data.user?.id,
            action: "/playlists/new"
          },
          {},
          {}
        )}`;
      }
    }
  )}`;
});
export {
  Page as default
};
