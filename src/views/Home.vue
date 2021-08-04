<template>
  <div class="home">
    <best-offer />
    <setup />
  </div>
</template>

<script>
import bestOffer from "../components/bestOffer.vue";
import Setup from "../components/setup.vue";

export default {
  components: { bestOffer, Setup },
};
</script>

<style lang="scss" scoped></style>
