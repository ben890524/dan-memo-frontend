import '@/assets/tailwindcss/index.scss';
import { createApp } from 'vue';
import App from './App.vue';

import { i18n } from '@/composables/useI18n';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(store);
app.use(i18n);
app.use(router).mount('#app');
