import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DUEvCICt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Btb2rJaj.mjs';
export { renderers } from '../renderers.mjs';

const $$Infospratiques = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Informations terrifiantes !" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-black text-white py-10 px-5"> <h1 class="text-3xl font-bold text-center text-orange-500 mb-6">Infos Pratiques</h1> <!-- Tarifs --> <div class="mb-8"> <h2 class="text-2xl font-semibold text-orange-500 mb-4">Tarifs</h2> <ul class="list-disc pl-6 text-gray-400"> <li>Billet standard : 10€</li> <li>Billet réduit (étudiants, groupes) : 7€</li> <li>Pass 3 jours : 25€</li> <li>Gratuit pour les moins de 12 ans</li> </ul> </div> <!-- Lieux --> <div class="mb-8"> <h2 class="text-2xl font-semibold text-orange-500 mb-4">Lieux</h2> <p class="text-gray-400 mb-2">Le festival se déroule à Montbéliard, avec plusieurs salles de projection :</p> <ul class="list-none pl-0 space-y-2 text-gray-400"> <li><strong>Le Colisée</strong> - 25 Rue du Parc, 25200 Montbéliard</li> <li><strong>Cinéma La Rotonde</strong> - 13 Avenue de la Gare, 25200 Montbéliard</li> <li><strong>Le Théâtre Municipal</strong> - 3 Rue Saint-Georges, 25200 Montbéliard</li> </ul> <a href="https://maps.google.com" target="_blank" class="text-orange-500 hover:text-white hover:underline">Voir la carte</a> </div> <!-- Hébergement --> <div class="mb-8"> <h2 class="text-2xl font-semibold text-orange-500 mb-4">Hébergement</h2> <p class="text-gray-400 mb-2">Vous pouvez trouver des options d'hébergement à proximité :</p> <ul class="list-none pl-0 space-y-2 text-gray-400"> <li><strong>Hôtel Ibis Montbéliard</strong> - 6 Rue de la Piscine, 25200 Montbéliard</li> <li><strong>Camping du Parc</strong> - 2 Avenue des Lacs, 25200 Montbéliard</li> <li><strong>Chambre d'Hôtes Le Nido</strong> - 8 Rue des Montées, 25200 Montbéliard</li> </ul> </div> <!-- Transport --> <div class="mb-8"> <h2 class="text-2xl font-semibold text-orange-500 mb-4">Transport</h2> <p class="text-gray-400 mb-2">L'accès au festival est facile par différents moyens de transport :</p> <ul class="list-none pl-0 space-y-2 text-gray-400"> <li><strong>Train</strong> - Gare de Montbéliard, à 10 minutes en voiture des lieux de projection</li> <li><strong>Voiture</strong> - Parkings disponibles autour de chaque salle de projection</li> <li><strong>Covoiturage</strong> - Organisez vos trajets avec des participants via des plateformes comme BlaBlaCar</li> </ul> </div> <!-- FAQ --> <div> <h2 class="text-2xl font-semibold text-orange-500 mb-4">FAQ</h2> <ul class="list-none pl-0 space-y-4 text-gray-400"> <li> <strong>Quels sont les horaires du festival ?</strong> <p>Le festival commence à 18h chaque jour et se termine vers 3h du matin.</p> </li> <li> <strong>Faut-il réserver à l'avance ?</strong> <p>Il est fortement recommandé de réserver vos billets à l'avance, surtout pour les films populaires.</p> </li> <li> <strong>Y a-t-il des restrictions d'âge ?</strong> <p>Certains films peuvent être classés +18. Consultez la classification des films avant votre venue.</p> </li> </ul> </div> </section> ` })}`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/infospratiques.astro", void 0);

const $$file = "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/infospratiques.astro";
const $$url = "/infospratiques";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Infospratiques,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
