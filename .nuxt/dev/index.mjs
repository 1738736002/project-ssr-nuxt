import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, createError, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getQuery as getQuery$1, getCookie, getRequestHeaders, getRequestURL, sendProxy, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, readBody, getResponseStatusText } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/devalue@5.0.0/node_modules/devalue/index.js';
import destr, { destr as destr$1 } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, withLeadingSlash, withoutTrailingSlash, isRelative, joinRelativeURL } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/ufo@1.5.4/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/vue@3.5.5_typescript@5.6.2/node_modules/vue/server-renderer/index.mjs';
import { propsToString, renderSSRHead } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/@unhead+ssr@1.11.2/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unenv@1.10.0/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { klona } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { consola } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/consola@3.2.3/node_modules/consola/dist/index.mjs';
import { getContext } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unctx@2.3.1_webpack-sources@3.2.3/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/errx@0.1.0/node_modules/errx/dist/index.js';
import { isVNode, version, unref } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/vue@3.5.5_typescript@5.6.2/node_modules/vue/index.mjs';
import { extname } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import { unified } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unified@11.0.5/node_modules/unified/index.js';
import { toString } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/index.js';
import { postprocess, preprocess } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/dev/index.js';
import { stringifyPosition } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/index.js';
import { markdownLineEnding, markdownSpace } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/micromark-util-character@2.1.0/node_modules/micromark-util-character/dev/index.js';
import { push, splice } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/micromark-util-chunked@2.0.0/node_modules/micromark-util-chunked/dev/index.js';
import { resolveAll } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/micromark-util-resolve-all@2.0.0/node_modules/micromark-util-resolve-all/index.js';
import { normalizeUri } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.0/node_modules/micromark-util-sanitize-uri/dev/index.js';
import slugify from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/slugify@1.6.6/node_modules/slugify/slugify.js';
import remarkParse from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/index.js';
import remark2rehype from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/remark-rehype@11.1.0/node_modules/remark-rehype/index.js';
import remarkMDC, { parseFrontMatter } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/remark-mdc@3.2.1/node_modules/remark-mdc/dist/index.mjs';
import remarkEmoji from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/remark-emoji@5.0.1/node_modules/remark-emoji/index.js';
import remarkGFM from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/remark-gfm@4.0.0/node_modules/remark-gfm/index.js';
import rehypeExternalLinks from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/rehype-external-links@3.0.0/node_modules/rehype-external-links/index.js';
import rehypeSortAttributeValues from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/rehype-sort-attribute-values@5.0.0/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/rehype-sort-attributes@5.0.0/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/rehype-raw@7.0.0/node_modules/rehype-raw/index.js';
import { detab } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/detab@3.0.2/node_modules/detab/index.js';
import { toString as toString$1 } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/hast-util-to-string@3.0.0/node_modules/hast-util-to-string/index.js';
import Slugger from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/github-slugger@2.0.0/node_modules/github-slugger/index.js';
import { createServerHead as createServerHead$1, CapoPlugin } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unhead@1.11.2/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/@unhead+shared@1.11.2/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "p": "prose-p",
          "a": "prose-a",
          "blockquote": "prose-blockquote",
          "code-inline": "prose-code-inline",
          "code": "ProseCodeInline",
          "em": "prose-em",
          "h1": "prose-h1",
          "h2": "prose-h2",
          "h3": "prose-h3",
          "h4": "prose-h4",
          "h5": "prose-h5",
          "h6": "prose-h6",
          "hr": "prose-hr",
          "img": "prose-img",
          "ul": "prose-ul",
          "ol": "prose-ol",
          "li": "prose-li",
          "strong": "prose-strong",
          "table": "prose-table",
          "thead": "prose-thead",
          "tbody": "prose-tbody",
          "td": "prose-td",
          "th": "prose-th",
          "tr": "prose-tr"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": "",
      "experimental": {
        "stripQueryParameters": false,
        "advanceQuery": false,
        "clientDB": false
      },
      "respectPathCase": false,
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": []
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": false,
      "wsUrl": "ws://localhost:4000/",
      "documentDriven": false,
      "host": "",
      "trailingSlash": false,
      "search": "",
      "contentHead": true,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    },
    "piniaPluginPersistedstate": {}
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "dLYeSFVwsx",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": false,
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": []
    },
    "contentHead": true,
    "documentDriven": false,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "cacheContents": true,
      "stripQueryParameters": false,
      "advanceQuery": false,
      "search": ""
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/mr.xuww/Documents/project/project-ssr-nuxt/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"/Users/mr.xuww/Documents/project/project-ssr-nuxt/content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/mr.xuww/Documents/project/project-ssr-nuxt/.nuxt/content-cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/mr.xuww/Documents/project/project-ssr-nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/mr.xuww/Documents/project/project-ssr-nuxt/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/mr.xuww/Documents/project/project-ssr-nuxt/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/mr.xuww/Documents/project/project-ssr-nuxt/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/mr.xuww/Documents/project/project-ssr-nuxt/.data/kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _aMXs1x52N9 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "/Users/mr.xuww/Documents/project/project-ssr-nuxt";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _SxHMrvSQij = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola.wrapConsole();
}

function defineNitroPlugin(def) {
  return def;
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function defineRenderHandler(handler) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    if (opts.legacy) {
      if (result?.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result?.dirConfig) {
        result.result = {
          _path: result.dirConfig?._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return result?._path || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result?.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).find().then(resolveResult);
    };
    return query;
  }
  return query;
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab) continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument });
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler()(
    postprocess(
      parse(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};

function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/\{([^}]*)\}/);
  const filenameMatches = lang.match(/\[((\\\]|[^\]])*)\]/);
  const meta = lang.replace(languageMatches?.[0] ?? "", "").replace(highlightTokensMatches?.[0] ?? "", "").replace(filenameMatches?.[0] ?? "", "").trim();
  return {
    language: languageMatches?.[0] || void 0,
    highlights: parseHighlightedLines(highlightTokensMatches?.[1] || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: filenameMatches?.[1].replace(/\\\]/g, "]") || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([\w-]+)(\s[^>]*?)?\/?>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}

const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language,
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};

function html(state, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || state.options?.allowDangerousHtml) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}

function link$1(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}

function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function inlineCode(state, node) {
  const language = node.attributes?.language || node.attributes?.lang;
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}

function containerComponent(state, node) {
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...node.data?.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}

const handlers$1 = {
  emphasis,
  code,
  link: link$1,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};

const defaults = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-emoji": {
        instance: remarkEmoji
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      handlers: handlers$1,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};

function flattenNodeText(node) {
  if (node.type === "comment") {
    return "";
  }
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};
const validateProps = (type, props) => {
  if (!props) {
    return {};
  }
  props = Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
  if (type === "pre") {
    if (typeof props.highlights === "string") {
      props.highlights = props.highlights.split(" ").map((i) => Number.parseInt(i));
    }
  }
  return props;
};

function compileHast(options = {}) {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName?.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(node.properties?.id || slugs.slug(toString$1(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      const children = (node.tagName === "template" && node.content?.children.length ? node.content.children : node.children).map((child) => compileToJSON(child, node)).filter(Boolean);
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.tagName, node.properties),
        children
      };
    }
    if (node.type === "text") {
      if (!/^\n+$/.test(node.value || "") || parent?.properties?.emptyLinePlaceholder) {
        return {
          type: "text",
          value: node.value
        };
      }
    }
    if (options.keepComments && node.type === "comment") {
      return {
        type: "comment",
        value: node.value
      };
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => node.type === "comment" && node.value?.trim() === "more");
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    body.children = (body.children || []).filter((child) => child.type !== "text");
    return {
      body,
      excerpt
    };
  };
}

let moduleOptions;
let generatedMdcConfigs;
const createMarkdownParser = async (inlineOptions = {}) => {
  if (!moduleOptions) {
    moduleOptions = await Promise.resolve().then(function () { return mdcImports; }).catch(() => ({}));
  }
  if (!generatedMdcConfigs) {
    generatedMdcConfigs = await Promise.resolve().then(function () { return mdcConfigs; }).then((r) => r.getMdcConfigs()).catch(() => []);
  }
  const mdcConfigs$1 = [
    ...generatedMdcConfigs || [],
    ...inlineOptions.configs || []
  ];
  if (inlineOptions.highlight != null && inlineOptions.highlight != false && inlineOptions.highlight.highlighter !== void 0 && typeof inlineOptions.highlight.highlighter !== "function") {
    console.warn("[@nuxtjs/mdc] `highlighter` passed to `parseMarkdown` is should be a function, but got " + JSON.stringify(inlineOptions.highlight.highlighter) + ", ignored.");
    inlineOptions = {
      ...inlineOptions,
      highlight: {
        ...inlineOptions.highlight
      }
    };
    delete inlineOptions.highlight.highlighter;
  }
  const options = defu$1(inlineOptions, {
    remark: { plugins: moduleOptions?.remarkPlugins },
    rehype: { plugins: moduleOptions?.rehypePlugins },
    highlight: moduleOptions?.highlight
  }, defaults);
  if (options.rehype?.plugins?.highlight) {
    options.rehype.plugins.highlight.options = {
      ...options.rehype.plugins.highlight.options || {},
      ...options.highlight || {}
    };
  }
  let processor = unified();
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.pre?.(processor) || processor;
  }
  processor.use(remarkParse);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.remark?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.remark?.plugins);
  processor.use(remark2rehype, options.rehype?.options);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.rehype?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.rehype?.plugins);
  processor.use(compileHast, options);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.post?.(processor) || processor;
  }
  return async (md) => {
    const { content, data: frontmatter } = await parseFrontMatter(md);
    const processedFile = await processor.process({ value: content, data: frontmatter });
    const result = processedFile.result;
    const data = Object.assign(
      contentHeading(result.body),
      frontmatter,
      processedFile?.data || {}
    );
    let toc;
    if (data.toc !== false) {
      const tocOption = defu$1(data.toc || {}, options.toc);
      toc = generateToc(result.body, tocOption);
    }
    return {
      data,
      body: result.body,
      excerpt: result.excerpt,
      toc
    };
  };
};
const parseMarkdown = async (md, inlineOptions = {}) => {
  const parser = await createMarkdownParser(inlineOptions);
  return parser(md);
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type === "element" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (id) => {
  const [_source, ...parts] = id.split(":");
  const [, basename, _extension] = parts[parts.length - 1]?.match(/(.*)\.([^.]+)$/) || [];
  if (basename) {
    parts[parts.length - 1] = basename;
  }
  const _path = (parts || []).join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path,
    _basename: basename || ""
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en", respectPathCase = false } = options;
    const { _source, _file, _path, _extension, _basename } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"), { respectPathCase });
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: content._draft ?? isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(_basename)),
      _source,
      _file,
      _stem: _path,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true, respectPathCase = false } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: !respectPathCase })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const highlightOptions = options.highlight ? {
      ...options.highlight,
      // Pass only when it's an function. String values are handled by `@nuxtjs/mdc`
      highlighter: typeof options.highlight?.highlighter === "function" ? options.highlight.highlighter : void 0
    } : void 0;
    const parsed = await parseMarkdown(content, {
      ...config,
      highlight: highlightOptions,
      remark: {
        plugins: config.remarkPlugins
      },
      rehype: {
        options: {
          handlers: {
            link
          }
        },
        plugins: config.rehypePlugins
      },
      toc: config.toc
    });
    return {
      ...parsed.data,
      excerpt: parsed.excerpt,
      body: {
        ...parsed.body,
        toc: parsed.toc
      },
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        options: plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function normalizeLink(link2) {
  const match = link2.match(/#.+$/);
  const hash = match ? match[0] : "";
  if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash;
  } else {
    return link2;
  }
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: (_id, content) => {
    const { data } = parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr$1(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores) {
  const rxAll = ["/\\.", "/-", ...ignores.filter((p) => p)].map((p) => new RegExp(p));
  return function isIgnored(key) {
    const path = "/" + key.replace(/:/g, "/");
    return rxAll.some((rx) => rx.test(path));
  };
}

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or match every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched?.[1] ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const matchingPipelines = [
    // Conditions
    (state, params) => {
      const filtered = state.result.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery)));
      return {
        ...state,
        result: filtered,
        total: filtered.length
      };
    },
    // Sort data
    (state, params) => ensureArray(params.sort).forEach((options) => sortList(state.result, options)),
    function fetchSurround(state, params, db) {
      if (params.surround) {
        let _surround = surround(state.result?.length === 1 ? db : state.result, params.surround);
        _surround = apply(withoutKeys(params.without))(_surround);
        _surround = apply(withKeys(params.only))(_surround);
        state.surround = _surround;
      }
      return state;
    }
  ];
  const transformingPiples = [
    // Skip first items
    (state, params) => {
      if (params.skip) {
        return {
          ...state,
          result: state.result.slice(params.skip),
          skip: params.skip
        };
      }
    },
    // Pick first items
    (state, params) => {
      if (params.limit) {
        return {
          ...state,
          result: state.result.slice(0, params.limit),
          limit: params.limit
        };
      }
    },
    function fetchDirConfig(state, params, db) {
      if (params.dirConfig) {
        const path = state.result[0]?._path || params.where?.find((w) => w._path)?._path;
        if (typeof path === "string") {
          const dirConfig = db.find((item) => item._path === joinURL(path, "_dir"));
          if (dirConfig) {
            state.dirConfig = { _path: dirConfig._path, ...withoutKeys(["_"])(dirConfig) };
          }
        }
      }
      return state;
    },
    // Remove unwanted fields
    (state, params) => ({
      ...state,
      result: apply(withoutKeys(params.without))(state.result)
    }),
    // Select only wanted fields
    (state, params) => ({
      ...state,
      result: apply(withKeys(params.only))(state.result)
    })
  ];
  return async (query) => {
    const db = await getContentsList();
    const params = query.params();
    const result1 = {
      result: db,
      limit: 0,
      skip: 0,
      total: db.length
    };
    const matchedData = matchingPipelines.reduce(($data, pipe) => pipe($data, params, db) || $data, result1);
    if (params.count) {
      return {
        result: matchedData.result.length
      };
    }
    const result = transformingPiples.reduce(($data, pipe) => pipe($data, params, db) || $data, matchedData);
    if (params.first) {
      return {
        ...omit(["skip", "limit", "total"])(result),
        result: result.result[0]
      };
    }
    return result;
  };
}

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage().getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage().setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && !params.surround && !params.dirConfig && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const keyChunks = [...chunksFromArray(keys, 10)];
    const contents = [];
    for await (const chunk of keyChunks) {
      const result = await Promise.all(chunk.map((key) => getContent(event, key)));
      contents.push(...result);
    }
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

let _sourceStorage;
let _cacheStorage;
let _cacheParsedStorage;
const sourceStorage = () => {
  if (!_sourceStorage) {
    _sourceStorage = prefixStorage(useStorage(), "content:source");
  }
  return _sourceStorage;
};
const cacheStorage = () => {
  if (!_cacheStorage) {
    _cacheStorage = prefixStorage(useStorage(), "cache:content");
  }
  return _cacheStorage;
};
const cacheParsedStorage = () => {
  if (!_cacheParsedStorage) {
    _cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
  }
  return _cacheParsedStorage;
};
const contentConfig = () => useRuntimeConfig().content;
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  const isIgnored = makeIgnored(contentConfig().ignores);
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  const source = sourceStorage();
  if (keys.length === 0) {
    keys = await source.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await source.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await source.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
function* chunksFromArray(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
let cachedContents = [];
const cleanCachedContents = () => {
  cachedContents = [];
};
const getContentsList = /* @__PURE__ */ (() => {
  let pendingContentsListPromise = null;
  const _getContentsList = async (event, prefix) => {
    const keys = await getContentsIds(event, prefix);
    const keyChunks = [...chunksFromArray(keys, 10)];
    const contents = [];
    for (const chunk of keyChunks) {
      const result = await Promise.all(chunk.map((key) => getContent(event, key)));
      contents.push(...result);
    }
    return contents.filter((c) => c && c._path);
  };
  return (event, prefix) => {
    if (event.context.__contentList) {
      return event.context.__contentList;
    }
    if (cachedContents.length) {
      return cachedContents;
    }
    if (!pendingContentsListPromise) {
      pendingContentsListPromise = _getContentsList(event, prefix);
      pendingContentsListPromise.then((result) => {
        {
          cachedContents = result;
        }
        event.context.__contentList = result;
        pendingContentsListPromise = null;
      });
    }
    return pendingContentsListPromise;
  };
})();
const pendingPromises = {};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  const source = sourceStorage();
  const cache = cacheParsedStorage();
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await source.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cache.getItem(id);
  const config = contentConfig();
  const meta = await source.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash$1 = hash({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: config.cacheVersion,
    integrity: config.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  if (!pendingPromises[id + hash$1]) {
    pendingPromises[id + hash$1] = new Promise(async (resolve) => {
      const body = await source.getItem(id);
      if (body === null) {
        return resolve({ _id: contentId, body: null });
      }
      const parsed = await parseContent(contentId, body);
      await cache.setItem(id, { parsed, hash: hash$1 }).catch(() => {
      });
      resolve(parsed);
      delete pendingPromises[id + hash$1];
    });
  }
  return pendingPromises[id + hash$1];
};
const parseContent = async (id, content, opts = {}) => {
  const nitroApp = useNitroApp();
  const config = contentConfig();
  const options = defu(
    opts,
    {
      markdown: {
        ...config.markdown,
        highlight: config.highlight
      },
      csv: config.csv,
      yaml: config.yaml,
      transformers: transformers,
      pathMeta: {
        defaultLocale: config.defaultLocale,
        locales: config.locales,
        respectPathCase: config.respectPathCase
      }
    }
  );
  const file = { _id: id, body: typeof content === "string" ? content.replace(/\r\n|\r/g, "\n") : content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
};
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, query, ...pathParts) {
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  const config = contentConfig();
  const queryBuilder = advanceQuery ? createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: false }) : createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: true });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _stem: 1, $numeric: true }];
    }
    if (config.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: config.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

const _9x9SHt3M8L = defineNitroPlugin(async (nitro) => {
  const storage = useStorage();
  const unwatch = await storage.watch(async (event, key) => {
    if (key.startsWith("content:source")) {
      cleanCachedContents();
    }
  });
  nitro.hooks.hook("close", async () => {
    typeof unwatch === "function" && await unwatch();
  });
});

const plugins = [
  _aMXs1x52N9,
_SxHMrvSQij,
_9x9SHt3M8L
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const _UVpDio = defineEventHandler((event) => {
  {
    const url = getRequestURL(event);
    if (url.pathname.indexOf("/api") !== -1) {
      const path = url.pathname.replace("/api", "/mock");
      return sendProxy(event, (process.env.BASE_URL || "http://localhost:3000") + path);
    }
  }
});

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2]?.match(/\/(.*)\/([dgimsuy]*)$/);
    return regex?.[1] ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery$1(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid]?.where && !Array.isArray(memory[qid]?.where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, Number.parseInt(order || "0", 10)];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _3BN9qW = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  if (query.first) {
    let contentQuery = serverQueryContent(event, query);
    if (!advanceQuery) {
      contentQuery = contentQuery.withDirConfig();
    }
    const content = await contentQuery.findOne();
    const _result = advanceQuery ? content?.result : content;
    const missing = !_result && !content?.dirConfig?.navigation?.redirect && !content?._dir?.navigation?.redirect;
    if (missing) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  if (query.count) {
    return serverQueryContent(event, query).count();
  }
  return serverQueryContent(event, query).find();
});

const _6D6XIB = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage().setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents: content.experimental.cacheContents ? contents : [],
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  if (navigation === false) {
    return [];
  }
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1]?.match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      if (dirConfig) {
        Object.assign(
          navItem,
          pickNavigationFields(dirConfig)
        );
      }
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...conf && pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  nav.forEach((item) => {
    item._file = item._file.split(".").slice(0, -1).join(".");
  });
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _ctyBIN = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage().getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = (dirConfigs?.result || dirConfigs).reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents?.result || contents, configs);
});

const _lazy_PnmwgY = () => Promise.resolve().then(function () { return home_get$3; });
const _lazy_wgKHZv = () => Promise.resolve().then(function () { return home_get$1; });
const _lazy_DAZqkP = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _UVpDio, lazy: false, middleware: true, method: undefined },
  { route: '/api/home', handler: _lazy_PnmwgY, lazy: true, middleware: false, method: "get" },
  { route: '/mock/home', handler: _lazy_wgKHZv, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_DAZqkP, lazy: true, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _3BN9qW, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _3BN9qW, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _3BN9qW, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.json', handler: _6D6XIB, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _ctyBIN, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _ctyBIN, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _ctyBIN, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_DAZqkP, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const remarkPlugins = {
};

const rehypePlugins = {
};

const highlight = {};

const mdcImports = /*#__PURE__*/Object.freeze({
  __proto__: null,
  highlight: highlight,
  rehypePlugins: rehypePlugins,
  remarkPlugins: remarkPlugins
});

let configs;
function getMdcConfigs () {
if (!configs) {
  configs = Promise.all([
  ]);
}
return configs
}

const mdcConfigs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getMdcConfigs: getMdcConfigs
});

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + messages.statusCode + " - " + messages.statusMessage + " | " + messages.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}h1,p,pre{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0 / var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme: dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}}@media (min-width: 640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();<\/script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">` + messages.statusCode + '</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' + messages.description + '</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' + messages.stack + "</pre></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const home_get$2 = defineEventHandler(() => {
  return {
    code: 200,
    data: {
      swipers: [],
      projects: [],
      courses: [],
      "swiper-projects": []
    }
  };
});

const home_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: home_get$2
});

const data = [
	{
		img: "//img.mukewang.com/szimg/6413dfb109769c8205400304.jpg",
		title: "SpringCloudalibaba+Vue开发仿社交小程序",
		level: "初阶",
		num: "16",
		discount: "上新特惠",
		price: "￥299.00",
		originPrice: "￥348.00",
		directions: [
			"前端开发",
			"后端开发",
			"运维&测试"
		],
		categories: [
			"小程序",
			"Java",
			"SpringBoot",
			"Spring Cloud",
			"中间件"
		]
	},
	{
		img: "//img.mukewang.com/szimg/640a90e109f8fe7805400304.jpg",
		title: "Web3.0入门与实战 一站式掌握4大主流区块链开发",
		level: "零基础",
		num: "31",
		discount: "上新特惠",
		price: "￥268.00",
		originPrice: "￥299.00",
		directions: [
			"前沿技术"
		],
		categories: [
			"微服务",
			"区块链",
			"以太坊",
			"超级账本"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63f5e2410947095705400304.jpg",
		title: "Web安全渗透测试 掌握绝大多数Web漏洞原理及攻防手段",
		level: "零基础",
		num: "46",
		discount: "上新特惠\n6\n01:03:32",
		price: "￥718.00",
		originPrice: "￥799.00",
		directions: [
			"运维&测试"
		],
		categories: [
			"测试",
			"安全测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/64094eae08e9e13905400304.jpg",
		title: "新版Springboot3.0打造能落地的高并发仿12306售票系统",
		level: "进阶",
		num: "52",
		discount: "上新特惠",
		price: "￥438.00",
		originPrice: "￥499.00",
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Java",
			"SpringBoot",
			"Spring Cloud",
			"MySQL",
			"Redis"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6400732c0821a6f905400304.jpg",
		title: "前端必学 40个精选案例实战 从零吃透HTML5+CSS3+JS",
		level: "零基础",
		num: "16",
		discount: "上新特惠",
		price: "￥539.00",
		originPrice: "￥599.00",
		directions: [
			"前端开发"
		],
		categories: [
			"JavaScript",
			"Html5",
			"CSS3"
		]
	},
	{
		img: "//img.mukewang.com/szimg/640a71960921f0d505400304.jpg",
		title: "最新 React 技术栈，实战复杂低代码项目-仿问卷星",
		level: "进阶",
		num: "39",
		discount: "上新特惠",
		price: "￥849.00",
		originPrice: "￥999.00",
		directions: [
			"前端开发"
		],
		categories: [
			"React.JS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63ef2591084284be05400304.jpg",
		title: "Vue3+TS+Vite+Vant-UI 开发双端招聘APP",
		level: "零基础",
		num: "43",
		discount: null,
		price: "￥699.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"Typescript",
			"CSS",
			"CSS3"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63ef3f2209f4951705400304.jpg",
		title: "RN从0到1系统精讲与小红书APP实战（2023版）",
		level: "进阶",
		num: "63",
		discount: null,
		price: "￥599.00",
		originPrice: null,
		directions: [
			"前端开发",
			"移动开发"
		],
		categories: [
			"React.JS",
			"Android",
			"iOS",
			"React native"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63ef4f8a0996679705400304.jpg",
		title: "基于GO语言，K8s+gRPC实战云原生微服务开发",
		level: "进阶",
		num: "76",
		discount: "上新特惠\n1\n01:03:32",
		price: "￥298.00",
		originPrice: "￥349.00",
		directions: [
			"后端开发",
			"云计算&大数据"
		],
		categories: [
			"Go",
			"容器",
			"Docker",
			"Kubernetes"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6406eba5081f01b505400304.jpg",
		title: "（最新版）Python 分布式爬虫与 JS 逆向进阶实战",
		level: "初阶",
		num: "23",
		discount: "上新特惠",
		price: "￥388.00",
		originPrice: "￥448.00",
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Python",
			"爬虫",
			"MongoDB"
		]
	},
	{
		img: "//img.mukewang.com/szimg/640060990955900105400304.jpg",
		title: "React18+TS+Vite 进阶实战 阅读类App",
		level: "进阶",
		num: "25",
		discount: "上新特惠",
		price: "￥368.00",
		originPrice: "￥399.00",
		directions: [
			"前端开发"
		],
		categories: [
			"Typescript",
			"React.JS",
			"JavaScript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63fd667009b2198400000000.jpg",
		title: "TS 从入门到深度掌握，晋级TypeScript高手",
		level: "进阶",
		num: "147",
		discount: "上新特惠",
		price: "￥339.00",
		originPrice: "￥399.00",
		directions: [
			"前端开发"
		],
		categories: [
			"Typescript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63f3349609a5b45c05400304.jpg",
		title: "C/C++ 从0到1系统精讲 项目开发综合基础课",
		level: "初阶",
		num: "104",
		discount: "上新特惠\n1\n01:03:32",
		price: "￥368.00",
		originPrice: "￥399.00",
		directions: [
			"后端开发"
		],
		categories: [
			"C",
			"C++"
		]
	},
	{
		img: "//img.mukewang.com/szimg/634e6c9509ca28b205400304.jpg",
		title: "SpringBoot2.X + Vue + UniAPP，全栈开发医疗小程序",
		level: "初阶",
		num: "352",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"前端开发",
			"后端开发"
		],
		categories: [
			"小程序",
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6380338b09edb25005400304.jpg",
		title: "WebGL+Three.js 入门与实战，系统学习 Web3D 技术",
		level: "零基础",
		num: "417",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"JavaScript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/628f210309d1343005400304.jpg",
		title: "Node.js工程师养成计划 保姆级教程 快速入门实战收尾",
		level: "初阶",
		num: "171",
		discount: null,
		price: "￥999.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/634e0b8808f0c1c905400304.jpg",
		title: "前端面试全家桶，从求职准备到面试演练",
		level: "进阶",
		num: "158",
		discount: null,
		price: "￥1299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"React.JS",
			"JavaScript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63441f8509afcc2305400304.jpg",
		title: "国家级认证-信息系统项目管理师(高)通关课，备战2023",
		level: "高阶",
		num: "137",
		discount: null,
		price: "￥999.00",
		originPrice: null,
		directions: [
			"求职面试",
			"职场软技能",
			"软考/认证"
		],
		categories: [
			"求职面试",
			"职场软技能",
			"软考"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62af38e10980ff6b05400304.jpg",
		title: "产品经理电商系统实战，全面掌握前后端设计精髓",
		level: "进阶",
		num: "127",
		discount: null,
		price: "￥1299.00",
		originPrice: null,
		directions: [
			"前沿技术",
			"产品设计"
		],
		categories: [
			"数据分析&挖掘",
			"设计工具",
			"产品交互"
		]
	},
	{
		img: "//img.mukewang.com/szimg/623931dc09c59e7600000000.jpg",
		title: "多端全栈项目实战，大型商业级代驾业务全流程落地",
		level: "进阶",
		num: "393",
		discount: null,
		price: "￥1299.00",
		originPrice: null,
		directions: [
			"前端开发",
			"后端开发",
			"前沿技术",
			"数据库"
		],
		categories: [
			"小程序",
			"Java",
			"微服务",
			"NoSql"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63ec343809bd4f9905400304.jpg",
		title: "百度官方出品--代码的艺术 卓越工程师必修课",
		level: "零基础",
		num: "115",
		discount: null,
		price: "￥99.00",
		originPrice: null,
		directions: [
			"职场软技能"
		],
		categories: [
			"职场软技能"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63eb544909d36c1a05400304.jpg",
		title: "国家级认证-系统集成项目管理工程师(中)一站式通关课",
		level: "进阶",
		num: "25",
		discount: null,
		price: "￥699.00",
		originPrice: null,
		directions: [
			"求职面试",
			"软考/认证"
		],
		categories: [
			"求职面试",
			"软考"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63db301c09ba3a2305400304.jpg",
		title: "轻松掌握Python+主流测试框架，快速转型自动化测试",
		level: "零基础",
		num: "122",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"自动化测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63bbd16b09928a0605400304.jpg",
		title: "Python 量化交易工程师养成实战-金融高薪领域",
		level: "进阶",
		num: "192",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术",
			"云计算&大数据"
		],
		categories: [
			"Python",
			"机器学习",
			"数据分析&挖掘",
			"大数据"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63bba713092ff3ff05400304.jpg",
		title: "Pytorch框架全流程开发医学影像端到端判别实战项目",
		level: "初阶",
		num: "77",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术"
		],
		categories: [
			"Python",
			"机器学习",
			"深度学习"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63b3ecc309cd911100000000.jpg",
		title: "Netty+SpringBoot 开发即时通讯系统",
		level: "初阶",
		num: "214",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63ae5739094383fb05400304.jpg",
		title: "TensorFlow+CNN实战AI图像处理，轻松入行计算机视觉",
		level: "初阶",
		num: "38",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术"
		],
		categories: [
			"Python",
			"深度学习",
			"计算机视觉"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63a26398099ff25405400304.jpg",
		title: "系统解析JDK源码，领略大牛设计思想，JAVA面试必备",
		level: "初阶",
		num: "75",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"后端开发",
			"求职面试"
		],
		categories: [
			"Java",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/639989a5081b677f05400304.jpg",
		title: "Vue3+Pinia+Vite+TS 还原高性能外卖APP项目",
		level: "零基础",
		num: "157",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"Typescript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63902ffa09112c6a05400304.jpg",
		title: "1V1私人定制-互联网求职简历指导服务",
		level: "零基础",
		num: "9",
		discount: null,
		price: "￥499.00",
		originPrice: null,
		directions: [
			"求职面试"
		],
		categories: [
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63773e56090d2b2205400304.jpg",
		title: "Nacos 核心原理解读+高性能微服务系统实战",
		level: "高阶",
		num: "38",
		discount: null,
		price: "￥499.00",
		originPrice: null,
		directions: [
			"前端开发",
			"后端开发"
		],
		categories: [
			"Vue.js",
			"Java",
			"SpringBoot",
			"Spring Cloud"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6364defd090e2d6f05400304.jpg",
		title: "ES8搜索引擎从基础入门到深度原理，实现综合运用实战",
		level: "进阶",
		num: "122",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发",
			"云计算&大数据",
			"运维&测试"
		],
		categories: [
			"Java",
			"SpringBoot",
			"大数据",
			"中间件"
		]
	},
	{
		img: "//img.mukewang.com/szimg/636c93e408d03f9e05400304.jpg",
		title: "看动画，轻松学习23种C++设计模式",
		level: "进阶",
		num: "140",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"C",
			"C++"
		]
	},
	{
		img: "//img.mukewang.com/szimg/636c706b09c2a5d305400304.jpg",
		title: "MySQL/Redis等6大数据库,在7种Java业务中的选型与调优",
		level: "进阶",
		num: "113",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Java",
			"MySQL",
			"Redis",
			"MongoDB",
			"NoSql"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6360d7cd095b52f005400304.jpg",
		title: "Webpack5 入门与实战，前端开发必备技能",
		level: "零基础",
		num: "92",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Node.js",
			"前端工具"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6360d709098bdaf305400304.jpg",
		title: "Vue3源码解析，打造自己的Vue3框架，领悟尤大思维精髓",
		level: "高阶",
		num: "213",
		discount: null,
		price: "￥599.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"Typescript",
			"JavaScript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6358ebd6090934ea05400304.jpg",
		title: "NestJS 入门到实战 前端必学服务端新趋势",
		level: "进阶",
		num: "271",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/634227310935026805400304.jpg",
		title: "自主搭建5个精品脚手架，助力前端研发全流程提效",
		level: "进阶",
		num: "185",
		discount: null,
		price: "￥499.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"JavaScript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/633275070927907705400304.jpg",
		title: "SpringCloud整合Dubbo3实战高并发微服务架构设计",
		level: "进阶",
		num: "151",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Java",
			"SpringBoot",
			"Spring Cloud",
			"MySQL",
			"Redis",
			"NoSql"
		]
	},
	{
		img: "//img.mukewang.com/szimg/632d59840927c04b05400304.jpg",
		title: "Vue3 + React18 + TS4入门到实战 系统学习3大热门技术",
		level: "初阶",
		num: "162",
		discount: null,
		price: "￥799.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"Typescript",
			"React.JS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/632433df09c97d1905400304.jpg",
		title: "PHP+Go 开发仿简书，实战高并发高可用微服务架构",
		level: "进阶",
		num: "105",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"PHP"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6311b4be096c894105400304.jpg",
		title: "9大业务场景实战Hadoop+Flink，完成大数据能力进修",
		level: "初阶",
		num: "31",
		discount: null,
		price: "￥1999.00",
		originPrice: null,
		directions: [
			"云计算&大数据"
		],
		categories: [
			"大数据",
			"Hadoop",
			"Flink"
		]
	},
	{
		img: "//img.mukewang.com/szimg/631871ae09a7dfb705400304.jpg",
		title: "Go 开发者的涨薪通道，自主开发 PaaS 平台核心功能",
		level: "进阶",
		num: "304",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Go"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6318426f09c8371505400304.jpg",
		title: "职场人产品思维训练指南",
		level: "零基础",
		num: "80",
		discount: null,
		price: "￥699.00",
		originPrice: null,
		directions: [
			"职场软技能"
		],
		categories: [
			"职场软技能"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6315af73099e1e2905400304.jpg",
		title: "Web 安全实战宝典 系统学习网络安全核心技能",
		level: "初阶",
		num: "181",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"安全测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63083c25090b81b605400304.jpg",
		title: "高级前端进阶必修，自主打造高扩展的业务组件库",
		level: "进阶",
		num: "113",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Typescript",
			"React.JS",
			"Sass/Less"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62fca73c097563b805400304.jpg",
		title: "互联网人副业指南 传授思维与方法 启动你的首个项目",
		level: "初阶",
		num: "245",
		discount: null,
		price: "￥799.00",
		originPrice: null,
		directions: [
			"前端开发",
			"职场软技能"
		],
		categories: [
			"Vue.js",
			"职场软技能"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62f5fa090950c28005400304.jpg",
		title: "轻松入门大数据 玩转Flink，打造湖仓一体架构",
		level: "进阶",
		num: "63",
		discount: null,
		price: "￥1299.00",
		originPrice: null,
		directions: [
			"云计算&大数据"
		],
		categories: [
			"Flink"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62df5531092d892605400304.jpg",
		title: "前端模拟面试，给你真实的求职体验和面试经验",
		level: "零基础",
		num: "161",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"React.JS",
			"Node.js",
			"CSS",
			"Html5",
			"CSS3"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62da505609bcbabe05400304.jpg",
		title: "Spark+ClickHouse实战企业级数据仓库，进军大厂必备",
		level: "进阶",
		num: "128",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"云计算&大数据",
			"数据库"
		],
		categories: [
			"大数据",
			"Spark",
			"MySQL"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62d61d00094731ab05400304.jpg",
		title: "Selenium3+Pytest+Allure 全流程实战自动化测试",
		level: "进阶",
		num: "288",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"测试",
			"自动化测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62bd09e60925fdb305400304.jpg",
		title: "人人都该懂密码学，通用密码学原理与应用实战",
		level: "零基础",
		num: "156",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"计算机基础"
		],
		categories: [
			"计算机网络",
			"算法与数据结构"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62abe55f09a12de305400304.jpg",
		title: "职场人必修课，高效沟通与自信表达",
		level: "零基础",
		num: "385",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"求职面试",
			"职场软技能"
		],
		categories: [
			"求职面试",
			"职场软技能"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62abecd0098332d705400304.jpg",
		title: "构建数据分析工程师能力模型，实战八大企业级项目",
		level: "进阶",
		num: "140",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术"
		],
		categories: [
			"Python",
			"数据分析&挖掘"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62a83db409bda32905400304.jpg",
		title: "前端高手养成计划-从前端到后端，全栈开发大型项目",
		level: "进阶",
		num: "166",
		discount: null,
		price: "￥1299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"Typescript",
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62a347a5098577e405400304.jpg",
		title: "海量数据高并发场景，构建Go+ES8企业级搜索微服务",
		level: "高阶",
		num: "184",
		discount: null,
		price: "￥599.00",
		originPrice: null,
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Go",
			"MySQL",
			"Redis",
			"MongoDB"
		]
	},
	{
		img: "//img.mukewang.com/szimg/629f06690989e40705400304.jpg",
		title: "基于Flutter 3.x 实战跨平台仿抖音App混合开发",
		level: "初阶",
		num: "298",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Flutter",
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6295d3c5094c3b2a05400304.jpg",
		title: "职业生涯第一课，重塑自我认知，做出理想职业规划",
		level: "零基础",
		num: "352",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"求职面试",
			"职场软技能"
		],
		categories: [
			"求职面试",
			"职场软技能"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6290333009a9cf6705400304.jpg",
		title: "算法与数据结构高手养成-求职提升特训课",
		level: "进阶",
		num: "187",
		discount: null,
		price: "￥1299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础",
			"求职面试",
			"职场软技能"
		],
		categories: [
			"C++",
			"算法与数据结构",
			"求职面试",
			"职场软技能"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62afd30d092f6b0605400304.jpg",
		title: "NGINX官方职业技能认证（NAA），全国通用企业认可",
		level: "初阶",
		num: "58",
		discount: null,
		price: "￥1400.00",
		originPrice: null,
		directions: [
			"求职面试",
			"软考/认证"
		],
		categories: [
			"求职面试",
			"IT认证"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62f9aca20969ca5f05400304.jpg",
		title: "轻松入门大数据 一站式完成核心能力构建",
		level: "零基础",
		num: "128",
		discount: null,
		price: "￥1199.00",
		originPrice: null,
		directions: [
			"后端开发",
			"云计算&大数据"
		],
		categories: [
			"Java",
			"大数据",
			"Hadoop"
		]
	},
	{
		img: "//img.mukewang.com/szimg/627a10db09faa69d00000000.jpg",
		title: "深入Go底层原理，重写Redis中间件实战",
		level: "高阶",
		num: "354",
		discount: null,
		price: "￥499.00",
		originPrice: null,
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Go",
			"Redis"
		]
	},
	{
		img: "//img.mukewang.com/szimg/627485b20904b78505400304.jpg",
		title: "基于 Vue3 ，打造前台+中台通用开发提效解决方案",
		level: "高阶",
		num: "584",
		discount: null,
		price: "￥499.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6264aea709305c8605400304.jpg",
		title: "快速掌握前端必会的 7 种设计模式",
		level: "进阶",
		num: "305",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"JavaScript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/625e46550973116905400304.jpg",
		title: "全新版-Java分布式架构设计与开发实战",
		level: "进阶",
		num: "258",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术",
			"数据库"
		],
		categories: [
			"Java",
			"微服务",
			"Redis"
		]
	},
	{
		img: "//img.mukewang.com/szimg/625d283009abda5905400304.jpg",
		title: "云原生+边缘计算项目实战-KubeEdge打造边缘管理平台",
		level: "进阶",
		num: "168",
		discount: null,
		price: "￥468.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术",
			"云计算&大数据"
		],
		categories: [
			"Python",
			"机器学习",
			"容器",
			"Kubernetes"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62abe54a09cf15b505400304.jpg",
		title: "优秀职场人必修课-职场心理学, 助你走出内耗陷阱",
		level: "初阶",
		num: "498",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"求职面试",
			"职场软技能"
		],
		categories: [
			"求职面试",
			"职场软技能"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62396ad809c7f8d700000000.jpg",
		title: "Next.js+React+Node系统实战，搞定SSR服务器渲染",
		level: "进阶",
		num: "280",
		discount: null,
		price: "￥398.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Typescript",
			"React.JS",
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6369ca3a09a1d23405400304.jpg",
		title: "Vue3+TS打造SSR网站应用，0到1实现服务端渲染",
		level: "高阶",
		num: "270",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"Typescript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62abe5340986f0d605400304.jpg",
		title: "构建千万级高可用企业级Node.js应用",
		level: "进阶",
		num: "261",
		discount: null,
		price: "￥398.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"JavaScript",
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/622aaf620945c5a305400304.jpg",
		title: "基于阿里云平台，从0构建云原生应用架构与开发实战",
		level: "进阶",
		num: "129",
		discount: null,
		price: "￥598.00",
		originPrice: null,
		directions: [
			"后端开发",
			"云计算&大数据"
		],
		categories: [
			"Java",
			"阿里云"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6226b94e0958682505400304.jpg",
		title: "测试高薪必学-大厂全链路质量保障体系落地实战",
		level: "进阶",
		num: "153",
		discount: null,
		price: "￥488.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"自动化运维",
			"测试",
			"性能测试",
			"自动化测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6221cd1f0986be2805400304.jpg",
		title: "C#速成指南--从入门到进阶，实战WPF与Unity3D开发",
		level: "初阶",
		num: "465",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"后端开发",
			"运维&测试",
			"数据库",
			"游戏"
		],
		categories: [
			".net",
			"C#",
			"测试",
			"SQL Server",
			"Unity 3D"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62af38cf0986da5705400304.jpg",
		title: "吃透前端工程化，大厂级实战项目以战带练",
		level: "进阶",
		num: "193",
		discount: null,
		price: "￥1680.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Typescript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/620b4390094b8c2105400304.jpg",
		title: "2周刷完100道前端优质面试真题 双越最新力作",
		level: "进阶",
		num: "1291",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"React.JS",
			"JavaScript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/620c7540083297d605400304.jpg",
		title: "Android面试超级攻略，攻破技术疑难及面试痛点",
		level: "进阶",
		num: "236",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发",
			"移动开发",
			"求职面试"
		],
		categories: [
			"Java",
			"Android",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6200d55009876b4805400304.jpg",
		title: "破解JavaScript高级玩法，成为精通 JS 的原生专家",
		level: "进阶",
		num: "560",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"JavaScript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/61e6361809ebba7a05400304.jpg",
		title: "全局视角系统学习《推荐系统》，实战中提升竞争力",
		level: "进阶",
		num: "246",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术",
			"云计算&大数据",
			"数据库"
		],
		categories: [
			"Python",
			"机器学习",
			"深度学习",
			"Spark",
			"Redis"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62abe3b009a80a7805400304.jpg",
		title: "一课玩转自动化运维全流程，轻松应对自动化运维岗",
		level: "初阶",
		num: "187",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"运维",
			"运维工具"
		]
	},
	{
		img: "//img.mukewang.com/szimg/61cea14c09177c8205400304.jpg",
		title: "系统入门云计算服务，项目上云综合实战",
		level: "初阶",
		num: "165",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"云计算&大数据",
			"运维&测试"
		],
		categories: [
			"云计算",
			"OpenStack",
			"AWS",
			"容器",
			"Docker",
			"运维"
		]
	},
	{
		img: "//img.mukewang.com/szimg/61c567a509444bcd05400304.jpg",
		title: "SpringBoot 2.x 实战仿B站高性能后端项目",
		level: "初阶",
		num: "685",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"SpringBoot",
			"Spring Cloud"
		]
	},
	{
		img: "//img.mukewang.com/szimg/620dbb700906d77305400304.jpg",
		title: "基于React + Redux/Mobx搞定大型复杂项目的状态管理",
		level: "进阶",
		num: "135",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"React.JS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/61b8446e0935f7be05400304.jpg",
		title: "14小时讲透Spring5新特性,重点讲解WebFlux响应式编程",
		level: "进阶",
		num: "169",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/61b31c1a09b8a5a505400304.jpg",
		title: "Shell 高阶开发实战，轻松应对集群化，分布式环境",
		level: "进阶",
		num: "162",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"运维",
			"自动化运维",
			"运维工具",
			"Linux"
		]
	},
	{
		img: "//img.mukewang.com/szimg/61adb6e709f77efb05400304.jpg",
		title: "Taro3+Mysql+Express开发企业级出行全栈项目",
		level: "进阶",
		num: "100",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"React.JS",
			"前端工具"
		]
	},
	{
		img: "//img.mukewang.com/szimg/61a9b12209fdc07405400304.jpg",
		title: "C/C++气象数据中心实战，手把手教你做工业级项目",
		level: "进阶",
		num: "832",
		discount: null,
		price: "￥568.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"C",
			"C++"
		]
	},
	{
		img: "//img.mukewang.com/szimg/619c95910957562305400304.jpg",
		title: "基于Vue3+Vite+TS，二次封装element-plus业务组件",
		level: "进阶",
		num: "351",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"JavaScript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/619704dd092215a305400304.jpg",
		title: "讲透机器学习概率统计，快速打造算法基础核心能力",
		level: "进阶",
		num: "276",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"计算机基础",
			"前沿技术"
		],
		categories: [
			"计算机网络",
			"数学",
			"机器学习",
			"数据分析&挖掘"
		]
	},
	{
		img: "//img.mukewang.com/szimg/617f536d09170b4105400304.jpg",
		title: "React 配置化+Serverless,落地低代码+云原生全栈开发",
		level: "进阶",
		num: "293",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发",
			"云计算&大数据"
		],
		categories: [
			"Typescript",
			"React.JS",
			"Node.js",
			"阿里云"
		]
	},
	{
		img: "//img.mukewang.com/szimg/617b6b8709cd81b500000000.jpg",
		title: "SpringBoot+Uniapp实战开发仿抖音短视频App",
		level: "初阶",
		num: "545",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Java",
			"SpringBoot",
			"Spring Cloud",
			"MySQL",
			"Redis",
			"MongoDB",
			"NoSql"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6176196209f173ef05400304.jpg",
		title: "WebRTC源码级深度解析，进阶大厂高级音视频开发者",
		level: "高阶",
		num: "473",
		discount: null,
		price: "￥499.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础"
		],
		categories: [
			"C",
			"计算机网络"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62e77b8f0976941c05400304.jpg",
		title: "全新升级，基于Vue3新标准，打造后台综合解决方案",
		level: "高阶",
		num: "1575",
		discount: null,
		price: "￥458.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"HTML/CSS",
			"JavaScript",
			"前端工具",
			"CSS",
			"Html5",
			"CSS3"
		]
	},
	{
		img: "//img.mukewang.com/szimg/616e59ae09168c8705400304.jpg",
		title: "玩转机器学习之神经网络，系统入门算法工程师",
		level: "初阶",
		num: "273",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础",
			"前沿技术"
		],
		categories: [
			"Python",
			"算法与数据结构",
			"机器学习",
			"深度学习"
		]
	},
	{
		img: "//img.mukewang.com/szimg/61679b1c0989c24f05400304.jpg",
		title: "DDD（领域驱动设计）思想解读及优秀实践",
		level: "初阶",
		num: "730",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/614d42de09c03b3705400304.jpg",
		title: "前端校招面试攻略，无惧层层考核，实现Offer零距离",
		level: "初阶",
		num: "154",
		discount: null,
		price: "￥268.00",
		originPrice: null,
		directions: [
			"求职面试"
		],
		categories: [
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6145762e0918314105400304.jpg",
		title: "Dubbo 3 深度剖析 - 透过源码认识你",
		level: "进阶",
		num: "212",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/637495e508639b3c05400304.jpg",
		title: "7天快速学习计算机基础必考八股文",
		level: "进阶",
		num: "348",
		discount: null,
		price: "￥268.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础",
			"求职面试"
		],
		categories: [
			"Java",
			"C++",
			"计算机网络",
			"算法与数据结构",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/613b04f409d0794305400304.jpg",
		title: "物联网基础入门，实战可落地的 AIoT 项目",
		level: "零基础",
		num: "178",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6124bf8c09eb7d2700000000.jpg",
		title: "SpringBoot+Vue3 项目实战，打造企业级在线办公系统",
		level: "进阶",
		num: "1819",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"前端开发",
			"后端开发"
		],
		categories: [
			"Vue.js",
			"SpringBoot",
			"SSM"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6114de0d099dc44805400304.jpg",
		title: "Spark+ES+ClickHouse 构建DMP用户画像",
		level: "进阶",
		num: "241",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"云计算&大数据"
		],
		categories: [
			"大数据",
			"Spark"
		]
	},
	{
		img: "//img.mukewang.com/szimg/610b7d28098ae17005400304.jpg",
		title: "轻松实现Rust系统入门，实战编译器开发",
		level: "初阶",
		num: "335",
		discount: null,
		price: "￥268.00",
		originPrice: null,
		directions: [
			"计算机基础"
		],
		categories: [
			"计算机网络"
		]
	},
	{
		img: "//img.mukewang.com/szimg/61020c9b09c6961c05400304.jpg",
		title: "前端主流布局系统进阶与实战，轻松解决页面布局难题",
		level: "初阶",
		num: "605",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"CSS3"
		]
	},
	{
		img: "//img.mukewang.com/szimg/60f0edec095144e505400304.jpg",
		title: "Spring Cloud / Alibaba 微服务架构实战",
		level: "进阶",
		num: "1034",
		discount: null,
		price: "￥488.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot",
			"Spring Cloud"
		]
	},
	{
		img: "//img.mukewang.com/szimg/60ec1dde09f4b5ad05400304.jpg",
		title: "Python高级爬虫实战-系统掌握破解反爬技能 挑战高薪",
		level: "进阶",
		num: "341",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python",
			"爬虫"
		]
	},
	{
		img: "//img.mukewang.com/szimg/60e7f66c095fa85105400304.jpg",
		title: "Vite 从入门到精通，玩转新时代前端构建法则",
		level: "进阶",
		num: "655",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"Typescript",
			"React.JS",
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6112177809906d3b05400304.jpg",
		title: "0到1快速掌握Java全栈开发，玩转微信生态",
		level: "初阶",
		num: "160",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发",
			"后端开发"
		],
		categories: [
			"小程序",
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/60dea91109143a3005400304.jpg",
		title: "uni-app从入门到进阶 系统完成项目实战",
		level: "初阶",
		num: "860",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"小程序"
		]
	},
	{
		img: "//img.mukewang.com/szimg/60d44ede0802f6b705400304.jpg",
		title: "从0打造微前端框架，实战汽车资讯平台",
		level: "高阶",
		num: "671",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"前端开发",
			"前沿技术"
		],
		categories: [
			"JavaScript",
			"前端工具",
			"微服务"
		]
	},
	{
		img: "//img.mukewang.com/szimg/60cc0edf09706cb005400304.jpg",
		title: "Unity 全流程开发游戏BallSort，助力迈入游戏高薪领域",
		level: "初阶",
		num: "183",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"移动开发",
			"游戏"
		],
		categories: [
			"Android",
			"iOS",
			"Unity 3D"
		]
	},
	{
		img: "//img.mukewang.com/szimg/60cc04f609f2d0e205400304.jpg",
		title: "Docker 系统性入门+进阶实践（最新版）",
		level: "进阶",
		num: "1621",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"云计算&大数据"
		],
		categories: [
			"容器",
			"Docker"
		]
	},
	{
		img: "//img.mukewang.com/szimg/60b9864a09995aa605400304.jpg",
		title: "高并发，高性能，高可用的MySQL实战",
		level: "进阶",
		num: "674",
		discount: null,
		price: "￥268.00",
		originPrice: null,
		directions: [
			"数据库"
		],
		categories: [
			"MySQL"
		]
	},
	{
		img: "//img.mukewang.com/szimg/609e0f92098f624a05400304.jpg",
		title: "Python操作三大主流数据库 实战网易新闻客户端",
		level: "零基础",
		num: "349",
		discount: null,
		price: "￥268.00",
		originPrice: null,
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Python",
			"Flask",
			"MySQL",
			"Redis",
			"MongoDB"
		]
	},
	{
		img: "//img.mukewang.com/szimg/609b4519097a76c805400304.jpg",
		title: "Flink+ClickHouse 玩转企业级实时大数据开发",
		level: "进阶",
		num: "820",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"云计算&大数据"
		],
		categories: [
			"大数据",
			"Flink"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62562e9609c3272d05400304.jpg",
		title: "2022升级-《慕慕到家》家政小程序组件化进阶实战",
		level: "进阶",
		num: "443",
		discount: null,
		price: "￥398.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"HTML/CSS",
			"JavaScript",
			"小程序"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6094d26809364cee05400304.jpg",
		title: "人人都要学的项目管理课，系统提升开发者管理能力",
		level: "初阶",
		num: "864",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"求职面试",
			"职场软技能"
		],
		categories: [
			"求职面试",
			"职场软技能"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6084e896097956b305400304.jpg",
		title: "Spring Cloud Alibaba 大型互联网领域多场景实践",
		level: "进阶",
		num: "488",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"Spring Cloud"
		]
	},
	{
		img: "//img.mukewang.com/szimg/607e431f094774f005400304.jpg",
		title: "Kaggle竞赛案例剖析，赢得让面试官双眼放光的竞赛经验",
		level: "进阶",
		num: "282",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"前沿技术"
		],
		categories: [
			"机器学习",
			"数据分析&挖掘"
		]
	},
	{
		img: "//img.mukewang.com/szimg/60793fca09fde18b05400304.jpg",
		title: "Vue3+ElementPlus+Koa2 全栈开发后台系统",
		level: "进阶",
		num: "981",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/607cf0c6092a5af105400304.jpg",
		title: "OpenCV三大经典项目实战 一次掌握计算机视觉核心技能",
		level: "进阶",
		num: "657",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前沿技术"
		],
		categories: [
			"计算机视觉"
		]
	},
	{
		img: "//img.mukewang.com/szimg/624660f709a508eb05400304.jpg",
		title: "Vue3开发企业级音乐Web App 明星讲师带你学大厂代码",
		level: "高阶",
		num: "2159",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"WebApp"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6059a92e09bd086a05400304.jpg",
		title: "Java异常与调优一站式解决方案 系统提升解决异常问题和调优能力",
		level: "初阶",
		num: "300",
		discount: null,
		price: "￥268.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6052cdf909c4e61f05400304.jpg",
		title: "CSS架构系统精讲 理论+实战玩转蘑菇街",
		level: "进阶",
		num: "507",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"CSS3"
		]
	},
	{
		img: "//img.mukewang.com/szimg/60497cca092fcd4805400304.jpg",
		title: "Flutter高级进阶实战-仿哔哩哔哩-掌握Flutter高阶技能",
		level: "高阶",
		num: "1407",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Flutter",
			"Android",
			"iOS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/603f61410977606f05400304.jpg",
		title: "程序员理财课 Python量化交易系统实战",
		level: "零基础",
		num: "1518",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6246604f0920373c05400304.jpg",
		title: "笑傲Java面试 剖析大厂高频面试真题 秒变offer收割机",
		level: "进阶",
		num: "1689",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"求职面试"
		],
		categories: [
			"Java",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/60223b8609a8ba1705400304.jpg",
		title: "Spring Boot+Vue3前后端分离，实战wiki知识库系统",
		level: "初阶",
		num: "2003",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发",
			"后端开发",
			"数据库"
		],
		categories: [
			"Vue.js",
			"JavaScript",
			"CSS",
			"Html5",
			"Java",
			"SpringBoot",
			"MySQL",
			"Redis"
		]
	},
	{
		img: "//img.mukewang.com/szimg/600e3d500940234f05400304.jpg",
		title: "Python自动化测试开发实战，能帮你就业的测试课",
		level: "进阶",
		num: "379",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"测试",
			"自动化测试",
			"接口测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5ffd399d090e67a105400304.jpg",
		title: "Kubernetes 入门到进阶实战，系统性掌握 K8s 生产实践",
		level: "进阶",
		num: "1161",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"云计算&大数据"
		],
		categories: [
			"Java",
			"Spring Cloud",
			"Docker",
			"Kubernetes"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5ffd1b25092ab63605400306.jpg",
		title: "React17+Hook+TS4 优质实践，仿 Jira 企业级项目",
		level: "高阶",
		num: "2641",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Typescript",
			"React.JS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fed3a9e0910793205400304.jpg",
		title: "SpringBoot 在线协同办公小程序开发 全栈式项目实战",
		level: "初阶",
		num: "1546",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62ff452308323ab005400304.jpg",
		title: "React18 系统精讲 结合TS打造旅游电商平台",
		level: "进阶",
		num: "1681",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Typescript",
			"React.JS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fe4627f09493ccd05400304.jpg",
		title: "Android 应用程序构建实战+原理精讲",
		level: "进阶",
		num: "358",
		discount: null,
		price: "￥268.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fdb39dd090efbfb05400304.jpg",
		title: "Java高级面试突围课 ,搞定Java中高级面试的必考点",
		level: "高阶",
		num: "1276",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"求职面试"
		],
		categories: [
			"Java",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd343d9093a7d0e05400304.jpg",
		title: "算法面试刷题课--竞赛命题人带你刷70+中高级题型",
		level: "进阶",
		num: "485",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"计算机基础",
			"求职面试"
		],
		categories: [
			"算法与数据结构",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc9e83d08971d8705340300.jpg",
		title: "Go微服务入门到容器化实践，落地可观测微服务项目",
		level: "进阶",
		num: "794",
		discount: null,
		price: "￥368.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术",
			"云计算&大数据"
		],
		categories: [
			"Go",
			"微服务",
			"容器",
			"Docker",
			"Kubernetes"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc5ab8d099b1bee05400304.jpg",
		title: "C语言系统化精讲 重塑编程思想 打造坚实的开发基础",
		level: "进阶",
		num: "1854",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础"
		],
		categories: [
			"C",
			"C++",
			"计算机网络",
			"算法与数据结构"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc065df09d7104105400304.jpg",
		title: "学透协程/进程/线程 程序员必知必会技能",
		level: "进阶",
		num: "238",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础",
			"求职面试"
		],
		categories: [
			"Python",
			"计算机网络",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc0639609b509a600000000.jpg",
		title: "（最新升级）Vue3入门与项目实战 掌握完整知识体系",
		level: "进阶",
		num: "2906",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"JavaScript",
			"WebApp"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc0665409bc2f1405400304.jpg",
		title: "高级Redis进阶课 解决Redis实际问题+掌握Redis6.x特性",
		level: "高阶",
		num: "786",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发",
			"运维&测试",
			"数据库"
		],
		categories: [
			"Java",
			"中间件",
			"Redis"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc0638409e3f98505400304.jpg",
		title: "毕设一课通 高效完成毕业设计（选题/毕设/论文/答辩）",
		level: "零基础",
		num: "341",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"HTML/CSS",
			"JavaScript",
			"Node.js",
			"CSS",
			"Html5",
			"CSS3"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc0668f092fed4200000000.jpg",
		title: "Spring Security+OAuth2 精讲，打造企业级认证与授权",
		level: "进阶",
		num: "888",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc065fe094b85c705400304.jpg",
		title: "Go+Python打造电商系统 自研微服务框架 抓紧高薪机遇",
		level: "进阶",
		num: "468",
		discount: null,
		price: "￥1680.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python",
			"Go"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd19237092ae17b05400304.jpg",
		title: "Java分布式系统解决方案 掌握企业级分布式项目方案",
		level: "进阶",
		num: "460",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1925a09eb9b7205400304.jpg",
		title: "Vue3.0+TS打造企业级组件库 前端中高级开发者必修课",
		level: "高阶",
		num: "1257",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"Typescript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce12ba095ae64005400304.jpg",
		title: "Laravel重构企业级电商项目 从根源解决重构难题",
		level: "进阶",
		num: "389",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"PHP"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce12fe09a4efdb05400304.jpg",
		title: "新RabbitMQ精讲，提升工程实践能力，培养架构思维",
		level: "进阶",
		num: "407",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术",
			"运维&测试"
		],
		categories: [
			"Java",
			"微服务",
			"中间件"
		]
	},
	{
		img: "//img.mukewang.com/szimg/624d0638094a4fb505400304.jpg",
		title: "（新升级）Vue3 + TS 仿知乎专栏企业级项目",
		level: "进阶",
		num: "2814",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"Typescript",
			"JavaScript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc063c709c41a8f05400304.jpg",
		title: "Spring Cloud 进阶 Alibaba 微服务体系自媒体实战",
		level: "进阶",
		num: "998",
		discount: null,
		price: "￥499.00",
		originPrice: null,
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Java",
			"SpringBoot",
			"Spring Cloud",
			"Redis",
			"MongoDB"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd192250939bef805400304.jpg",
		title: "React+React Hook+Egg造轮子 全栈开发旅游电商应用",
		level: "高阶",
		num: "430",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"React.JS",
			"JavaScript",
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/638da6130946e97805400304.jpg",
		title: "Java实操避坑指南 SpringBoot/MySQL/Redis错误详解",
		level: "进阶",
		num: "433",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd192480903b7dc05400304.jpg",
		title: "Spark3大数据实时处理-Streaming+Structured Streaming 实战",
		level: "进阶",
		num: "309",
		discount: null,
		price: "￥488.00",
		originPrice: null,
		directions: [
			"云计算&大数据"
		],
		categories: [
			"大数据",
			"Hadoop",
			"Spark"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce117d0949f00005400304.jpg",
		title: "SpringCloud+Kubernetes 微服务容器化交付实战",
		level: "进阶",
		num: "580",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"后端开发",
			"云计算&大数据"
		],
		categories: [
			"Java",
			"Spring Cloud",
			"容器",
			"Docker",
			"Kubernetes"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce1155097434c805400304.jpg",
		title: "SpringCloud+Vertx+Disruptor 撮合交易系统实战",
		level: "初阶",
		num: "370",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"前端开发",
			"后端开发"
		],
		categories: [
			"Vue.js",
			"Java",
			"Spring Cloud"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc069df0964a4a705400304.jpg",
		title: "Activiti7工作流开发 打造通用型可视化UML工作流系统",
		level: "初阶",
		num: "818",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd191e1093bbaf005400304.jpg",
		title: "Kotlin+组件化 打造AI语音助手App 解锁交互技能包",
		level: "进阶",
		num: "196",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc0670d0982349705400304.jpg",
		title: ".Net Core 开发电商后端API 从0到精通RESTful",
		level: "进阶",
		num: "777",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			".net",
			"C#"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce10ce09e9829905400304.jpg",
		title: "构建JVM知识体系 解决Java工程师必会的工作/面试难点",
		level: "进阶",
		num: "744",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发",
			"求职面试"
		],
		categories: [
			"Java",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd19214097a954d05400304.jpg",
		title: "从1到N实战Go改造PHP 慕优酷 视频网站",
		level: "进阶",
		num: "315",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Go"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc07b9e0933fbf905400304.jpg",
		title: "JavaScript版数据结构与算法 轻松解决前端算法面试",
		level: "进阶",
		num: "2308",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发",
			"计算机基础",
			"求职面试"
		],
		categories: [
			"JavaScript",
			"算法与数据结构",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce11c80904a2d705400304.jpg",
		title: "Java性能调优 6步实现项目性能升级",
		level: "进阶",
		num: "580",
		discount: null,
		price: "￥488.00",
		originPrice: null,
		directions: [
			"后端开发",
			"求职面试"
		],
		categories: [
			"Java",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc07b8509a05b3105400304.jpg",
		title: "数据可视化入门到精通-打造前端差异化竞争力",
		level: "进阶",
		num: "1379",
		discount: null,
		price: "￥999.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"HTML/CSS",
			"JavaScript",
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd192030954e4f805400304.jpg",
		title: "Java支付全家桶 企业级各类支付手段一站式解决方案",
		level: "初阶",
		num: "659",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce11ef099087fb05400304.jpg",
		title: "JavaScript ES(6-11)全版本语法 前端都需要的基础课",
		level: "初阶",
		num: "1217",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"JavaScript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd191f209141e1905400304.jpg",
		title: "PyTorch入门到进阶 实战计算机视觉与自然语言处理项目",
		level: "进阶",
		num: "869",
		discount: null,
		price: "￥499.00",
		originPrice: null,
		directions: [
			"前沿技术"
		],
		categories: [
			"深度学习",
			"计算机视觉",
			"自然语言处理"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce114209c9464e05400304.jpg",
		title: "(打造简历金牌项目)Vue+Go 开发企业级微服务网关项目",
		level: "进阶",
		num: "1251",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发",
			"后端开发"
		],
		categories: [
			"Vue.js",
			"Go"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce112f0930bcd205400304.jpg",
		title: "跨平台应用ReactNative+TypeScript仿喜马拉雅开发App",
		level: "初阶",
		num: "749",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发",
			"移动开发"
		],
		categories: [
			"Typescript",
			"React native"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fced78f0970285300000000.jpg",
		title: "Spring Cloud+ Vue前后端分离开发企业级在线视频系统",
		level: "初阶",
		num: "1618",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"Spring Cloud"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce111c09288d4505400304.jpg",
		title: "Kafka多维度系统精讲，从入门到实战开发",
		level: "进阶",
		num: "777",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发",
			"运维&测试"
		],
		categories: [
			"Java",
			"中间件"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd191c909077e9805400304.jpg",
		title: "Spark2.x+协同过滤算法，开发企业级个性化推荐系统",
		level: "进阶",
		num: "303",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"云计算&大数据"
		],
		categories: [
			"大数据",
			"Hadoop",
			"Spark",
			"Hbase",
			"Storm"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce10ab0954063b05400304.jpg",
		title: "专为程序员设计的高数补习班 贴合开发讲解高数",
		level: "进阶",
		num: "809",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"计算机基础"
		],
		categories: [
			"数学"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc064180941622b05400304.jpg",
		title: "大学计算机必修课新讲--编译原理+操作系统+图形学",
		level: "进阶",
		num: "1688",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础"
		],
		categories: [
			"Java",
			"C++",
			"计算机网络"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62a6db0509c8fdba05400304.jpg",
		title: "（新升级）React18+TS高仿AntD从零到一打造组件库",
		level: "高阶",
		num: "1929",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Typescript",
			"React.JS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce102a095f90c005400304.jpg",
		title: "音视频小白系统入门课 音视频基础+ffmpeg原理",
		level: "零基础",
		num: "1994",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"后端开发",
			"移动开发"
		],
		categories: [
			"C",
			"Android",
			"iOS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0f8009021f4605400304.jpg",
		title: "还原大厂App重构过程 完成企业级项目重构",
		level: "进阶",
		num: "416",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd191b009ece97d05400304.jpg",
		title: "剑指Java自研框架，决胜Spring源码",
		level: "进阶",
		num: "1421",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SSM"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1917709ec3f7b05400304.jpg",
		title: "玩转热门框架 用企业级思维 开发通用够硬的大数据平台",
		level: "进阶",
		num: "456",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"云计算&大数据"
		],
		categories: [
			"大数据",
			"Spark"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6164023209bc7ea405400304.jpg",
		title: "前端框架及项目面试 聚焦Vue3/React/Webpack",
		level: "进阶",
		num: "4398",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"前端开发",
			"求职面试"
		],
		categories: [
			"Vue.js",
			"React.JS",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1918a091fe79705400304.jpg",
		title: "Python3入门人工智能 掌握机器学习+深度学习",
		level: "初阶",
		num: "1498",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术"
		],
		categories: [
			"Python",
			"机器学习"
		]
	},
	{
		img: "//img.mukewang.com/szimg/62f3160409c25d1e05400304.jpg",
		title: "（新升级）重学C++ ，重构你的C++知识体系",
		level: "进阶",
		num: "3506",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础"
		],
		categories: [
			"C",
			"C++",
			"计算机网络"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0ffa09c1ba3d05400304.jpg",
		title: "(新升级） 专为小白设计的TypeScript入门课",
		level: "进阶",
		num: "2112",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Typescript",
			"React.JS",
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce100b09065d6605400304.jpg",
		title: "搞定Java大厂项目面试 轻松打动面试官",
		level: "初阶",
		num: "686",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SSM"
		]
	},
	{
		img: "//img.mukewang.com/szimg/638da68a0919b61e05400304.jpg",
		title: "从0开始学测试 一步迈进互联网",
		level: "初阶",
		num: "1726",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"功能测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0fd30984257405400304.jpg",
		title: "Spark + ElasticSearch 构建电商用户标签系统",
		level: "进阶",
		num: "478",
		discount: null,
		price: "￥328.00",
		originPrice: null,
		directions: [
			"后端开发",
			"云计算&大数据"
		],
		categories: [
			"Java",
			"大数据"
		]
	},
	{
		img: "//img.mukewang.com/szimg/638da6c109a25f2a05400304.jpg",
		title: "深度解密Java并发工具，精通JUC，成为并发多面手",
		level: "进阶",
		num: "1592",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc0639f0992ef7c05400304.jpg",
		title: "开发商业级热门短视频App 掌握Jetpack组件库",
		level: "进阶",
		num: "1345",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0faa09bddbd405400304.jpg",
		title: "JavaScript玩转机器学习-Tensorflow.js项目实战",
		level: "初阶",
		num: "560",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发",
			"前沿技术"
		],
		categories: [
			"JavaScript",
			"机器学习",
			"深度学习"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0f9509a3e5ac05400304.jpg",
		title: "全流程开发 TP6.0实战高并发电商服务系统",
		level: "进阶",
		num: "1397",
		discount: null,
		price: "￥448.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"PHP"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0f4109668ab205400304.jpg",
		title: "性能优化+架构迭代升级 Go读书社区开发与架构优化",
		level: "进阶",
		num: "469",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Go",
			"Redis"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0eca09e109c400000000.jpg",
		title: "Vue全家桶实战 从零独立开发企业级电商系统",
		level: "进阶",
		num: "2437",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0f5509b086fc05400304.jpg",
		title: "图解+仿写 易学好懂的SpringBoot源码课",
		level: "进阶",
		num: "1127",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1912e090418be05400304.jpg",
		title: "Nginx体系化深度精讲 给开发和运维的刚需课程",
		level: "进阶",
		num: "545",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"中间件"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0edc09b126f705400304.jpg",
		title: "学会Kotlin 突破开发语言瓶颈",
		level: "进阶",
		num: "1555",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"移动开发"
		],
		categories: [
			"Java",
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1910309397bd105400304.jpg",
		title: "实战支付+电商双系统 玩转Java技术栈",
		level: "初阶",
		num: "1951",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd19119092f774205400304.jpg",
		title: "Vue Element+Node.js开发企业通用管理后台系统",
		level: "高阶",
		num: "2794",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0eb4093bb29005400304.jpg",
		title: "解锁SpringCloud主流组件 解决微服务诸多难题",
		level: "进阶",
		num: "758",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"后端开发",
			"运维&测试"
		],
		categories: [
			"Java",
			"Spring Cloud",
			"自动化测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6164020a0902065805400304.jpg",
		title: "一天时间高效准备前端技术一面 匹配大厂面试要求",
		level: "初阶",
		num: "4518",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发",
			"求职面试"
		],
		categories: [
			"JavaScript",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0ef609a86c5405400304.jpg",
		title: "Python Flask入门与进阶 开发电影网站",
		level: "初阶",
		num: "709",
		discount: null,
		price: "￥248.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python",
			"Flask"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0b6509cf00d305400304.jpg",
		title: "聚焦市场开发热门技术 手把手带你开发商业级社交App",
		level: "进阶",
		num: "525",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0ea20980c02d05400304.jpg",
		title: "大话HTTP协议 漫画+图解打造的编程基础课程",
		level: "进阶",
		num: "1723",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"计算机基础"
		],
		categories: [
			"计算机网络"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0b5009adf73805400304.jpg",
		title: "Node.js+Koa2框架生态实战 - 从零模拟新浪微博",
		level: "进阶",
		num: "932",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"JavaScript",
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd190f009741a9c05400304.jpg",
		title: "ES7+Spark 构建高匹配度搜索服务+千人千面推荐系统",
		level: "进阶",
		num: "1315",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术"
		],
		categories: [
			"Java",
			"机器学习"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0e8c0992493005400304.jpg",
		title: "Django入门到进阶-适合Python小白的系统课程",
		level: "初阶",
		num: "1016",
		discount: null,
		price: "￥248.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python",
			"Django"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd190d709afb12005400304.jpg",
		title: "百万级高并发WebRTC流媒体服务器设计与开发",
		level: "高阶",
		num: "1880",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"C++"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0b12090cc2a705400304.jpg",
		title: "SparkSQL入门 整合Kudu实现广告业务数据分析",
		level: "进阶",
		num: "511",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"云计算&大数据"
		],
		categories: [
			"大数据",
			"Hadoop",
			"Spark"
		]
	},
	{
		img: "//img.mukewang.com/szimg/638da7db0906784905400304.jpg",
		title: "Linux核心技能与应用",
		level: "初阶",
		num: "1936",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"Linux"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0aec094ba6fc05400304.jpg",
		title: "Java高效编程技巧实践 告别996",
		level: "初阶",
		num: "1375",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0aab09c2e41105400304.jpg",
		title: "Spring Cloud微服务安全实战 可落地的安全方案",
		level: "进阶",
		num: "1019",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot",
			"Spring Cloud"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0b0109dc28f105400304.jpg",
		title: "Electron+React+七牛云 实战跨平台桌面应用",
		level: "进阶",
		num: "1114",
		discount: null,
		price: "￥248.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"React.JS",
			"JavaScript",
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0adb0936fe2c05400304.jpg",
		title: "系统学习Java网络编程 深度理解BIO/NIO/AIO",
		level: "初阶",
		num: "841",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce09d009d11adc05400304.jpg",
		title: "企业级Android架构设计+功能开发",
		level: "进阶",
		num: "1211",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc066e309d6ca5905400304.jpg",
		title: "Spring Cloud微服务实战 打造企业级优惠券系统",
		level: "进阶",
		num: "1104",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Java",
			"SpringBoot",
			"Spring Cloud",
			"Redis"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0a440918728205400304.jpg",
		title: "微信小程序云开发-从0打造云音乐全栈小程序",
		level: "进阶",
		num: "1844",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Node.js",
			"小程序"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1909809284bdd05400304.jpg",
		title: "线程八大核心+Java并发原理及企业级并发解决方案",
		level: "初阶",
		num: "2504",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0a8e0971525305400304.jpg",
		title: "混合开发入门 Vue结合Android/iOS开发仿京东项目App",
		level: "初阶",
		num: "1039",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"前端开发",
			"移动开发"
		],
		categories: [
			"Vue.js",
			"JavaScript",
			"Android",
			"iOS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0a1e097b7e7a05400304.jpg",
		title: "专为程序员设计的统计课",
		level: "初阶",
		num: "1398",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"计算机基础"
		],
		categories: [
			"数学"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0a3309d8f4cf05400304.jpg",
		title: "前端要学的测试课 从Jest入门到 TDD/BDD双实战",
		level: "进阶",
		num: "1336",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"React.JS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0a0a099a800405400304.jpg",
		title: "玩转算法系列--图论精讲（Java版）",
		level: "进阶",
		num: "1492",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"计算机基础",
			"求职面试"
		],
		categories: [
			"算法与数据结构",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18c6d09e3f1f805400304.jpg",
		title: "Spring Cloud微服务架构 设计实现广告系统（新版）",
		level: "进阶",
		num: "2060",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术"
		],
		categories: [
			"Java",
			"Spring Cloud",
			"微服务"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0a570932675605400304.jpg",
		title: "Python接口自动化测试框架实战 从设计到开发",
		level: "进阶",
		num: "1637",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"接口测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf67c09dd6b2805400304.jpg",
		title: "Java双版本（SSM到SpringBoot）校园商铺全栈开发",
		level: "初阶",
		num: "5041",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot",
			"SSM"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce08dc094328cb05400304.jpg",
		title: "Spark进阶 大数据离线与实时项目实战",
		level: "进阶",
		num: "672",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"云计算&大数据"
		],
		categories: [
			"大数据",
			"Spark"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd190ac093929db05400304.jpg",
		title: "新版 Django+ xadmin 开发在线教育网站",
		level: "进阶",
		num: "1766",
		discount: null,
		price: "￥369.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python",
			"Django"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce08f509413a6905400304.jpg",
		title: "Spring Cloud Alibaba微服务从入门到进阶",
		level: "进阶",
		num: "2804",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术"
		],
		categories: [
			"Java",
			"Spring Cloud",
			"微服务"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6284523e099bbde705400304.jpg",
		title: "（新版）计算机基础，计算机组成原理+操作系统+网络",
		level: "进阶",
		num: "7428",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"计算机基础"
		],
		categories: [
			"计算机网络"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce08a6093244b805400304.jpg",
		title: "阿里新零售数据库设计与实战 （升级版）",
		level: "初阶",
		num: "2014",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Java",
			"MySQL",
			"Redis"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1907e095c6f7105400304.jpg",
		title: "Java Web自动化测试 Selenium基础到企业实际应用",
		level: "进阶",
		num: "672",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"自动化测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce08be098173f905400304.jpg",
		title: "Node.js仿知乎服务端-深入理解RESTful API",
		level: "进阶",
		num: "925",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6363623c0940f6bb05400304.jpg",
		title: "Angular 开发拼多多webapp 从基础到项目实战",
		level: "进阶",
		num: "1214",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Angular"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18f4f09887b4705400304.jpg",
		title: "Elastic-job + Quartz精讲 实现企业级定时任务",
		level: "进阶",
		num: "351",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc0663d090ad14205400304.jpg",
		title: "全流程开发 GO实战电商网站高并发秒杀系统",
		level: "进阶",
		num: "1391",
		discount: null,
		price: "￥328.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Go"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce03b709bd7e9c05400304.jpg",
		title: "支付宝小程序入门与实战 开发高颜值电商项目",
		level: "初阶",
		num: "465",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"HTML/CSS",
			"小程序"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdfbc809dba7f205400304.jpg",
		title: "Spring Boot短视频小程序开发 全栈式实战项目",
		level: "进阶",
		num: "2537",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发",
			"后端开发"
		],
		categories: [
			"小程序",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc063c409a9092405400304.jpg",
		title: "从0开始 独立完成企业级Java电商网站服务端开发",
		level: "进阶",
		num: "9333",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SSM"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce06be09d3611005400304.jpg",
		title: "Python爬虫工程师从入门到进阶 大数据时代必备",
		level: "进阶",
		num: "2144",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python",
			"爬虫"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0887095d46bb05400304.jpg",
		title: "React劲爆新特性Hooks 重构旅游电商网站火车票PWA",
		level: "进阶",
		num: "977",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"React.JS",
			"JavaScript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce07b10914815b05400304.jpg",
		title: "聚焦Java性能优化 打造亿级流量秒杀系统(赠秒杀项目)",
		level: "高阶",
		num: "2088",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"后端开发",
			"数据库"
		],
		categories: [
			"Java",
			"SpringBoot",
			"Redis"
		]
	},
	{
		img: "//img.mukewang.com/szimg/60764f300933e83d05400304.jpg",
		title: "Hadoop 系统入门+核心精讲",
		level: "进阶",
		num: "2298",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"后端开发",
			"云计算&大数据"
		],
		categories: [
			"Java",
			"大数据",
			"Hadoop"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18ac409de5cfb05400304.jpg",
		title: "Python Flask构建微信小程序订餐系统（可用于毕设）",
		level: "进阶",
		num: "1596",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前端开发",
			"后端开发"
		],
		categories: [
			"小程序",
			"Python",
			"Flask"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1903609fdec8405400304.jpg",
		title: "Node.js+Koa2+MySQL打造前后端分离精品项目《旧岛》",
		level: "进阶",
		num: "2121",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"JavaScript",
			"Node.js",
			"小程序"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce07ed0901a72505400304.jpg",
		title: "剖析Framework面试 冲击Android高级职位",
		level: "高阶",
		num: "1230",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc063df09d238c605400304.jpg",
		title: "下一代前端开发语言 TypeScript从零重构axios",
		level: "进阶",
		num: "2530",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Typescript"
		]
	},
	{
		img: "//img.mukewang.com/szimg/606ff88c0913e0f705400304.jpg",
		title: "新版Kubernetes生产落地全程实践",
		level: "高阶",
		num: "2227",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"后端开发",
			"云计算&大数据"
		],
		categories: [
			"Java",
			"大数据",
			"Kubernetes"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf88409f5de6905400304.jpg",
		title: "SpringCloud Finchley(M2+RELEASE+SR2)微服务实战",
		level: "高阶",
		num: "5634",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术"
		],
		categories: [
			"Java",
			"Spring Cloud",
			"微服务"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce03c9092ece7305400304.jpg",
		title: "高并发/高性能 Go语言开发企业级抽奖项目",
		level: "进阶",
		num: "650",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Go"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6316ec0f0814b5d405400304.jpg",
		title: "掌握Taro多端框架 快速上手小程序/H5开发",
		level: "进阶",
		num: "684",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"React.JS",
			"小程序"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce075d091bbb9f05400304.jpg",
		title: "Django高级实战 开发企业级问答网站",
		level: "高阶",
		num: "841",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python",
			"Django"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18f2309164d8505400304.jpg",
		title: "零基础入门 详解企业主流数据库MySQL8.0",
		level: "零基础",
		num: "1546",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"数据库"
		],
		categories: [
			"MySQL"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0729094e3eda05400304.jpg",
		title: "BAT资深工程师解析Tp5+Tp6底层源码",
		level: "进阶",
		num: "669",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"PHP"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce06ed09d741df05400304.jpg",
		title: "5G时代必备音视频WebRTC实时互动直播技术入门与实战",
		level: "进阶",
		num: "2309",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"前端开发",
			"移动开发"
		],
		categories: [
			"JavaScript",
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18f0a09a4950605400304.jpg",
		title: "Python3+TensorFlow打造人脸识别智能小程序",
		level: "进阶",
		num: "982",
		discount: null,
		price: "￥466.00",
		originPrice: null,
		directions: [
			"前沿技术"
		],
		categories: [
			"深度学习",
			"计算机视觉"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18c0709fa56b905400304.jpg",
		title: "React16组件化+测试+全流程 实战在线账本项目",
		level: "进阶",
		num: "689",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"React.JS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce06a909699a7c05400304.jpg",
		title: "玩转MongoDB4.0(最新版) 从入门到实践",
		level: "零基础",
		num: "1100",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"数据库"
		],
		categories: [
			"MongoDB"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf5a7092bba5d00000000.jpg",
		title: "Google面试官亲授-Java面试新手尊享课",
		level: "进阶",
		num: "2818",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"求职面试"
		],
		categories: [
			"Java",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18af309e7bb1e05400304.jpg",
		title: "Dubbo主流版本打造仿猫眼项目 理解微服务核心思想",
		level: "进阶",
		num: "1379",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术"
		],
		categories: [
			"Java",
			"SpringBoot",
			"微服务"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf3450987db5105400304.jpg",
		title: "新版Scrapy打造搜索引擎 畅销4年的Python分布式爬虫课",
		level: "进阶",
		num: "5634",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python",
			"爬虫"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce065b098c7efc05400304.jpg",
		title: "Flutter从入门到进阶 实战携程网App 一网打尽核心技术",
		level: "进阶",
		num: "4574",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Flutter",
			"Android",
			"iOS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/63328f5109d0bb9805400304.jpg",
		title: "新版 Node.js+Express+Koa2 开发Web Server博客",
		level: "进阶",
		num: "3843",
		discount: null,
		price: "￥338.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/638da68609965cef05400304.jpg",
		title: "一课讲解测试面试 百度资深工程师亲授",
		level: "进阶",
		num: "1238",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"自动化测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce061109e4de8505400304.jpg",
		title: "Python工程师面试宝典 一线大厂资深面试官亲授",
		level: "进阶",
		num: "979",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础",
			"求职面试"
		],
		categories: [
			"Python",
			"算法与数据结构",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce059809a376bc05400304.jpg",
		title: "React16+Redux实战企业级大众点评Web App",
		level: "进阶",
		num: "1060",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"React.JS",
			"WebApp"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce05de09ac069905400304.jpg",
		title: "从基础到实战 手把手带你掌握新版Webpack4.0",
		level: "进阶",
		num: "3568",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"React.JS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce05f8093371ea05400304.jpg",
		title: "大厂资深面试官 带你破解Android高级面试",
		level: "高阶",
		num: "1534",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc07b6f092f372705400304.jpg",
		title: "Spring Boot双版本(1.5/2.1) 打造企业级微信点餐系统",
		level: "进阶",
		num: "6367",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce05a909847e6105400304.jpg",
		title: "掌握Shell脚本编程 360架构师带你进阶Linux高手",
		level: "进阶",
		num: "1532",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"运维",
			"Linux"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18c8009b8961405400304.jpg",
		title: "PHP7底层源码深度剖析",
		level: "高阶",
		num: "587",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"PHP"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce056e093e958905400304.jpg",
		title: "Django+小程序技术打造微信小程序助手",
		level: "进阶",
		num: "942",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"前端开发",
			"后端开发"
		],
		categories: [
			"小程序",
			"Python",
			"Django"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce053d09e4a2d405400304.jpg",
		title: "React源码深度解析 高级前端工程师必备技能",
		level: "高阶",
		num: "1702",
		discount: null,
		price: "￥466.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"React.JS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce052309bf95b205400304.jpg",
		title: "Top团队大牛带你玩转Android性能分析与优化",
		level: "高阶",
		num: "1572",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce04b9097ae1f405400304.jpg",
		title: "剑指Java面试-Offer直通车 百度资深面试官授课",
		level: "进阶",
		num: "8221",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"求职面试"
		],
		categories: [
			"Java",
			"SpringBoot",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce04e90911e48b05400304.jpg",
		title: "LoadRunner性能测试实战训练营 全流程掌握性能测试",
		level: "进阶",
		num: "812",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"性能测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/6188b6fb090ed09305400304.jpg",
		title: "（新升级）RN入门到进阶，打造高质量上线App",
		level: "进阶",
		num: "2973",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Android",
			"React native"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc064770975eecc05400304.jpg",
		title: "微信小程序入门与实战（全新版） 超20000人学习的好课",
		level: "初阶",
		num: "23369",
		discount: null,
		price: "￥149.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"HTML/CSS",
			"JavaScript",
			"小程序"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18bf00960898e05400304.jpg",
		title: "助力Python功能测试人员进阶Web自动化测试",
		level: "初阶",
		num: "887",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"自动化测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18bd9095466a305400304.jpg",
		title: "深度学习之目标检测常用算法原理+实践精讲",
		level: "高阶",
		num: "795",
		discount: null,
		price: "￥499.00",
		originPrice: null,
		directions: [
			"前沿技术"
		],
		categories: [
			"深度学习",
			"计算机视觉"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce04090993b85805400304.jpg",
		title: "个性化推荐算法实战（可用于毕设） BAT大牛亲授",
		level: "进阶",
		num: "779",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"计算机基础",
			"前沿技术"
		],
		categories: [
			"算法与数据结构",
			"机器学习"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18bbf09dd862805400304.jpg",
		title: "MySQL面试指南 中高级开发者的晋升加薪利器",
		level: "进阶",
		num: "662",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"数据库",
			"求职面试"
		],
		categories: [
			"MySQL",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce03a509d73cc505400304.jpg",
		title: "RocketMQ核心技术精讲与高并发抗压实战",
		level: "进阶",
		num: "1088",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce038e0975696005400304.jpg",
		title: "Tornado从入门到进阶 打造支持高并发的技术论坛",
		level: "进阶",
		num: "559",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce0365095c0ed805400304.jpg",
		title: "Vue 实战商业级读书Web APP完整项目",
		level: "进阶",
		num: "1496",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"WebApp"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18b5b097898dc05400304.jpg",
		title: "Socket网络编程进阶与实战 系统掌握Socket核心技术",
		level: "进阶",
		num: "2255",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发",
			"移动开发"
		],
		categories: [
			"Java",
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce033b09dcfeb505400304.jpg",
		title: "移动端Python爬虫实战 数据抓取+数据可视化",
		level: "进阶",
		num: "1699",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python",
			"爬虫"
		]
	},
	{
		img: "//img.mukewang.com/szimg/636867090964e4bb05400304.jpg",
		title: "经典再升级-FFmpeg5.0核心技术精讲，打造音视频播放器",
		level: "进阶",
		num: "2454",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发",
			"移动开发"
		],
		categories: [
			"C",
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18adb097ad5ff05400304.jpg",
		title: "Selenium3与Python3实战Web自动化测试框架",
		level: "进阶",
		num: "1816",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"自动化测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fce027a09e52e5805400304.jpg",
		title: "Java设计模式精讲-Debug方式+内存分析",
		level: "进阶",
		num: "3227",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18aab0919ab9005400304.jpg",
		title: "Netty+Spring Boot仿微信-全栈开发高性能后台及客户端",
		level: "进阶",
		num: "1452",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18a950924d88505400304.jpg",
		title: "结合编程学数学 专为程序员设计的线性代数",
		level: "初阶",
		num: "3173",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"计算机基础"
		],
		categories: [
			"数学"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdffb30910d31a05400304.jpg",
		title: "Spring Boot2.0深度实践 核心原理拆解+源码分析",
		level: "高阶",
		num: "2815",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc064d30933484305400304.jpg",
		title: "纯正商业级微信小程序应用实战，全方位小程序特性讲解",
		level: "进阶",
		num: "4602",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"JavaScript",
			"小程序"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1889e0979ac1105400304.jpg",
		title: "一站式学习Redis 从入门到高可用分布式实践",
		level: "进阶",
		num: "2231",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"数据库"
		],
		categories: [
			"Redis"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdfe070907a2f605400304.jpg",
		title: "Python3实战Spark大数据分析及调度",
		level: "进阶",
		num: "1018",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"云计算&大数据"
		],
		categories: [
			"大数据",
			"Spark"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdfd720905f1c605400304.jpg",
		title: "Java生产环境下性能监控与调优详解",
		level: "进阶",
		num: "2174",
		discount: null,
		price: "￥188.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdfc94091bcca605400304.jpg",
		title: "React零基础入门到实战，完成企业级项目简书网站开发",
		level: "进阶",
		num: "5222",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"React.JS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/638da81a09c14b5c05400304.jpg",
		title: "Vue.js 源码深入解析 深入理解Vue实现原理",
		level: "高阶",
		num: "4742",
		discount: null,
		price: "￥488.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdfcac09ee0e7f05400304.jpg",
		title: "Java读源码之Netty深入剖析",
		level: "高阶",
		num: "2200",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdfc330922b0fc05400304.jpg",
		title: "HTTP协议原理+实践 完整案例解析主流技术",
		level: "进阶",
		num: "4192",
		discount: null,
		price: "￥99.00",
		originPrice: null,
		directions: [
			"前端开发",
			"计算机基础"
		],
		categories: [
			"JavaScript",
			"计算机网络"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdfbfe09bb523805400304.jpg",
		title: "Python Flask高级编程之RESTFul API前后端分离精讲",
		level: "进阶",
		num: "1909",
		discount: null,
		price: "￥148.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python",
			"Flask"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd189cf09f69f9d05400304.jpg",
		title: "Docker环境下的企业级前后端分离项目部署与运维",
		level: "进阶",
		num: "2216",
		discount: null,
		price: "￥148.00",
		originPrice: null,
		directions: [
			"云计算&大数据",
			"运维&测试"
		],
		categories: [
			"Docker",
			"运维"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdfb2e0971bb9805400304.jpg",
		title: "Java接口自动化测试实战，搞定理论基础+典型应用场景",
		level: "进阶",
		num: "2012",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"接口测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1898f0939ab3605400304.jpg",
		title: "Vue2.5-2.6-3.0开发去哪儿网App 零基础入门到实战",
		level: "进阶",
		num: "10253",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf9740902073705400304.jpg",
		title: "资深大牛带你深度剖析ios高级面试",
		level: "高阶",
		num: "1661",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"iOS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd189710912066e05400304.jpg",
		title: "Python3高级核心技术97讲，高级进阶的必学课程",
		level: "高阶",
		num: "1856",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf9610974280a05400304.jpg",
		title: "ZK分布式专题与Dubbo微服务入门，成长与加薪必备",
		level: "进阶",
		num: "1828",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术"
		],
		categories: [
			"Java",
			"SpringBoot",
			"微服务"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1894c094eea8405400304.jpg",
		title: "Python Flask高级编程之从0到1开发《鱼书》精品项目",
		level: "进阶",
		num: "2609",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python",
			"Flask"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf927090536fc05400304.jpg",
		title: "Docker+Kubernetes(k8s)微服务容器化实践",
		level: "高阶",
		num: "2430",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"前沿技术",
			"云计算&大数据"
		],
		categories: [
			"微服务",
			"Docker",
			"Kubernetes"
		]
	},
	{
		img: "//img.mukewang.com/szimg/638da83e090ed58605400304.jpg",
		title: "Vue核心技术 Vue+Vue-Router+Vuex+SSR实战精讲",
		level: "高阶",
		num: "3151",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"Vue.js",
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf83f0907e6bc05400304.jpg",
		title: "Python移动自动化测试面试-面试分析+知识理论+面试技巧",
		level: "进阶",
		num: "973",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"后端开发",
			"运维&测试"
		],
		categories: [
			"Python",
			"自动化测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd18909093ef78c05400304.jpg",
		title: "Elastic Stack从入门到实践，自己动手搭建数据分析系统",
		level: "进阶",
		num: "1267",
		discount: null,
		price: "￥348.00",
		originPrice: null,
		directions: [
			"前沿技术",
			"云计算&大数据"
		],
		categories: [
			"数据分析&挖掘",
			"大数据"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd188fa09fc1a8705400304.jpg",
		title: "Google资深工程师深度讲解Go语言 由浅入深掌握Go语言",
		level: "进阶",
		num: "5811",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"爬虫",
			"Go"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf7a9093f5f5105400304.jpg",
		title: "Java大数据实战，巧用Storm快速切入实时流处理领域",
		level: "进阶",
		num: "515",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"后端开发",
			"云计算&大数据"
		],
		categories: [
			"Java",
			"大数据",
			"Storm"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd188e609b60ce605400304.jpg",
		title: "Java秒杀系统方案优化 掌握海量访问通用解决方案",
		level: "进阶",
		num: "2546",
		discount: null,
		price: "￥288.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc064ba09f7bf3205400304.jpg",
		title: "Python3入门机器学习 经典算法与应用  ",
		level: "进阶",
		num: "5444",
		discount: null,
		price: "￥499.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础",
			"前沿技术"
		],
		categories: [
			"Python",
			"算法与数据结构",
			"机器学习",
			"数据分析&挖掘"
		]
	},
	{
		img: "//img.mukewang.com/szimg/638da85d09ecdd9d05400304.jpg",
		title: "系统讲解CSS，工作应用+面试一步搞定",
		level: "初阶",
		num: "2409",
		discount: null,
		price: "￥149.00",
		originPrice: null,
		directions: [
			"前端开发",
			"求职面试"
		],
		categories: [
			"CSS3",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf73f0902454305400304.jpg",
		title: "Java企业级电商项目架构 Tomcat集群与Redis分布式",
		level: "高阶",
		num: "2646",
		discount: null,
		price: "￥399.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SSM"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd188ae0922e6a205400304.jpg",
		title: "移动端App UI设计入门与实战，培养有产品思维的设计师",
		level: "进阶",
		num: "1163",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"产品设计"
		],
		categories: [
			"设计基础",
			"APPUI设计"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf6f809043baf05400304.jpg",
		title: "Python数据分析入门与实践，开启Data Science职业之旅",
		level: "初阶",
		num: "1782",
		discount: null,
		price: "￥248.00",
		originPrice: null,
		directions: [
			"后端开发",
			"前沿技术"
		],
		categories: [
			"Python",
			"数据分析&挖掘"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1888a09e918de05400304.jpg",
		title: "Java开发企业级权限管理系统 Spring Security/Apache Shiro对比分析",
		level: "进阶",
		num: "2170",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Java",
			"SpringBoot"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd188790975b68805400304.jpg",
		title: "性能测试入门-Jmeter工具与监控",
		level: "进阶",
		num: "2285",
		discount: null,
		price: "￥248.00",
		originPrice: null,
		directions: [
			"运维&测试"
		],
		categories: [
			"性能测试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf622090957ef05400304.jpg",
		title: "Python3.8系统入门+进阶 (程序员必备第二语言)",
		level: "初阶",
		num: "13867",
		discount: null,
		price: "￥366.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1886509626c5405400304.jpg",
		title: "7个经典应用诠释Java算法精髓",
		level: "进阶",
		num: "1788",
		discount: null,
		price: "￥248.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础"
		],
		categories: [
			"Java",
			"算法与数据结构"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf60a098adc9f05400304.jpg",
		title: "PHP企业级实战，完成一套高可用高安全的App后台系统",
		level: "进阶",
		num: "1251",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"PHP"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fd1882e09cec0fd05400304.jpg",
		title: "Python前后端分离开发Vue+Django REST framework实战",
		level: "进阶",
		num: "2656",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"后端开发"
		],
		categories: [
			"Python",
			"Django"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf3eb09d1988605400304.jpg",
		title: "真实数据对接 从0开发前后端分离的企业级上线项目",
		level: "进阶",
		num: "4194",
		discount: null,
		price: "￥299.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"HTML/CSS"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf3bf090951c405400304.jpg",
		title: "腾讯大牛亲授 Web前后端漏洞分析与防御技巧",
		level: "进阶",
		num: "1152",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"前端开发"
		],
		categories: [
			"JavaScript",
			"Node.js"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf37d09fdfc4605400304.jpg",
		title: "手把手开发一个完整即时通讯App 客户端+服务端+MVP架构",
		level: "进阶",
		num: "1689",
		discount: null,
		price: "￥466.00",
		originPrice: null,
		directions: [
			"移动开发"
		],
		categories: [
			"Android"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf36909b9eb4e05400304.jpg",
		title: "微信小程序电商实战 从前端到后端的全流程精讲",
		level: "进阶",
		num: "4619",
		discount: null,
		price: "￥388.00",
		originPrice: null,
		directions: [
			"前端开发",
			"后端开发"
		],
		categories: [
			"小程序",
			"PHP"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fc0649e092069a905400304.jpg",
		title: "玩转算法面试-- Leetcode真题分门别类讲解",
		level: "进阶",
		num: "7178",
		discount: null,
		price: "￥266.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础",
			"求职面试"
		],
		categories: [
			"C++",
			"算法与数据结构",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf2e909530b7c05400304.jpg",
		title: "算法与数据结构（C++版） 面试/评级的算法复习技能包",
		level: "进阶",
		num: "10979",
		discount: null,
		price: "￥166.00",
		originPrice: null,
		directions: [
			"后端开发",
			"计算机基础",
			"求职面试"
		],
		categories: [
			"C++",
			"算法与数据结构",
			"求职面试"
		]
	},
	{
		img: "//img.mukewang.com/szimg/5fcdf2d4098322fc05400304.jpg",
		title: "MySQL提升课程 全面讲解MySQL架构设计",
		level: "进阶",
		num: "4161",
		discount: null,
		price: "￥199.00",
		originPrice: null,
		directions: [
			"数据库"
		],
		categories: [
			"MySQL"
		]
	}
];

const picData = [
	{
		name: "144-a9e33f22.jpg",
		url: "//img.mukewang.com/szimg/60ec1dde09f4b5ad05400304.jpg",
		md5: "1a1fee8e9df4b5adff6da0b5ca6a55fe",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/144-a9e33f22.jpg"
	},
	{
		name: "196-5e53ee0d.jpg",
		url: "//img.mukewang.com/szimg/5fc0670d0982349705400304.jpg",
		md5: "a541b054248234975a24716a70a7822b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/196-5e53ee0d.jpg"
	},
	{
		name: "147-c90f429e.jpg",
		url: "//img.mukewang.com/szimg/60dea91109143a3005400304.jpg",
		md5: "316a333b02143a3034cc12ce378b078c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/147-c90f429e.jpg"
	},
	{
		name: "245-0194778c.jpg",
		url: "//img.mukewang.com/szimg/638da7db0906784905400304.jpg",
		md5: "8fa1508e1e067849048273277f317d89",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/245-0194778c.jpg"
	},
	{
		name: "161-127a3032.jpg",
		url: "//img.mukewang.com/szimg/6059a92e09bd086a05400304.jpg",
		md5: "de7031f987bd086acf6bcc085a89a2f7",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/161-127a3032.jpg"
	},
	{
		name: "258-402d1fcd.jpg",
		url: "//img.mukewang.com/szimg/5fd18c6d09e3f1f805400304.jpg",
		md5: "f631e09d66e3f1f82085eeb8d72ed2a8",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/258-402d1fcd.jpg"
	},
	{
		name: "320-1f398bab.jpg",
		url: "//img.mukewang.com/szimg/5fd18b5b097898dc05400304.jpg",
		md5: "a065d69d077898dc6dbd01386433f63b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/320-1f398bab.jpg"
	},
	{
		name: "270-d0aab553.jpg",
		url: "//img.mukewang.com/szimg/5fc0663d090ad14205400304.jpg",
		md5: "e75e745ab00ad142c4e18cdf7b19fcb1",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/270-d0aab553.jpg"
	},
	{
		name: "231-70d42eb0.jpg",
		url: "//img.mukewang.com/szimg/5fd1912e090418be05400304.jpg",
		md5: "d95faa43cb0418beedd33ba6aa529905",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/231-70d42eb0.jpg"
	},
	{
		name: "220-b4ed7ecb.jpg",
		url: "//img.mukewang.com/szimg/5fce0ffa09c1ba3d05400304.jpg",
		md5: "7d6b1e5cbcc1ba3dc4edea0c03e3eeea",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/220-b4ed7ecb.jpg"
	},
	{
		name: "350-c2319cdd.jpg",
		url: "//img.mukewang.com/szimg/5fd188e609b60ce605400304.jpg",
		md5: "d75006d083b60ce61aa3efc20450417e",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/350-c2319cdd.jpg"
	},
	{
		name: "321-ac463490.jpg",
		url: "//img.mukewang.com/szimg/5fce033b09dcfeb505400304.jpg",
		md5: "e871ec2d1adcfeb59309944320df19ce",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/321-ac463490.jpg"
	},
	{
		name: "296-a28489be.jpg",
		url: "//img.mukewang.com/szimg/5fce065b098c7efc05400304.jpg",
		md5: "3bcf4e241b8c7efcd262fd46b982ada0",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/296-a28489be.jpg"
	},
	{
		name: "261-8cea2477.jpg",
		url: "//img.mukewang.com/szimg/5fce08dc094328cb05400304.jpg",
		md5: "a3ff834d414328cbb7bcc9e573d8e08c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/261-8cea2477.jpg"
	},
	{
		name: "347-7bb13b16.jpg",
		url: "//img.mukewang.com/szimg/5fd18909093ef78c05400304.jpg",
		md5: "383ac5ccf23ef78cf2ca59afe54e1993",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/347-7bb13b16.jpg"
	},
	{
		name: "344-c9a17d96.jpg",
		url: "//img.mukewang.com/szimg/5fcdf927090536fc05400304.jpg",
		md5: "85b2d118470536fc8b249f4a68fd53b0",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/344-c9a17d96.jpg"
	},
	{
		name: "359-27e68669.jpg",
		url: "//img.mukewang.com/szimg/5fd1886509626c5405400304.jpg",
		md5: "220a7acbe9626c5412d1d9fe30334ae5",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/359-27e68669.jpg"
	},
	{
		name: "143-e47a5591.jpg",
		url: "//img.mukewang.com/szimg/60f0edec095144e505400304.jpg",
		md5: "5edd32abbe5144e5df6ac6486ea4d3ca",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/143-e47a5591.jpg"
	},
	{
		name: "134-e2ad86d1.jpg",
		url: "//img.mukewang.com/szimg/61679b1c0989c24f05400304.jpg",
		md5: "4d25d03ee589c24ff9815c779c1e3102",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/134-e2ad86d1.jpg"
	},
	{
		name: "295-a1d7ac7c.jpg",
		url: "//img.mukewang.com/szimg/5fcdf3450987db5105400304.jpg",
		md5: "fa6467273c87db5159da84a5f9d4996e",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/295-a1d7ac7c.jpg"
	},
	{
		name: "358-8e0610ef.jpg",
		url: "//img.mukewang.com/szimg/5fcdf622090957ef05400304.jpg",
		md5: "cfeebad82d0957ef0f0c663d956e1a61",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/358-8e0610ef.jpg"
	},
	{
		name: "352-ecd5f5e7.jpg",
		url: "//img.mukewang.com/szimg/638da85d09ecdd9d05400304.jpg",
		md5: "7d277641f7ecdd9d8f927fba99e08f14",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/352-ecd5f5e7.jpg"
	},
	{
		name: "367-d3c88485.jpg",
		url: "//img.mukewang.com/szimg/5fcdf2e909530b7c05400304.jpg",
		md5: "0b20849888530b7c166beb8238ef742b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/367-d3c88485.jpg"
	},
	{
		name: "213-f4967869.jpg",
		url: "//img.mukewang.com/szimg/5fce102a095f90c005400304.jpg",
		md5: "80061683085f90c033ad62fa0b2d5631",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/213-f4967869.jpg"
	},
	{
		name: "314-a6d7bd35.jpg",
		url: "//img.mukewang.com/szimg/5fd18bd9095466a305400304.jpg",
		md5: "c23d645b095466a3754ae68bc56d9590",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/314-a6d7bd35.jpg"
	},
	{
		name: "136-3c0fd6d8.jpg",
		url: "//img.mukewang.com/szimg/6145762e0918314105400304.jpg",
		md5: "a01a5283ea18314135066bf8681c5f77",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/136-3c0fd6d8.jpg"
	},
	{
		name: "268-158effe4.jpg",
		url: "//img.mukewang.com/szimg/6363623c0940f6bb05400304.jpg",
		md5: "6f794fd4a340f6bbaceeee0cf3c30e2d",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/268-158effe4.jpg"
	},
	{
		name: "334-d030997d.jpg",
		url: "//img.mukewang.com/szimg/5fcdfcac09ee0e7f05400304.jpg",
		md5: "72d9dc41b6ee0e7f45009f8216d5a6ef",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/334-d030997d.jpg"
	},
	{
		name: "140-52a1353b.jpg",
		url: "//img.mukewang.com/szimg/6114de0d099dc44805400304.jpg",
		md5: "2cb784dbb69dc448a23a2de1548712d7",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/140-52a1353b.jpg"
	},
	{
		name: "139-d3db82f5.jpg",
		url: "//img.mukewang.com/szimg/6124bf8c09eb7d2700000000.jpg",
		md5: "6c293d7fbbeb7d27abafcfbe53f83d4b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/139-d3db82f5.jpg"
	},
	{
		name: "202-d6d35cf1.jpg",
		url: "//img.mukewang.com/szimg/5fd192030954e4f805400304.jpg",
		md5: "7b6be8f50154e4f89cac59731f719c27",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/202-d6d35cf1.jpg"
	},
	{
		name: "264-0446be49.jpg",
		url: "//img.mukewang.com/szimg/6284523e099bbde705400304.jpg",
		md5: "880ce3bcdc9bbde74afbc736ef1b20d1",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/264-0446be49.jpg"
	},
	{
		name: "174-c686b10d.jpg",
		url: "//img.mukewang.com/szimg/5fd343d9093a7d0e05400304.jpg",
		md5: "6107da8f3f3a7d0e4b9c713d7430d14a",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/174-c686b10d.jpg"
	},
	{
		name: "283-5ebe1988.jpg",
		url: "//img.mukewang.com/szimg/5fcdf88409f5de6905400304.jpg",
		md5: "2d2540a152f5de690bdad6008be82be1",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/283-5ebe1988.jpg"
	},
	{
		name: "345-85850b4f.jpg",
		url: "//img.mukewang.com/szimg/638da83e090ed58605400304.jpg",
		md5: "c1728aa8f10ed58633769c522aa4f6ae",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/345-85850b4f.jpg"
	},
	{
		name: "294-954d3f17.jpg",
		url: "//img.mukewang.com/szimg/5fd18af309e7bb1e05400304.jpg",
		md5: "b0eb406180e7bb1e58ab8f9e9b52f07c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/294-954d3f17.jpg"
	},
	{
		name: "318-b8733b26.jpg",
		url: "//img.mukewang.com/szimg/5fce038e0975696005400304.jpg",
		md5: "c771e563c3756960f9ec6c7b8cc127fd",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/318-b8733b26.jpg"
	},
	{
		name: "343-aef85834.jpg",
		url: "//img.mukewang.com/szimg/5fd1894c094eea8405400304.jpg",
		md5: "f37be8b0654eea84635358ded0298b38",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/343-aef85834.jpg"
	},
	{
		name: "150-f934e586.jpg",
		url: "//img.mukewang.com/szimg/60cc04f609f2d0e205400304.jpg",
		md5: "6e668ed11af2d0e2d7b8688288cf8fec",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/150-f934e586.jpg"
	},
	{
		name: "355-b462d8d1.jpg",
		url: "//img.mukewang.com/szimg/5fcdf6f809043baf05400304.jpg",
		md5: "fa681debe4043baf8478e4d4788d38ff",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/355-b462d8d1.jpg"
	},
	{
		name: "132-101d3de3.jpg",
		url: "//img.mukewang.com/szimg/62e77b8f0976941c05400304.jpg",
		md5: "c6c7a20c8976941cac2a0d7f38e8b11e",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/132-101d3de3.jpg"
	},
	{
		name: "310-885887df.jpg",
		url: "//img.mukewang.com/szimg/5fce04e90911e48b05400304.jpg",
		md5: "4e8b447d1011e48b4d1b41f54474e439",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/310-885887df.jpg"
	},
	{
		name: "302-b6215245.jpg",
		url: "//img.mukewang.com/szimg/5fce05f8093371ea05400304.jpg",
		md5: "93fd842a1d3371ea8142b6dbaff415d4",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/302-b6215245.jpg"
	},
	{
		name: "219-5dcb0351.jpg",
		url: "//img.mukewang.com/szimg/62f3160409c25d1e05400304.jpg",
		md5: "f7300010a0c25d1e4fedc8a141aa33e5",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/219-5dcb0351.jpg"
	},
	{
		name: "215-901fff16.jpg",
		url: "//img.mukewang.com/szimg/5fd191b009ece97d05400304.jpg",
		md5: "3612c5803dece97d462900b0c1281acc",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/215-901fff16.jpg"
	},
	{
		name: "209-d0b45d10.jpg",
		url: "//img.mukewang.com/szimg/5fd191c909077e9805400304.jpg",
		md5: "f8966c1f2f077e98e4407f72dd9bc6d2",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/209-d0b45d10.jpg"
	},
	{
		name: "316-bb7e2acb.jpg",
		url: "//img.mukewang.com/szimg/5fd18bbf09dd862805400304.jpg",
		md5: "4a5ac5ef41dd862870f721e91d4511a8",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/316-bb7e2acb.jpg"
	},
	{
		name: "155-1bcb228e.jpg",
		url: "//img.mukewang.com/szimg/6094d26809364cee05400304.jpg",
		md5: "a27816e06b364ceea1ce30895bd668bf",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/155-1bcb228e.jpg"
	},
	{
		name: "165-04d137ee.jpg",
		url: "//img.mukewang.com/szimg/6246604f0920373c05400304.jpg",
		md5: "6bba2f279820373ce61b0e455e4b1c83",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/165-04d137ee.jpg"
	},
	{
		name: "311-4bd671a3.jpg",
		url: "//img.mukewang.com/szimg/6188b6fb090ed09305400304.jpg",
		md5: "b04d88fef40ed093d748993d747e5f0f",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/311-4bd671a3.jpg"
	},
	{
		name: "197-0abd645a.jpg",
		url: "//img.mukewang.com/szimg/5fce10ce09e9829905400304.jpg",
		md5: "741e453452e98299eaeab555ea9f971b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/197-0abd645a.jpg"
	},
	{
		name: "281-5478ed5a.jpg",
		url: "//img.mukewang.com/szimg/5fc063df09d238c605400304.jpg",
		md5: "fca1daec22d238c650afcaf92a914f7b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/281-5478ed5a.jpg"
	},
	{
		name: "331-214eab2c.jpg",
		url: "//img.mukewang.com/szimg/5fcdfd720905f1c605400304.jpg",
		md5: "8d98cfaa8f05f1c630e7c4a0a191919b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/331-214eab2c.jpg"
	},
	{
		name: "282-f6301120.jpg",
		url: "//img.mukewang.com/szimg/606ff88c0913e0f705400304.jpg",
		md5: "65f818920a13e0f7b52d20a44c8d1ee9",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/282-f6301120.jpg"
	},
	{
		name: "322-8aa70099.jpg",
		url: "//img.mukewang.com/szimg/636867090964e4bb05400304.jpg",
		md5: "938f13e53364e4bb0867573b0a9d5911",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/322-8aa70099.jpg"
	},
	{
		name: "201-a2715eb4.jpg",
		url: "//img.mukewang.com/szimg/5fc07b8509a05b3105400304.jpg",
		md5: "7a20766043a05b31fac258f67edb1ed0",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/201-a2715eb4.jpg"
	},
	{
		name: "280-fcb9dd11.jpg",
		url: "//img.mukewang.com/szimg/5fce07ed0901a72505400304.jpg",
		md5: "1be6286c1801a725b1a7d69281317a66",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/280-fcb9dd11.jpg"
	},
	{
		name: "183-1e0f8ce3.jpg",
		url: "//img.mukewang.com/szimg/5fd19237092ae17b05400304.jpg",
		md5: "95fc1db2ed2ae17b60f98d6907bf9455",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/183-1e0f8ce3.jpg"
	},
	{
		name: "236-1f58372d.jpg",
		url: "//img.mukewang.com/szimg/6164020a0902065805400304.jpg",
		md5: "0dc9b388b9020658b27da8cb7a31585d",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/236-1f58372d.jpg"
	},
	{
		name: "255-45367589.jpg",
		url: "//img.mukewang.com/szimg/5fce0a1e097b7e7a05400304.jpg",
		md5: "07277291207b7e7a65e3ef70a6d3954e",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/255-45367589.jpg"
	},
	{
		name: "267-97b17949.jpg",
		url: "//img.mukewang.com/szimg/5fce08be098173f905400304.jpg",
		md5: "6c97d3e3cb8173f9ee3c7221eae660f8",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/267-97b17949.jpg"
	},
	{
		name: "234-64d63f47.jpg",
		url: "//img.mukewang.com/szimg/5fd19119092f774205400304.jpg",
		md5: "da94ca08062f77426466da2174b659d5",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/234-64d63f47.jpg"
	},
	{
		name: "368-67b2597b.jpg",
		url: "//img.mukewang.com/szimg/5fcdf2d4098322fc05400304.jpg",
		md5: "5ebf80a7a28322fcdcfe423c9f385003",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/368-67b2597b.jpg"
	},
	{
		name: "333-f26d5e27.jpg",
		url: "//img.mukewang.com/szimg/638da81a09c14b5c05400304.jpg",
		md5: "7292a21fcec14b5c49201ff34f581579",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/333-f26d5e27.jpg"
	},
	{
		name: "289-7d479d87.jpg",
		url: "//img.mukewang.com/szimg/5fce06ed09d741df05400304.jpg",
		md5: "9e377cb91dd741df4bfc37c3e8629e16",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/289-7d479d87.jpg"
	},
	{
		name: "246-e3923b2b.jpg",
		url: "//img.mukewang.com/szimg/5fce0aec094ba6fc05400304.jpg",
		md5: "174f42188a4ba6fc575d9a0b75628d59",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/246-e3923b2b.jpg"
	},
	{
		name: "288-6aff2e7c.jpg",
		url: "//img.mukewang.com/szimg/5fce0729094e3eda05400304.jpg",
		md5: "b12d1c7b1d4e3edafa2089d21fd2c6ed",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/288-6aff2e7c.jpg"
	},
	{
		name: "273-3a754996.jpg",
		url: "//img.mukewang.com/szimg/5fc063c409a9092405400304.jpg",
		md5: "13ce4d8948a909244d05714634b495a2",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/273-3a754996.jpg"
	},
	{
		name: "254-4c81cef5.jpg",
		url: "//img.mukewang.com/szimg/5fce0a8e0971525305400304.jpg",
		md5: "619112ceeb715253447c1511dc6591d5",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/254-4c81cef5.jpg"
	},
	{
		name: "217-144d1ebf.jpg",
		url: "//img.mukewang.com/szimg/6164023209bc7ea405400304.jpg",
		md5: "4625e1c618bc7ea4169042710d65ba11",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/217-144d1ebf.jpg"
	},
	{
		name: "228-8c67b7a1.jpg",
		url: "//img.mukewang.com/szimg/5fce0f4109668ab205400304.jpg",
		md5: "63c5cdd44e668ab2cb818c7d767a49a0",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/228-8c67b7a1.jpg"
	},
	{
		name: "172-c4ce4bfe.jpg",
		url: "//img.mukewang.com/szimg/5fe4627f09493ccd05400304.jpg",
		md5: "08bf2b0d3a493ccdea2f2bfa207c0a14",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/172-c4ce4bfe.jpg"
	},
	{
		name: "193-cf2f25c4.jpg",
		url: "//img.mukewang.com/szimg/5fce1155097434c805400304.jpg",
		md5: "0d5f4106c87434c850fff084446eecc8",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/193-cf2f25c4.jpg"
	},
	{
		name: "176-aedc8bb9.jpg",
		url: "//img.mukewang.com/szimg/5fc5ab8d099b1bee05400304.jpg",
		md5: "3812bb927a9b1bee8821160487f6997d",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/176-aedc8bb9.jpg"
	},
	{
		name: "362-a4e36ab1.jpg",
		url: "//img.mukewang.com/szimg/5fcdf3eb09d1988605400304.jpg",
		md5: "421bc9e098d1988633a80c003dbfd787",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/362-a4e36ab1.jpg"
	},
	{
		name: "287-ae488a4c.jpg",
		url: "//img.mukewang.com/szimg/5fd18f2309164d8505400304.jpg",
		md5: "6189307d31164d854685c24c6ba32fd6",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/287-ae488a4c.jpg"
	},
	{
		name: "164-00a8cb69.jpg",
		url: "//img.mukewang.com/szimg/603f61410977606f05400304.jpg",
		md5: "94533b429077606ff7002f65055b4806",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/164-00a8cb69.jpg"
	},
	{
		name: "205-3f0b6431.jpg",
		url: "//img.mukewang.com/szimg/5fce114209c9464e05400304.jpg",
		md5: "14f804cde0c9464e05b084ae67c1dcd0",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/205-3f0b6431.jpg"
	},
	{
		name: "207-286cf94e.jpg",
		url: "//img.mukewang.com/szimg/5fced78f0970285300000000.jpg",
		md5: "54b9ce6b067028532639675248994275",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/207-286cf94e.jpg"
	},
	{
		name: "157-125651ae.jpg",
		url: "//img.mukewang.com/szimg/607e431f094774f005400304.jpg",
		md5: "3cd8e176014774f06d206655de4e1252",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/157-125651ae.jpg"
	},
	{
		name: "203-8ba43145.jpg",
		url: "//img.mukewang.com/szimg/5fce11ef099087fb05400304.jpg",
		md5: "7d4ad68cb29087fbbb7ceb08ab9f20c5",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/203-8ba43145.jpg"
	},
	{
		name: "354-ee80e98f.jpg",
		url: "//img.mukewang.com/szimg/5fd188ae0922e6a205400304.jpg",
		md5: "b413f6e58622e6a29870910756388873",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/354-ee80e98f.jpg"
	},
	{
		name: "342-87ae737e.jpg",
		url: "//img.mukewang.com/szimg/5fcdf9610974280a05400304.jpg",
		md5: "abff34b5bc74280aa872403e1f479243",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/342-87ae737e.jpg"
	},
	{
		name: "328-be331af3.jpg",
		url: "//img.mukewang.com/szimg/5fc064d30933484305400304.jpg",
		md5: "87599bb9ec3348436b80d2a17ea2395a",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/328-be331af3.jpg"
	},
	{
		name: "163-1eaf860c.jpg",
		url: "//img.mukewang.com/szimg/60497cca092fcd4805400304.jpg",
		md5: "c8362cdbd52fcd480b836a4ccdd793db",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/163-1eaf860c.jpg"
	},
	{
		name: "210-c868ce88.jpg",
		url: "//img.mukewang.com/szimg/5fce10ab0954063b05400304.jpg",
		md5: "c1ce28b7b854063bad3f58b248b6733a",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/210-c868ce88.jpg"
	},
	{
		name: "185-f7ef97d7.jpg",
		url: "//img.mukewang.com/szimg/5fce12ba095ae64005400304.jpg",
		md5: "fbce05ddd75ae6407c6e948848eda161",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/185-f7ef97d7.jpg"
	},
	{
		name: "156-599b075e.jpg",
		url: "//img.mukewang.com/szimg/6084e896097956b305400304.jpg",
		md5: "9be623b5707956b3c0dcd60ef87dc1b0",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/156-599b075e.jpg"
	},
	{
		name: "338-f8e9bdba.jpg",
		url: "//img.mukewang.com/szimg/5fcdfb2e0971bb9805400304.jpg",
		md5: "087b985c5071bb989983e609f8466323",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/338-f8e9bdba.jpg"
	},
	{
		name: "298-d0a6efa2.jpg",
		url: "//img.mukewang.com/szimg/638da68609965cef05400304.jpg",
		md5: "277a8872a2965cef2eb54aee08a1ed0f",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/298-d0a6efa2.jpg"
	},
	{
		name: "224-cedd2c0e.jpg",
		url: "//img.mukewang.com/szimg/638da6c109a25f2a05400304.jpg",
		md5: "b059ab96efa25f2a8c1adfde31197773",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/224-cedd2c0e.jpg"
	},
	{
		name: "332-9c7ec4e7.jpg",
		url: "//img.mukewang.com/szimg/5fcdfc94091bcca605400304.jpg",
		md5: "1ceb0914991bcca617a2ac4c4bdc74f5",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/332-9c7ec4e7.jpg"
	},
	{
		name: "233-aa3d7d51.jpg",
		url: "//img.mukewang.com/szimg/5fd1910309397bd105400304.jpg",
		md5: "a218300e6f397bd1362e8fae46b2c1da",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/233-aa3d7d51.jpg"
	},
	{
		name: "303-d2dc6e5b.jpg",
		url: "//img.mukewang.com/szimg/5fc07b6f092f372705400304.jpg",
		md5: "54a984f4d92f3727f350597a45f5cea5",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/303-d2dc6e5b.jpg"
	},
	{
		name: "247-18e628cf.jpg",
		url: "//img.mukewang.com/szimg/5fce0aab09c2e41105400304.jpg",
		md5: "efd8b74869c2e4114c4dd5b1471cbb29",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/247-18e628cf.jpg"
	},
	{
		name: "154-95f4111e.jpg",
		url: "//img.mukewang.com/szimg/62562e9609c3272d05400304.jpg",
		md5: "7550f1717bc3272d8b9cc962cb9b03bd",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/154-95f4111e.jpg"
	},
	{
		name: "366-85fedd95.jpg",
		url: "//img.mukewang.com/szimg/5fc0649e092069a905400304.jpg",
		md5: "ee3af963cf2069a9b1a8bbdf1cb63285",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/366-85fedd95.jpg"
	},
	{
		name: "292-dc0fd19f.jpg",
		url: "//img.mukewang.com/szimg/5fce06a909699a7c05400304.jpg",
		md5: "f1f9ef1201699a7c8f8db761c472359a",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/292-dc0fd19f.jpg"
	},
	{
		name: "330-2c883e2d.jpg",
		url: "//img.mukewang.com/szimg/5fcdfe070907a2f605400304.jpg",
		md5: "07b1fb695807a2f6201715cd4f33141c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/330-2c883e2d.jpg"
	},
	{
		name: "187-cd1c40c6.jpg",
		url: "//img.mukewang.com/szimg/624d0638094a4fb505400304.jpg",
		md5: "13aec50ab04a4fb5e5ab733fe26ba0d6",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/187-cd1c40c6.jpg"
	},
	{
		name: "313-934aad72.jpg",
		url: "//img.mukewang.com/szimg/5fd18bf00960898e05400304.jpg",
		md5: "77e27dd3c060898eb087aaa1427c6619",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/313-934aad72.jpg"
	},
	{
		name: "353-c056a988.jpg",
		url: "//img.mukewang.com/szimg/5fcdf73f0902454305400304.jpg",
		md5: "d1ad09d9d50245436d504b94811509bc",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/353-c056a988.jpg"
	},
	{
		name: "214-9a962c06.jpg",
		url: "//img.mukewang.com/szimg/5fce0f8009021f4605400304.jpg",
		md5: "58ffede3a7021f46f9ff62cb11cd5344",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/214-9a962c06.jpg"
	},
	{
		name: "142-223caf7e.jpg",
		url: "//img.mukewang.com/szimg/61020c9b09c6961c05400304.jpg",
		md5: "d15389b327c6961c1156316c5f3f316f",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/142-223caf7e.jpg"
	},
	{
		name: "360-909bfa47.jpg",
		url: "//img.mukewang.com/szimg/5fcdf60a098adc9f05400304.jpg",
		md5: "164c7a89098adc9ffb7017b217494a5c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/360-909bfa47.jpg"
	},
	{
		name: "346-28805d9f.jpg",
		url: "//img.mukewang.com/szimg/5fcdf83f0907e6bc05400304.jpg",
		md5: "ad51bbd5ca07e6bc28857705bcc71614",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/346-28805d9f.jpg"
	},
	{
		name: "329-a21152f8.jpg",
		url: "//img.mukewang.com/szimg/5fd1889e0979ac1105400304.jpg",
		md5: "32505855db79ac11ff1e588e699fcd1e",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/329-a21152f8.jpg"
	},
	{
		name: "275-2df4b397.jpg",
		url: "//img.mukewang.com/szimg/5fce0887095d46bb05400304.jpg",
		md5: "c379d7fd0a5d46bb2024e2397b7d7658",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/275-2df4b397.jpg"
	},
	{
		name: "340-ca76ff16.jpg",
		url: "//img.mukewang.com/szimg/5fcdf9740902073705400304.jpg",
		md5: "1ff03d96dc020737c8d12f9e162fe1ef",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/340-ca76ff16.jpg"
	},
	{
		name: "167-4c62dfbd.jpg",
		url: "//img.mukewang.com/szimg/600e3d500940234f05400304.jpg",
		md5: "fcae12005240234f23cd00bee1aad638",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/167-4c62dfbd.jpg"
	},
	{
		name: "151-afb6d361.jpg",
		url: "//img.mukewang.com/szimg/60b9864a09995aa605400304.jpg",
		md5: "8f56139814995aa63f78c063cd84b435",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/151-afb6d361.jpg"
	},
	{
		name: "284-e8ac893e.jpg",
		url: "//img.mukewang.com/szimg/5fce03c9092ece7305400304.jpg",
		md5: "0d00248f7b2ece7320465e4cce4b1c24",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/284-e8ac893e.jpg"
	},
	{
		name: "365-c3170143.jpg",
		url: "//img.mukewang.com/szimg/5fcdf36909b9eb4e05400304.jpg",
		md5: "5bf463eebcb9eb4e801cabfb37d0e6ba",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/365-c3170143.jpg"
	},
	{
		name: "206-356a7fc6.jpg",
		url: "//img.mukewang.com/szimg/5fce112f0930bcd205400304.jpg",
		md5: "aef06f71f030bcd2ee59272dd264cc5f",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/206-356a7fc6.jpg"
	},
	{
		name: "319-2ffc36bc.jpg",
		url: "//img.mukewang.com/szimg/5fce0365095c0ed805400304.jpg",
		md5: "eaef4ad4c65c0ed869013774eef74b32",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/319-2ffc36bc.jpg"
	},
	{
		name: "363-99a17c9a.jpg",
		url: "//img.mukewang.com/szimg/5fcdf3bf090951c405400304.jpg",
		md5: "dd90abfb590951c4941324793c46ea20",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/363-99a17c9a.jpg"
	},
	{
		name: "325-fb6e1461.jpg",
		url: "//img.mukewang.com/szimg/5fd18aab0919ab9005400304.jpg",
		md5: "aa479f38f619ab9095a79eed25079ba5",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/325-fb6e1461.jpg"
	},
	{
		name: "348-7c4b25a7.jpg",
		url: "//img.mukewang.com/szimg/5fd188fa09fc1a8705400304.jpg",
		md5: "2ecf6ff888fc1a87f9508109bc741d5b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/348-7c4b25a7.jpg"
	},
	{
		name: "364-1ce00d04.jpg",
		url: "//img.mukewang.com/szimg/5fcdf37d09fdfc4605400304.jpg",
		md5: "0ebaed0a52fdfc46dee091c2a3ebf4cc",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/364-1ce00d04.jpg"
	},
	{
		name: "341-34d1587e.jpg",
		url: "//img.mukewang.com/szimg/5fd189710912066e05400304.jpg",
		md5: "bd453885f312066e5080187edc700fba",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/341-34d1587e.jpg"
	},
	{
		name: "351-d9925bf1.jpg",
		url: "//img.mukewang.com/szimg/5fc064ba09f7bf3205400304.jpg",
		md5: "d322c135aaf7bf321f44b2edb8cc801d",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/351-d9925bf1.jpg"
	},
	{
		name: "327-745a634e.jpg",
		url: "//img.mukewang.com/szimg/5fcdffb30910d31a05400304.jpg",
		md5: "f2d031ec8010d31a39e80c0847a48e30",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/327-745a634e.jpg"
	},
	{
		name: "199-4e1859ad.jpg",
		url: "//img.mukewang.com/szimg/5fc07b9e0933fbf905400304.jpg",
		md5: "2124dc8fc933fbf95130e1ff2ce822e0",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/199-4e1859ad.jpg"
	},
	{
		name: "180-ba7ba58c.jpg",
		url: "//img.mukewang.com/szimg/5fc0638409e3f98505400304.jpg",
		md5: "5eee63263ae3f9851b1cb06b46a5ec59",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/180-ba7ba58c.jpg"
	},
	{
		name: "159-6d50cc92.jpg",
		url: "//img.mukewang.com/szimg/607cf0c6092a5af105400304.jpg",
		md5: "314c22ced72a5af153ef225fb80735a4",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/159-6d50cc92.jpg"
	},
	{
		name: "339-2e352ea7.jpg",
		url: "//img.mukewang.com/szimg/5fd1898f0939ab3605400304.jpg",
		md5: "e30d545eff39ab36af027dc69d21fc97",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/339-2e352ea7.jpg"
	},
	{
		name: "297-e81ec656.jpg",
		url: "//img.mukewang.com/szimg/63328f5109d0bb9805400304.jpg",
		md5: "7248bbbb48d0bb98e2f6e7b0e0cb3095",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/297-e81ec656.jpg"
	},
	{
		name: "198-9298c603.jpg",
		url: "//img.mukewang.com/szimg/5fd19214097a954d05400304.jpg",
		md5: "d2da2e060e7a954d3cf97f4fe5570c76",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/198-9298c603.jpg"
	},
	{
		name: "259-e891db91.jpg",
		url: "//img.mukewang.com/szimg/5fce0a570932675605400304.jpg",
		md5: "0fa0096f26326756f8ccd889cabca180",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/259-e891db91.jpg"
	},
	{
		name: "166-62ebfce0.jpg",
		url: "//img.mukewang.com/szimg/60223b8609a8ba1705400304.jpg",
		md5: "a90bc67f00a8ba17d50ff9945858418a",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/166-62ebfce0.jpg"
	},
	{
		name: "229-25436b72.jpg",
		url: "//img.mukewang.com/szimg/5fce0eca09e109c400000000.jpg",
		md5: "aeb06749dbe109c4cb8d313529abb1a7",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/229-25436b72.jpg"
	},
	{
		name: "121-6cf1c7db.jpg",
		url: "//img.mukewang.com/szimg/61c567a509444bcd05400304.jpg",
		md5: "843b1c2532444bcdce6c67a3597251d9",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/121-6cf1c7db.jpg"
	},
	{
		name: "124-bc548af7.jpg",
		url: "//img.mukewang.com/szimg/61b31c1a09b8a5a505400304.jpg",
		md5: "f1936bcea1b8a5a5b7cc8be9f2c09d30",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/124-bc548af7.jpg"
	},
	{
		name: "218-129d238d.jpg",
		url: "//img.mukewang.com/szimg/5fd1918a091fe79705400304.jpg",
		md5: "ba976db9e71fe7974d292a97118a8b45",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/218-129d238d.jpg"
	},
	{
		name: "237-8594ae0a.jpg",
		url: "//img.mukewang.com/szimg/5fce0ef609a86c5405400304.jpg",
		md5: "d26c0e8276a86c5491d91f7a094fe573",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/237-8594ae0a.jpg"
	},
	{
		name: "148-d5cf8d76.jpg",
		url: "//img.mukewang.com/szimg/60d44ede0802f6b705400304.jpg",
		md5: "b1126790b502f6b75642fda9ea4fe103",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/148-d5cf8d76.jpg"
	},
	{
		name: "262-bccfd704.jpg",
		url: "//img.mukewang.com/szimg/5fd190ac093929db05400304.jpg",
		md5: "51e312bf153929db63a49cf63118d4e0",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/262-bccfd704.jpg"
	},
	{
		name: "221-a2c599ba.jpg",
		url: "//img.mukewang.com/szimg/5fce100b09065d6605400304.jpg",
		md5: "51cdb7bc5c065d667272fe473d8574b2",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/221-a2c599ba.jpg"
	},
	{
		name: "276-f4dfaf15.jpg",
		url: "//img.mukewang.com/szimg/5fce07b10914815b05400304.jpg",
		md5: "9644b54e7414815bbc5a4164cbba40d3",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/276-f4dfaf15.jpg"
	},
	{
		name: "317-6eaa95af.jpg",
		url: "//img.mukewang.com/szimg/5fce03a509d73cc505400304.jpg",
		md5: "eb2e7a5c38d73cc574db64f6c435b3be",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/317-6eaa95af.jpg"
	},
	{
		name: "179-a935b1aa.jpg",
		url: "//img.mukewang.com/szimg/5fc0665409bc2f1405400304.jpg",
		md5: "d62145db8dbc2f146a1c30a689a79a81",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/179-a935b1aa.jpg"
	},
	{
		name: "252-e241ceb7.jpg",
		url: "//img.mukewang.com/szimg/5fce0a440918728205400304.jpg",
		md5: "2bbb5456f318728267b701a92c192596",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/252-e241ceb7.jpg"
	},
	{
		name: "242-46318c02.jpg",
		url: "//img.mukewang.com/szimg/5fce0e8c0992493005400304.jpg",
		md5: "44fb7da3b5924930bfd3062d9b9a6036",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/242-46318c02.jpg"
	},
	{
		name: "279-6d9bad4f.jpg",
		url: "//img.mukewang.com/szimg/5fd1903609fdec8405400304.jpg",
		md5: "468ab4846ffdec843dc5a9f603e461b3",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/279-6d9bad4f.jpg"
	},
	{
		name: "169-75759b69.jpg",
		url: "//img.mukewang.com/szimg/5ffd1b25092ab63605400306.jpg",
		md5: "4a2caba82a2ab636ce7201c282bfa4aa",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/169-75759b69.jpg"
	},
	{
		name: "257-69b61031.jpg",
		url: "//img.mukewang.com/szimg/5fce0a0a099a800405400304.jpg",
		md5: "da137054ad9a8004fd585603ed4391b4",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/257-69b61031.jpg"
	},
	{
		name: "265-260e9937.jpg",
		url: "//img.mukewang.com/szimg/5fce08a6093244b805400304.jpg",
		md5: "48726c3f193244b8a8d1450ecd8cc1dd",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/265-260e9937.jpg"
	},
	{
		name: "324-73b6f125.jpg",
		url: "//img.mukewang.com/szimg/5fce027a09e52e5805400304.jpg",
		md5: "8a23c40b59e52e58247e876ad31b17c1",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/324-73b6f125.jpg"
	},
	{
		name: "115-0937a076.jpg",
		url: "//img.mukewang.com/szimg/620b4390094b8c2105400304.jpg",
		md5: "792c97bd8f4b8c2104a858b70d9a3412",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/115-0937a076.jpg"
	},
	{
		name: "173-0f5019ba.jpg",
		url: "//img.mukewang.com/szimg/5fdb39dd090efbfb05400304.jpg",
		md5: "bcee576c300efbfb295a859eda2b7ba4",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/173-0f5019ba.jpg"
	},
	{
		name: "309-65cd54c6.jpg",
		url: "//img.mukewang.com/szimg/5fce04b9097ae1f405400304.jpg",
		md5: "f4a49c6ec47ae1f4e00a102fb1b5723e",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/309-65cd54c6.jpg"
	},
	{
		name: "278-31d4e18b.jpg",
		url: "//img.mukewang.com/szimg/5fd18ac409de5cfb05400304.jpg",
		md5: "8854a2b6d1de5cfbbc32ca58669f45b9",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/278-31d4e18b.jpg"
	},
	{
		name: "277-556f7fe6.jpg",
		url: "//img.mukewang.com/szimg/60764f300933e83d05400304.jpg",
		md5: "9ef7876f7c33e83dc170f2e68f456b76",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/277-556f7fe6.jpg"
	},
	{
		name: "251-18eb01b1.jpg",
		url: "//img.mukewang.com/szimg/5fc066e309d6ca5905400304.jpg",
		md5: "522fd21bb9d6ca59e683a0f41355d5bc",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/251-18eb01b1.jpg"
	},
	{
		name: "285-181c9c11.jpg",
		url: "//img.mukewang.com/szimg/6316ec0f0814b5d405400304.jpg",
		md5: "1a0fd07f8a14b5d4a5a6a245701e4367",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/285-181c9c11.jpg"
	},
	{
		name: "116-0189cf32.jpg",
		url: "//img.mukewang.com/szimg/620c7540083297d605400304.jpg",
		md5: "3ab7269af83297d68cb18ca9bd0db4eb",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/116-0189cf32.jpg"
	},
	{
		name: "230-a7f5b6dd.jpg",
		url: "//img.mukewang.com/szimg/5fce0f5509b086fc05400304.jpg",
		md5: "aa6dfa8baeb086fcc274af6df7869d0e",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/230-a7f5b6dd.jpg"
	},
	{
		name: "356-0752ad3a.jpg",
		url: "//img.mukewang.com/szimg/5fd1888a09e918de05400304.jpg",
		md5: "42ce056c3ce918de8a1e1e607373b51e",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/356-0752ad3a.jpg"
	},
	{
		name: "191-eaa528ae.jpg",
		url: "//img.mukewang.com/szimg/5fd192480903b7dc05400304.jpg",
		md5: "76135e4a3b03b7dc41682a3c88ee10a3",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/191-eaa528ae.jpg"
	},
	{
		name: "200-e0ae6f5b.jpg",
		url: "//img.mukewang.com/szimg/5fce11c80904a2d705400304.jpg",
		md5: "74d2ee0b9004a2d7f099379d2003c168",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/200-e0ae6f5b.jpg"
	},
	{
		name: "192-415c1e80.jpg",
		url: "//img.mukewang.com/szimg/5fce117d0949f00005400304.jpg",
		md5: "efa479bd5249f0005ca731b6784c5782",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/192-415c1e80.jpg"
	},
	{
		name: "162-7afb2547.jpg",
		url: "//img.mukewang.com/szimg/6052cdf909c4e61f05400304.jpg",
		md5: "b969d4fceac4e61f2da3e2cfad85e8ad",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/162-7afb2547.jpg"
	},
	{
		name: "225-822c952b.jpg",
		url: "//img.mukewang.com/szimg/5fc0639f0992ef7c05400304.jpg",
		md5: "2c5e83b24892ef7c017c3bf3c027e808",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/225-822c952b.jpg"
	},
	{
		name: "114-e7c30e53.jpg",
		url: "//img.mukewang.com/szimg/62af38cf0986da5705400304.jpg",
		md5: "27c9a67d6b86da5703d4ccd5ccc1823b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/114-e7c30e53.jpg"
	},
	{
		name: "263-fa4c66ad.jpg",
		url: "//img.mukewang.com/szimg/5fce08f509413a6905400304.jpg",
		md5: "4b3283f229413a69f88d2f269075bc2c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/263-fa4c66ad.jpg"
	},
	{
		name: "305-ea7de83f.jpg",
		url: "//img.mukewang.com/szimg/5fd18c8009b8961405400304.jpg",
		md5: "c8d3647c76b89614c2f21773ae28bfe8",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/305-ea7de83f.jpg"
	},
	{
		name: "181-b2e6deb7.jpg",
		url: "//img.mukewang.com/szimg/5fc0668f092fed4200000000.jpg",
		md5: "90b98c967f2fed42ce1385fffa573c09",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/181-b2e6deb7.jpg"
	},
	{
		name: "249-87919754.jpg",
		url: "//img.mukewang.com/szimg/5fce0adb0936fe2c05400304.jpg",
		md5: "e88ce1105136fe2c2ba85ef62667a516",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/249-87919754.jpg"
	},
	{
		name: "122-f8afafb8.jpg",
		url: "//img.mukewang.com/szimg/620dbb700906d77305400304.jpg",
		md5: "4baaac68cb06d77392ccec277a50c30b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/122-f8afafb8.jpg"
	},
	{
		name: "113-ca49a125.jpg",
		url: "//img.mukewang.com/szimg/6221cd1f0986be2805400304.jpg",
		md5: "d957d5f90086be285d6f2f7899202837",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/113-ca49a125.jpg"
	},
	{
		name: "248-47f29c97.jpg",
		url: "//img.mukewang.com/szimg/5fce0b0109dc28f105400304.jpg",
		md5: "9e1649814edc28f1a4f4b1e58de78d85",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/248-47f29c97.jpg"
	},
	{
		name: "182-26890577.jpg",
		url: "//img.mukewang.com/szimg/5fc065fe094b85c705400304.jpg",
		md5: "37e23ff52d4b85c70a4003c61d45e8da",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/182-26890577.jpg"
	},
	{
		name: "133-eb3b45c5.jpg",
		url: "//img.mukewang.com/szimg/616e59ae09168c8705400304.jpg",
		md5: "79aecdfa11168c875040e138f9f1e45d",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/133-eb3b45c5.jpg"
	},
	{
		name: "119-9e873e3d.jpg",
		url: "//img.mukewang.com/szimg/62abe3b009a80a7805400304.jpg",
		md5: "3097accb5da80a78b924bfc3068727f8",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/119-9e873e3d.jpg"
	},
	{
		name: "141-d98cc80a.jpg",
		url: "//img.mukewang.com/szimg/610b7d28098ae17005400304.jpg",
		md5: "91942236d28ae1709d476043c9489edf",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/141-d98cc80a.jpg"
	},
	{
		name: "145-3ec15c74.jpg",
		url: "//img.mukewang.com/szimg/60e7f66c095fa85105400304.jpg",
		md5: "320528275e5fa8519053dbbcc9e52a88",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/145-3ec15c74.jpg"
	},
	{
		name: "244-8e8db14d.jpg",
		url: "//img.mukewang.com/szimg/5fce0b12090cc2a705400304.jpg",
		md5: "09841e70ef0cc2a701f8ddbdef07f77b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/244-8e8db14d.jpg"
	},
	{
		name: "130-eedf7b66.jpg",
		url: "//img.mukewang.com/szimg/617b6b8709cd81b500000000.jpg",
		md5: "615ba1a991cd81b550052163e0dd53ad",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/130-eedf7b66.jpg"
	},
	{
		name: "223-edd16808.jpg",
		url: "//img.mukewang.com/szimg/5fce0fd30984257405400304.jpg",
		md5: "ab503f31bb8425742558ca34cc0274b0",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/223-edd16808.jpg"
	},
	{
		name: "189-33d445b9.jpg",
		url: "//img.mukewang.com/szimg/5fd192250939bef805400304.jpg",
		md5: "ec8ef25ccc39bef8ec86a9c35dfbb336",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/189-33d445b9.jpg"
	},
	{
		name: "126-26b9694d.jpg",
		url: "//img.mukewang.com/szimg/61a9b12209fdc07405400304.jpg",
		md5: "7927689fa3fdc07412c9a929fbc8d659",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/126-26b9694d.jpg"
	},
	{
		name: "299-96a36a3e.jpg",
		url: "//img.mukewang.com/szimg/5fce061109e4de8505400304.jpg",
		md5: "5407e565b1e4de8599e8d39eb4043177",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/299-96a36a3e.jpg"
	},
	{
		name: "361-c0d47ca6.jpg",
		url: "//img.mukewang.com/szimg/5fd1882e09cec0fd05400304.jpg",
		md5: "396aafe91dcec0fd74c27a93e06fc4cf",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/361-c0d47ca6.jpg"
	},
	{
		name: "118-f7e92726.jpg",
		url: "//img.mukewang.com/szimg/61e6361809ebba7a05400304.jpg",
		md5: "504d27db04ebba7a21e682e144da639f",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/118-f7e92726.jpg"
	},
	{
		name: "127-90750087.jpg",
		url: "//img.mukewang.com/szimg/619c95910957562305400304.jpg",
		md5: "f15d6b65d05756239f92131cad2c9fae",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/127-90750087.jpg"
	},
	{
		name: "117-0675f794.jpg",
		url: "//img.mukewang.com/szimg/6200d55009876b4805400304.jpg",
		md5: "58ea5f58aa876b48929a3ea85fea9dae",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/117-0675f794.jpg"
	},
	{
		name: "272-416f6c54.jpg",
		url: "//img.mukewang.com/szimg/5fcdfbc809dba7f205400304.jpg",
		md5: "5fb094159bdba7f2e162bc2a994c54ba",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/272-416f6c54.jpg"
	},
	{
		name: "152-0c6394e3.jpg",
		url: "//img.mukewang.com/szimg/609e0f92098f624a05400304.jpg",
		md5: "6697fc01c18f624af7854fc0043daffe",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/152-0c6394e3.jpg"
	},
	{
		name: "204-52b0d14f.jpg",
		url: "//img.mukewang.com/szimg/5fd191f209141e1905400304.jpg",
		md5: "30fb2e2106141e19d2ae3dfcfe04f385",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/204-52b0d14f.jpg"
	},
	{
		name: "146-d5007c80.jpg",
		url: "//img.mukewang.com/szimg/6112177809906d3b05400304.jpg",
		md5: "6b33de7625906d3b7bef457bc362d885",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/146-d5007c80.jpg"
	},
	{
		name: "326-6923b5db.jpg",
		url: "//img.mukewang.com/szimg/5fd18a950924d88505400304.jpg",
		md5: "ffa35224de24d8850409a397b1ffe7ab",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/326-6923b5db.jpg"
	},
	{
		name: "168-6f53a97a.jpg",
		url: "//img.mukewang.com/szimg/5ffd399d090e67a105400304.jpg",
		md5: "f41144887d0e67a1da5bb8c1d644729a",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/168-6f53a97a.jpg"
	},
	{
		name: "125-fd00af24.jpg",
		url: "//img.mukewang.com/szimg/61adb6e709f77efb05400304.jpg",
		md5: "4be6f7dcfff77efbb156093ab7907ee2",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/125-fd00af24.jpg"
	},
	{
		name: "260-ccf57dcd.jpg",
		url: "//img.mukewang.com/szimg/5fcdf67c09dd6b2805400304.jpg",
		md5: "d18f789f40dd6b28a42519d2951d1517",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/260-ccf57dcd.jpg"
	},
	{
		name: "128-29898c4e.jpg",
		url: "//img.mukewang.com/szimg/619704dd092215a305400304.jpg",
		md5: "38ceb624032215a3cc6d22a4fe06e1d7",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/128-29898c4e.jpg"
	},
	{
		name: "250-55aa5d88.jpg",
		url: "//img.mukewang.com/szimg/5fce09d009d11adc05400304.jpg",
		md5: "654c29f2b2d11adc231fa169245061d2",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/250-55aa5d88.jpg"
	},
	{
		name: "178-48e8a382.jpg",
		url: "//img.mukewang.com/szimg/5fc0639609b509a600000000.jpg",
		md5: "9f642d67e8b509a6dae69440a5acf2c4",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/178-48e8a382.jpg"
	},
	{
		name: "256-576492a6.jpg",
		url: "//img.mukewang.com/szimg/5fce0a3309d8f4cf05400304.jpg",
		md5: "2245ef4907d8f4cf6df0744cea449407",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/256-576492a6.jpg"
	},
	{
		name: "184-ae921f2b.jpg",
		url: "//img.mukewang.com/szimg/5fd1925a09eb9b7205400304.jpg",
		md5: "59c7a5f960eb9b726827fe649ac39f18",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/184-ae921f2b.jpg"
	},
	{
		name: "123-95a25f7f.jpg",
		url: "//img.mukewang.com/szimg/61b8446e0935f7be05400304.jpg",
		md5: "70729d924435f7bece3be74bc032fd3f",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/123-95a25f7f.jpg"
	},
	{
		name: "212-0e51796b.jpg",
		url: "//img.mukewang.com/szimg/62a6db0509c8fdba05400304.jpg",
		md5: "641b2f38b8c8fdba5b69aec59cd62c63",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/212-0e51796b.jpg"
	},
	{
		name: "337-1cea2efb.jpg",
		url: "//img.mukewang.com/szimg/5fd189cf09f69f9d05400304.jpg",
		md5: "161ee94e7ff69f9d42edd867888a53ee",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/337-1cea2efb.jpg"
	},
	{
		name: "232-eaa56ecf.jpg",
		url: "//img.mukewang.com/szimg/5fce0edc09b126f705400304.jpg",
		md5: "f374442d53b126f79c73b9772b21124b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/232-eaa56ecf.jpg"
	},
	{
		name: "222-4c7596f6.jpg",
		url: "//img.mukewang.com/szimg/638da68a0919b61e05400304.jpg",
		md5: "6ff9e3322919b61e1c67c0b445776786",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/222-4c7596f6.jpg"
	},
	{
		name: "240-1a23cc28.jpg",
		url: "//img.mukewang.com/szimg/5fce0b5009adf73805400304.jpg",
		md5: "f65b0b8535adf73827edfca2cf55c312",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/240-1a23cc28.jpg"
	},
	{
		name: "137-53c10d50.jpg",
		url: "//img.mukewang.com/szimg/637495e508639b3c05400304.jpg",
		md5: "9d58d98c6a639b3ccfe4a96c9592f997",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/137-53c10d50.jpg"
	},
	{
		name: "274-6cc88851.jpg",
		url: "//img.mukewang.com/szimg/5fce06be09d3611005400304.jpg",
		md5: "100bf30b3fd3611028650eadce00ffd1",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/274-6cc88851.jpg"
	},
	{
		name: "138-8f18c736.jpg",
		url: "//img.mukewang.com/szimg/613b04f409d0794305400304.jpg",
		md5: "75b653d292d07943c1bdb602bd2956ed",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/138-8f18c736.jpg"
	},
	{
		name: "175-fce392c8.jpg",
		url: "//img.mukewang.com/szimg/5fc9e83d08971d8705340300.jpg",
		md5: "b8188a84e2971d878127142e253b830a",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/175-fce392c8.jpg"
	},
	{
		name: "357-d637c45f.jpg",
		url: "//img.mukewang.com/szimg/5fd188790975b68805400304.jpg",
		md5: "c2dd88b96175b688134246ffabbccbbf",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/357-d637c45f.jpg"
	},
	{
		name: "195-36a95d60.jpg",
		url: "//img.mukewang.com/szimg/5fd191e1093bbaf005400304.jpg",
		md5: "c5d310546f3bbaf0e16b56f9851f844b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/195-36a95d60.jpg"
	},
	{
		name: "239-9b61fe8d.jpg",
		url: "//img.mukewang.com/szimg/5fce0ea20980c02d05400304.jpg",
		md5: "b8a736abbe80c02d11a045d51a3064ec",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/239-9b61fe8d.jpg"
	},
	{
		name: "266-51525dd0.jpg",
		url: "//img.mukewang.com/szimg/5fd1907e095c6f7105400304.jpg",
		md5: "3e2b8099505c6f71a3f113b4fcb9c1b4",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/266-51525dd0.jpg"
	},
	{
		name: "216-f5b0d224.jpg",
		url: "//img.mukewang.com/szimg/5fd1917709ec3f7b05400304.jpg",
		md5: "82e0f0f566ec3f7b2805a765de77289c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/216-f5b0d224.jpg"
	},
	{
		name: "301-034c9e0f.jpg",
		url: "//img.mukewang.com/szimg/5fce05de09ac069905400304.jpg",
		md5: "061e121157ac0699f04d72c37e671753",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/301-034c9e0f.jpg"
	},
	{
		name: "306-d22d0823.jpg",
		url: "//img.mukewang.com/szimg/5fce056e093e958905400304.jpg",
		md5: "e8a69942c73e958951f24592e46770d8",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/306-d22d0823.jpg"
	},
	{
		name: "323-0d8a8522.jpg",
		url: "//img.mukewang.com/szimg/5fd18adb097ad5ff05400304.jpg",
		md5: "ae3f1af3097ad5ffacb98ae53be01304",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/323-0d8a8522.jpg"
	},
	{
		name: "269-c09e67f6.jpg",
		url: "//img.mukewang.com/szimg/5fd18f4f09887b4705400304.jpg",
		md5: "a78f092c14887b47adede169ff45ca50",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/269-c09e67f6.jpg"
	},
	{
		name: "335-5e611f08.jpg",
		url: "//img.mukewang.com/szimg/5fcdfc330922b0fc05400304.jpg",
		md5: "59c8afa31922b0fc5276ec4f52f34ebe",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/335-5e611f08.jpg"
	},
	{
		name: "286-134b1da5.jpg",
		url: "//img.mukewang.com/szimg/5fce075d091bbb9f05400304.jpg",
		md5: "152ea141f81bbb9fa34cf0a8d67bdbae",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/286-134b1da5.jpg"
	},
	{
		name: "235-71fd8830.jpg",
		url: "//img.mukewang.com/szimg/5fce0eb4093bb29005400304.jpg",
		md5: "603bd7b1b23bb2905d949ef84c90e28d",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/235-71fd8830.jpg"
	},
	{
		name: "170-033c4272.jpg",
		url: "//img.mukewang.com/szimg/5fed3a9e0910793205400304.jpg",
		md5: "11ed625902107932b869c45d9994d8c1",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/170-033c4272.jpg"
	},
	{
		name: "312-8e5c1cc8.jpg",
		url: "//img.mukewang.com/szimg/5fc064770975eecc05400304.jpg",
		md5: "52257aa9a675eecc16e8eecd32edb286",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/312-8e5c1cc8.jpg"
	},
	{
		name: "160-be440412.jpg",
		url: "//img.mukewang.com/szimg/624660f709a508eb05400304.jpg",
		md5: "0484f296b8a508ebab14eb6395b9bbf1",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/160-be440412.jpg"
	},
	{
		name: "336-08eb18d0.jpg",
		url: "//img.mukewang.com/szimg/5fcdfbfe09bb523805400304.jpg",
		md5: "c83ce1ee40bb5238e586ede15af95fe3",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/336-08eb18d0.jpg"
	},
	{
		name: "304-f17972bd.jpg",
		url: "//img.mukewang.com/szimg/5fce05a909847e6105400304.jpg",
		md5: "9ccc849b75847e61fa287ae2da4127fe",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/304-f17972bd.jpg"
	},
	{
		name: "241-cb189429.jpg",
		url: "//img.mukewang.com/szimg/5fd190f009741a9c05400304.jpg",
		md5: "16edcaa48a741a9c2f6388ddb0370188",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/241-cb189429.jpg"
	},
	{
		name: "291-ea2eaf14.jpg",
		url: "//img.mukewang.com/szimg/5fd18c0709fa56b905400304.jpg",
		md5: "c0adb40e14fa56b9a0bd7c94118184a0",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/291-ea2eaf14.jpg"
	},
	{
		name: "208-2233b393.jpg",
		url: "//img.mukewang.com/szimg/5fce111c09288d4505400304.jpg",
		md5: "d8525e1a0b288d453c4fe761528bfeb9",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/208-2233b393.jpg"
	},
	{
		name: "149-ea8e4440.jpg",
		url: "//img.mukewang.com/szimg/60cc0edf09706cb005400304.jpg",
		md5: "1928656c73706cb02c0cd7da0bf4dfd6",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/149-ea8e4440.jpg"
	},
	{
		name: "293-81c52fda.jpg",
		url: "//img.mukewang.com/szimg/5fcdf5a7092bba5d00000000.jpg",
		md5: "8d5a3471cc2bba5d272cb9487d6d44fb",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/293-81c52fda.jpg"
	},
	{
		name: "238-3278ca20.jpg",
		url: "//img.mukewang.com/szimg/5fce0b6509cf00d305400304.jpg",
		md5: "925a062b9bcf00d34700088f9048d2a1",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/238-3278ca20.jpg"
	},
	{
		name: "211-57dbacba.jpg",
		url: "//img.mukewang.com/szimg/5fc064180941622b05400304.jpg",
		md5: "ffe16ebb2841622b7f8aba1a6fad2ab3",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/211-57dbacba.jpg"
	},
	{
		name: "300-d7d78aab.jpg",
		url: "//img.mukewang.com/szimg/5fce059809a376bc05400304.jpg",
		md5: "d1b81202aca376bca6ab9921d193d7c8",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/300-d7d78aab.jpg"
	},
	{
		name: "349-714070f7.jpg",
		url: "//img.mukewang.com/szimg/5fcdf7a9093f5f5105400304.jpg",
		md5: "4a8055d1333f5f5141640357f89bbffa",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/349-714070f7.jpg"
	},
	{
		name: "307-d624b513.jpg",
		url: "//img.mukewang.com/szimg/5fce053d09e4a2d405400304.jpg",
		md5: "c26b5a55cae4a2d431f47a776db3a3fa",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/307-d624b513.jpg"
	},
	{
		name: "112-c1f0da50.jpg",
		url: "//img.mukewang.com/szimg/6226b94e0958682505400304.jpg",
		md5: "f053807fba58682533ce5ff416d6ae24",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/112-c1f0da50.jpg"
	},
	{
		name: "226-73df783a.jpg",
		url: "//img.mukewang.com/szimg/5fce0faa09bddbd405400304.jpg",
		md5: "c896baccadbddbd472304024407ec2ca",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/226-73df783a.jpg"
	},
	{
		name: "171-8e2cb850.jpg",
		url: "//img.mukewang.com/szimg/62ff452308323ab005400304.jpg",
		md5: "0601c35449323ab068f7d5da56e0099d",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/171-8e2cb850.jpg"
	},
	{
		name: "153-bf9645c4.jpg",
		url: "//img.mukewang.com/szimg/609b4519097a76c805400304.jpg",
		md5: "a71968368e7a76c8f7cd49c4fd66c30c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/153-bf9645c4.jpg"
	},
	{
		name: "135-978eba52.jpg",
		url: "//img.mukewang.com/szimg/614d42de09c03b3705400304.jpg",
		md5: "69cf588a8dc03b37b5ac7c7094ce75f2",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/135-978eba52.jpg"
	},
	{
		name: "271-75c0cf37.jpg",
		url: "//img.mukewang.com/szimg/5fce03b709bd7e9c05400304.jpg",
		md5: "d2d954f18cbd7e9c5d93c1b7ca8639d2",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/271-75c0cf37.jpg"
	},
	{
		name: "290-f354a88b.jpg",
		url: "//img.mukewang.com/szimg/5fd18f0a09a4950605400304.jpg",
		md5: "3573076b5da49506f0b5bdbf5bf3b1d9",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/290-f354a88b.jpg"
	},
	{
		name: "190-ea7edf6a.jpg",
		url: "//img.mukewang.com/szimg/638da6130946e97805400304.jpg",
		md5: "c2fe99c90e46e978358b03aa6bd6e8e8",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/190-ea7edf6a.jpg"
	},
	{
		name: "308-a328221d.jpg",
		url: "//img.mukewang.com/szimg/5fce052309bf95b205400304.jpg",
		md5: "710ea73224bf95b2410bf9a73517e508",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/308-a328221d.jpg"
	},
	{
		name: "243-0aee2eb6.jpg",
		url: "//img.mukewang.com/szimg/5fd190d709afb12005400304.jpg",
		md5: "6a3e7bcbdcafb120ee8900b492214c6e",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/243-0aee2eb6.jpg"
	},
	{
		name: "120-d1e17161.jpg",
		url: "//img.mukewang.com/szimg/61cea14c09177c8205400304.jpg",
		md5: "0562954dbb177c827ec2ff30dd1ae0ee",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/120-d1e17161.jpg"
	},
	{
		name: "131-759366e0.jpg",
		url: "//img.mukewang.com/szimg/6176196209f173ef05400304.jpg",
		md5: "aaecf30e11f173efd31a8c0ce4308cab",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/131-759366e0.jpg"
	},
	{
		name: "188-cabd955d.jpg",
		url: "//img.mukewang.com/szimg/5fc063c709c41a8f05400304.jpg",
		md5: "3243719b98c41a8feb417003b459c83c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/188-cabd955d.jpg"
	},
	{
		name: "227-4f63b869.jpg",
		url: "//img.mukewang.com/szimg/5fce0f9509a3e5ac05400304.jpg",
		md5: "0c68e870eca3e5ac74e24e6e579fbec3",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/227-4f63b869.jpg"
	},
	{
		name: "194-290add74.jpg",
		url: "//img.mukewang.com/szimg/5fc069df0964a4a705400304.jpg",
		md5: "b9dce642eb64a4a747b3c5ec98a52d01",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/194-290add74.jpg"
	},
	{
		name: "177-3550bf99.jpg",
		url: "//img.mukewang.com/szimg/5fc065df09d7104105400304.jpg",
		md5: "c3033f50a7d71041b74abcdf61eae4b3",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/177-3550bf99.jpg"
	},
	{
		name: "315-501821d7.jpg",
		url: "//img.mukewang.com/szimg/5fce04090993b85805400304.jpg",
		md5: "a4d9467ac493b8588ed5feabf8e6d410",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/315-501821d7.jpg"
	},
	{
		name: "253-1cddb4fd.jpg",
		url: "//img.mukewang.com/szimg/5fd1909809284bdd05400304.jpg",
		md5: "3a15bb2db6284bdd3839ce71335ac2b9",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/253-1cddb4fd.jpg"
	},
	{
		name: "158-856bbc8e.jpg",
		url: "//img.mukewang.com/szimg/60793fca09fde18b05400304.jpg",
		md5: "ff91ffbbeefde18b1bc4f884bb5d722e",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/158-856bbc8e.jpg"
	},
	{
		name: "129-57eaf8c8.jpg",
		url: "//img.mukewang.com/szimg/617f536d09170b4105400304.jpg",
		md5: "f745992083170b41fabc5f14d0c9cfd0",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/129-57eaf8c8.jpg"
	},
	{
		name: "186-c1e6d0e2.jpg",
		url: "//img.mukewang.com/szimg/5fce12fe09a4efdb05400304.jpg",
		md5: "a501c4a1b9a4efdbca791bae57cba01b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/186-c1e6d0e2.jpg"
	},
	{
		name: "88-6694365c.jpg",
		url: "//img.mukewang.com/szimg/62f5fa090950c28005400304.jpg",
		md5: "7c13072daf50c2808285ade482f6f1e5",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/88-6694365c.jpg"
	},
	{
		name: "41-12c8dea3.jpg",
		url: "//img.mukewang.com/szimg/6413dfb109769c8205400304.jpg",
		md5: "9c6ad933a8769c823bd0d8f4a2ad5bb7",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/41-12c8dea3.jpg"
	},
	{
		name: "95-0379a193.jpg",
		url: "//img.mukewang.com/szimg/62a83db409bda32905400304.jpg",
		md5: "641deb7fc1bda329593d243b672c34d5",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/95-0379a193.jpg"
	},
	{
		name: "66-d713964c.jpg",
		url: "//img.mukewang.com/szimg/63b3ecc309cd911100000000.jpg",
		md5: "50e6c70a98cd9111318354800ec7ed1b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/66-d713964c.jpg"
	},
	{
		name: "37-ba1096ae.jpg",
		url: "//img.mukewang.com/szimg/6358ebd6090934ea05400304.jpg",
		md5: "ce1a0e114d0934ea24cc49218d82a10b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/37-ba1096ae.jpg"
	},
	{
		name: "72-013112df.jpg",
		url: "//img.mukewang.com/szimg/6364defd090e2d6f05400304.jpg",
		md5: "af949ea7060e2d6ff817a9acd0d3e57a",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/72-013112df.jpg"
	},
	{
		name: "79-bb62fbfe.jpg",
		url: "//img.mukewang.com/szimg/633275070927907705400304.jpg",
		md5: "0a09c1eaf1279077f40977b0aad50fd7",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/79-bb62fbfe.jpg"
	},
	{
		name: "5-56a25b73.jpg",
		url: "//img.mukewang.com/szimg/6400732c0821a6f905400304.jpg",
		md5: "30213b26a921a6f9dd0bad3ade15ccd3",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/5-56a25b73.jpg"
	},
	{
		name: "103-25c82078.jpg",
		url: "//img.mukewang.com/szimg/627485b20904b78505400304.jpg",
		md5: "01991797ff04b7853d5bb02b917fe71c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/103-25c82078.jpg"
	},
	{
		name: "10-fbd4ae3d.jpg",
		url: "//img.mukewang.com/szimg/6406eba5081f01b505400304.jpg",
		md5: "e63d720bea1f01b5f31b5ce9f46c3c37",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/10-fbd4ae3d.jpg"
	},
	{
		name: "11-d37cd7c9.jpg",
		url: "//img.mukewang.com/szimg/640060990955900105400304.jpg",
		md5: "eb8d10e2d95590012d122a618824fdd9",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/11-d37cd7c9.jpg"
	},
	{
		name: "13-295586ee.jpg",
		url: "//img.mukewang.com/szimg/63f3349609a5b45c05400304.jpg",
		md5: "8a02616168a5b45c2c097cecddcda575",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/13-295586ee.jpg"
	},
	{
		name: "105-4a58ef96.jpg",
		url: "//img.mukewang.com/szimg/625e46550973116905400304.jpg",
		md5: "9a5ef6e749731169d8b28f9d7201dcf6",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/105-4a58ef96.jpg"
	},
	{
		name: "60-a7914707.jpg",
		url: "//img.mukewang.com/szimg/623931dc09c59e7600000000.jpg",
		md5: "db85520557c59e7627f242bd4ca6ff10",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/60-a7914707.jpg"
	},
	{
		name: "63-da473185.jpg",
		url: "//img.mukewang.com/szimg/63db301c09ba3a2305400304.jpg",
		md5: "4f07a74222ba3a2305499deaa52b0786",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/63-da473185.jpg"
	},
	{
		name: "3-85a8561b.jpg",
		url: "//img.mukewang.com/szimg/63f5e2410947095705400304.jpg",
		md5: "ceb6ef50ee4709571baa6c0ea82e01e1",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/3-85a8561b.jpg"
	},
	{
		name: "7-4b54449c.jpg",
		url: "//img.mukewang.com/szimg/63ef2591084284be05400304.jpg",
		md5: "aa95f163d34284be4712e4f473a8f7fc",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/7-4b54449c.jpg"
	},
	{
		name: "82-d3d288d4.jpg",
		url: "//img.mukewang.com/szimg/6311b4be096c894105400304.jpg",
		md5: "f24eaa7fcb6c89411b6fe8b0fba5810d",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/82-d3d288d4.jpg"
	},
	{
		name: "8-91db95b8.jpg",
		url: "//img.mukewang.com/szimg/63ef3f2209f4951705400304.jpg",
		md5: "b3a054f4c2f49517863b3219b7503e7a",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/8-91db95b8.jpg"
	},
	{
		name: "109-39613620.jpg",
		url: "//img.mukewang.com/szimg/6369ca3a09a1d23405400304.jpg",
		md5: "d3e8f4ef57a1d2342d6ab360d95dd472",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/109-39613620.jpg"
	},
	{
		name: "52-0233ecca.jpg",
		url: "//img.mukewang.com/szimg/63fd667009b2198400000000.jpg",
		md5: "695cab89c6b21984bafd36a773d551c2",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/52-0233ecca.jpg"
	},
	{
		name: "70-b7915bc6.jpg",
		url: "//img.mukewang.com/szimg/63902ffa09112c6a05400304.jpg",
		md5: "08a55cf531112c6ac7a13198a113b36c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/70-b7915bc6.jpg"
	},
	{
		name: "57-ee5deeb9.jpg",
		url: "//img.mukewang.com/szimg/634e0b8808f0c1c905400304.jpg",
		md5: "0c101044fcf0c1c9aa6dc43e3adbf02e",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/57-ee5deeb9.jpg"
	},
	{
		name: "85-851a2bff.jpg",
		url: "//img.mukewang.com/szimg/6315af73099e1e2905400304.jpg",
		md5: "38610f5d119e1e29f1428619c5b57c3d",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/85-851a2bff.jpg"
	},
	{
		name: "71-f0f7f095.jpg",
		url: "//img.mukewang.com/szimg/63773e56090d2b2205400304.jpg",
		md5: "b0de881cbf0d2b224e22be37c18ed293",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/71-f0f7f095.jpg"
	},
	{
		name: "2-7fe6795b.jpg",
		url: "//img.mukewang.com/szimg/640a90e109f8fe7805400304.jpg",
		md5: "2dbb37decbf8fe78287615a600fb5199",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/2-7fe6795b.jpg"
	},
	{
		name: "89-576e40ed.jpg",
		url: "//img.mukewang.com/szimg/62df5531092d892605400304.jpg",
		md5: "dc68b1a9222d8926bd3787d57ed3a0ee",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/89-576e40ed.jpg"
	},
	{
		name: "6-c1afa934.jpg",
		url: "//img.mukewang.com/szimg/640a71960921f0d505400304.jpg",
		md5: "e68167aeba21f0d566824d0a62821daf",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/6-c1afa934.jpg"
	},
	{
		name: "34-d91b8083.jpg",
		url: "//img.mukewang.com/szimg/636c706b09c2a5d305400304.jpg",
		md5: "0a7193a4c5c2a5d3fa0a9f03d072fd9d",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/34-d91b8083.jpg"
	},
	{
		name: "59-9ba945d7.jpg",
		url: "//img.mukewang.com/szimg/62af38e10980ff6b05400304.jpg",
		md5: "77cc9ca90180ff6b53db1df5fb395faa",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/59-9ba945d7.jpg"
	},
	{
		name: "69-9a9834bd.jpg",
		url: "//img.mukewang.com/szimg/639989a5081b677f05400304.jpg",
		md5: "15e22f2cb01b677f5ea61db30c1dd886",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/69-9a9834bd.jpg"
	},
	{
		name: "87-61585be1.jpg",
		url: "//img.mukewang.com/szimg/62fca73c097563b805400304.jpg",
		md5: "d519f8d3c67563b8857ab9e5940ac752",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/87-61585be1.jpg"
	},
	{
		name: "62-5f06459e.jpg",
		url: "//img.mukewang.com/szimg/63eb544909d36c1a05400304.jpg",
		md5: "5574a0066dd36c1adfed188e3a489388",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/62-5f06459e.jpg"
	},
	{
		name: "91-78fda665.jpg",
		url: "//img.mukewang.com/szimg/62d61d00094731ab05400304.jpg",
		md5: "327f99610d4731abac822dca3d7cb683",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/91-78fda665.jpg"
	},
	{
		name: "92-f92ca6fa.jpg",
		url: "//img.mukewang.com/szimg/62bd09e60925fdb305400304.jpg",
		md5: "d5a3c1925125fdb30e4b3ed8a8d97e8c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/92-f92ca6fa.jpg"
	},
	{
		name: "64-d4f1caf2.jpg",
		url: "//img.mukewang.com/szimg/63bbd16b09928a0605400304.jpg",
		md5: "a45661b626928a0638ce30407f66fc62",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/64-d4f1caf2.jpg"
	},
	{
		name: "81-ad8d3598.jpg",
		url: "//img.mukewang.com/szimg/632433df09c97d1905400304.jpg",
		md5: "8d28cf61bfc97d19b6244e586cba1df2",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/81-ad8d3598.jpg"
	},
	{
		name: "98-c856ee3b.jpg",
		url: "//img.mukewang.com/szimg/6295d3c5094c3b2a05400304.jpg",
		md5: "b22ffa11034c3b2a09184a9c3ef5d813",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/98-c856ee3b.jpg"
	},
	{
		name: "44-69e5a01a.jpg",
		url: "//img.mukewang.com/szimg/64094eae08e9e13905400304.jpg",
		md5: "d106fdc519e9e13988e14ab8fecc6230",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/44-69e5a01a.jpg"
	},
	{
		name: "73-0adb4c0c.jpg",
		url: "//img.mukewang.com/szimg/636c93e408d03f9e05400304.jpg",
		md5: "246c89069dd03f9e4a0e82081bce94a3",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/73-0adb4c0c.jpg"
	},
	{
		name: "55-bfd23875.jpg",
		url: "//img.mukewang.com/szimg/6380338b09edb25005400304.jpg",
		md5: "124de5183dedb2507c9997faf45c2492",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/55-bfd23875.jpg"
	},
	{
		name: "65-8a3489a4.jpg",
		url: "//img.mukewang.com/szimg/63bba713092ff3ff05400304.jpg",
		md5: "017672b7752ff3ff0fa41f508be8b7f2",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/65-8a3489a4.jpg"
	},
	{
		name: "99-6fcef74f.jpg",
		url: "//img.mukewang.com/szimg/6290333009a9cf6705400304.jpg",
		md5: "fb16626209a9cf67c30834912ccc4340",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/99-6fcef74f.jpg"
	},
	{
		name: "97-c4e64114.jpg",
		url: "//img.mukewang.com/szimg/629f06690989e40705400304.jpg",
		md5: "ccaf82cb6089e4079658d731b58a1368",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/97-c4e64114.jpg"
	},
	{
		name: "107-8dc3f29b.jpg",
		url: "//img.mukewang.com/szimg/62abe54a09cf15b505400304.jpg",
		md5: "c300cb4094cf15b57fb7efffa0147047",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/107-8dc3f29b.jpg"
	},
	{
		name: "84-44ac2944.jpg",
		url: "//img.mukewang.com/szimg/6318426f09c8371505400304.jpg",
		md5: "c6da7ae0ddc837152c100ec13588365c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/84-44ac2944.jpg"
	},
	{
		name: "83-c6f0ed88.jpg",
		url: "//img.mukewang.com/szimg/631871ae09a7dfb705400304.jpg",
		md5: "1cd3b6fb3ba7dfb7032ff2943d9cacbf",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/83-c6f0ed88.jpg"
	},
	{
		name: "104-24fb45c7.jpg",
		url: "//img.mukewang.com/szimg/6264aea709305c8605400304.jpg",
		md5: "af5eb113f8305c862c8acc53445a4f73",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/104-24fb45c7.jpg"
	},
	{
		name: "28-6b9b1271.jpg",
		url: "//img.mukewang.com/szimg/63a26398099ff25405400304.jpg",
		md5: "d6cb1c121f9ff254140f88232ead294f",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/28-6b9b1271.jpg"
	},
	{
		name: "18-8e92af01.jpg",
		url: "//img.mukewang.com/szimg/63441f8509afcc2305400304.jpg",
		md5: "0447cdc640afcc23011fc9a4ba6e43a2",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/18-8e92af01.jpg"
	},
	{
		name: "67-388806b7.jpg",
		url: "//img.mukewang.com/szimg/63ae5739094383fb05400304.jpg",
		md5: "6b0bf8248c4383fbd2153d3391a49e41",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/67-388806b7.jpg"
	},
	{
		name: "75-d37e571a.jpg",
		url: "//img.mukewang.com/szimg/6360d7cd095b52f005400304.jpg",
		md5: "03e21176fd5b52f083ba863753777c88",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/75-d37e571a.jpg"
	},
	{
		name: "76-72984891.jpg",
		url: "//img.mukewang.com/szimg/6360d709098bdaf305400304.jpg",
		md5: "12225708f78bdaf34e555c9f8b090fbb",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/76-72984891.jpg"
	},
	{
		name: "111-3ad558f9.jpg",
		url: "//img.mukewang.com/szimg/622aaf620945c5a305400304.jpg",
		md5: "0a2df6ec0445c5a36be2e9aabef60908",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/111-3ad558f9.jpg"
	},
	{
		name: "106-96ac5023.jpg",
		url: "//img.mukewang.com/szimg/625d283009abda5905400304.jpg",
		md5: "679243a4cbabda594bc3484f1e885644",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/106-96ac5023.jpg"
	},
	{
		name: "93-6a25b049.jpg",
		url: "//img.mukewang.com/szimg/62abe55f09a12de305400304.jpg",
		md5: "5b51e44962a12de3bf9e1a457e5c30c1",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/93-6a25b049.jpg"
	},
	{
		name: "94-fdd351bc.jpg",
		url: "//img.mukewang.com/szimg/62abecd0098332d705400304.jpg",
		md5: "52c70d61e18332d7c6a757bdd82b832f",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/94-fdd351bc.jpg"
	},
	{
		name: "21-f8794804.jpg",
		url: "//img.mukewang.com/szimg/63ec343809bd4f9905400304.jpg",
		md5: "2d7113221ebd4f9902b45e54e1c3e1a0",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/21-f8794804.jpg"
	},
	{
		name: "100-269abd0d.jpg",
		url: "//img.mukewang.com/szimg/62afd30d092f6b0605400304.jpg",
		md5: "c69f7756532f6b0661e3e25b71e288c2",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/100-269abd0d.jpg"
	},
	{
		name: "110-11ac998a.jpg",
		url: "//img.mukewang.com/szimg/62abe5340986f0d605400304.jpg",
		md5: "396531b40b86f0d681d07fecbd9b57dd",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/110-11ac998a.jpg"
	},
	{
		name: "86-056ca112.jpg",
		url: "//img.mukewang.com/szimg/63083c25090b81b605400304.jpg",
		md5: "5e62028de20b81b6cb45a9658807b832",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/86-056ca112.jpg"
	},
	{
		name: "56-84c05303.jpg",
		url: "//img.mukewang.com/szimg/628f210309d1343005400304.jpg",
		md5: "5394545778d13430a319ec7e4335cf3c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/56-84c05303.jpg"
	},
	{
		name: "90-0c49bbf0.jpg",
		url: "//img.mukewang.com/szimg/62da505609bcbabe05400304.jpg",
		md5: "1fc20f1bb1bcbabe1f0e49afc1520845",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/90-0c49bbf0.jpg"
	},
	{
		name: "108-4ca8121b.jpg",
		url: "//img.mukewang.com/szimg/62396ad809c7f8d700000000.jpg",
		md5: "c44bcfd7f4c7f8d7eb03624df6df6070",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/108-4ca8121b.jpg"
	},
	{
		name: "101-2df20049.jpg",
		url: "//img.mukewang.com/szimg/62f9aca20969ca5f05400304.jpg",
		md5: "dee6d8e9ac69ca5f164a83ad1f020692",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/101-2df20049.jpg"
	},
	{
		name: "9-24cf4b4d.jpg",
		url: "//img.mukewang.com/szimg/63ef4f8a0996679705400304.jpg",
		md5: "c8a638b38b9667978a8638221982b8f1",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/9-24cf4b4d.jpg"
	},
	{
		name: "102-3f10426d.jpg",
		url: "//img.mukewang.com/szimg/627a10db09faa69d00000000.jpg",
		md5: "cd71807f8efaa69d6bfdc2dd45bd7bde",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/102-3f10426d.jpg"
	},
	{
		name: "14-b73d2f19.jpg",
		url: "//img.mukewang.com/szimg/634e6c9509ca28b205400304.jpg",
		md5: "5525c30a6fca28b2c341db9df4711be7",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/14-b73d2f19.jpg"
	},
	{
		name: "96-9f5ad691.jpg",
		url: "//img.mukewang.com/szimg/62a347a5098577e405400304.jpg",
		md5: "746cbdf83c8577e482a9795de4375156",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/96-9f5ad691.jpg"
	},
	{
		name: "78-c9bf50a8.jpg",
		url: "//img.mukewang.com/szimg/634227310935026805400304.jpg",
		md5: "da2d118996350268948e895c3ecf3be6",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/78-c9bf50a8.jpg"
	},
	{
		name: "80-92d2c7ac.jpg",
		url: "//img.mukewang.com/szimg/632d59840927c04b05400304.jpg",
		md5: "6ab3036faf27c04b35114cd80ed0176f",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/80-92d2c7ac.jpg"
	},
	{
		name: "12-a9b06e7f.jpg",
		url: "//img.mukewang.com/climg/6404c49e092cd94406960344.jpg",
		md5: "e770eeb21e2cd9442788998266129bc7",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/12-a9b06e7f.jpg"
	},
	{
		name: "8-cf3f96f6.jpg",
		url: "//img.mukewang.com/climg/6404c556091d594606960344.jpg",
		md5: "1fa4436cbe1d5946de460416d7900346",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/8-cf3f96f6.jpg"
	},
	{
		name: "10-fa02d71f.jpg",
		url: "//img.mukewang.com/climg/6404c58e096b56d906960344.jpg",
		md5: "cfda439f986b56d9333b1f5b49df9720",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/10-fa02d71f.jpg"
	},
	{
		name: "18-10f08b82.jpg",
		url: "//img.mukewang.com/climg/6404c2d7093c0d8b00000000.jpg",
		md5: "2f159c2ac03c0d8b15acc862c3117d4c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/18-10f08b82.jpg"
	},
	{
		name: "4-11f4577f.jpg",
		url: "//img.mukewang.com/climg/6404c4870963a35506960344.jpg",
		md5: "d2fb3012d263a3556238423197f4a5a3",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/4-11f4577f.jpg"
	},
	{
		name: "21-3b47a98f.jpg",
		url: "//img.mukewang.com/climg/6408442c09fdf0de06960344.jpg",
		md5: "cd2ccc07f2fdf0de8d1d792cd44d06cd",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/21-3b47a98f.jpg"
	},
	{
		name: "3-42a59e01.jpg",
		url: "//img.mukewang.com/climg/6404c45c09c3dafd06960344.jpg",
		md5: "9c55223543c3dafd5c2479f13f0543fe",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/3-42a59e01.jpg"
	},
	{
		name: "13-adac3781.jpg",
		url: "//img.mukewang.com/climg/6404c4f509e7294a06960344.jpg",
		md5: "edca4532ffe7294ae5e62a4430fd5fc6",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/13-adac3781.jpg"
	},
	{
		name: "20-96ec0a1d.jpg",
		url: "//img.mukewang.com/climg/6404c5c509413a9b06960344.jpg",
		md5: "678ad6c1d2413a9b3a7ab15e75f16e0a",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/20-96ec0a1d.jpg"
	},
	{
		name: "6-ac7a3dea.jpg",
		url: "//img.mukewang.com/climg/6404c5a80909401c06960344.jpg",
		md5: "aaa9fafecd09401cd11b16e8c7640460",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/6-ac7a3dea.jpg"
	},
	{
		name: "19-789821d3.jpg",
		url: "//img.mukewang.com/climg/640844a5092bbfea06960344.jpg",
		md5: "8e0fedcf6a2bbfea1d5c6d161d7618e7",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/19-789821d3.jpg"
	},
	{
		name: "16-acaf4cb2.jpg",
		url: "//img.mukewang.com/climg/6408601608d55c5e06960344.jpg",
		md5: "f6a0ed4eb9d55c5eabdceba5db0e6507",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/16-acaf4cb2.jpg"
	},
	{
		name: "7-610a827f.jpg",
		url: "//img.mukewang.com/climg/6404c56b098fe6cb06960344.jpg",
		md5: "319c3df7a88fe6cb11a1291a1143132c",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/7-610a827f.jpg"
	},
	{
		name: "1-d7a1fb7f.jpg",
		url: "//img.mukewang.com/climg/6404c4df0942b0db06960344.jpg",
		md5: "2acbf29a9942b0db75ca96cad29a1583",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/1-d7a1fb7f.jpg"
	},
	{
		name: "17-5472d898.jpg",
		url: "//img.mukewang.com/climg/6408441a0949094106960344.jpg",
		md5: "e30a24b025490941b934f65ee95b809b",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/17-5472d898.jpg"
	},
	{
		name: "11-ab8a2297.jpg",
		url: "//img.mukewang.com/climg/6404c4c1092c1d7e06960344.jpg",
		md5: "bf797eab142c1d7e02bed0cec76779ad",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/11-ab8a2297.jpg"
	},
	{
		name: "14-206e57f2.jpg",
		url: "//img.mukewang.com/climg/6404c5320949b12806960344.jpg",
		md5: "467686c52849b1285e3de28096a1e561",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/14-206e57f2.jpg"
	},
	{
		name: "9-ecc54550.jpg",
		url: "//img.mukewang.com/climg/640844820907168806960344.jpg",
		md5: "fe2e1500da071688ae542f9dfa441ee6",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/9-ecc54550.jpg"
	},
	{
		name: "5-b6488886.jpg",
		url: "//img.mukewang.com/climg/638d825709590a5406960344.jpg",
		md5: "91a586070e590a54a7cd842b44e2fbdb",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/5-b6488886.jpg"
	},
	{
		name: "2-0f5ed1ce.jpg",
		url: "//img.mukewang.com/climg/6404bd4a0995fc1e06960344.jpg",
		md5: "7213e6a08b95fc1e7bc2241acb82ec1d",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/2-0f5ed1ce.jpg"
	},
	{
		name: "15-0b55aaab.jpg",
		url: "//img.mukewang.com/climg/6408435e09bc0a3206960344.jpg",
		md5: "236a3ad09abc0a325090e77ccff39d4f",
		path: "/Users/macos/Downloads/大前端2.0备课/官网项目/imooc-dl/downloads/15-0b55aaab.jpg"
	}
];

const bg = "/images/bg.png";
function getImage(num) {
  return data.slice().sort(() => Math.random() - 0.5).slice(0, num).map((item) => {
    var _a;
    return {
      image: "/downloads/" + ((_a = picData.find((o) => o.url === item.img)) == null ? void 0 : _a.name),
      title: item.title,
      subTitle: "",
      url: "https://www.imooc.com"
    };
  });
}
const home_get = defineEventHandler(() => {
  return {
    code: 200,
    data: {
      swipers: [
        {
          image: bg,
          title: "\u4F20\u64AD\u6280\u672F\u7684\u79CD\u5B50",
          subTitle: "\u8BA9\u6280\u672F\u6CA1\u6709\u95E8\u69DB\uFF0C\u8BA9\u6C9F\u901A\u6CA1\u6709\u969C\u788D",
          url: "https://www.imooc.com"
        },
        {
          image: bg,
          title: "\u4F20\u64AD\u6280\u672F\u7684\u79CD\u5B50",
          subTitle: "\u8BA9\u6280\u672F\u6CA1\u6709\u95E8\u69DB\uFF0C\u8BA9\u6C9F\u901A\u6CA1\u6709\u969C\u788D",
          url: "https://www.imooc.com"
        },
        {
          image: bg,
          title: "\u4F20\u64AD\u6280\u672F\u7684\u79CD\u5B50",
          subTitle: "\u8BA9\u6280\u672F\u6CA1\u6709\u95E8\u69DB\uFF0C\u8BA9\u6C9F\u901A\u6CA1\u6709\u969C\u788D",
          url: "https://www.imooc.com"
        }
      ],
      projects: [
        {
          title: "\u524D\u7AEF\u9AD8\u7EA7\u5DE5\u7A0B\u5E08\uFF08\u5927\u524D\u7AEF\uFF09",
          subTitle: "\u201C\u6280\u672F\u6210\u957F&\u804C\u4E1A\u7834\u5C40\u201D\u53CC\u9AD8\u4F53\u7CFB,\u6DF1\u5EA6\u6253\u901A\u201C\u5168\u6808 + \u5168\u6D41\u7A0B +\u591A\u7AEF+ \u63D0\u6548+AI\u8D4B\u80FD\u201D",
          url: "https://class.imooc.com/sale/fesenior",
          icon: "i-mdi:web"
        },
        {
          title: "\u524D\u7AEF\u9AD8\u7EA7\u5DE5\u7A0B\u5E08\uFF08\u5927\u524D\u7AEF\uFF09",
          subTitle: "\u201C\u6280\u672F\u6210\u957F&\u804C\u4E1A\u7834\u5C40\u201D\u53CC\u9AD8\u4F53\u7CFB,\u6DF1\u5EA6\u6253\u901A\u201C\u5168\u6808 + \u5168\u6D41\u7A0B +\u591A\u7AEF+ \u63D0\u6548+AI\u8D4B\u80FD\u201D",
          url: "https://class.imooc.com/sale/fesenior",
          icon: "i-mdi:web"
        },
        {
          title: "\u524D\u7AEF\u9AD8\u7EA7\u5DE5\u7A0B\u5E08\uFF08\u5927\u524D\u7AEF\uFF09",
          subTitle: "\u201C\u6280\u672F\u6210\u957F&\u804C\u4E1A\u7834\u5C40\u201D\u53CC\u9AD8\u4F53\u7CFB,\u6DF1\u5EA6\u6253\u901A\u201C\u5168\u6808 + \u5168\u6D41\u7A0B +\u591A\u7AEF+ \u63D0\u6548+AI\u8D4B\u80FD\u201D",
          url: "https://class.imooc.com/sale/fesenior",
          icon: "i-mdi:web"
        },
        {
          title: "\u524D\u7AEF\u9AD8\u7EA7\u5DE5\u7A0B\u5E08\uFF08\u5927\u524D\u7AEF\uFF09",
          subTitle: "\u201C\u6280\u672F\u6210\u957F&\u804C\u4E1A\u7834\u5C40\u201D\u53CC\u9AD8\u4F53\u7CFB,\u6DF1\u5EA6\u6253\u901A\u201C\u5168\u6808 + \u5168\u6D41\u7A0B +\u591A\u7AEF+ \u63D0\u6548+AI\u8D4B\u80FD\u201D",
          url: "https://class.imooc.com/sale/fesenior",
          icon: "i-mdi:web"
        },
        {
          title: "\u524D\u7AEF\u9AD8\u7EA7\u5DE5\u7A0B\u5E08\uFF08\u5927\u524D\u7AEF\uFF09",
          subTitle: "\u201C\u6280\u672F\u6210\u957F&\u804C\u4E1A\u7834\u5C40\u201D\u53CC\u9AD8\u4F53\u7CFB,\u6DF1\u5EA6\u6253\u901A\u201C\u5168\u6808 + \u5168\u6D41\u7A0B +\u591A\u7AEF+ \u63D0\u6548+AI\u8D4B\u80FD\u201D",
          url: "https://class.imooc.com/sale/fesenior",
          icon: "i-mdi:web"
        },
        {
          title: "\u524D\u7AEF\u9AD8\u7EA7\u5DE5\u7A0B\u5E08\uFF08\u5927\u524D\u7AEF\uFF09",
          subTitle: "\u201C\u6280\u672F\u6210\u957F&\u804C\u4E1A\u7834\u5C40\u201D\u53CC\u9AD8\u4F53\u7CFB,\u6DF1\u5EA6\u6253\u901A\u201C\u5168\u6808 + \u5168\u6D41\u7A0B +\u591A\u7AEF+ \u63D0\u6548+AI\u8D4B\u80FD\u201D",
          url: "https://class.imooc.com/sale/fesenior",
          icon: "i-mdi:web"
        },
        {
          title: "\u524D\u7AEF\u9AD8\u7EA7\u5DE5\u7A0B\u5E08\uFF08\u5927\u524D\u7AEF\uFF09",
          subTitle: "\u201C\u6280\u672F\u6210\u957F&\u804C\u4E1A\u7834\u5C40\u201D\u53CC\u9AD8\u4F53\u7CFB,\u6DF1\u5EA6\u6253\u901A\u201C\u5168\u6808 + \u5168\u6D41\u7A0B +\u591A\u7AEF+ \u63D0\u6548+AI\u8D4B\u80FD\u201D",
          url: "https://class.imooc.com/sale/fesenior",
          icon: "i-mdi:web"
        },
        {
          title: "\u524D\u7AEF\u9AD8\u7EA7\u5DE5\u7A0B\u5E08\uFF08\u5927\u524D\u7AEF\uFF09",
          subTitle: "\u201C\u6280\u672F\u6210\u957F&\u804C\u4E1A\u7834\u5C40\u201D\u53CC\u9AD8\u4F53\u7CFB,\u6DF1\u5EA6\u6253\u901A\u201C\u5168\u6808 + \u5168\u6D41\u7A0B +\u591A\u7AEF+ \u63D0\u6548+AI\u8D4B\u80FD\u201D",
          url: "https://class.imooc.com/sale/fesenior",
          icon: "i-mdi:web"
        }
      ],
      courses: getImage(6),
      "swiper-projects": [
        {
          image: bg,
          title: "\u4F20\u64AD\u6280\u672F\u7684\u79CD\u5B50",
          subTitle: "\u8BA9\u6280\u672F\u6CA1\u6709\u95E8\u69DB\uFF0C\u8BA9\u6C9F\u901A\u6CA1\u6709\u969C\u788D",
          url: "https://www.imooc.com"
        },
        {
          image: bg,
          title: "\u4F20\u64AD\u6280\u672F\u7684\u79CD\u5B50",
          subTitle: "\u8BA9\u6280\u672F\u6CA1\u6709\u95E8\u69DB\uFF0C\u8BA9\u6C9F\u901A\u6CA1\u6709\u969C\u788D",
          url: "https://www.imooc.com"
        },
        {
          image: bg,
          title: "\u4F20\u64AD\u6280\u672F\u7684\u79CD\u5B50",
          subTitle: "\u8BA9\u6280\u672F\u6CA1\u6709\u95E8\u69DB\uFF0C\u8BA9\u6C9F\u901A\u6CA1\u6709\u969C\u788D",
          url: "https://www.imooc.com"
        }
      ]
    }
  };
});

const home_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: home_get,
  getImage: getImage
});

const Vue3 = version[0] === "3";

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref) {
  if (ref instanceof Promise || ref instanceof Date || ref instanceof RegExp)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = true ? [CapoPlugin({ track: true })] : [];

const renderSSRHeadOptions = {"omitLineBreaks":false};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG);
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      serverRendered: false
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const PAYLOAD_URL_RE = /\/_payload.json(\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set(),
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (inlinedStyles.length) {
    head.push({ style: inlinedStyles });
  }
  if (!isRenderingIsland || true) {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    if (link.length) {
      head.push({ link }, headEntryOptions);
    }
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  if (isRenderingIsland && islandContext) {
    const islandHead = {};
    for (const entry of head.headEntries()) {
      for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
        const currentValue = islandHead[key];
        if (Array.isArray(currentValue)) {
          currentValue.push(...value);
        }
        islandHead[key] = value;
      }
    }
    islandHead.link = islandHead.link || [];
    islandHead.style = islandHead.style || [];
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(htmlContext.body),
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}
function getServerComponentHTML(body) {
  const match = body[0].match(ROOT_NODE_REGEX);
  return match ? match[1] : body[0];
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=[^;]*;(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const slot in ssrContext.islandContext.slots) {
    response[slot] = {
      ...ssrContext.islandContext.slots[slot],
      fallback: ssrContext.teleports?.[`island-fallback=${slot}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const clientUid in ssrContext.islandContext.components) {
    const html = ssrContext.teleports?.[clientUid].replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...ssrContext.islandContext.components[clientUid],
      html,
      slots: getComponentSlotTeleport(ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, slot] = match;
      if (!slot) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
