import { f as ensure_array_like, l as escape_html, m as bind_props, b as pop, p as push } from "../../../chunks/index3.js";
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
function _page($$payload, $$props) {
  push();
  let playlists;
  let data = $$props["data"];
  let form = $$props["form"];
  let isLoading = false;
  playlists = data.userPlaylists;
  $$payload.out += `<div class="content svelte-ap3in5"><!--[-->`;
  if (playlists.items.length > 0) {
    const each_array = ensure_array_like(playlists.items);
    $$payload.out += `<div class="title svelte-ap3in5"><h1>${escape_html(data.title)}</h1> <!--[-->`;
    Button($$payload, {
      element: "a",
      href: "/playlists/new",
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `+ Add New`;
      }
    });
    $$payload.out += `<!--]--></div> <div class="grid-items svelte-ap3in5"><!--[-->`;
    for (let $$index = 0; $$index < each_array.length; $$index++) {
      const item = each_array[$$index];
      $$payload.out += "<!--[-->";
      $$payload.out += `<!--[-->`;
      Card($$payload, { item });
      $$payload.out += `<!--]-->`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</div> <!--[-->`;
    Pagination($$payload, { paginatedList: playlists, isLoading });
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<div class="empty svelte-ap3in5"><p class="svelte-ap3in5">No Playlists Yet!</p> <!--[-->`;
    Button($$payload, {
      element: "a",
      href: "/playlists/new",
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `+ Add New`;
      }
    });
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</div> <!--[-->`;
  Modal($$payload, {
    id: "add-playlist-modal",
    title: "Add a New Playlist",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      PlaylistForm($$payload2, {
        form,
        userID: data.user?.id,
        action: "/playlists/new"
      });
      $$payload2.out += `<!--]-->`;
    }
  });
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data, form });
  pop();
}
export {
  _page as default
};
