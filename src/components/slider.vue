<template>
  <div id="slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div v-if="show" :key="current" class="slide">
        <img :src="slides[current]" alt="" />
      </div>
    </transition-group>

    <svg
      class="slider-icon slider-icon--left icon--white cursor-pointer"
      aria-label="Previous slide"
      @click="slide(-1)"
    >
      <use xlink:href="@/assets/svgs/light.svg#chevron-left"></use>
    </svg>

    <svg
      class="slider-icon slider-icon--right icon--white cursor-pointer"
      aria-label="Next slide"
      @click="slide(1)"
    >
      <use xlink:href="@/assets/svgs/light.svg#chevron-right"></use>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      slides: [
        require("../assets/img/slider-1.jpg"),
        require("../assets/img/slider-2.jpg"),
        require("../assets/img/slider-3.jpg"),
        require("../assets/img/slider-4.jpg"),
        require("../assets/img/slider-5.jpg"),
      ],
    };
  },

  // computed: {
  //   currentImg: function() {
  //     return this.slides[Math.abs(this.current) % this.slides.length];
  //   },
  // },

  mounted() {
    this.show = true;
    this.slide(-1);
    // setInterval(this.slide(-1), 2000);
  },

  methods: {
    slide(dir) {
      this.direction = dir;

      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");

      const len = this.slides.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/slider.scss";
</style>
