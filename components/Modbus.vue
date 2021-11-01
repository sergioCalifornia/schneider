<template>
  <section class="modbus white-block">
    <div class="container">
      <div>
        <div class="two-colums">
          <h2>
            Modbus Wired Metering
          </h2>
          <p>
            Modbus Wired Metering In wired metering solutions CAT5e/CAT6 cabling is employed to daisy chain tap-offs back to Ethernet gateways.
          </p>
          <p>
            The aluminium housing has dedicated cabling channels on both the front and back faces and each can carry up to four cables. A comms channel closure strip is provided for cable containment as well. Metered tap-offs are supplied with RJ45 terminals for linking out the Modbus chain.
          </p>
          <picture>
            <source srcset="~/assets/i/modbus/meter-desktop.png?webp" type="image/webp">
            <img class="img-meter-desktop" width="238" height="426" src="~/assets/i/modbus/meter-desktop.png" alt="">
          </picture>
        </div>
        <div class="modbus-img-meter">
          <picture>
            <source srcset="~/assets/i/modbus/meter.png?webp" type="image/webp">
            <img class="img-meter" width="133" height="239" src="~/assets/i/modbus/meter.png" alt="">
          </picture>
        </div>
      </div>
      <!-- <picture>
        <source srcset="~/assets/i/modbus/modular-mobile.jpg?webp" type="image/webp">
        <img class="img-modular-mobile" width="294" height="148" src="~/assets/i/modbus/modular-mobile.jpg" alt="">
      </picture> -->
      <picture>
        <source srcset="~/assets/i/modbus/modular.jpg?webp" type="image/webp">
        <img class="img-modular" width="294" height="148" src="~/assets/i/modbus/modular.jpg" alt="">
      </picture>
    </div>
  </section>
</template>

<style lang="scss">
@media (min-width: 576px) {
  .modbus {
    margin-top: 65px;
  }
}

.modbus-img-meter {
  margin: 0 -12px;
  background: radial-gradient(50% 50% at 50% 50%, #EBEBEB 0%, #C8C8C8 100%);
}

.img-meter {
  display: block;
  margin: 0 auto;
  padding: 15px 0 30px 0;
}

@media (min-width: 768px) {
  .img-meter {
    display: none;
  }
}

.img-meter-desktop {
  margin: 0 auto;
  display: none;
}

@media (min-width: 768px) {
  .img-meter-desktop {
    display: block;
  }
}

.img-modular {
  // display: none;
  width: 100%;
  height: auto;
  padding-top: 15px;
}

@media (min-width: 768px) {
  .img-modular {
    // display: block;
    margin-bottom: 35px;
  }
}

// .img-modular-mobile {
//   width: 100%;
//   height: auto;
//   display: block;
//   margin: 0 auto;
// }

// @media (min-width: 768px) {
//   .img-modular-mobile {
//     display: none;
//   }
// }
</style>
