

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/bootstrap.min.css';
import './assets/style.css';
import './assets/bootstrap.bundle.min.js';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
