import { createApp } from "vue";
import { createPinia } from "pinia";
import { 
    provideFASTDesignSystem, 
    fastCard, 
    fastButton
  } from '@microsoft/fast-components';

  provideFASTDesignSystem()
    .register(
        fastCard(),
        fastButton()
    );

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
