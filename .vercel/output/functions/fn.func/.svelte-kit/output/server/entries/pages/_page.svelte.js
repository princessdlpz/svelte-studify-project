import { c as create_ssr_component, e as each, f as escape, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../chunks/Button.js";
import { C as Card } from "../../chunks/Card.js";
import "../../chunks/index.js";
import "devalue";
import "uniqid";
const css = {
  code: '.content-row.svelte-1f8lnf6.svelte-1f8lnf6{margin-bottom:40px;background-image:url("/src/assets/mesh-25.png");background-repeat:no-repeat;background-size:cover}.content-row.svelte-1f8lnf6 .content-row-header.svelte-1f8lnf6{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.content-row.svelte-1f8lnf6 .content-row-header .section-title.svelte-1f8lnf6{font-size:1.375rem;font-weight:600;margin:0}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Button, Card } from '$components';\\nexport let data;\\nlet sections = [];\\n$: {\\n    if (data.newReleases) {\\n        sections.push({\\n            title: 'New Releases',\\n            path: '/section/new-releases',\\n            items: data.newReleases.albums.items\\n        });\\n    }\\n    if (data.featuredPlaylists) {\\n        sections.push({\\n            title: 'Featured Playlists',\\n            path: '/section/featured-playlists',\\n            items: data.featuredPlaylists.playlists.items\\n        });\\n    }\\n    data.homeCategories.forEach((category, index) => {\\n        const categoryPlaylist = data.categoriesPlaylists[index];\\n        if (categoryPlaylist) {\\n            sections.push({\\n                title: category.name,\\n                path: \`/category/\${category.id}\`,\\n                items: categoryPlaylist.playlists.items\\n            });\\n        }\\n    });\\n    if (data.userPlaylists) {\\n        sections.push({\\n            title: 'Your Playlists',\\n            path: '/playlists',\\n            items: data.userPlaylists.items\\n        });\\n    }\\n}\\n<\/script>\\n\\n{#each sections as section}\\n\\t<section class=\\"content-row\\">\\n\\t\\t<div class=\\"content-row-header\\">\\n\\t\\t\\t<div class=\\"right\\">\\n\\t\\t\\t\\t<h2 class=\\"section-title\\">{section.title}</h2>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"left\\">\\n\\t\\t\\t\\t<Button element=\\"a\\" href={section.path} variant=\\"outline\\"\\n\\t\\t\\t\\t\\t>See All <span class=\\"visually-hidden\\">{section.title}</span></Button\\n\\t\\t\\t\\t>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"grid-items\\">\\n\\t\\t\\t{#each section.items as item}\\n\\t\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\t\\t<Card {item} />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</section>\\n{/each}\\n\\n<style lang=\\"scss\\">.content-row {\\n  margin-bottom: 40px;\\n  background-image: url(\\"/src/assets/mesh-25.png\\");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n.content-row .content-row-header {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  margin-bottom: 20px;\\n}\\n.content-row .content-row-header .section-title {\\n  font-size: 1.375rem;\\n  font-weight: 600;\\n  margin: 0;\\n}</style>"],"names":[],"mappings":"AA4DmB,0CAAa,CAC9B,aAAa,CAAE,IAAI,CACnB,gBAAgB,CAAE,8BAA8B,CAChD,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KACnB,CACA,2BAAY,CAAC,kCAAoB,CAC/B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,aAAa,CAAE,IACjB,CACA,2BAAY,CAAC,mBAAmB,CAAC,6BAAe,CAC9C,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CACV"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let sections = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
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
  }
  return `${each(sections, (section) => {
    return `<section class="content-row svelte-1f8lnf6"><div class="content-row-header svelte-1f8lnf6"><div class="right"><h2 class="section-title svelte-1f8lnf6">${escape(section.title)}</h2></div> <div class="left">${validate_component(Button, "Button").$$render(
      $$result,
      {
        element: "a",
        href: section.path,
        variant: "outline"
      },
      {},
      {
        default: () => {
          return `See All <span class="visually-hidden">${escape(section.title)}</span>`;
        }
      }
    )} </div></div> <div class="grid-items">${each(section.items, (item) => {
      return `<div class="grid-item">${validate_component(Card, "Card").$$render($$result, { item }, {}, {})} </div>`;
    })}</div> </section>`;
  })}`;
});
export {
  Page as default
};
