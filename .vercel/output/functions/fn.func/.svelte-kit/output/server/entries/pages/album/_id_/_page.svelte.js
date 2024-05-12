import { f as ensure_array_like, l as escape_html, m as bind_props, b as pop, p as push } from "../../../../chunks/index3.js";
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
function _page($$payload, $$props) {
  push();
  let album, color;
  let data = $$props["data"];
  album = data.album;
  color = data.color;
  $$payload.out += `<!--[-->`;
  ItemPage($$payload, {
    title: album.name,
    type: album.album_type,
    color,
    image: album.images.length > 0 ? album.images[0].url : void 0,
    children: ($$payload2, $$slotProps) => {
      const each_array = ensure_array_like(album.copyrights);
      $$payload2.out += `<!--[-->`;
      TrackList($$payload2, {
        tracks: album.tracks.items,
        userPlaylists: data.userAllPlaylists?.filter((pl) => pl.owner.id === data.user?.id),
        total: album.tracks.total,
        title: album.name
      });
      $$payload2.out += `<!--]--> <div class="credits svelte-gpt37x"><p class="date svelte-gpt37x">${escape_html(new Date(album.release_date).toLocaleDateString("en", { dateStyle: "medium" }))}</p> <!--[-->`;
      for (let $$index = 0; $$index < each_array.length; $$index++) {
        const copyright = each_array[$$index];
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<p class="copyright svelte-gpt37x">${escape_html(getCopyrightSymbol(copyright.type))}
				${escape_html(copyright.text)}</p>`;
        $$payload2.out += "<!--]-->";
      }
      $$payload2.out += "<!--]-->";
      $$payload2.out += `</div>`;
    },
    $$slots: {
      "meta": ($$payload2, $$slotProps) => {
        $$payload2.out += `<p class="meta svelte-gpt37x" slot="meta"><span class="artists svelte-gpt37x">${escape_html(album.artists.map((artist) => artist.name).join(", "))}</span> <span class="date svelte-gpt37x">${escape_html(new Date(album.release_date).getFullYear())}</span> <span class="tracks-count svelte-gpt37x">${escape_html(`${album.total_tracks} Track${album.total_tracks > 1 ? "s" : ""}`)}</span></p>`;
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
