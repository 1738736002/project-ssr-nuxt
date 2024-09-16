import { defineComponent, useSSRContext } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/vue@3.5.5_typescript@5.6.2/node_modules/vue/index.mjs';
import { ssrRenderSlot } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/vue@3.5.5_typescript@5.6.2/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseCode",
  __ssrInlineRender: true,
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.2_ioredis@5.4.1_magicast@0.3.5_nuxt@3.13.1_@parcel+watcher@2.4.1_@types+no_lwdy6gntmo5mcgaxu6npcraxse/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseCode-DE5B2Jfw.mjs.map
