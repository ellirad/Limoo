<template>
  <div class="setup">
    <div class="setup__header">
      <h2 class="setup__title">راهنمای نصب</h2>
      <animated-button />
    </div>

    <div class="row">
      <div class="col-5 app-screen">
        <img src="../assets/img/setup.png" alt="app-iPhone" />
      </div>

      <div class="col-7 steps-box">
        <div class="works-step">
          <div class="works-step__number">1</div>
          <p>
            لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
            بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
            گرافیک
          </p>
        </div>

        <div class="works-step">
          <div class="works-step__number">2</div>
          <p>
            شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر
            گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
          </p>
        </div>

        <div class="works-step">
          <div class="works-step__number">3</div>
          <p>
            به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import animatedButton from "./animatedButton.vue";
export default {
  components: { animatedButton },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/pages/setup.scss";
</style>
