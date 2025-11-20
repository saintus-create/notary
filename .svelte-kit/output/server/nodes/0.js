

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B6DPNCx5.js","_app/immutable/chunks/B3tc7ZDd.js","_app/immutable/chunks/BzD6yL5c.js"];
export const stylesheets = ["_app/immutable/assets/0.B8Qw_-hm.css"];
export const fonts = [];
