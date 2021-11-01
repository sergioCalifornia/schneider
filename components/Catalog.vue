<template>
  <section class="catalog">
    <div id="catalog" class="local-link" />
    <Modal v-if="modalOpened" :pic="modalPic" :title="modalTitle" :model3d="modal3d" :close="closeModal" :cols="false" pic-bg="#5B9AEC" />
    <div class="container">
      <div class="catalog-list">
        <div
          v-for="(citem, index) in catalog"
          :key="'citem-' + index"
          class="catalog-item"
          @click="openModal(citem)"
        >
          <div class="catalog-img-container">
            <picture>
              <source :srcset="require(`~/assets/i/${ citem.pic }?webp`)" type="image/webp">
              <img class="catalog-img" width="137" height="113" :src="require(`~/assets/i/${ citem.pic }`)" alt="">
            </picture>
          </div>
          <div class="catalog-item-content">
            <h6 class="catalog-item-title">
              {{ citem.title }}
            </h6>
          </div>
        </div>
        <!-- <div class="btn btn-outline catalog-btn" @click="textOpen = !textOpen">
          {{ textOpen ? 'Hide' : 'Show more' }}
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      modalOpened: false,
      modalPic: '',
      modalTitle: '',
      modal3d: '',
      // textOpen: false,
      catalog: [
        {
          pic: 'catalog/catalog-img-1.jpg',
          title: '1A Single 1 x 20A L5-20R Tap Off002',
          model3d: 'example.glb'
        },
        {
          pic: 'catalog/catalog-img-2.jpg',
          title: '1B Single 1x20A L6-20R Tap Off002',
          model3d: 'example.glb'
        },
        {
          pic: 'catalog/catalog-img-3.jpg',
          title: '2B Dual 2x30A L5-30R Tap Off002',
          model3d: 'example.glb'
        },
        {
          pic: 'catalog/catalog-img-4.jpg',
          title: '3B Triple 1x20A Quad Box Tap Off002',
          model3d: 'example.glb'
        },
        {
          pic: 'catalog/catalog-img-5.jpg',
          title: '4B Triple 1x20A L5-20R, 2x30A L6-30R Tap Off002',
          model3d: 'example.glb'
        },
        {
          pic: 'catalog/catalog-img-6.jpg',
          title: '4C Dual 2x30A L21-30R Tap Off002',
          model3d: 'example.glb'
        },
        {
          pic: 'catalog/catalog-img-7.jpg',
          title: '5E Dual 2x60A 560R9W Tap Off002',
          model3d: 'example.glb'
        },
        {
          pic: 'catalog/catalog-img-8.jpg',
          title: '6B Single 1x30A L15-30R Tap Off w A9MEM3155...',
          model3d: 'example.glb'
        },
        {
          pic: 'catalog/catalog-img-9.jpg',
          title: '7G Dual 2x60A 35kA 460R9W Tap Off002',
          model3d: 'example.glb'
        }
      ]
    }
  },
  methods: {
    openModal(cItem) {
      this.modalOpened = true
      this.modalPic = cItem.pic
      this.modalTitle = cItem.title
      this.modal3d = cItem.model3d
    },
    closeModal() {
      this.modalOpened = false
      this.modalPic = ''
      this.modalTitle = ''
      this.modal3d = ''
    }
  }
}
</script>

<style lang="scss">
.catalog {
  margin-top: 50px;
  margin-bottom: 0;
}

.catalog-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 15px;
}

@media (min-width: 576px) {
  .catalog-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 992px) {
  .catalog-list {
    gap: 35px 22px;
  }
}

.catalog-item {
  position: relative;
  border: solid 1px #CACACA;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  transform: scale(1.00001);
  transition: transform .5s ease-in-out;

  &:hover {
    transform: scale(1.07);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

    &::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      width: calc(100% + 2px);
      display: block;
      height: 6px;
      background: #3DCD58;
      z-index: 1;
    }
    .catalog-item-title {
      color: #009530;
    }
  }
}

.catalog-img-container {
  position: relative;
  width: calc(100% + 2px);
  height: 0;
  top: -1px;
  left: -1px;
  padding-bottom: 84%;
}

.catalog-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.catalog-item-content {
  padding: 8px 6px;
}

@media (min-width: 992px) {
  .catalog-item-content {
    padding: 14px 16px 14px 18px;
  }
}

.catalog-item-title {
  transition: all .5s;
}

// .catalog-btn {
//   position: relative;
//   left: 23%;
// }

// @media (min-width: 474px) {
//   .catalog-btn {
//     display: none;
//   }
// }
</style>
