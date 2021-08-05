<template>
  <div class="home">
    <slider />
    <best-offer />
    <setup />
  </div>
</template>

<script>
import bestOffer from "../components/bestOffer.vue";
import Setup from "../components/setup.vue";
import Slider from "../components/slider.vue";

export default {
  components: { bestOffer, Setup, Slider },
};
</script>

<style lang="scss" scoped></style>
