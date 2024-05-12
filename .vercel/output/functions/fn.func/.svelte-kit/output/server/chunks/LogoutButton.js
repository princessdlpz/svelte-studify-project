import { b as pop, p as push } from "./index3.js";
import "./HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "./Button.js";
import "./index.js";
import "devalue";
import "uniqid";
function LogoutButton($$payload, $$props) {
  push();
  $$payload.out += `<form method="POST" action="/api/auth/logout"><!--[-->`;
  Button($$payload, {
    element: "button",
    type: "submit",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `Logout`;
    }
  });
  $$payload.out += `<!--]--></form>`;
  pop();
}
export {
  LogoutButton as L
};
