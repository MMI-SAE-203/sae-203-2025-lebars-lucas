import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_DUEvCICt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_Btb2rJaj.mjs';
import { d as SortallPartenaires } from '../chunks/backend_FwSrgIQ8.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardPartenaires = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardPartenaires;
  const { ...Partenaires } = Astro2.props;
  console.log(Partenaires);
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xs rounded overflow-hidden shadow-lg bg-black text-white  hover:bg-orange-600 transition-all duration-300 ease-in-out "> <a${addAttribute(Partenaires.url_partenaires, "href")} target="_blank" rel="noopener noreferrer"> <div class="flex justify-center p-4"> <img class="w-24 h-24 object-contain filter drop-shadow-lg"${addAttribute(Partenaires.imgUrl, "src")}${addAttribute(Partenaires.nom_partenaires, "alt")}> </div> <div class="px-6 py-4 text-center"> <h3 class="font-bold text-xl text-orange-400">${Partenaires.nom_partenaires}</h3> </div> </a> </div>`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/components/CardPartenaires.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Partenaires = await SortallPartenaires();
  console.log(Partenaires);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Festiv'Halloween", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet"> ${maybeRenderHead()}<div class="flex flex-col lg:flex-row items-center justify-center px-4 py-10" data-astro-cid-j7pv25f6> <!-- Conteneur image et texte --> <div class="flex flex-col lg:flex-row items-center lg:space-x-4" data-astro-cid-j7pv25f6> <!-- Image à gauche, plus proche du texte sur grand écran --> <div class="flex-shrink-0 mb-6 lg:mb-0" data-astro-cid-j7pv25f6> <img src="/src/assets/accueil-img.png" alt="hero-image" class="w-full sm:w-72 md:w-80 lg:w-96 h-auto" data-astro-cid-j7pv25f6> </div> <!-- Texte et bouton à droite --> <div class="text-center lg:text-left flex flex-col items-center lg:items-start" data-astro-cid-j7pv25f6> <h1 class="text-xl sm:text-3xl md:text-4xl font-extrabold text-orange-600 mb-4 drop-shadow-2xl" data-astro-cid-j7pv25f6>
Plongez dans l’horreur, vivez l’expérience Festiv'Halloween !
</h1> <button class="bg-orange-600 text-gray-900 font-bold py-3 px-6 rounded-lg text-xl shadow-lg 
							   border-4 border-gray-900 transition-transform transform hover:scale-110 
							   hover:bg-orange-700 hover:shadow-orange-500 glow" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Entrez... si vous l'osez ! </h1> </button> </div> </div> </div> <hr class="my-6 mx-auto w-11/12 sm:w-3/4 md:w-1/2 border-t-4 border-orange-600" data-astro-cid-j7pv25f6> <section class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10" data-astro-cid-j7pv25f6> <!-- Carte festival --> <div class="bg-gray-900 text-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105" data-astro-cid-j7pv25f6> <img src="/src/assets/festival-img.png" alt="Infos pratiques" class="mx-auto mb-4 w-20 h-20" data-astro-cid-j7pv25f6> <h2 class="text-2xl font-bold text-orange-500" data-astro-cid-j7pv25f6>Le festival</h2> <p class="mt-2 text-gray-300" data-astro-cid-j7pv25f6>Accédez aux informations sur le festival.</p> <a href="/festival" class="inline-block mt-4 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700" data-astro-cid-j7pv25f6>
Voir plus
</a> </div> <!-- Carte Programme --> <div class="bg-gray-900 text-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105" data-astro-cid-j7pv25f6> <img src="/src/assets/programme.webp" alt="Programme" class="mx-auto mb-4 w-20 h-20" data-astro-cid-j7pv25f6> <h2 class="text-2xl font-bold text-orange-500" data-astro-cid-j7pv25f6>Programme</h2> <p class="mt-2 text-gray-300" data-astro-cid-j7pv25f6>Découvrez les événements et animations prévues.</p> <a href="/Programmes" class="inline-block mt-4 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700" data-astro-cid-j7pv25f6>
Voir plus
</a> </div> <!-- Carte Invités --> <div class="bg-gray-900 text-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105" data-astro-cid-j7pv25f6> <img src="/src/assets/invites.webp" alt="Invités" class="mx-auto mb-4 w-20 h-20" data-astro-cid-j7pv25f6> <h2 class="text-2xl font-bold text-orange-500" data-astro-cid-j7pv25f6>Invités</h2> <p class="mt-2 text-gray-300" data-astro-cid-j7pv25f6>Découvrez les personnalités présentes.</p> <a href="/Invites" class="inline-block mt-4 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700" data-astro-cid-j7pv25f6>
Voir plus
</a> </div> <!-- Carte Infos Pratiques --> <div class="bg-gray-900 text-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105" data-astro-cid-j7pv25f6> <img src="/src/assets/infos.webp" alt="Infos pratiques" class="mx-auto mb-4 w-20 h-20" data-astro-cid-j7pv25f6> <h2 class="text-2xl font-bold text-orange-500" data-astro-cid-j7pv25f6>Infos Pratiques</h2> <p class="mt-2 text-gray-300" data-astro-cid-j7pv25f6>Accédez aux horaires et détails logistiques.</p> <a href="/infospratiques" class="inline-block mt-4 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700" data-astro-cid-j7pv25f6>
Voir plus
</a> </div> </section> <hr class="my-6 mx-auto w-11/12 sm:w-3/4 md:w-1/2 border-t-4 border-orange-600" data-astro-cid-j7pv25f6> <main class="container mx-auto p-4 flex justify-center pb-10" data-astro-cid-j7pv25f6> ${Partenaires.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-j7pv25f6> ${Partenaires.map((Partenaires2) => renderTemplate`${renderComponent($$result2, "CardPartenaires", $$CardPartenaires, { ...Partenaires2, "data-astro-cid-j7pv25f6": true })}`)} </div>` : renderTemplate`<p class="text-gray-600 text-center" data-astro-cid-j7pv25f6>
Aucune programmation disponible pour le moment.
</p>`} </main>  ` })} `;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/index.astro", void 0);

const $$file = "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
