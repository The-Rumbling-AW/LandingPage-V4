import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'
import {SelectButton} from "primevue";
import i18n from "./i18n.js";
import router from "./shared/router/index.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
const app = createApp(App);

//pp.use(PrimeVue, { ripple: true });
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('pv-select-button', SelectButton)
app.use(i18n);
app.use(router);
app.mount('#app');