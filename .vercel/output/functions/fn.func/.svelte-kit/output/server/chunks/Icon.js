import { n as rest_props, v as value_or_fallback, f as ensure_array_like, o as spread_attributes, w as element, d as slot, m as bind_props, b as pop, e as sanitize_props, p as push } from "./index3.js";
/**
 * @license lucide-svelte v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "mergeClasses",
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push();
  let name = value_or_fallback($$props["name"], () => void 0);
  let color = value_or_fallback($$props["color"], () => "currentColor");
  let size = value_or_fallback($$props["size"], () => 24);
  let strokeWidth = value_or_fallback($$props["strokeWidth"], () => 2);
  let absoluteStrokeWidth = value_or_fallback($$props["absoluteStrokeWidth"], () => false);
  let iconNode = $$props["iconNode"];
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    [
      defaultAttributes,
      $$restProps,
      { "width": size },
      { "height": size },
      { "stroke": color },
      {
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth
      },
      {
        "class": mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class)
      }
    ],
    false,
    false,
    ""
  )}><!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const $$item = each_array[$$index];
    const [tag, attrs] = $$item;
    $$payload.out += "<!--[-->";
    $$payload.out += `<!--[-->`;
    if (tag)
      element(
        $$payload,
        tag,
        () => {
          $$payload.out += `${spread_attributes([attrs], false, false, "")}`;
        },
        () => {
        }
      );
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {});
  $$payload.out += `<!--]--></svg>`;
  bind_props($$props, {
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode,
    mergeClasses
  });
  pop();
}
export {
  Icon as I
};
