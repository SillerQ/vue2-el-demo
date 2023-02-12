import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './element-variables.scss';
import SvgIcon from '@/components/SvgIcon';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 导入 svg
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(require.context('./assets/svg', false, /\.svg$/));

Vue.use(ElementUI);
Vue.component('svg-icon', SvgIcon);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
