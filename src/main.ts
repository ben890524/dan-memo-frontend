import Antd from 'ant-design-vue';
import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/tailwindcss/index.scss';
import { setupAntdIcon } from '@/composables/useAntDesignVue/aIcon';
import { i18n } from '@/composables/useI18n';
import router from './router';
import store from './store';

const app = createApp(App);
setupAntdIcon(app);
app.use(store);
app.use(i18n);
app.use(Antd);
app.use(router).mount('#app');
