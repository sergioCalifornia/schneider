<template>
  <section class="inst white-block">
    <Modal v-if="modalOpened" :pic="modalPic" :title="modalTitle" :description="modalDescription" :close="closeModal" />
    <div class="inst-container container">
      <h2>
        Installation and
        <br>
        Busway Accessories
      </h2>

      <div class="inst-swiper-wrapper">
        <div ref="instSwiper" class="inst-swiper swiper-container">
          <div class="swiper-wrapper">
            <div
              v-for="(item, index) in slides"
              :key="`inst-` + index"
              class="swiper-slide"
              @click="openModal(index)"
            >
              <div class="inst-item">
                <picture>
                  <source :srcset="require(`~/assets/i/${ item.pic }?webp`)" type="image/webp">
                  <img class="inst-item-pic" :src="require(`~/assets/i/${ item.pic }`)" alt="">
                </picture>
                <div class="inst-item-title">
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inst-swiper-button-prev swiper-button-prev" @click="goPrev()" />
        <div class="inst-swiper-button-next swiper-button-next" @click="goNext()" />
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper } from 'swiper'

export default {
  data() {
    return {
      modalOpened: false,
      modalPic: '',
      modalTitle: '',
      modalDescription: '',
      swiper: null,
      slides: [
        {
          pic: 'installation/slide-1.jpg',
          title: 'Installation',
          description: `
            <p>
              Busway is typically suspended on drop rods from supporting ‘T-slot’ ceilings or Uni-strut style support hardware. Three hangers are supplied with each length.
            </p>
            <p>
              Our team of installers can offer a one-stop-shop for install, testing (including load bank testing), commissioning, and power management systems integration. Alternative underfloor or server rack-top supports are also available to meet project
              specific requirements.
            </p>
          `
        },
        {
          pic: 'installation/slide-2.jpg',
          title: 'Cable End Feeds',
          description: `
            <p>Busway is typically fed by cable from switchboards or high power busbar tap-offs.</p>
            <p>End feeds accommodate cable terminations and can be configured to left hand or right hand feed locations. Optional end-feed metering, indication or integral</p>
            <p>switch isolators are available to meet the specific project requirements. Other customization options include custom RAL colors and pre-punched glanding plates to suit specific cable requirements</p>`
        },
        {
          pic: 'installation/slide-3.jpg',
          title: 'End Caps',
          description: '<p>Each length of busway is terminated with an end cap. If there is a later requirement to extend or reduce the busway this end cap can be removed and re-fitted to the end of the run. Male and female end caps allow for left or right hand fed systems.</p>'
        },
        {
          pic: 'installation/slide-4.jpg',
          title: 'Elbows',
          description: `
          <p>The vast majority of installations are straight runs, but, where there is a requirement to change direction, the system can employ elbows in left and right 90 degree angles as standard.</p>
          <p>Combinations of elbows can be used to circumnavigate building supports. Breaks in runs can also be engineered with cable connections between end feed units.<p/>`
        },
        {
          pic: 'installation/slide-5.jpg',
          title: 'Channel Closure Strip',
          description: `
            <p>Channel Closure Strip is a clip in cover supplied in 10ft (3m) lengths, and is typically cut
            to length on-site and provides a blanking cover to the open channel busway. It can be fitted between tap-offs or across unutilized lengths.</p>`
        },
        {
          pic: 'installation/slide-6.jpg',
          title: 'Comms Channel Cover',
          description: `
            <p>Comms Channel Cover clips on to the housing to retain Ethernet cables in wired metering applications. Supplied in 10ft (3m) lengths with options to color code for different power streams.
            </p>`
        }
      ]
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.instSwiper, {
      slidesPerView: 'auto',
      spaceBetween: 6,
      breakpoints: {
        576: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 4
        },
        1400: {
          slidesPerView: 5
        }
      }
    })
  },
  methods: {
    openModal(index) {
      const slide = this.slides[index]

      this.modalPic = slide.pic
      this.modalTitle = slide.title
      this.modalDescription = slide.description
      this.modalOpened = true
    },
    closeModal() {
      this.modalOpened = false
      this.modalPic = ''
      this.modalTitle = ''
      this.modalDescription = ''
    },
    goPrev() {
      this.swiper.slidePrev()
    },
    goNext() {
      this.swiper.slideNext()
    }
  }
}
</script>

<style lang="scss">
.inst-swiper-wrapper {
  position: relative;
  margin: 0 -0.75rem;
}

@media (min-width: 576px) {
  .inst-swiper-wrapper {
    padding: 0 10px;
  }
}

.inst-swiper {
  .swiper-slide {
    padding: 8px;
    box-sizing: border-box;
  }

  .swiper-slide-active {
    .inst-item::before {
      content: '';
      position: absolute;
      left: 0;
      top: -1px;
      height: 3px;
      width: 100%;
      background: #3DCD58;
    }
  }
}

@media (min-width: 576px) {
  .inst-swiper {
    .swiper-slide-active {
      .inst-item::before {
        display: none;
      }
    }
  }
}

.inst-item {
  position: relative;
  width: 153px;
  height: 100%;
  padding: 7px 5px 0 5px;
  border: 1px solid #CACACA;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

@media (min-width: 576px) {
  .inst-item {
    width: 100%;
  }
}

.inst-item-pic {
  width: 100%;
  height: 125px;
  object-fit: cover;
}

@media (min-width: 992px) {
  .inst-item-pic {
    height: 214px;
  }
}

.inst-item-title {
  padding: 12px 12px 25px 12px;
}

.inst-swiper-button-prev, .inst-swiper-button-next {
  display: none;
}

@media (min-width: 576px) {
  .inst-swiper-button-prev, .inst-swiper-button-next {
    display: flex;
  }
}
</style>
