import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/vue@3.5.5_typescript@5.6.2/node_modules/vue/index.mjs';
import { b as useRuntimeConfig } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/vue@3.5.5_typescript@5.6.2/node_modules/vue/server-renderer/index.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../_/renderer.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/devalue@5.0.0/node_modules/devalue/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/ufo@1.5.4/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/@unhead+ssr@1.11.2/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unenv@1.10.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unified@11.0.5/node_modules/unified/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/micromark-util-character@2.1.0/node_modules/micromark-util-character/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/micromark-util-chunked@2.0.0/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/micromark-util-resolve-all@2.0.0/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.0/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/slugify@1.6.6/node_modules/slugify/slugify.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/remark-rehype@11.1.0/node_modules/remark-rehype/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/remark-mdc@3.2.1/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/remark-emoji@5.0.1/node_modules/remark-emoji/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/remark-gfm@4.0.0/node_modules/remark-gfm/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/rehype-external-links@3.0.0/node_modules/rehype-external-links/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/rehype-sort-attribute-values@5.0.0/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/rehype-sort-attributes@5.0.0/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/rehype-raw@7.0.0/node_modules/rehype-raw/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/detab@3.0.2/node_modules/detab/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/hast-util-to-string@3.0.0/node_modules/hast-util-to-string/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/github-slugger@2.0.0/node_modules/github-slugger/index.js';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unhead@1.11.2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/@unhead+shared@1.11.2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/vue-router@4.4.5_vue@3.5.5_typescript@5.6.2_/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseH3",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const { headings } = useRuntimeConfig().public.mdc;
    const generate = computed(() => {
      var _a;
      return props.id && (typeof (headings == null ? void 0 : headings.anchorLinks) === "boolean" && (headings == null ? void 0 : headings.anchorLinks) === true || typeof (headings == null ? void 0 : headings.anchorLinks) === "object" && ((_a = headings == null ? void 0 : headings.anchorLinks) == null ? void 0 : _a.h3));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({ id: _ctx.id }, _attrs))}>`);
      if (_ctx.id && unref(generate)) {
        _push(`<a${ssrRenderAttr("href", `#${_ctx.id}`)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h3>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.8.3_magicast@0.3.5_rollup@4.21.3/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseH3-Cj3m83Pf.mjs.map
