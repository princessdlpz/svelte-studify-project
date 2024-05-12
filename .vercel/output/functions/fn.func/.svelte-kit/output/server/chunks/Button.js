import { c as create_ssr_component, g as compute_rest_props, h as spread, f as escape, i as escape_object, d as add_attribute } from "./ssr.js";
import { i as is_void } from "./HeaderNav.svelte_svelte_type_style_lang.js";
const css = {
  code: ".button.svelte-dxbav4{display:inline-block;border:none;font-weight:600;font-size:0.875rem;border-radius:20px;cursor:pointer;padding:7px 15px;text-decoration:none}.button.button-solid.svelte-dxbav4{background-color:var(--accent-color);color:#000;border:2px solid var(--accent-color)}.button.button-outline.svelte-dxbav4{background:none;color:var(--text-color);border:2px solid}.button.button-danger.svelte-dxbav4{background-color:var(--error);color:#fff;border:2px solid var(--error)}.button.svelte-dxbav4:disabled{opacity:0.8;cursor:not-allowed}.button:hover.button-solid.svelte-dxbav4,.button:hover.button-danger.svelte-dxbav4{background-image:linear-gradient(rgba(0, 0, 0, 0.1) 0 0)}.button:hover.button-outline.svelte-dxbav4{background-image:linear-gradient(rgba(255, 255, 255, 0.1) 0 0)}.button:active.button-solid.svelte-dxbav4,.button:active.button-danger.svelte-dxbav4{background-image:linear-gradient(rgba(255, 255, 255, 0.1) 0 0)}.button:active.button-outline.svelte-dxbav4{background-image:linear-gradient(rgba(255, 255, 255, 0.2) 0 0)}",
  map: `{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let element;\\nexport let variant = 'solid';\\nexport let className = '';\\nlet node;\\nexport function focus() {\\n    node.focus();\\n}\\n<\/script>\\n\\n<svelte:element\\n\\tthis={element}\\n\\tbind:this={node}\\n\\tclass=\\"button button-{variant} {className}\\"\\n\\ton:click\\n\\t{...$$restProps}\\n>\\n\\t<slot />\\n</svelte:element>\\n\\n<style lang=\\"scss\\">.button {\\n  display: inline-block;\\n  border: none;\\n  font-weight: 600;\\n  font-size: 0.875rem;\\n  border-radius: 20px;\\n  cursor: pointer;\\n  padding: 7px 15px;\\n  text-decoration: none;\\n}\\n.button.button-solid {\\n  background-color: var(--accent-color);\\n  color: #000;\\n  border: 2px solid var(--accent-color);\\n}\\n.button.button-outline {\\n  background: none;\\n  color: var(--text-color);\\n  border: 2px solid;\\n}\\n.button.button-danger {\\n  background-color: var(--error);\\n  color: #fff;\\n  border: 2px solid var(--error);\\n}\\n.button:disabled {\\n  opacity: 0.8;\\n  cursor: not-allowed;\\n}\\n.button:hover.button-solid, .button:hover.button-danger {\\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\\n}\\n.button:hover.button-outline {\\n  background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);\\n}\\n.button:active.button-solid, .button:active.button-danger {\\n  background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);\\n}\\n.button:active.button-outline {\\n  background-image: linear-gradient(rgba(255, 255, 255, 0.2) 0 0);\\n}</style>\\n"],"names":[],"mappings":"AAmBmB,qBAAQ,CACzB,OAAO,CAAE,YAAY,CACrB,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,QAAQ,CACnB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,eAAe,CAAE,IACnB,CACA,OAAO,2BAAc,CACnB,gBAAgB,CAAE,IAAI,cAAc,CAAC,CACrC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,cAAc,CACtC,CACA,OAAO,6BAAgB,CACrB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,MAAM,CAAE,GAAG,CAAC,KACd,CACA,OAAO,4BAAe,CACpB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,OAAO,CAC/B,CACA,qBAAO,SAAU,CACf,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,WACV,CACA,OAAO,MAAM,2BAAa,CAAE,OAAO,MAAM,4BAAe,CACtD,gBAAgB,CAAE,gBAAgB,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAC1D,CACA,OAAO,MAAM,6BAAgB,CAC3B,gBAAgB,CAAE,gBAAgB,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAChE,CACA,OAAO,OAAO,2BAAa,CAAE,OAAO,OAAO,4BAAe,CACxD,gBAAgB,CAAE,gBAAgB,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAChE,CACA,OAAO,OAAO,6BAAgB,CAC5B,gBAAgB,CAAE,gBAAgB,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAChE"}`
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["element", "variant", "className", "focus"]);
  let { element } = $$props;
  let { variant = "solid" } = $$props;
  let { className = "" } = $$props;
  let node;
  function focus() {
    node.focus();
  }
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  $$result.css.add(css);
  return `${((tag) => {
    return tag ? `<${element}${spread(
      [
        {
          class: "button button-" + escape(variant, true) + " " + escape(className, true)
        },
        escape_object($$restProps)
      ],
      { classes: "svelte-dxbav4" }
    )}${add_attribute("this", node, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``} `}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(element)}`;
});
export {
  Button as B
};
