import { f as ensure_array_like, l as escape_html, m as bind_props, b as pop, p as push } from "../../chunks/index3.js";
import "../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../chunks/Button.js";
import { C as Card } from "../../chunks/Card.js";
import "../../chunks/index.js";
import "devalue";
import "uniqid";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let sections = [];
  {
    if (data.newReleases) {
      sections.push({
        title: "New Releases",
        path: "/section/new-releases",
        items: data.newReleases.albums.items
      });
    }
    if (data.featuredPlaylists) {
      sections.push({
        title: "Featured Playlists",
        path: "/section/featured-playlists",
        items: data.featuredPlaylists.playlists.items
      });
    }
    data.homeCategories.forEach((category, index) => {
      const categoryPlaylist = data.categoriesPlaylists[index];
      if (categoryPlaylist) {
        sections.push({
          title: category.name,
          path: `/category/${category.id}`,
          items: categoryPlaylist.playlists.items
        });
      }
    });
    if (data.userPlaylists) {
      sections.push({
        title: "Your Playlists",
        path: "/playlists",
        items: data.userPlaylists.items
      });
    }
  }
  const each_array = ensure_array_like(sections);
  $$payload.out += `<!--[-->`;
  for (let $$index_1 = 0; $$index_1 < each_array.length; $$index_1++) {
    const section = each_array[$$index_1];
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(section.items);
    $$payload.out += `<section class="content-row svelte-1f8lnf6"><div class="content-row-header svelte-1f8lnf6"><div class="right"><h2 class="section-title svelte-1f8lnf6">${escape_html(section.title)}</h2></div> <div class="left"><!--[-->`;
    Button($$payload, {
      element: "a",
      href: section.path,
      variant: "outline",
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `See All <span class="visually-hidden">${escape_html(section.title)}</span>`;
      }
    });
    $$payload.out += `<!--]--></div></div> <div class="grid-items"><!--[-->`;
    for (let $$index = 0; $$index < each_array_1.length; $$index++) {
      const item = each_array_1[$$index];
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="grid-item"><!--[-->`;
      Card($$payload, { item });
      $$payload.out += `<!--]--></div>`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</div></section>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
