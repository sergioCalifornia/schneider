<template>
  <section class="blue-block">
    <div class="container">
      <div class="row">
        <div class="col-6 col-sm-4 typical-left">
          <h2 class="typical-h2">
            Typical Meter Connection Arrangement
          </h2>
        </div>
        <div class="col-6 col-sm-8">
          <picture>
            <source srcset="~/assets/i/typical/typical-img.png?webp" type="image/webp">
            <img class="typical-img" width="724" height="562" src="~/assets/i/typical/typical-img.png" alt="">
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

@media (min-width: 768px) {
  .typical-left {
    margin-left: -29px;
  }
}

.typical-img {
  position: relative;
  top: 4px;
  right: 72px;
  width: 390px;
  height: 289px;
}

@media (min-width: 576px) {
  .typical-img {
    position: relative;
    left: 80px;
    height: 400px;
  }
}

@media (min-width: 768px) {
  .typical-img {
    position: relative;
    left: 70px;
    width: 680px;
    height: 562px;
  }
}

@media (min-width: 992px) {
  .typical-img {
    position: relative;
    width: 724px;
    height: 562px;
    left: 160px;
  }
}

.blue-block .typical-h2 {
  text-transform: unset;
  position: relative;
  top: 160px;
  left: 4px;
}

@media (min-width: 576px) {
  .blue-block .typical-h2 {
    position: relative;
    top: 80px;
  }
}

@media (min-width: 768px) {
  .blue-block .typical-h2 {
    position: relative;
    top: 210px;
    left: 30px;
  }
}

@media (min-width: 992px) {
  .blue-block .typical-h2 {
    position: relative;
    top: 234px;
  }
}

</style>
