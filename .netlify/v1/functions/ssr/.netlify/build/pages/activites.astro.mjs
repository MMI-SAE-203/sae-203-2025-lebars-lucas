import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_DUEvCICt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Btb2rJaj.mjs';
import 'clsx';
import { S as Sortallactivite } from '../chunks/backend_CZqvH51W.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Cardactivite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cardactivite;
  const { ...Activite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-sm bg-black text-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"> <div class="p-4"> <h2 class="text-2xl font-bold text-orange-500">${Activite.nom_activite}</h2> <p class="text-sm text-gray-400 mb-2">${Activite.description_activite}</p> <div class="flex items-center mt-3"> <div class="ml-3"> <p class="text-sm font-semibold">Invité : <span class="text-orange-500">${Activite.invite_associe}</span></p> <p class="text-xs text-gray-400">${Activite.role_invite}</p> </div> </div> </div> </div>`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/components/Cardactivite.astro", void 0);

const $$Activites = createComponent(async ($$result, $$props, $$slots) => {
  const Activite = await Sortallactivite();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Activit\xE9s \xE0 venir : pr\xE9parez-vous \xE0 l\u2019action !" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl text-orange-600 justify-center flex pt-10 pb-10 font-bold"> Activités du festival</h1> <main class="container mx-auto p-4 flex justify-center pb-10"> ${Activite.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${Activite.map((Activite2) => renderTemplate`${renderComponent($$result2, "Cardactivite", $$Cardactivite, { ...Activite2 })}`)} </div>` : renderTemplate`<p class="text-gray-600 text-center">
Aucune programmation disponible pour le moment.
</p>`} </main> ` })}`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/activites.astro", void 0);

const $$file = "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/activites.astro";
const $$url = "/activites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Activites,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
