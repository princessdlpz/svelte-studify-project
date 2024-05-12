import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CjAoA6UM.js","_app/immutable/chunks/fetch-refresh.Dig0ubRY.js","_app/immutable/chunks/index.g5YcAAdQ.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/6.B1alBeE8.js","_app/immutable/chunks/index.BkjBVDZS.js","_app/immutable/chunks/each.bMuDjeqi.js","_app/immutable/chunks/entry.Dkl6dbkj.js","_app/immutable/chunks/Button.ClnIUGMd.js","_app/immutable/chunks/HeaderNav.svelte_svelte_type_style_lang.KO8L6ymy.js","_app/immutable/chunks/Card.CdSomCCv.js","_app/immutable/chunks/music.BP1ZemKR.js","_app/immutable/chunks/Icon.Dx9TL7S4.js"];
export const stylesheets = ["_app/immutable/assets/2.AkePoh3m.css","_app/immutable/assets/HeaderNav.DjGl9jUq.css"];
export const fonts = [];
