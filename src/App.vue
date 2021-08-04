<template>
  <div id="app">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Footer from "./views/Footer.vue";
import Header from "./views/Header.vue";
import Home from "./views/Home.vue";

export default {
  components: { Header, Home, Footer },

  name: "App",
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
