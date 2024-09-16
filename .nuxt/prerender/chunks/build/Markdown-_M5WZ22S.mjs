import { defineComponent, getCurrentInstance, useSlots, computed, useSSRContext } from 'file:///Users/mr.xuww/Documents/project/project-ssr-nuxt/node_modules/.pnpm/vue@3.5.5_typescript@5.6.2/node_modules/vue/index.mjs';
import _sfc_main$1 from './ContentSlot-By-1Ffdj.mjs';
import './node-04k6j4dz.mjs';

const _sfc_main = defineComponent({
  name: "Markdown",
  extends: _sfc_main$1,
  setup(props) {
    const { parent } = getCurrentInstance();
    const { between, default: fallbackSlot } = useSlots();
    const tags = computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      fallbackSlot,
      tags,
      between,
      parent
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.2_ioredis@5.4.1_magicast@0.3.5_nuxt@3.13.1_@parcel+watcher@2.4.1_@types+no_lwdy6gntmo5mcgaxu6npcraxse/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Markdown-_M5WZ22S.mjs.map
