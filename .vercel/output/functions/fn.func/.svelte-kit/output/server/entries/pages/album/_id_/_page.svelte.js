import { c as create_ssr_component, v as validate_component, f as escape, e as each } from "../../../../chunks/ssr.js";
import "../../../../chunks/index.js";
import "../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { I as ItemPage } from "../../../../chunks/ItemPage.js";
import { T as TrackList } from "../../../../chunks/Player.js";
import "uniqid";
import "devalue";
function getCopyrightSymbol(type) {
  switch (type) {
    case "R":
      return "®";
    case "P":
      return "℗";
    case "C":
      return "©";
    default:
      return type;
  }
}
const css = {
  code: ".meta.svelte-gpt37x.svelte-gpt37x{font-size:0.8125rem;font-weight:600}.meta.svelte-gpt37x span.svelte-gpt37x{margin-right:5px}.meta.svelte-gpt37x span.tracks-count.svelte-gpt37x{font-weight:400;margin:0 0 0 5px;color:var(--light-gray)}.credits.svelte-gpt37x.svelte-gpt37x{margin-top:40px}.credits.svelte-gpt37x p.svelte-gpt37x{color:var(--light-gray);margin:0;font-size:0.6875rem}.credits.svelte-gpt37x p.date.svelte-gpt37x{font-size:0.8125rem}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { getCopyrightSymbol } from '$helpers';\\nimport { ItemPage, TrackList } from '$components';\\nexport let data;\\n$: album = data.album;\\n$: color = data.color;\\n<\/script>\\n\\n<ItemPage\\n\\ttitle={album.name}\\n\\ttype={album.album_type}\\n\\t{color}\\n\\timage={album.images.length > 0 ? album.images[0].url : undefined}\\n>\\n\\t<p class=\\"meta\\" slot=\\"meta\\">\\n\\t\\t<span class=\\"artists\\">\\n\\t\\t\\t{album.artists.map((artist) => artist.name).join(', ')}\\n\\t\\t</span>\\n\\t\\t<span class=\\"date\\">{new Date(album.release_date).getFullYear()}</span>\\n\\t\\t<span class=\\"tracks-count\\"\\n\\t\\t\\t>{\`\${album.total_tracks} Track\${album.total_tracks > 1 ? 's' : ''}\`}</span\\n\\t\\t>\\n\\t</p>\\n\\n\\t<TrackList\\n\\t\\ttracks={album.tracks.items}\\n\\t\\tuserPlaylists={data.userAllPlaylists?.filter((pl) => pl.owner.id === data.user?.id)}\\n\\t\\ttotal={album.tracks.total}\\n\\t\\ttitle={album.name}\\n\\t/>\\n\\n\\t<div class=\\"credits\\">\\n\\t\\t<p class=\\"date\\">\\n\\t\\t\\t{new Date(album.release_date).toLocaleDateString('en', {\\n\\t\\t\\t\\tdateStyle: 'medium'\\n\\t\\t\\t})}\\n\\t\\t</p>\\n\\t\\t{#each album.copyrights as copyright}\\n\\t\\t\\t<p class=\\"copyright\\">\\n\\t\\t\\t\\t{getCopyrightSymbol(copyright.type)}\\n\\t\\t\\t\\t{copyright.text}\\n\\t\\t\\t</p>\\n\\t\\t{/each}\\n\\t</div>\\n</ItemPage>\\n\\n<style lang=\\"scss\\">.meta {\\n  font-size: 0.8125rem;\\n  font-weight: 600;\\n}\\n.meta span {\\n  margin-right: 5px;\\n}\\n.meta span.tracks-count {\\n  font-weight: 400;\\n  margin: 0 0 0 5px;\\n  color: var(--light-gray);\\n}\\n\\n.credits {\\n  margin-top: 40px;\\n}\\n.credits p {\\n  color: var(--light-gray);\\n  margin: 0;\\n  font-size: 0.6875rem;\\n}\\n.credits p.date {\\n  font-size: 0.8125rem;\\n}</style>\\n"],"names":[],"mappings":"AA6CmB,iCAAM,CACvB,SAAS,CAAE,SAAS,CACpB,WAAW,CAAE,GACf,CACA,mBAAK,CAAC,kBAAK,CACT,YAAY,CAAE,GAChB,CACA,mBAAK,CAAC,IAAI,2BAAc,CACtB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACjB,KAAK,CAAE,IAAI,YAAY,CACzB,CAEA,oCAAS,CACP,UAAU,CAAE,IACd,CACA,sBAAQ,CAAC,eAAE,CACT,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,SACb,CACA,sBAAQ,CAAC,CAAC,mBAAM,CACd,SAAS,CAAE,SACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let album;
  let color;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  album = data.album;
  color = data.color;
  return `${validate_component(ItemPage, "ItemPage").$$render(
    $$result,
    {
      title: album.name,
      type: album.album_type,
      color,
      image: album.images.length > 0 ? album.images[0].url : void 0
    },
    {},
    {
      meta: () => {
        return `<p class="meta svelte-gpt37x" slot="meta"><span class="artists svelte-gpt37x">${escape(album.artists.map((artist) => artist.name).join(", "))}</span> <span class="date svelte-gpt37x">${escape(new Date(album.release_date).getFullYear())}</span> <span class="tracks-count svelte-gpt37x">${escape(`${album.total_tracks} Track${album.total_tracks > 1 ? "s" : ""}`)}</span></p>`;
      },
      default: () => {
        return `${validate_component(TrackList, "TrackList").$$render(
          $$result,
          {
            tracks: album.tracks.items,
            userPlaylists: data.userAllPlaylists?.filter((pl) => pl.owner.id === data.user?.id),
            total: album.tracks.total,
            title: album.name
          },
          {},
          {}
        )} <div class="credits svelte-gpt37x"><p class="date svelte-gpt37x">${escape(new Date(album.release_date).toLocaleDateString("en", { dateStyle: "medium" }))}</p> ${each(album.copyrights, (copyright) => {
          return `<p class="copyright svelte-gpt37x">${escape(getCopyrightSymbol(copyright.type))} ${escape(copyright.text)} </p>`;
        })}</div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
