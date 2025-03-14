import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DUEvCICt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_Btb2rJaj.mjs';
import { g as getOneEvent } from '../../chunks/backend_FwSrgIQ8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const event = await getOneEvent(id);
  if (!event) {
    console.error(`Event with id ${id} not found`);
    return Astro2.redirect("/Programmes");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": event?.Titre_film }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center items-center min-h-screen p-4"> <div class="w-full max-w-3xl lg:max-w-4xl transition-all duration-300 ease-in-out transform hover:scale-105"> <img class="w-full h-96 object-cover rounded-t-lg"${addAttribute(event.img, "src")} alt="Poster"> <div class="p-6"> <h2 class="text-3xl font-bold text-orange-500">${event.Titre_film}</h2> <p class="text-base text-gray-700 mt-4">${event.Description_film}</p> <a${addAttribute(event.bande_annonce_film, "href")} class="text-lg text-orange-500 hover:text-orange-400 underline block mt-4" target="_blank">
Regarder la bande-annonce
</a> <div class="mt-6 text-base text-gray-700"> <p><strong>Durée :</strong> ${event.Duree_film}</p> <p><strong>Langue :</strong> ${event.Langue_film}</p> <p><strong>Invité associé :</strong> ${event.Invite_associe}</p> </div> </div> </div> </div> ` })}`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/films/[id].astro", void 0);

const $$file = "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/films/[id].astro";
const $$url = "/films/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
