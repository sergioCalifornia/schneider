<template>
  <section class="power">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-10">
          <h2>
            Power and Environmental Monitoring
          </h2>
          <p class="lightblack">
            The Databar product offers a fully vendor neutral approach to provide the very latest technologies in full power branch circuit metering. Fully integrated systems which include tap-off circuit and end-feed power monitoring or circuit breaker status’ are available alongside a range of environmental monitoring solutions.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-5">
          <p>
            Databar power metering allows for multi-tariff sub-billing at Class 1 accuracy. Communication protocols include Modbus RTU, Ethernet and SNMP.
          </p>
          <p>
            Power measurements include:
          </p>
          <ul>
            <li>Active and reactive power</li>
            <li>Active and reactive energy</li>
            <li>Voltage per phase</li>
            <li>Current per phase</li>
          </ul>
          <p>
            Circuit breaker status is also available via a range of auxiliaries which can then provide open / closed / tripped status. Typical arrangements include Modbus chains for the tap-offs returning to Ethernet gateways in the end feeds or application specific power / energy management outstations / HMI.
          </p>
        </div>

        <div class="col-12 col-lg-6 offset-lg-1">
          <h3>
            Power Management from
            <br>
            Schneider Electric
          </h3>
          <p>
            Schneider Electric holds approvals as a Schneider Electric EcoXpert Critical Power Master for supply and system integration of Power Monitoring Expert, PowerSCADA Expert/CitectSCADA solutions and also as a Janitza Approved System Integration Partner for GridVis solutions.
          </p>
          <div class="img-bottom">
            <picture>
              <source srcset="~/assets/i/power/ecoxpert.jpg?webp" type="image/webp">
              <img class="ecoxpert" width="280" height="150" src="~/assets/i/power/ecoxpert.jpg" alt="">
            </picture>
            <picture>
              <source srcset="~/assets/i/power/janitza.jpg?webp" type="image/webp">
              <img class="janitza" width="270" height="96" src="~/assets/i/power/janitza.jpg" alt="">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.lightblack {
  color: #353535;
}

@media (min-width: 992px) {
  .lightblack {
    font-size: 1.5rem;
  }
}

.img-bottom {
  display: flex;
  flex-direction: row;
}

.ecoxpert {
  width: 95%;
  height: 95%;
}

.janitza {
  margin-top: 16px;
  width: 95%;
  height: 75%;
}

.power {
  margin-bottom: 44px;
}

@media (min-width: 768px) {
  .power {
    margin-bottom: 83px;
  }
}

</style>
