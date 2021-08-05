<template>
  <div class="survey-background">
    <div class="row">
      <div class="survey">
        <div class="survey__form">
          <form action="#" class="form">
            <div class="mb-medium">
              <h3 class="title--primary">
                فرم نظر سنجی
              </h3>
            </div>

            <div class="form__group">
              <input
                type="text"
                class="form__input"
                placeholder="نام"
                id="name"
                required
              />
              <label for="name" class="form__label">نام</label>
            </div>

            <div class="form__group">
              <input
                type="email"
                class="form__input"
                placeholder="آدرس ایمیل"
                id="email"
                required
              />
              <label for="email" class="form__label">آدرس ایمیل</label>
            </div>

            <div class="form__group">
              <textarea
                type="email"
                class="form__input"
                placeholder="درج نظر"
                id="description"
                rows="3"
                required
              ></textarea>
              <label for="description" class="form__label">درج نظر</label>
            </div>

            <div class="form__group">
              <button class="btn btn--primary btn--medium">ثبت نظر</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/pages/survey.scss";
</style>
