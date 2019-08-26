export default {
  env: {},
  head: {
    title: "nuxt-ts-vuetify-i18n-test",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js + TypeScript + Vuetify + i18n Test"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  modules: ["@nuxtjs/axios", "nuxt-i18n"],
  i18n: {},
  axios: {}
};
