import { f as ensure_array_like, l as escape_html, m as bind_props, b as pop, p as push } from "../../../../chunks/index3.js";
import "../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { I as ItemPage } from "../../../../chunks/ItemPage.js";
import { T as TrackList } from "../../../../chunks/Player.js";
import "uniqid";
import "devalue";
function _page($$payload, $$props) {
  push();
  let color, artist, topTracks, albums, relatedArtists, appearsOn;
  let data = $$props["data"];
  const followersFormat = Intl.NumberFormat("en", { notation: "compact" });
  color = data.color;
  artist = data.artist;
  topTracks = data.artistTopTracks;
  albums = data.artistAlbums;
  relatedArtists = data.artistRelatedArtists;
  appearsOn = data.artistAppearsOn;
  $$payload.out += `<!--[-->`;
  ItemPage($$payload, {
    title: artist.name,
    image: artist.images.length ? artist.images[0].url : void 0,
    color,
    type: artist.type,
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<div class="content"><!--[-->`;
      if (topTracks && topTracks.tracks.length > 0) {
        $$payload2.out += `<div class="section svelte-nc0tqw"><div class="section-title svelte-nc0tqw"><h2 class="svelte-nc0tqw">Top Tracks</h2></div> <!--[-->`;
        TrackList($$payload2, {
          tracks: topTracks.tracks,
          userPlaylists: data.userAllPlaylists?.filter((pl) => pl.owner.id === data.user?.id),
          total: topTracks.tracks.length,
          title: artist.name
        });
        $$payload2.out += `<!--]--></div>`;
        $$payload2.out += "<!--]-->";
      } else {
        $$payload2.out += "<!--]!-->";
      }
      $$payload2.out += ` <!--[-->`;
      if (albums && albums.items.length > 0) {
        const each_array = ensure_array_like(albums.items);
        $$payload2.out += `<div class="section svelte-nc0tqw"><div class="section-title svelte-nc0tqw"><h2 class="svelte-nc0tqw">Albums</h2> <!--[-->`;
        Button($$payload2, {
          element: "a",
          href: `/artist/${artist.id}/albums`,
          variant: "outline",
          children: ($$payload3, $$slotProps2) => {
            $$payload3.out += `View All <span class="visually-hidden">Albums</span>`;
          }
        });
        $$payload2.out += `<!--]--></div> <div class="grid-items"><!--[-->`;
        for (let $$index = 0; $$index < each_array.length; $$index++) {
          const album = each_array[$$index];
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<div class="grid-item"><!--[-->`;
          Card($$payload2, { item: album });
          $$payload2.out += `<!--]--></div>`;
          $$payload2.out += "<!--]-->";
        }
        $$payload2.out += "<!--]-->";
        $$payload2.out += `</div></div>`;
        $$payload2.out += "<!--]-->";
      } else {
        $$payload2.out += "<!--]!-->";
      }
      $$payload2.out += ` <!--[-->`;
      if (appearsOn && appearsOn.items.length > 0) {
        const each_array_1 = ensure_array_like(appearsOn.items);
        $$payload2.out += `<div class="section svelte-nc0tqw"><div class="section-title svelte-nc0tqw"><h2 class="svelte-nc0tqw">Appears On</h2> <!--[-->`;
        Button($$payload2, {
          element: "a",
          href: `/artist/${artist.id}/appears-on`,
          variant: "outline",
          children: ($$payload3, $$slotProps2) => {
            $$payload3.out += `View All <span class="visually-hidden">artist appearances</span>`;
          }
        });
        $$payload2.out += `<!--]--></div> <div class="grid-items"><!--[-->`;
        for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
          const album = each_array_1[$$index_1];
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<div class="grid-item"><!--[-->`;
          Card($$payload2, { item: album });
          $$payload2.out += `<!--]--></div>`;
          $$payload2.out += "<!--]-->";
        }
        $$payload2.out += "<!--]-->";
        $$payload2.out += `</div></div>`;
        $$payload2.out += "<!--]-->";
      } else {
        $$payload2.out += "<!--]!-->";
      }
      $$payload2.out += ` <!--[-->`;
      if (relatedArtists && relatedArtists.artists.length > 0) {
        const each_array_2 = ensure_array_like(relatedArtists.artists.splice(0, 6));
        $$payload2.out += `<div class="section svelte-nc0tqw"><div class="section-title svelte-nc0tqw"><h2 class="svelte-nc0tqw">Related Artists</h2> <!--[-->`;
        Button($$payload2, {
          element: "a",
          href: `/artist/${artist.id}/related-artists`,
          variant: "outline",
          children: ($$payload3, $$slotProps2) => {
            $$payload3.out += `View All <span class="visually-hidden">Related Artists</span>`;
          }
        });
        $$payload2.out += `<!--]--></div> <div class="grid-items"><!--[-->`;
        for (let $$index_2 = 0; $$index_2 < each_array_2.length; $$index_2++) {
          const artists = each_array_2[$$index_2];
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<div class="grid-item"><!--[-->`;
          Card($$payload2, { item: artists });
          $$payload2.out += `<!--]--></div>`;
          $$payload2.out += "<!--]-->";
        }
        $$payload2.out += "<!--]-->";
        $$payload2.out += `</div></div>`;
        $$payload2.out += "<!--]-->";
      } else {
        $$payload2.out += "<!--]!-->";
      }
      $$payload2.out += `</div>`;
    },
    $$slots: {
      "meta": ($$payload2, $$slotProps) => {
        $$payload2.out += `<p class="meta" slot="meta">${escape_html(followersFormat.format(artist.followers.total))} Followers</p>`;
      }
    }
  });
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
