<template>
  <section class="modular">
    <div id="modular" class="local-link" />
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5">
            <h2>
              The Schneider Electric Modular Power PDU
            </h2>
            <h3>
              Compartmentalized for Safety
            </h3>
            <p>
              Schneider Electric’s number one focus is delivering safe power to your data center floor. With over 40 years of switchgear experience and arc flash protection engineering, we’ve brought this expertise to the power distribution unit. Our PDUs are designed to meet the industry standard for arc flash protection, promoting operator safety for our customers, contractors, and service technicians. Our unique compartmentalization technology isolates the input, output, and monitor from the transformer, enhancing safety and helping to eliminate operator errors.
            </p>
            <NuxtLink to="/modular-pdu#start" class="btn about-btn">
              Learn more
            </NuxtLink>
          </div>
          <div class="col-12 col-lg-6 offset-lg-1 custom">
            <h2>
              Standart Features
            </h2>
            <h3>
              Custom Specifications
            </h3>
            <p>
              Schneider Electric’s engineering team can customize the AMP PDU to individual project design and performance requirements. Each AMP PDU has taps at 480/400 VAC and can accommodate a multitude number of configurations that include the following:
            </p>
            <ul>
              <li>42 circuit panelboards up to 400A</li>
              <li>Subfeed breakers up to 800A</li>
              <li>I Line panelboards up to 1200A</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.modular {
  margin-bottom: 34px;
}
.custom {
  display: none;
  margin-top: 45px;
}

@media (min-width: 992px) {
  .custom {
    display: block;
  }
}
</style>
