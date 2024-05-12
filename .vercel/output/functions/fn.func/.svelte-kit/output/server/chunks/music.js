import { c as spread_props, b as pop, d as slot, e as sanitize_props, p as push } from "./index3.js";
import { I as Icon } from "./Icon.js";
function Music($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "M9 18V5l12-2v13" }],
    [
      "circle",
      { "cx": "6", "cy": "18", "r": "3" }
    ],
    [
      "circle",
      { "cx": "18", "cy": "16", "r": "3" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "music" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {});
        $$payload2.out += `<!--]-->`;
      }
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  Music as M
};
