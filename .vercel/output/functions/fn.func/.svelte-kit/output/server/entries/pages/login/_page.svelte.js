import { g as attr, b as pop, p as push } from "../../../chunks/index3.js";
import "../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../chunks/Button.js";
import "../../../chunks/index.js";
import "devalue";
import "uniqid";
const cover = "/_app/immutable/assets/concept.C-QjIcWH.png";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="wrapper svelte-14rqhtb"><div class="content svelte-14rqhtb"><title>STUDIFY</title> <h1 class="svelte-14rqhtb">Studify</h1> <p class="svelte-14rqhtb">Master the art of concentration with the perfect study soundtrack. Tune into success with Studify</p> <div class="buttons svelte-14rqhtb"><!--[-->`;
  Button($$payload, {
    element: "a",
    variant: "outline",
    href: "https://www.spotify.com/us/signup",
    target: "_blank",
    rel: "noopener noreferrer",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `Sign Up`;
    }
  });
  $$payload.out += `<!--]--> <!--[-->`;
  Button($$payload, {
    element: "a",
    href: "/api/auth/login",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `Login`;
    }
  });
  $$payload.out += `<!--]--></div></div> <div class="cover svelte-14rqhtb"><img${attr("src", cover, false)} alt="Svelte album cover" class="svelte-14rqhtb"></div></div>`;
  pop();
}
export {
  _page as default
};
