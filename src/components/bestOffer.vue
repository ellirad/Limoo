<template>
  <div class="best-offer">
    <div class="row">
      <h3 class="title--primary">
        تخفیفات هیجان انگیز
      </h3>

      <button class="btn btn--primary btn--medium best-offer__button">
        مشاهده همه &larr;
      </button>
    </div>

    <div class="row">
      <div id="slider">
        <transition-group tag="div" :name="transitionName" class="slides-group">
          <div v-if="show" :key="current" class="slide">
            <div class="col-4" v-for="(i, index) in itemsToShow" :key="index">
              <product-card :product="products[i]" />
            </div>
          </div>
        </transition-group>

        <svg
          class="slider-icon slider-icon--left icon--white cursor-pointer"
          aria-label="Previous slide"
          @click="slide(1)"
        >
          <use xlink:href="@/assets/svgs/light.svg#chevron-left"></use>
        </svg>

        <svg
          class="slider-icon slider-icon--right icon--white cursor-pointer"
          aria-label="Next slide"
          @click="slide(-1)"
        >
          <use xlink:href="@/assets/svgs/light.svg#chevron-right"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import productCard from "./productCard.vue";
import { products } from "../common/products.js";

export default {
  components: { productCard },

  data() {
    return {
      products,
      itemsToShow: [0, 1, 2],
      current: 0,
      previousItems: 0,
      nextItems: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      pageCount: 3,
    };
  },

  mounted() {
    this.show = true;
    this.slide(1);
    // let vm = this;
    // setInterval(function() {
    //   vm.current++;
    //   vm.slide();
    // }, 2000);
  },

  methods: {
    slide(dir) {
      this.direction = dir;

      dir === -1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");

      const len = this.products.length;
      this.current = (this.current + (dir % len) + len) % len;

      this.showMore();
    },

    showMore() {
      let list = [];
      let startAt;
      let endAt;

      if (this.current === 0) {
        startAt = 0;
        endAt = this.pageCount - 1;
      } else {
        startAt = this.current * this.pageCount - this.pageCount;
        endAt = startAt + this.pageCount - 1;
      }

      if (startAt >= this.products.length) {
        startAt = 0;
        endAt = this.pageCount - 1;
        this.current = 1;
      }

      for (let i = startAt; i <= endAt; i++) {
        if (i >= this.products.length) {
          console.log("greater");
        } else {
          list.push(i);
        }
      }

      this.itemsToShow = list;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/pages/best-offer.scss";
@import "../assets/scss/components/slider.scss";
</style>
