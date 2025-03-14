import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DPE-EzxR.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/activites.astro.mjs');
const _page2 = () => import('./pages/charte.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/festival.astro.mjs');
const _page5 = () => import('./pages/films/_id_.astro.mjs');
const _page6 = () => import('./pages/infospratiques.astro.mjs');
const _page7 = () => import('./pages/invites/_id_.astro.mjs');
const _page8 = () => import('./pages/invites.astro.mjs');
const _page9 = () => import('./pages/programmes.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/activites.astro", _page1],
    ["src/pages/charte.astro", _page2],
    ["src/pages/Contact.astro", _page3],
    ["src/pages/festival.astro", _page4],
    ["src/pages/films/[id].astro", _page5],
    ["src/pages/infospratiques.astro", _page6],
    ["src/pages/invites/[id].astro", _page7],
    ["src/pages/Invites.astro", _page8],
    ["src/pages/Programmes.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "da92d99f-924e-4e9d-8506-0db065ad6b54"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
