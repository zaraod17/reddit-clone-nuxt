import { def } from "@vue/shared";
import { createPinia } from "pinia";

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = createPinia();

    nuxtApp.vueApp.use(pinia);
});