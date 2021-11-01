<template>
  <main>
    <TopBar />
    <Header />
    <section class="white-block">
      <div id="start" class="local-link" />
      <div class="container">
        <h2>
          Intelligent Data Hall Busway
        </h2>
        <p class="font-gray">
          The Databar busway system is a unique open channel modular busway
          system designed for mission critical rack power distribution in data centers.
          The system has been developed to be extremely compact and features
          patent pending design innovations in the integral plug-n-play coupling
          system. This allows for simpler and faster installation and tap-off actuator
          mechanisms that put safety at the forefront.
        </p>

        <div class="row">
          <div class="col-12 col-lg-5">
            <p>
              Data center operators can rest assured that they not only have the ability to add tap-offs as needed, but also easily extend or re-configure the busway system over their evolving white space.
            </p>
            <p>
              Databar benefits from over fifty years of design and engineering expertise and its seamless integration with IBAR busbar trunking systems and power management systems delivers a complete package solution.
            </p>
            <h3>
              Safety in Simplicity
            </h3>
            <p>
              Safe and simple were at the heart of Databar’s development which is why there are only two sizes that cover all ratings, one size for 160A - 400A and a second for 600A -800A. In each size, the same low profile housing accommodates both 4 and 5 pole
              configurations while still maintaining the smallest possible footprint design.
            </p>
            <p>
              Installing or extending the busway requires
              no separate joint pack. Fully factory tested
              busway assemblies feature custom integrated connectors that provide true plug-n-play
              functionality.
            </p>
            <h3>
              Easy Installation
            </h3>
            <p>
              Tap-off fitting is carried out in two simple steps. First, the tap-off box is installed on the busway using our fast fit system. Second, the power contacts are engaged via a unique connection actuation system which not only controls the tap-off contacts, but also interlocks with the switching device to ensure that no load is connected during the engage operation.
            </p>
          </div>

          <div class="col-12 col-lg-5 offset-lg-1">
            <h3>
              Compact Design
            </h3>
            <p>
              Databar’s market leading range of tapoffs are extremely compact and, thanks to the small form factor busway design and actuation system, only require 1.2” of mounting clearance - the smallest in the industry! Databar’s combination of compact tap-off design and plug-n-play open-channel busway delivers a highly flexible solution to meet the needs of high density, mission critical, overrack power distribution. The compact design goes a long way towards optimizing over rack space utilization where low ceiling head height and IT / fiber conduits compete.
            </p>
            <h3>
              Testing &amp; Certification
            </h3>
            <p>
              The Databar product has undergone extensive testing which has been independently certified by Underwriters Laboratories in accordance with UL857. Additionally, the busbar trunking system has been independently tested for resistance to Arc Flash in accordance with IEEE 1584 and major seismic events in accordance with IEEE Std 344-2013 &amp; IEC 60068-3-3 (Richter magnitude 7.0-7.9).
            </p>
            <h3>
              Features
            </h3>
            <ul>
              <li>Independently tested and listed by Underwriters Laboratories to UL857</li>
              <li>160, 250, 400, 600 or 800A systems with 4 or 5 poles in the same footprint design</li>
              <li>Continuous open channel permits tapoffs to be installed anywhere along the bar (Finger Safe, IP2X)</li>
              <li>Ships in standard lengths up to 10ft (3m)</li>
              <li>Integral plug-n-play jointing system with</li>
              <li>
                Optional overrated neutrals (see Technical Overview)
                <br>
                or 100% integral ground conductor
              </li>
              <li>100% ground path via one piece extruded aluminium housing (see Technical Overview)</li>
            </ul>
          </div>
        </div>
        <NuxtLink to="/#about" class="btn btn-outline">
          Back
        </NuxtLink>
      </div>
    </section>
    <Footer />
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
