import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DUEvCICt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_Btb2rJaj.mjs';
import { a as getOneEventinvite } from '../../chunks/backend_FwSrgIQ8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const invit = await getOneEventinvite(id);
  if (!invit) {
    console.error(`Event with id ${id} not found`);
    return Astro2.redirect("/Invites");
  }
  console.log(invit);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": invit?.nom_prenom_invite }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-10 pb-10 max-w-sm lg:max-w-md rounded-lg overflow-hidden shadow-lg text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"> <!-- Photo de l'invité --> <img class="w-64 h-64 rounded-full object-cover shadow-md border-4 border-orange-500 mb-4 mx-auto"${addAttribute(invit.img, "src")} alt="Photo de {invite.nom}"> <div class="p-4"> <!-- Nom de l'invité --> <h2 class="text-2xl font-bold text-orange-500 text-center mb-2">${invit.nom_prenom_invite}</h2> <!-- Date et heure de présence --> <p class="text-sm text-gray-400 text-center mb-2">
Présence : ${invit.date_heure_presence_invite} pour une durée de ${invit.duree_presence_invite} </p> <!-- Bio de l'invité --> <p class="text-sm text-gray-300 mb-4">${invit.bio_invite}</p> <!-- Films ou Activités associés --> <h3 class="text-lg font-semibold text-orange-500 mb-2">Films / Activités associés : ${invit.activite_associe_invite} ${invit.film_associe_invite} </h3> </div> </div>` })}`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/invites/[id].astro", void 0);

const $$file = "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/invites/[id].astro";
const $$url = "/invites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
