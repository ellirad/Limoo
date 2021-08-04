<template>
  <button class="animated-btn">
    <span class="visible">همین حالا</span>
    <span class="invisible-right">نصبش</span>
    <span class="invisible-left">کن!</span>
  </button>
</template>

<style lang="scss" scoped>
.animated-btn {
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 300;
  color: white;
  border-radius: 100px;
  background-image: linear-gradient(
    to right,
    $color-primary-light,
    $color-primary-dark
  );
  width: 200px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    background-image: linear-gradient(
      to left,
      $color-primary-light,
      $color-primary-dark
    );
  }

  &:hover .visible {
    transform: translateY(100%);
  }

  &:hover .invisible-left {
    right: 24px;
  }

  &:hover .invisible-right {
    left: 12px;
  }
}

.visible,
.invisible-left,
.invisible-right {
  display: inline-block;
  height: 100%;
  transition: all 0.4s;
}

.visible {
  width: 80%;
  padding: 20px 30px;
}

.invisible-right {
  width: 100%;
  position: absolute;
  left: -100%;
  top: 0;
  padding: 20px 30px;
}

.invisible-left {
  width: 100%;
  position: absolute;
  right: -100%;
  top: 0;
  padding: 20px 30px;
}
</style>
