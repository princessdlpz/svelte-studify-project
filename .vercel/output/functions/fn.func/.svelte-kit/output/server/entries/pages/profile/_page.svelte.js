import { c as create_ssr_component, v as validate_component, f as escape, e as each } from "../../../chunks/ssr.js";
import "../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import { I as ItemPage } from "../../../chunks/ItemPage.js";
import "../../../chunks/index.js";
import "devalue";
import "uniqid";
const css = {
  code: "#profile-page.svelte-1qd7pe4 .banner{align-items:center;text-align:center}@media(min-width: 480px){#profile-page.svelte-1qd7pe4 .banner{text-align:left}}#profile-page.svelte-1qd7pe4 .cover-img{border-radius:100%}#profile-page.svelte-1qd7pe4 .following-count.svelte-1qd7pe4{font-size:0.875rem;color:var(--light-gray)}#profile-page.svelte-1qd7pe4 .fail.svelte-1qd7pe4{text-align:center;margin-top:40px}#profile-page.svelte-1qd7pe4 .following.svelte-1qd7pe4{margin-top:30px}#profile-page.svelte-1qd7pe4 .following h2.svelte-1qd7pe4{font-size:1.5rem;margin-bottom:0.7em}#profile-page.svelte-1qd7pe4 .following .view-all-button.svelte-1qd7pe4{margin-top:30px;text-align:right}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { invalidate } from '$app/navigation';\\nimport { Button } from '$components';\\nimport Card from '$components/Card.svelte';\\nimport ItemPage from '$components/ItemPage.svelte';\\nexport let data;\\n$: user = data.user;\\n$: color = data.color;\\n$: following = data.following;\\nlet isRetrying = false;\\nconst followersFormat = Intl.NumberFormat('en', { notation: 'compact' });\\n<\/script>\\n\\n<div id=\\"profile-page\\">\\n\\t<ItemPage\\n\\t\\t{color}\\n\\t\\ttitle={user?.display_name || ''}\\n\\t\\timage={user?.images && user?.images?.length > 0 ? user.images[0].url : undefined}\\n\\t\\ttype={user?.type}\\n\\t>\\n\\t\\t<span slot=\\"meta\\" class=\\"following-count\\"\\n\\t\\t\\t>{followersFormat.format(user?.followers?.total || 0)} Followers</span\\n\\t\\t>\\n\\n\\t\\t{#if following === undefined}\\n\\t\\t\\t<div class=\\"fail\\">\\n\\t\\t\\t\\t<p>Failed to load data.</p>\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tdisabled={isRetrying}\\n\\t\\t\\t\\t\\telement=\\"button\\"\\n\\t\\t\\t\\t\\ton:click={async () => {\\n\\t\\t\\t\\t\\t\\tisRetrying = true;\\n\\t\\t\\t\\t\\t\\tawait invalidate((url) => url.pathname === '/api/spotify/me/following');\\n\\t\\t\\t\\t\\t\\tisRetrying = false;\\n\\t\\t\\t\\t\\t}}>Retry</Button\\n\\t\\t\\t\\t>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\n\\t\\t{#if following && following.artists.items.length > 0}\\n\\t\\t\\t<div class=\\"following\\">\\n\\t\\t\\t\\t<h2>Following</h2>\\n\\t\\t\\t\\t<div class=\\"grid-items\\">\\n\\t\\t\\t\\t\\t{#each following.artists.items as artist}\\n\\t\\t\\t\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<Card item={artist} />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"view-all-button\\">\\n\\t\\t\\t\\t\\t<Button element=\\"a\\" variant=\\"outline\\" href=\\"/profile/following\\"\\n\\t\\t\\t\\t\\t\\t>View All <span class=\\"visually-hidden\\">artists that you are following</span></Button\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</ItemPage>\\n</div>\\n\\n<style lang=\\"scss\\">#profile-page :global(.banner) {\\n  align-items: center;\\n  text-align: center;\\n}\\n@media (min-width: 480px) {\\n  #profile-page :global(.banner) {\\n    text-align: left;\\n  }\\n}\\n#profile-page :global(.cover-img) {\\n  border-radius: 100%;\\n}\\n#profile-page .following-count {\\n  font-size: 0.875rem;\\n  color: var(--light-gray);\\n}\\n#profile-page .fail {\\n  text-align: center;\\n  margin-top: 40px;\\n}\\n#profile-page .following {\\n  margin-top: 30px;\\n}\\n#profile-page .following h2 {\\n  font-size: 1.5rem;\\n  margin-bottom: 0.7em;\\n}\\n#profile-page .following .view-all-button {\\n  margin-top: 30px;\\n  text-align: right;\\n}</style>\\n"],"names":[],"mappings":"AA0DmB,4BAAa,CAAS,OAAS,CAChD,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MACd,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,4BAAa,CAAS,OAAS,CAC7B,UAAU,CAAE,IACd,CACF,CACA,4BAAa,CAAS,UAAY,CAChC,aAAa,CAAE,IACjB,CACA,4BAAa,CAAC,+BAAiB,CAC7B,SAAS,CAAE,QAAQ,CACnB,KAAK,CAAE,IAAI,YAAY,CACzB,CACA,4BAAa,CAAC,oBAAM,CAClB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IACd,CACA,4BAAa,CAAC,yBAAW,CACvB,UAAU,CAAE,IACd,CACA,4BAAa,CAAC,UAAU,CAAC,iBAAG,CAC1B,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,KACjB,CACA,4BAAa,CAAC,UAAU,CAAC,+BAAiB,CACxC,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,KACd"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  let color;
  let following;
  let { data } = $$props;
  let isRetrying = false;
  const followersFormat = Intl.NumberFormat("en", { notation: "compact" });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  user = data.user;
  color = data.color;
  following = data.following;
  return `<div id="profile-page" class="svelte-1qd7pe4">${validate_component(ItemPage, "ItemPage").$$render(
    $$result,
    {
      color,
      title: user?.display_name || "",
      image: user?.images && user?.images?.length > 0 ? user.images[0].url : void 0,
      type: user?.type
    },
    {},
    {
      meta: () => {
        return `<span slot="meta" class="following-count svelte-1qd7pe4">${escape(followersFormat.format(user?.followers?.total || 0))} Followers</span>`;
      },
      default: () => {
        return `${following === void 0 ? `<div class="fail svelte-1qd7pe4"><p data-svelte-h="svelte-ea2rww">Failed to load data.</p> ${validate_component(Button, "Button").$$render($$result, { disabled: isRetrying, element: "button" }, {}, {
          default: () => {
            return `Retry`;
          }
        })}</div>` : ``} ${following && following.artists.items.length > 0 ? `<div class="following svelte-1qd7pe4"><h2 class="svelte-1qd7pe4" data-svelte-h="svelte-13xsob3">Following</h2> <div class="grid-items">${each(following.artists.items, (artist) => {
          return `<div class="grid-item">${validate_component(Card, "Card").$$render($$result, { item: artist }, {}, {})} </div>`;
        })}</div> <div class="view-all-button svelte-1qd7pe4">${validate_component(Button, "Button").$$render(
          $$result,
          {
            element: "a",
            variant: "outline",
            href: "/profile/following"
          },
          {},
          {
            default: () => {
              return `View All <span class="visually-hidden" data-svelte-h="svelte-tu99lg">artists that you are following</span>`;
            }
          }
        )}</div></div>` : ``}`;
      }
    }
  )} </div>`;
});
export {
  Page as default
};
