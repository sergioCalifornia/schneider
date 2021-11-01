<template>
  <section class="singletap blue-block">
    <div class="container singletap-container">
      <div class="row">
        <div class="col-12 col-lg-8 order-1 order-lg-2">
          <picture>
            <source srcset="~/assets/i/single/single.png?webp" type="image/webp">
            <img class="singletap-pic" width="1184" height="789" src="~/assets/i/single/single.png" alt="">
          </picture>
        </div>
        <div class="col-12 col-lg-4 order-2 order-lg-1">
          <h2 class="singletap-title">
            Single tap&nbsp;off range for 160A to&nbsp;800A
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

.singletap-container {
  position: relative;
  padding-bottom: 20px;
}

.singletap-pic {
  width: 110%;
  height: auto;
  max-height: 562px;
  transform: translateX(7%);
  object-fit: contain;
}

.singletap-title {
  position: relative;
  margin: 20px 0 0 0;
  padding-bottom: 45px;
  text-align: left;
}

@media (min-width: 992px) {
  .singletap-title {
    margin-top: 287px;
  }
}

</style>
