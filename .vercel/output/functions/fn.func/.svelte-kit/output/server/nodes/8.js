import * as universal from '../entries/pages/playlist/_id_/edit/_page.ts.js';
import * as server from '../entries/pages/playlist/_id_/edit/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlist/_id_/edit/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/playlist/[id]/edit/+page.ts";
export { server };
export const server_id = "src/routes/playlist/[id]/edit/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.CX2zuKoF.js","_app/immutable/chunks/fetch-refresh.Dig0ubRY.js","_app/immutable/chunks/index.g5YcAAdQ.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/6.B1alBeE8.js","_app/immutable/chunks/index.BkjBVDZS.js","_app/immutable/chunks/entry.Dkl6dbkj.js","_app/immutable/chunks/HeaderNav.svelte_svelte_type_style_lang.KO8L6ymy.js","_app/immutable/chunks/PlaylistForm.aMigivvy.js","_app/immutable/chunks/Button.ClnIUGMd.js","_app/immutable/chunks/forms.D907dsLH.js"];
export const stylesheets = ["_app/immutable/assets/HeaderNav.DjGl9jUq.css"];
export const fonts = [];
