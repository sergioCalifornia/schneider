<template>
  <main>
    <section class="white-block">
      <div id="start" class="local-link-modbus" />
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <h2>
              The Schneider Electric Modular Power PDU
            </h2>
            <h3>
              Compartmentalized for Safety
            </h3>
            <p>
              Schneider Electric’s number one focus is delivering safe power to your data center floor. With over 40 years of switchgear experience and arc flash protection engineering, we’ve brought this expertise to the power distribution unit. Our PDUs are designed to meet the industry standard for arc flash protection, promoting operator safety for our customers, contractors, and service technicians. Our unique compartmentalization technology isolates the input, output, and monitor from the transformer, enhancing safety and helping to eliminate operator errors.
            </p>
            <h3>
              Flexible Options
            </h3>
            <p>
              Schneider Electric recognizes the increased demands put on data center equipment by incorporating electronic trip breakers and convection cooled transformer cabinets as standard features with an option for redundant fans. These features provide a high level of mechanical reliability and longer life allowing you to operate the units at higher ambient temperatures without having to de-rate the transformer. AMP PDUs are engineered to the highest standards in the industry and are also DOE 2016 energy compliant.
            </p>
          </div>
          <div class="col-12 col-lg-5 offset-lg-1 custom">
            <h2>
              Standard Features
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
            <h3>
              Service &amp; Support
            </h3>
            <p>
              Schneider Electric’s field service team is available 24/7 for installation supervision, start up, commissioning support, training, and preventative maintenance visits. Our field service team is ready to support you through the life cycle of your data center equipment.
            </p>
            <h3>
              ISOCompartment
            </h3>
            <p>
              Our ISOCompartment design is the safe and efficient way to populate your PDU after it has been powered and installed. Customers can connect to up to two output breakers in the PDU without entering the main power cabinet allowing you to connect new loads in a safe, easy manner.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-6">
            <h2>
              Specifications
            </h2>
            <h3>
              Electrical
            </h3>
            <div class="grind">
              <div>kVa</div>
              <div>75-750 kVA</div>
              <div>Input</div>
              <div>3-phase, 3 wire + Ground</div>
              <div>Input Voltage</div>
              <div>Up to 600V-60HZ</div>
              <div>Output</div>
              <div>3-phase, 4 wire + Ground</div>
              <div>Transformer</div>
              <div>Aluminum</div>
              <div>Transformer rating</div>

              <div>K-4 to K-20</div>
              <div>Transformer</div>
              <div>150°C</div>
              <div>Temperature Rise</div>
              <div>11x Standard</div>
              <div>Transformer Inrush</div>
              <div>2 Above Nominal, 5 Below</div>
              <div>Transformer Taps</div>
              <div>Nominal</div>
              <div>Neutral Rating</div>
              <div>200%</div>
            </div>
            <h3>
              General
            </h3>
            <ul class="ul-nodots">
              <li>DOE 2016 Compliant</li>
              <li>ETL Listed to UL 60950 &amp; 891</li>
              <li>Revenue Grade Metering</li>
              <li>NEMA 1 Enclosure</li>
              <li>Convection Cooled (Optional Redundant Fans)</li>
              <li>Compartmentalization</li>
              <li>Modbus RTU Communication</li>
            </ul>
          </div>

          <div class="col-12 col-lg-5 offset-lg-1 custom2">
            <h3>
              Site Conditions
            </h3>
            <div class="grind">
              <div>Operating Temperature</div>
              <div>0°C - 40°C</div>
              <div>Storage Temperature</div>
              <div>-40°C - 60°C</div>
              <div>Relative Humidity</div>
              <div>10%-95% non-condensing</div>
              <div>Audible Noise</div>
              <div>55db Maximum</div>
            </div>
            <h3>
              Options
            </h3>
            <ul class="ul-nodots">
              <li>Remote Emergency Power Off (REPO)</li>
              <li>Branch Circuit Monitoring for panelboards and<br> subfeeds</li>
              <li>SNMP and Modbus TCP-IP Communication</li>
            </ul>
          </div>
        </div>
        <NuxtLink to="/#modular" class="btn btn-outline">
          Back
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      meta_title: 'Databar by Schneider Electric - Intelligent Data Hall Busway',
      meta_description: 'The Databar busway system is a unique open channel modular busway system designed for mission critical rack power distribution in data centers.',
      meta_og: 'https://se-databar.yode.group/assets/i/og-se-databar-main.jpg'
    }
  },
  head() {
    return {
      title: this.meta_title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta_description },
        { hid: 'og:url', property: 'og:url', content: 'https://se-databar.yode.group' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: this.meta_og },
        { hid: 'og:title', property: 'og:title', content: this.meta_title },
        { hid: 'og:description', property: 'og:description', content: this.meta_description },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:image', name: 'twitter:image', content: this.meta_og },
        { hid: 'twitter:title', name: 'twitter:title', content: this.meta_title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.meta_description }
      ]
    }
  }
}
</script>

 <style lang="scss">
.grind {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 40px;
  font-size: 1.125rem;
}

.custom2 {
  margin-top: 40px;
}

@media (min-width: 576px) {
  .custom2 {
    margin-top: 83px;
  }
}
 </style>
