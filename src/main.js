import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "./assets/main.css";
import router from "./router";

// Import the icon set
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App).use(router).use(vuetify).mount("#app");
