<template>
  <div class="modal-wrapper">
    <div class="modal-overlay" @click="closeModal()" />
    <div class="modal" :class="[ cols ? 'modal-cols' : 'modal-no-cols' ]">
      <div class="modal-close" @click="closeModal()" />
      <div class="modal-row">
        <div class="modal-left">
          <div class="modal-pic-container" :style="{ background: picBg ? picBg : '' }">
            <picture @click="open3d()">
              <source :srcset="require(`~/assets/i/${ pic }?webp`)" type="image/webp">
              <img class="modal-pic" :src="require(`~/assets/i/${ pic }`)" alt="">
            </picture>
            <div v-if="model3d" class="modal-3d-icon" @click="toggle3d()" />
            <model-viewer
              v-if="show3d"
              class="modal-3d"
              src="/assets/3d/example.glb"
              environment-image="neutral"
              auto-rotate
              camera-controls
            />
          </div>
        </div>
        <div class="modal-right">
          <div class="modal-content">
            <h3 class="modal-title">
              {{ title }}
            </h3>
            <div class="modal-description" v-html="description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pic: {
      type: String,
      default: '',
      require: true
    },
    title: {
      type: String,
      default: '',
      require: false
    },
    description: {
      type: String,
      default: '',
      require: false
    },
    model3d: {
      type: String,
      default: '',
      require: false
    },
    close: {
      type: Function,
      default: null,
      require: true
    },
    cols: {
      type: Boolean,
      default: true,
      require: false
    },
    picBg: {
      type: String,
      default: '',
      require: false
    }
  },
  data() {
    return {
      show3d: false,
      bodyScroll: 0
    }
  },
  mounted() {
    this.bodyScroll = window.scrollY
    document.body.classList.add('modal-open')
    document.body.scrollTo(0, this.bodyScroll)
    // window.scrollTo(0, this.bodyScroll)
  },
  methods: {
    closeModal() {
      document.body.classList.remove('modal-open')
      window.scrollTo(0, this.bodyScroll)
      this.close()
    },
    open3d() {
      if (this.model3d) {
        this.show3d = true
      }
    },
    toggle3d() {
      this.show3d = !this.show3d
    }
  }
}
</script>
<style lang="scss">
.modal-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 110;
}

.modal-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.58);
  backdrop-filter: blur(4px);
}

.modal {
  position: relative;
  width: 90vw;
  max-width: 800px;
  background-color: #fff;
  padding: 10px;
}

.modal-pic-container {
  height: 100%;
  position: relative;
}

.modal-pic {
  position: relative;
  width: 100%;
  height: auto;
  max-height: 50vh;
  object-fit: contain;
}

@media (min-width: 576px) {
  .modal-cols {
    .modal-pic {
      max-height: 100%;
    }
  }
}

.modal-3d-icon {
  cursor: pointer;
  position: absolute;
  right: 17px;
  bottom: 17px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-image: url('~/assets/i/icons/3d.svg?inline');
  background-size: 26px auto;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
  z-index: 2;
}

.modal-3d {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #F6F6F6;
}

.modal-close {
  position: absolute;
  top: -40px;
  right: 5px;
  width: 28px;
  height: 28px;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 11px;
    top: -2px;
    display: block;
    height: 33px;
    width: 6px;
    background-color: #fff;
    transform-origin: center center;
  }

  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
}

.modal-row {
  max-height: calc(95vh - 80px);
  display: flex;
  flex-direction: column;
}

.modal-right {
  overflow: auto;
}

@media (min-width: 576px) {
  .modal-cols {
    .modal-row {
      flex-direction: row;
    }
    .modal-left {
      width: 40%;
    }
    .modal-right {
      width: 55%;
      margin-left: 5%;
    }
  }
}
</style>
