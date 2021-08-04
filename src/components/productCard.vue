<template>
  <div class="card">
    <div class="card__picture">
      <img :src="product.img" :alt="product.title" />
    </div>

    <div class="card__details">
      <h5 class="card__heading">
        {{ product.title }}
      </h5>

      <div class="card__price">
        <div class="card__price card__price__discount">
          {{ product.discount }} %
        </div>

        <div class="card__price card__price__old-price">
          {{ Math.floor(product.price.oldPrice).toLocaleString("fa-EG") }}
        </div>

        <div class="card__price card__price__selling-price">
          {{ Math.floor(product.price.sellingPrice).toLocaleString("fa-EG") }}
          <span>تومان</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/product-card.scss";
</style>
