<template>
  <section class="tap white-block">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-9">
          <h2>
            Tap-offs
          </h2>
          <p class="font-green">
            Databar tap-offs have been designed for simple and safe installation. The range includes unique features which have been developed to vastly improve speed and ease of installation.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-5">
          <p>
            Tap-off units can be installed on the busway in just a few seconds using the fast fit system - a unique tool free mounting mechanism.
          </p>
          <p>
            The units are available with a range of devices including MCBs and MCCBs. The standard range employs MCBs and these are typically available in 10, 14, 22 and 50kAIC variants in ratings of 15, 20, 30, 50 and 60A and in Single Pole (SP), Double Pole (DP) and Triple Pole (TP); either with or without metering.
          </p>
          <div class="ghost" :class="{ opened: textOpen }">
            <h3>
              Outlet connector options include:
            </h3>
            <ul>
              <li>Panel mounted straight or angled IEC 309 receptacle</li>
              <li>NEMA Twist Lock and straight blade receptacles</li>
              <li>Drop cords / flying leads terminated with the required coupler</li>
            </ul>
            <picture>
              <source srcset="~/assets/i/tap-off/tap-img2.jpg?webp" type="image/webp">
              <img class="tap-img2" width="329" height="357" src="~/assets/i/tap-off/tap-img2.jpg" alt="">
            </picture>
          </div>
        </div>
        <div class="col-12 col-lg-5 offset-lg-1">
          <div class="ghost" :class="{ opened: textOpen }">
            <h3>
              Tap-off Installation Overview
            </h3>
            <p>
              The tap-off actuator cannot be operated without the tap-off first being mounted on the busway. This feature works in combination with the switching device interlock which is fitted as standard. The interlock prevents the switching device(s) from being turned on before installation / actuation.
            </p>
            <p>
              Both the tap-off and busway have mechanical features which control orientation to ensure that the tap-off cannot be mounted incorrectly. The tap-off conductor connection springs are fully shrouded throughout the mounting operation which also provides for the make first, break last of the case ground.
            </p>
            <p>
              Once installed on the busway the patent applied for actuator can then be operated with the supplied actuator key. With the actuator turned ON the interlock is released and can be retracted to allow the switching device to be turned ON.
            </p>
          </div>
          <div class="btn tap-btn" @click="textOpen = !textOpen">
            {{ textOpen ? 'Hide' : 'Learn more' }}
          </div>
          <h3>
            Features
          </h3>
          <picture>
            <source srcset="~/assets/i/tap-off/tap-img.jpg?webp" type="image/webp">
            <img class="tap-img d-lg-none" width="221" height="185" src="~/assets/i/tap-off/tap-img.jpg" alt="">
          </picture>
          <ul class="small-padding">
            <li>Mechanically and electrically interlocked with the busway</li>
            <li>Case ground - make first, break last</li>
            <li>Vendor neutral 15, 20, 30, 50 and 60A SP/DP/ TP MCBs or MCCBs</li>
            <li>Fast fit; takes only seconds to install on busway</li>
            <li>Requires only 1.2” mounting clearance</li>
            <li>Same Tap Offs fit all Databar ratings from 160A - 800A</li>
            <li>A wide range of options can be added including LED supply</li>
            <li>Available / phase indication and breaker status monitoring</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      textOpen: false
    }
  }
}
</script>

<style lang="scss">
.tap-img {
  position: relative;
  padding-left: 40px;
}

.tap-img2 {
  position: relative;
  left: 40px;
}

@media (min-width: 992px) {
  .tap-btn {
    display: none;
  }
}

.small-padding {
  padding-left: 20px;
}
</style>
