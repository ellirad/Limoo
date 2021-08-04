<template>
  <div>
    <div class="header">
      <div class="upper-header d-flex">
        <img src="../assets/img/logo.png" alt="logo" class="logo" />

        <div class="search">
          <input type="text" class="search__input" placeholder="جستجو کالا" />
        </div>

        <div class="basket">
          <svg class="profile-icon icon--primary cursor-pointer">
            <use xlink:href="@/assets/svgs/light.svg#user"></use>
          </svg>

          <svg class="basket-icon icon--primary cursor-pointer">
            <use xlink:href="@/assets/svgs/light.svg#shopping-cart"></use>
          </svg>
        </div>
      </div>

      <div class="below-header">
        <nav class="navigation">
          <ul class="mega-menu">
            <li class="list-item">
              <a href="#" class="link">
                <svg class="nav-icon icon--primary cursor-pointer">
                  <use xlink:href="@/assets/svgs/light.svg#mobile-alt"></use>
                </svg>
                موبایل و تبلت</a
              >
              <ul class="mega-menu-sub">
                <li class="test"><a href="#">اپل</a></li>
                <li><a href="#">شیایومی</a></li>
                <li><a href="#">سامسونگ</a></li>
                <li><a href="#">اپل</a></li>
                <li><a href="#">اپل</a></li>
              </ul>
            </li>
            <li class="list-item">
              <a href="#" class="link">
                <svg class="nav-icon icon--primary cursor-pointer">
                  <use xlink:href="@/assets/svgs/light.svg#laptop"></use>
                </svg>
                لپ تاپ</a
              >
              <ul class="mega-menu-sub">
                <li><a href="#">اپل</a></li>
                <li><a href="#">شیایومی</a></li>
                <li><a href="#">سامسونگ</a></li>
                <li><a href="#">اپل</a></li>
                <li><a href="#">اپل</a></li>
              </ul>
            </li>
            <li class="list-item">
              <a href="#" class="link">
                <svg class="nav-icon icon--primary cursor-pointer">
                  <use xlink:href="@/assets/svgs/light.svg#watch"></use>
                </svg>
                گجت های هوشمند</a
              >
              <ul class="mega-menu-sub">
                <li><a href="#">اپل تست</a></li>
                <li><a href="#">شیایومی</a></li>
                <li><a href="#">سامسونگ</a></li>
                <li><a href="#">اپل</a></li>
                <li><a href="#">اپل</a></li>
              </ul>
            </li>
            <li class="list-item">
              <a href="#" class="link">
                <svg class="nav-icon icon--primary cursor-pointer">
                  <use xlink:href="@/assets/svgs/light.svg#microphone"></use>
                </svg>
                لوازم صوتی</a
              >
              <ul class="mega-menu-sub">
                <li><a href="#">اپل</a></li>
                <li><a href="#">شیایومی</a></li>
                <li><a href="#">سامسونگ</a></li>
                <li><a href="#">اپل</a></li>
                <li><a href="#">اپل</a></li>
              </ul>
            </li>
            <li class="list-item">
              <a href="#" class="link">
                <svg class="nav-icon icon--primary cursor-pointer">
                  <use xlink:href="@/assets/svgs/light.svg#camera"></use>
                </svg>
                دوربین</a
              >
              <ul class="mega-menu-sub">
                <li><a href="#">اپل</a></li>
                <li><a href="#">شیایومی</a></li>
                <li><a href="#">سامسونگ</a></li>
                <li><a href="#">اپل</a></li>
                <li><a href="#">اپل</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <slider />
  </div>
</template>

<script>
import slider from "../components/slider.vue";

export default {
  components: { slider },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/header.scss";
</style>
