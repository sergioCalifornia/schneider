<template>
  <main>
    <TopBar />
    <Header />
    <About />
    <Unique />
    <Installation />
    <Technical />
    <Singletap />
    <Tap-off />
    <Mcb />
    <Catalog />
    <Power />
    <Electric />
    <Typical />
    <Modbus />
    <Modular />
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
