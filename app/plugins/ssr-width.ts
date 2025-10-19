import { provideSSRWidth } from "@vueuse/core";

export default defineNuxtPlugin((nuxtApp) => {
  provideSSRWidth(512, nuxtApp.vueApp);
});
