import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, j as renderHead, i as renderComponent, k as renderSlot } from './astro/server_DUEvCICt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                           */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-orange-600 rounded-tl-4xl rounded-tr-4xl"> <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&display=swap" rel="stylesheet"> <div class="justify-center flex"> <p class="font-footertop mb-5  mt-5 text-2xl font-bold">Suivez-nous !</p> </div> <div class="flex gap-1 justify-center mb-5"> <a href="https://www.tiktok.com/@mmi_montbeliard?_t=8qcZp5aIjXU&_r=1"> <img src="/src/assets/tiktok-icon.svg" alt="Tiktok"> </a> <a href="https://www.instagram.com/mmi_montbeliard/profilecard/?igsh=bDl1ZnA0ZXJybjFh"> <img src="/src/assets/insta-icon.svg" alt="Instagram"> </a> <a href="https://www.facebook.com/share/64fVn2dMD7sXb1cC/?mibextid=LQQJ4d"> <img src="/src/assets/facebook-icon.svg" alt="Facebook"> </a> </div> <div class="pb-10 flex justify-center"> <hr class="border-t-2 border-black w-[100px] mx-auto"> </div> <div class="pb-10"> <p class="font-footertop font-bold text-xl flex justify-center">Lucas Lebars</p> <p class="font-footertop font-bold text-xl flex justify-center">MMI 1 C2</p> <p class="font-footertop font-bold text-xl flex justify-center">lucas.lbrs25@outlook.com</p> </div> <div class="pb-10 flex justify-center"> <hr class="border-t-2 border-black w-[100px] mx-auto"> </div> <div class="flex justify-center pb-5"> <img src="/src/assets/logo-footer.svg" alt="logo-footer"> </div> </footer>`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<header class="bg-orange-600 rounded-bl-4xl rounded-br-4xl"> <nav class="flex items-center justify-between p-4"> <!-- Bouton de menu (cach\xE9 en desktop) --> <button id="menu-toggle" class="text-white lg:hidden"> <img class="ml-5" src="/src/assets/menu-button.svg" alt="menu-button"> </button> <!-- Logo centr\xE9 --> <a href="/" class="flex items-center justify-center flex-grow lg:flex-none"> <img src="/src/assets/logo-header.svg" alt="logo-header"> </a> <!-- Menu (visible en desktop, cach\xE9 par d\xE9faut en mobile) --> <ul id="menu" class="hidden lg:flex space-x-6 text-black font-bold text-lg"> <li><a href="/festival">L\u2019\xE2me du Festival</a></li> <li><a href="/Programmes">La S\xE9lection Horrifique</a></li> <li><a href="/activites">Activit\xE9s \xE0 venir</a></li> <li><a href="#">Item 3</a></li> <li><a href="#">Item 4</a></li> </ul> </nav> <!-- Menu mobile (overlay cach\xE9 par d\xE9faut) --> <div id="menu-overlay" class="hidden fixed inset-0 bg-orange-600 bg-opacity-90 z-50 flex flex-col items-center justify-center"> <!-- Bouton de fermeture --> <button id="close-menu" class="absolute top-10 right-10"> <img src="/src/assets/logo-close-menu.svg" alt="close-menu"> </button> <!-- Liens du menu --> <ul class="flex flex-col space-y-6 text-white text-2xl font-bold"> <li><a href="/festival">L\u2019\xE2me du Festival</a></li> <li><a href="/Programmes">La S\xE9lection Horrifique</a></li> <li><a href="/activites">Activit\xE9s \xE0 venir</a></li> <li><a href="/Invites">Les invit\xE9s terrifiant</a></li> <li><a href="/infospratiques">Infos pratiques </a></li> <li><a href="/Contact">Contact</a></li> </ul> </div> </header> <script type="module">
	// Gestion de l'ouverture/fermeture du menu mobile
	document.getElementById("menu-toggle").addEventListener("click", function() {
	  document.getElementById("menu-overlay").classList.toggle("hidden");
	  document.body.style.overflow = "hidden";
	});
  
	document.getElementById("close-menu").addEventListener("click", function() {
	  document.getElementById("menu-overlay").classList.add("hidden");
	  document.body.style.overflow = "auto";
	});
  
	document.getElementById("menu-overlay").addEventListener("click", function(e) {
	  if (e.target === this) {
		this.classList.add("hidden");
		document.body.style.overflow = "auto";
	  }
	});
  <\/script>`])), maybeRenderHead());
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-neutral-900" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
