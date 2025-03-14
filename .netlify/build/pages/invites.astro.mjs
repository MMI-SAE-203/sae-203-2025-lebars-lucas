import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_DUEvCICt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Btb2rJaj.mjs';
import 'clsx';
import { b as Sortinvites } from '../chunks/backend_FwSrgIQ8.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Cardinvite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cardinvite;
  const { ...Invites } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-sm lg:max-w-md rounded-lg overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"> <div class="p-4"> <h2 class="text-2xl font-bold text-orange-500">${Invites.nom_prenom_invite}</h2> <p class="text-sm text-gray-400 mb-1">📅 Présence : ${Invites.date_heure_presence_invite}</p> <p class="text-sm text-gray-400 mb-2">⏳ Durée : ${Invites.duree_presence_invite}</p> <!-- Bouton "En savoir plus" --> <a${addAttribute(`/Invites/${Invites.id}`, "href")} class="inline-block mt-3 px-4 py-2 text-white bg-orange-500 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors duration-300">
En savoir plus
</a> </div> </div>`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/components/Cardinvite.astro", void 0);

const $$Invites = createComponent(async ($$result, $$props, $$slots) => {
  const Invite = await Sortinvites();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": " Les invit\xE9s terrifiant qui seront pr\xE9sent!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto p-4 flex justify-center pb-10"> ${Invite.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${Invite.map((Invite2) => renderTemplate`${renderComponent($$result2, "Cardinvite", $$Cardinvite, { ...Invite2 })}`)} </div>` : renderTemplate`<p class="text-gray-600 text-center">
Aucune programmation disponible pour le moment.
</p>`} </main> ` })}`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/Invites.astro", void 0);

const $$file = "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/Invites.astro";
const $$url = "/Invites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Invites,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
