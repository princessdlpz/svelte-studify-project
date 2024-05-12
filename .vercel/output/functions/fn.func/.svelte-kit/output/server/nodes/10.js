import * as server from '../entries/pages/playlists/new/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlists/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/playlists/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.d5OK-hq1.js","_app/immutable/chunks/6.B1alBeE8.js","_app/immutable/chunks/index.BkjBVDZS.js","_app/immutable/chunks/entry.Dkl6dbkj.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/HeaderNav.svelte_svelte_type_style_lang.KO8L6ymy.js","_app/immutable/chunks/index.g5YcAAdQ.js","_app/immutable/chunks/PlaylistForm.aMigivvy.js","_app/immutable/chunks/Button.ClnIUGMd.js","_app/immutable/chunks/forms.D907dsLH.js"];
export const stylesheets = ["_app/immutable/assets/HeaderNav.DjGl9jUq.css"];
export const fonts = [];
