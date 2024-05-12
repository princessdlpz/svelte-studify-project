import * as server from '../entries/pages/playlists/new/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlists/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/playlists/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.D-heW_sj.js","_app/immutable/chunks/6.B1alBeE8.js","_app/immutable/chunks/index.BkjBVDZS.js","_app/immutable/chunks/entry.dezmDdc7.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/HeaderNav.svelte_svelte_type_style_lang.KO8L6ymy.js","_app/immutable/chunks/index.g5YcAAdQ.js","_app/immutable/chunks/PlaylistForm.CgRf71vD.js","_app/immutable/chunks/Button.ClnIUGMd.js","_app/immutable/chunks/forms.DXGJmPBM.js"];
export const stylesheets = ["_app/immutable/assets/HeaderNav.DjGl9jUq.css"];
export const fonts = [];
