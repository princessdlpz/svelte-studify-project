import { c as create_ssr_component, f as escape, e as each, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { C as Card } from "../../../../chunks/Card.js";
import "../../../../chunks/index.js";
import "devalue";
import "uniqid";
const css = {
  code: "h1.svelte-a8mgn9{font-size:1.75rem}h2.svelte-a8mgn9{font-size:1.375rem}.section.svelte-a8mgn9{margin-bottom:40px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Card } from '$components';\\nexport let data;\\n$: albums = data.searchResults.albums?.items;\\n$: playlists = data.searchResults.playlists?.items;\\n$: artists = data.searchResults.artists?.items;\\n<\/script>\\n\\n<h1>{data.title}</h1>\\n\\n{#if (!albums || albums.length === 0) && (!playlists || playlists.length === 0) && (!artists || artists.length === 0)}\\n\\t<p>No results found!</p>\\n{/if}\\n\\n{#if albums && albums.length > 0}\\n\\t<section class=\\"section\\">\\n\\t\\t<h2>Albums</h2>\\n\\t\\t<div class=\\"grid-items\\">\\n\\t\\t\\t{#each albums as album}\\n\\t\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\t\\t<Card item={album} />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</section>\\n{/if}\\n\\n{#if playlists && playlists.length > 0}\\n\\t<section class=\\"section\\">\\n\\t\\t<h2>Playlists</h2>\\n\\t\\t<div class=\\"grid-items\\">\\n\\t\\t\\t{#each playlists as playlist}\\n\\t\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\t\\t<Card item={playlist} />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</section>\\n{/if}\\n\\n{#if artists && artists.length > 0}\\n\\t<section class=\\"section\\">\\n\\t\\t<h2>Artists</h2>\\n\\t\\t<div class=\\"grid-items\\">\\n\\t\\t\\t{#each artists as artist}\\n\\t\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\t\\t<Card item={artist} />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</section>\\n{/if}\\n\\n<style lang=\\"scss\\">h1 {\\n  font-size: 1.75rem;\\n}\\n\\nh2 {\\n  font-size: 1.375rem;\\n}\\n\\n.section {\\n  margin-bottom: 40px;\\n}</style>\\n"],"names":[],"mappings":"AAoDmB,gBAAG,CACpB,SAAS,CAAE,OACb,CAEA,gBAAG,CACD,SAAS,CAAE,QACb,CAEA,sBAAS,CACP,aAAa,CAAE,IACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let albums;
  let playlists;
  let artists;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  albums = data.searchResults.albums?.items;
  playlists = data.searchResults.playlists?.items;
  artists = data.searchResults.artists?.items;
  return `<h1 class="svelte-a8mgn9">${escape(data.title)}</h1> ${(!albums || albums.length === 0) && (!playlists || playlists.length === 0) && (!artists || artists.length === 0) ? `<p data-svelte-h="svelte-1tuvnt4">No results found!</p>` : ``} ${albums && albums.length > 0 ? `<section class="section svelte-a8mgn9"><h2 class="svelte-a8mgn9" data-svelte-h="svelte-1dr22m6">Albums</h2> <div class="grid-items">${each(albums, (album) => {
    return `<div class="grid-item">${validate_component(Card, "Card").$$render($$result, { item: album }, {}, {})} </div>`;
  })}</div></section>` : ``} ${playlists && playlists.length > 0 ? `<section class="section svelte-a8mgn9"><h2 class="svelte-a8mgn9" data-svelte-h="svelte-irkpdr">Playlists</h2> <div class="grid-items">${each(playlists, (playlist) => {
    return `<div class="grid-item">${validate_component(Card, "Card").$$render($$result, { item: playlist }, {}, {})} </div>`;
  })}</div></section>` : ``} ${artists && artists.length > 0 ? `<section class="section svelte-a8mgn9"><h2 class="svelte-a8mgn9" data-svelte-h="svelte-lauuse">Artists</h2> <div class="grid-items">${each(artists, (artist) => {
    return `<div class="grid-item">${validate_component(Card, "Card").$$render($$result, { item: artist }, {}, {})} </div>`;
  })}</div></section>` : ``}`;
});
export {
  Page as default
};
