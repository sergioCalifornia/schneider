<template>
  <section class="blue-block-mcb">
    <div class="container mcb-container">
      <h2 class="mcb-title">
        MCB
        <br>
        Tap-offs
      </h2>

      <picture>
        <source srcset="~/assets/i/mcb/mcb-img.png?webp" type="image/webp">
        <img class="mcb-img d-md-none" width="339" height="244" src="~/assets/i/mcb/mcb-img.png" alt="">
      </picture>

      <picture>
        <source srcset="~/assets/i/mcb/mcb-img-big.png?webp" type="image/webp">
        <img class="mcb-img2 d-none d-md-block" width="1200" height="562" src="~/assets/i/mcb/mcb-img-big.png" alt="">
      </picture>
    </div>
  </section>
</template>

<style lang="scss">
.mcb-container {
  position: relative;
  padding-bottom: 1px;
}

.mcb-title {
  position: absolute;
  top: 20px;
  left: 20px;
}

@media (min-width: 768px) {
  .mcb-title {
    top: unset;
    bottom: 110px;
  }
}

.mcb-img {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0 auto;
  display: block;
}
.mcb-img2 {
  width: 100%;
  height: auto;
}

</style>
