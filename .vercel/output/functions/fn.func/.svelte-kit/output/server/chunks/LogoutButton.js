import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import "./HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "./Button.js";
import "./index.js";
import "devalue";
import "uniqid";
const LogoutButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<form method="POST" action="/api/auth/logout">${validate_component(Button, "Button").$$render($$result, { element: "button", type: "submit" }, {}, {
    default: () => {
      return `Logout`;
    }
  })}</form>`;
});
export {
  LogoutButton as L
};
