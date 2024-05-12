import { f as ensure_array_like, l as escape_html, m as bind_props, b as pop, p as push } from "../../../chunks/index3.js";
import "../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import { I as ItemPage } from "../../../chunks/ItemPage.js";
import "../../../chunks/index.js";
import "devalue";
import "uniqid";
function _page($$payload, $$props) {
  push();
  let user, color, following;
  let data = $$props["data"];
  let isRetrying = false;
  const followersFormat = Intl.NumberFormat("en", { notation: "compact" });
  user = data.user;
  color = data.color;
  following = data.following;
  $$payload.out += `<div id="profile-page" class="svelte-1qd7pe4"><!--[-->`;
  ItemPage($$payload, {
    color,
    title: user?.display_name || "",
    image: user?.images && user?.images?.length > 0 ? user.images[0].url : void 0,
    type: user?.type,
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      if (following === void 0) {
        $$payload2.out += `<div class="fail svelte-1qd7pe4"><p>Failed to load data.</p> <!--[-->`;
        Button($$payload2, {
          disabled: isRetrying,
          element: "button",
          children: ($$payload3, $$slotProps2) => {
            $$payload3.out += `Retry`;
          }
        });
        $$payload2.out += `<!--]--></div>`;
        $$payload2.out += "<!--]-->";
      } else {
        $$payload2.out += "<!--]!-->";
      }
      $$payload2.out += ` <!--[-->`;
      if (following && following.artists.items.length > 0) {
        const each_array = ensure_array_like(following.artists.items);
        $$payload2.out += `<div class="following svelte-1qd7pe4"><h2 class="svelte-1qd7pe4">Following</h2> <div class="grid-items"><!--[-->`;
        for (let $$index = 0; $$index < each_array.length; $$index++) {
          const artist = each_array[$$index];
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<div class="grid-item"><!--[-->`;
          Card($$payload2, { item: artist });
          $$payload2.out += `<!--]--></div>`;
          $$payload2.out += "<!--]-->";
        }
        $$payload2.out += "<!--]-->";
        $$payload2.out += `</div> <div class="view-all-button svelte-1qd7pe4"><!--[-->`;
        Button($$payload2, {
          element: "a",
          variant: "outline",
          href: "/profile/following",
          children: ($$payload3, $$slotProps2) => {
            $$payload3.out += `View All <span class="visually-hidden">artists that you are following</span>`;
          }
        });
        $$payload2.out += `<!--]--></div></div>`;
        $$payload2.out += "<!--]-->";
      } else {
        $$payload2.out += "<!--]!-->";
      }
    },
    $$slots: {
      "meta": ($$payload2, $$slotProps) => {
        $$payload2.out += `<span slot="meta" class="following-count svelte-1qd7pe4">${escape_html(followersFormat.format(user?.followers?.total || 0))} Followers</span>`;
      }
    }
  });
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
