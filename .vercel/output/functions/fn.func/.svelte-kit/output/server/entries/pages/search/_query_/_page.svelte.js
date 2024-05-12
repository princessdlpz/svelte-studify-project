import { l as escape_html, f as ensure_array_like, m as bind_props, b as pop, p as push } from "../../../../chunks/index3.js";
import "../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { C as Card } from "../../../../chunks/Card.js";
import "../../../../chunks/index.js";
import "devalue";
import "uniqid";
function _page($$payload, $$props) {
  push();
  let albums, playlists, artists;
  let data = $$props["data"];
  albums = data.searchResults.albums?.items;
  playlists = data.searchResults.playlists?.items;
  artists = data.searchResults.artists?.items;
  $$payload.out += `<h1 class="svelte-a8mgn9">${escape_html(data.title)}</h1> <!--[-->`;
  if ((!albums || albums.length === 0) && (!playlists || playlists.length === 0) && (!artists || artists.length === 0)) {
    $$payload.out += `<p>No results found!</p>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  if (albums && albums.length > 0) {
    const each_array = ensure_array_like(albums);
    $$payload.out += `<section class="section svelte-a8mgn9"><h2 class="svelte-a8mgn9">Albums</h2> <div class="grid-items"><!--[-->`;
    for (let $$index = 0; $$index < each_array.length; $$index++) {
      const album = each_array[$$index];
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="grid-item"><!--[-->`;
      Card($$payload, { item: album });
      $$payload.out += `<!--]--></div>`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</div></section>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  if (playlists && playlists.length > 0) {
    const each_array_1 = ensure_array_like(playlists);
    $$payload.out += `<section class="section svelte-a8mgn9"><h2 class="svelte-a8mgn9">Playlists</h2> <div class="grid-items"><!--[-->`;
    for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
      const playlist = each_array_1[$$index_1];
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="grid-item"><!--[-->`;
      Card($$payload, { item: playlist });
      $$payload.out += `<!--]--></div>`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</div></section>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  if (artists && artists.length > 0) {
    const each_array_2 = ensure_array_like(artists);
    $$payload.out += `<section class="section svelte-a8mgn9"><h2 class="svelte-a8mgn9">Artists</h2> <div class="grid-items"><!--[-->`;
    for (let $$index_2 = 0; $$index_2 < each_array_2.length; $$index_2++) {
      const artist = each_array_2[$$index_2];
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="grid-item"><!--[-->`;
      Card($$payload, { item: artist });
      $$payload.out += `<!--]--></div>`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</div></section>`;
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
