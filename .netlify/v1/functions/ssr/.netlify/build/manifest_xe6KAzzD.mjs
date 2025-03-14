import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { l as NOOP_MIDDLEWARE_HEADER, n as decodeKey } from './chunks/astro/server_DUEvCICt.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/","cacheDir":"file:///C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/node_modules/.astro/","outDir":"file:///C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/dist/","srcDir":"file:///C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/","publicDir":"file:///C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/public/","buildClientDir":"file:///C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/dist/","buildServerDir":"file:///C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Contact.DDNGCj1x.css"}],"routeData":{"route":"/activites","isIndex":false,"type":"page","pattern":"^\\/activites\\/?$","segments":[[{"content":"activites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/activites.astro","pathname":"/activites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Contact.DDNGCj1x.css"}],"routeData":{"route":"/charte","isIndex":false,"type":"page","pattern":"^\\/charte\\/?$","segments":[[{"content":"charte","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/charte.astro","pathname":"/charte","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Contact.DDNGCj1x.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/Contact\\/?$","segments":[[{"content":"Contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Contact.astro","pathname":"/Contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Contact.DDNGCj1x.css"}],"routeData":{"route":"/festival","isIndex":false,"type":"page","pattern":"^\\/festival\\/?$","segments":[[{"content":"festival","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/festival.astro","pathname":"/festival","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Contact.DDNGCj1x.css"}],"routeData":{"route":"/films/[id]","isIndex":false,"type":"page","pattern":"^\\/films\\/([^/]+?)\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/films/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Contact.DDNGCj1x.css"}],"routeData":{"route":"/infospratiques","isIndex":false,"type":"page","pattern":"^\\/infospratiques\\/?$","segments":[[{"content":"infospratiques","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/infospratiques.astro","pathname":"/infospratiques","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Contact.DDNGCj1x.css"}],"routeData":{"route":"/invites/[id]","isIndex":false,"type":"page","pattern":"^\\/invites\\/([^/]+?)\\/?$","segments":[[{"content":"invites","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invites/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Contact.DDNGCj1x.css"}],"routeData":{"route":"/invites","isIndex":false,"type":"page","pattern":"^\\/Invites\\/?$","segments":[[{"content":"Invites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Invites.astro","pathname":"/Invites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Contact.DDNGCj1x.css"}],"routeData":{"route":"/programmes","isIndex":false,"type":"page","pattern":"^\\/Programmes\\/?$","segments":[[{"content":"Programmes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Programmes.astro","pathname":"/Programmes","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Creepster&display=swap\";.glow[data-astro-cid-j7pv25f6]{transition:box-shadow .3s ease-in-out}.glow[data-astro-cid-j7pv25f6]:hover{box-shadow:0 0 15px #ff8000,0 0 25px #ff4000}\n"},{"type":"external","src":"/_astro/Contact.DDNGCj1x.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/Contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/Invites.astro",{"propagation":"none","containsHead":true}],["C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/Programmes.astro",{"propagation":"none","containsHead":true}],["C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/activites.astro",{"propagation":"none","containsHead":true}],["C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/charte.astro",{"propagation":"none","containsHead":true}],["C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/festival.astro",{"propagation":"none","containsHead":true}],["C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/films/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/infospratiques.astro",{"propagation":"none","containsHead":true}],["C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/src/pages/invites/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/activites@_@astro":"pages/activites.astro.mjs","\u0000@astro-page:src/pages/charte@_@astro":"pages/charte.astro.mjs","\u0000@astro-page:src/pages/Contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/festival@_@astro":"pages/festival.astro.mjs","\u0000@astro-page:src/pages/films/[id]@_@astro":"pages/films/_id_.astro.mjs","\u0000@astro-page:src/pages/infospratiques@_@astro":"pages/infospratiques.astro.mjs","\u0000@astro-page:src/pages/invites/[id]@_@astro":"pages/invites/_id_.astro.mjs","\u0000@astro-page:src/pages/Invites@_@astro":"pages/invites.astro.mjs","\u0000@astro-page:src/pages/Programmes@_@astro":"pages/programmes.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_xe6KAzzD.mjs","C:/Users/lucas/OneDrive/Github/sae-203-2025-lebars-lucas/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dxa81Bow.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Contact.DDNGCj1x.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Arr2/AE1aIxqQu3Fu6VCg960yDg+vbOrsEd+GSJGGWY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
