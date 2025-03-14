import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_DUEvCICt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_Btb2rJaj.mjs';
import { c as SortallFilms } from '../chunks/backend_CZqvH51W.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Cardfilms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cardfilms;
  const { ...Films } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-sm lg:max-w-md rounded-lg overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"> <img class="w-full h-64 object-cover"${addAttribute(Films.imgUrl, "src")} alt="Film Poster"> <div class="p-4"> <h2 class="text-2xl font-bold text-orange-500">${Films.Titre_film}</h2> <p class="text-sm text-gray-400 mb-2">${Films.diffusion_film}</p> <!-- Bouton "En savoir plus" --> <a${addAttribute(`/films/${Films.id}`, "href")} class="inline-block mt-3 px-4 py-2 text-white bg-orange-500 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors duration-300">
En savoir plus
</a> </div> </div>`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/components/Cardfilms.astro", void 0);

const $$Programmes = createComponent(async ($$result, $$props, $$slots) => {
  const Films = await SortallFilms();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "La S\xE9lection Horrifique" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold text-orange-500 text-center my-8">
Plongez dans l'angoisse : Le planning de Festiv'Halloween
</h1> <main class="container mx-auto p-4 flex justify-center pb-10"> ${Films.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${Films.map((Films2) => renderTemplate`${renderComponent($$result2, "Cardfilms", $$Cardfilms, { ...Films2 })}`)} </div>` : renderTemplate`<p class="text-gray-600 text-center">
Aucune programmation disponible pour le moment.
</p>`} </main> ` })}`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/Programmes.astro", void 0);

const $$file = "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/Programmes.astro";
const $$url = "/Programmes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Programmes,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
