<template>
  <section class="grey-block pad">
    <div id="electric" class="local-link" />
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-xl-5">
          <div class="electric-monitor-container">
            <div class="electric-radial d-sm-none">
              <picture>
                <source srcset="~/assets/i/electric/monitor.png?webp" type="image/webp">
                <img class="electric-monitor" width="256" height="281" src="~/assets/i/electric/monitor.png" alt="">
              </picture>
            </div>
            <picture>
              <source srcset="~/assets/i/electric/monitor2.png?webp" type="image/webp">
              <img class="electric-monitor d-none d-sm-block" width="436" height="450" src="~/assets/i/electric/monitor2.png" alt="">
            </picture>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-6 offset-xl-1">
          <h2 class="electric-header">
            Schneider Electric DCIM Modules
          </h2>
          <h5>
            Schneider Electric ims - Data Hall Rack Power
          </h5>
          <p class="font-lightgray">
            Management and Billing
          </p>
          <p>
            The ims system has been developed by Schneider Electric to sit above data harvesting applications such as EMS, BMS and other suitable databases.nims provides users with a secure web based portal to manage customer or departmental billing through a wealth of standard or custom
            reporting tools and innovative graphic interfaces.
            Employed by some of the world’s largest data centers in private financial and colocation sectors, this powerful tool provides reporting and management of over 21 million points of data and annual billing of $350 million.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.electric-monitor-container {
  position: relative;
}

.electric-radial {
  margin: 0 -0.75em;
  background: radial-gradient(50% 50% at 50% 50%, rgba(174, 174, 174, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), #C4C4C4;
}

@media (min-width: 576px) {
  .electric-header {
    margin-top: 50px;
  }
}

.electric-monitor {
  position: relative;
  top: -18px;
  right: -20px;
  width: 256px;
  height: auto;
  display: block;
  margin: 0 auto;
}

@media (min-width: 576px) {
  .electric-monitor {
    right: unset;
    width: 100%;
  }
}

@media (min-width: 1200px) {
  .electric-monitor {
    position: absolute;
    right: 0;
    width: 120%;
  }
}

// @media (min-width: 576px) {
//   .mon-desktop {
//     display: block;
//     transform: translateY(-5%);
//   }
// }

.pad {
  margin-bottom: 0;
  padding-bottom: 30px;
}

@media (min-width: 576px) {
  .pad {
    padding-bottom: 60px;
  }
}

</style>
