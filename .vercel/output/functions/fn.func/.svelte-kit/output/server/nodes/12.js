import * as universal from '../entries/pages/search/_page.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/search/+page.ts";
export const imports = ["_app/immutable/nodes/12.Bh5_0mt8.js","_app/immutable/chunks/fetch-refresh.Dig0ubRY.js","_app/immutable/chunks/index.g5YcAAdQ.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/6.B1alBeE8.js","_app/immutable/chunks/each.bMuDjeqi.js","_app/immutable/chunks/index.BkjBVDZS.js"];
export const stylesheets = ["_app/immutable/assets/12.DW-AZd5O.css"];
export const fonts = [];
