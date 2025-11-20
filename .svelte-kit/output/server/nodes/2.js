

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.FFCSd-GY.js","_app/immutable/chunks/B3tc7ZDd.js","_app/immutable/chunks/BzD6yL5c.js"];
export const stylesheets = [];
export const fonts = [];
