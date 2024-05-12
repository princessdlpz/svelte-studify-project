import { c as create_ssr_component, v as validate_component, f as escape, e as each } from "../../../../chunks/ssr.js";
import "../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { I as ItemPage } from "../../../../chunks/ItemPage.js";
import { T as TrackList } from "../../../../chunks/Player.js";
import "uniqid";
import "devalue";
const css = {
  code: ".section.svelte-nc0tqw.svelte-nc0tqw{margin-bottom:40px}.section.svelte-nc0tqw .section-title.svelte-nc0tqw{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.section.svelte-nc0tqw .section-title h2.svelte-nc0tqw{font-size:1.625rem;font-weight:600}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { ItemPage, TrackList, Card, Button } from \'$components\';\\nexport let data;\\n$: color = data.color;\\n$: artist = data.artist;\\n$: topTracks = data.artistTopTracks;\\n$: albums = data.artistAlbums;\\n$: relatedArtists = data.artistRelatedArtists;\\n$: appearsOn = data.artistAppearsOn;\\nconst followersFormat = Intl.NumberFormat(\'en\', { notation: \'compact\' });\\n<\/script>\\n\\n<ItemPage\\n\\ttitle={artist.name}\\n\\timage={artist.images.length ? artist.images[0].url : undefined}\\n\\t{color}\\n\\ttype={artist.type}\\n>\\n\\t<p class=\\"meta\\" slot=\\"meta\\">\\n\\t\\t{followersFormat.format(artist.followers.total)} Followers\\n\\t</p>\\n\\n\\t<div class=\\"content\\">\\n\\t\\t{#if topTracks && topTracks.tracks.length > 0}\\n\\t\\t\\t<div class=\\"section\\">\\n\\t\\t\\t\\t<div class=\\"section-title\\">\\n\\t\\t\\t\\t\\t<h2>Top Tracks</h2>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<TrackList\\n\\t\\t\\t\\t\\ttracks={topTracks.tracks}\\n\\t\\t\\t\\t\\tuserPlaylists={data.userAllPlaylists?.filter((pl) => pl.owner.id === data.user?.id)}\\n\\t\\t\\t\\t\\ttotal={topTracks.tracks.length}\\n\\t\\t\\t\\t\\ttitle={artist.name}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\n\\t\\t{#if albums && albums.items.length > 0}\\n\\t\\t\\t<div class=\\"section\\">\\n\\t\\t\\t\\t<div class=\\"section-title\\">\\n\\t\\t\\t\\t\\t<h2>Albums</h2>\\n\\t\\t\\t\\t\\t<Button element=\\"a\\" href={`/artist/${artist.id}/albums`} variant=\\"outline\\"\\n\\t\\t\\t\\t\\t\\t>View All <span class=\\"visually-hidden\\">Albums</span></Button\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"grid-items\\">\\n\\t\\t\\t\\t\\t{#each albums.items as album}\\n\\t\\t\\t\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<Card item={album} />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\n\\t\\t{#if appearsOn && appearsOn.items.length > 0}\\n\\t\\t\\t<div class=\\"section\\">\\n\\t\\t\\t\\t<div class=\\"section-title\\">\\n\\t\\t\\t\\t\\t<h2>Appears On</h2>\\n\\t\\t\\t\\t\\t<Button element=\\"a\\" href={`/artist/${artist.id}/appears-on`} variant=\\"outline\\"\\n\\t\\t\\t\\t\\t\\t>View All <span class=\\"visually-hidden\\">artist appearances</span></Button\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"grid-items\\">\\n\\t\\t\\t\\t\\t{#each appearsOn.items as album}\\n\\t\\t\\t\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<Card item={album} />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\n\\t\\t{#if relatedArtists && relatedArtists.artists.length > 0}\\n\\t\\t\\t<div class=\\"section\\">\\n\\t\\t\\t\\t<div class=\\"section-title\\">\\n\\t\\t\\t\\t\\t<h2>Related Artists</h2>\\n\\t\\t\\t\\t\\t<Button element=\\"a\\" href={`/artist/${artist.id}/related-artists`} variant=\\"outline\\"\\n\\t\\t\\t\\t\\t\\t>View All <span class=\\"visually-hidden\\">Related Artists</span></Button\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"grid-items\\">\\n\\t\\t\\t\\t\\t{#each relatedArtists.artists.splice(0, 6) as artists}\\n\\t\\t\\t\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<Card item={artists} />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</ItemPage>\\n\\n<style lang=\\"scss\\">.section {\\n  margin-bottom: 40px;\\n}\\n.section .section-title {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  margin-bottom: 10px;\\n}\\n.section .section-title h2 {\\n  font-size: 1.625rem;\\n  font-weight: 600;\\n}</style>\\n"],"names":[],"mappings":"AA4FmB,oCAAS,CAC1B,aAAa,CAAE,IACjB,CACA,sBAAQ,CAAC,4BAAe,CACtB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,aAAa,CAAE,IACjB,CACA,sBAAQ,CAAC,cAAc,CAAC,gBAAG,CACzB,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,GACf"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let color;
  let artist;
  let topTracks;
  let albums;
  let relatedArtists;
  let appearsOn;
  let { data } = $$props;
  const followersFormat = Intl.NumberFormat("en", { notation: "compact" });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  color = data.color;
  artist = data.artist;
  topTracks = data.artistTopTracks;
  albums = data.artistAlbums;
  relatedArtists = data.artistRelatedArtists;
  appearsOn = data.artistAppearsOn;
  return `${validate_component(ItemPage, "ItemPage").$$render(
    $$result,
    {
      title: artist.name,
      image: artist.images.length ? artist.images[0].url : void 0,
      color,
      type: artist.type
    },
    {},
    {
      meta: () => {
        return `<p class="meta" slot="meta">${escape(followersFormat.format(artist.followers.total))} Followers</p>`;
      },
      default: () => {
        return `<div class="content">${topTracks && topTracks.tracks.length > 0 ? `<div class="section svelte-nc0tqw"><div class="section-title svelte-nc0tqw" data-svelte-h="svelte-19wna68"><h2 class="svelte-nc0tqw">Top Tracks</h2></div> ${validate_component(TrackList, "TrackList").$$render(
          $$result,
          {
            tracks: topTracks.tracks,
            userPlaylists: data.userAllPlaylists?.filter((pl) => pl.owner.id === data.user?.id),
            total: topTracks.tracks.length,
            title: artist.name
          },
          {},
          {}
        )}</div>` : ``} ${albums && albums.items.length > 0 ? `<div class="section svelte-nc0tqw"><div class="section-title svelte-nc0tqw"><h2 class="svelte-nc0tqw" data-svelte-h="svelte-1dr22m6">Albums</h2> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            element: "a",
            href: `/artist/${artist.id}/albums`,
            variant: "outline"
          },
          {},
          {
            default: () => {
              return `View All <span class="visually-hidden" data-svelte-h="svelte-fslqcb">Albums</span>`;
            }
          }
        )}</div> <div class="grid-items">${each(albums.items, (album) => {
          return `<div class="grid-item">${validate_component(Card, "Card").$$render($$result, { item: album }, {}, {})} </div>`;
        })}</div></div>` : ``} ${appearsOn && appearsOn.items.length > 0 ? `<div class="section svelte-nc0tqw"><div class="section-title svelte-nc0tqw"><h2 class="svelte-nc0tqw" data-svelte-h="svelte-1dncat9">Appears On</h2> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            element: "a",
            href: `/artist/${artist.id}/appears-on`,
            variant: "outline"
          },
          {},
          {
            default: () => {
              return `View All <span class="visually-hidden" data-svelte-h="svelte-10baj1j">artist appearances</span>`;
            }
          }
        )}</div> <div class="grid-items">${each(appearsOn.items, (album) => {
          return `<div class="grid-item">${validate_component(Card, "Card").$$render($$result, { item: album }, {}, {})} </div>`;
        })}</div></div>` : ``} ${relatedArtists && relatedArtists.artists.length > 0 ? `<div class="section svelte-nc0tqw"><div class="section-title svelte-nc0tqw"><h2 class="svelte-nc0tqw" data-svelte-h="svelte-md9xlr">Related Artists</h2> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            element: "a",
            href: `/artist/${artist.id}/related-artists`,
            variant: "outline"
          },
          {},
          {
            default: () => {
              return `View All <span class="visually-hidden" data-svelte-h="svelte-e5awqa">Related Artists</span>`;
            }
          }
        )}</div> <div class="grid-items">${each(relatedArtists.artists.splice(0, 6), (artists) => {
          return `<div class="grid-item">${validate_component(Card, "Card").$$render($$result, { item: artists }, {}, {})} </div>`;
        })}</div></div>` : ``}</div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
