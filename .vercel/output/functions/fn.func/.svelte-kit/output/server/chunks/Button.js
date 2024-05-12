import { n as rest_props, v as value_or_fallback, w as element, m as bind_props, b as pop, d as slot, o as spread_attributes, j as stringify, e as sanitize_props, p as push } from "./index3.js";
import "./HeaderNav.svelte_svelte_type_style_lang.js";
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["focus", "element", "variant", "className"]);
  push();
  let element$1 = $$props["element"];
  let variant = value_or_fallback($$props["variant"], () => "solid");
  let className = value_or_fallback($$props["className"], () => "");
  let node;
  function focus() {
    node.focus();
  }
  $$payload.out += `<!--[-->`;
  if (element$1)
    element(
      $$payload,
      element$1,
      () => {
        $$payload.out += `${spread_attributes(
          [
            {
              "class": `button button-${stringify(variant)} ${stringify(className)}`
            },
            $$restProps
          ],
          true,
          true,
          "svelte-dxbav4"
        )}`;
      },
      () => {
        $$payload.out += `<!--[-->`;
        slot($$payload, $$props.children, {});
        $$payload.out += `<!--]-->`;
      }
    );
  $$payload.out += `<!--]-->`;
  bind_props($$props, { element: element$1, variant, className, focus });
  pop();
}
export {
  Button as B
};
