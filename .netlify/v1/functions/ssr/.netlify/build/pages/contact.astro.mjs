import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DUEvCICt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Btb2rJaj.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacter les fantomes !" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-black text-white py-10 px-5"> <h1 class="text-3xl font-bold text-center text-orange-500 mb-6">Contact</h1> <!-- Formulaire de contact --> <div class="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"> <h2 class="text-2xl font-semibold text-orange-500 mb-4">Envoyez-nous un message</h2> <form action="#" method="POST"> <div class="mb-4"> <label for="nom" class="block text-gray-400">Nom</label> <input type="text" id="nom" name="nom" class="w-full p-3 mt-1 rounded-md bg-gray-700 text-white" required> </div> <div class="mb-4"> <label for="email" class="block text-gray-400">Email</label> <input type="email" id="email" name="email" class="w-full p-3 mt-1 rounded-md bg-gray-700 text-white" required> </div> <div class="mb-4"> <label for="sujet" class="block text-gray-400">Sujet</label> <input type="text" id="sujet" name="sujet" class="w-full p-3 mt-1 rounded-md bg-gray-700 text-white" required> </div> <div class="mb-4"> <label for="message" class="block text-gray-400">Message</label> <textarea id="message" name="message" class="w-full p-3 mt-1 rounded-md bg-gray-700 text-white" rows="4" required></textarea> </div> <button type="submit" class="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-400 transition-all duration-300">Envoyer</button> </form> </div> <!-- Coordonnées --> <div class="mt-12 text-center"> <h2 class="text-2xl font-semibold text-orange-500 mb-4">Coordonnées</h2> <p class="text-gray-400 mb-2">Nous vous répondons dans les plus brefs délais !</p> <p class="text-gray-400 mb-2"><strong>Email :</strong> festival@halloween.com</p> <p class="text-gray-400 mb-2"><strong>Téléphone :</strong> +33 1 23 45 67 89</p> <p class="text-gray-400 mb-2"><strong>Adresse :</strong> 123 Rue du Fantôme, 75000 Paris, France</p> </div> <!-- Réseaux sociaux --> <div class="mt-12 text-center"> <h2 class="text-2xl font-semibold text-orange-500 mb-4">Suivez-nous</h2> <div class="flex justify-center space-x-6"> <a href="https://facebook.com/festivalhalloween" target="_blank" class="text-gray-400 hover:text-orange-500 transition-all duration-300"> <i class="fab fa-facebook fa-2x"></i> </a> <a href="https://twitter.com/festivalhalloween" target="_blank" class="text-gray-400 hover:text-orange-500 transition-all duration-300"> <i class="fab fa-twitter fa-2x"></i> </a> <a href="https://instagram.com/festivalhalloween" target="_blank" class="text-gray-400 hover:text-orange-500 transition-all duration-300"> <i class="fab fa-instagram fa-2x"></i> </a> <a href="https://tiktok.com/festivalhalloween" target="_blank" class="text-gray-400 hover:text-orange-500 transition-all duration-300"> <i class="fab fa-tiktok fa-2x"></i> </a> </div> </div> </section> ` })}`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/Contact.astro", void 0);

const $$file = "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/Contact.astro";
const $$url = "/Contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
