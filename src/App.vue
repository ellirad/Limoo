<template>
  <div id="app">
    <Header />
    <component :is="routedComponent"></component>
    <Footer />
  </div>
</template>

<script>
import Footer from "./views/Footer.vue";
import Header from "./views/Header.vue";
import Home from "./views/Home.vue";
import Survey from "./views/Survey.vue";
import NotFound from "./views/NotFound.vue";

const routes = {
  "/": Home,
  "/survey": Survey,
};

export default {
  components: { Header, Footer },

  name: "App",

  data() {
    return {
      currentRoute: window.location.pathname,
    };
  },

  computed: {
    routedComponent() {
      return routes[this.currentRoute] || NotFound;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

#app {
  font-family: $default-font-size !important;
  height: 100vh;
  margin: 0 auto;
}
</style>
