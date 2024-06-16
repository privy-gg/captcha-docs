// https://vitepress.dev/guide/custom-theme
import { h, nextTick, onMounted, watch } from 'vue'
import { useRoute, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import mediumZoom from 'medium-zoom'

export default {
    extends: DefaultTheme,
    Layout: () => {
      return h(DefaultTheme.Layout, null, {
        // https://vitepress.dev/guide/extending-default-theme#layout-slots
      })
    },
    enhanceApp({ app, router, siteData }) {},

    // Image zooming: https://github.com/vuejs/vitepress/issues/854
    setup() {
        const route = useRoute();
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); 
            mediumZoom('.VPDoc img', { background: 'var(--vp-c-bg)' });
        };
   
        onMounted(() => {
            initZoom();
        });
        
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
  },
} satisfies Theme
