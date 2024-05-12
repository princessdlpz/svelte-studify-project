import * as universal from '../entries/pages/search/_page.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/search/+page.ts";
export const imports = ["_app/immutable/nodes/12.B0mt8m8i.js","_app/immutable/chunks/fetch-refresh.CoktrdpI.js","_app/immutable/chunks/index.DJuFnhGY.js","_app/immutable/chunks/runtime.DDjRgbeA.js","_app/immutable/chunks/disclose-version.B-hLH5kf.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/if.BIDFABO2.js","_app/immutable/chunks/lifecycle.Dwr_-_8E.js"];
export const stylesheets = ["_app/immutable/assets/12.BTpbWMA0.css"];
export const fonts = [];
