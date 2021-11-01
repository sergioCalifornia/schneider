<template>
  <div ref="topBar" class="top-bar" :class="{ 'top-bar-scroll' : scrolled }">
    <div class="container">
      <div class="top-bar-inner">
        <a href="/" class="top-bar-logo" v-html="require('~/assets/i/sel-logo.svg?include')" />
        <div class="top-bar-right">
          <div ref="topBarNav" class="top-bar-nav-btn" @click="navigation = !navigation" />
          <div ref="topBarMenu" class="top-bar-menu" :class="{ active : navigation }">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      navigation: false
    }
  },
  mounted() {
    if (window) {
      window.addEventListener('scroll', this.checkScroll)
      this.checkScroll()
    }
  },
  // unmounted() {
  //   if (window) {
  //     window.removeEventListener(this.checkScroll)
  //   }
  // },
  // destroyed() {
  //   if (window) {
  //     window.removeEventListener(this.checkScroll)
  //   }
  // },
  methods: {
    checkScroll() {
      this.scrolled = window.scrollY > 180
    }
  }
}
</script>

<style lang="scss">
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 100;
  box-sizing: content-box;
  padding-top: 14px;
  background-color: transparent;
  transition: all 0.5s ease-in-out;

  &.top-bar-scroll {
    padding-top: 0;
    background-color: #45CB5E;
    border-bottom: 3px solid #009530;
  }
}

@media (min-width: 992px) {
  .top-bar {
    background-color: #45CB5E;
    border-bottom: 3px solid #009530;
    position: relative;
    height: 96px;
    padding: 0;
  }
}

.top-bar-alt {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.top-bar-scroll {
  visibility: visible;
  opacity: 1;
}

.top-bar-inner {
  display: flex;
  align-items: center;
}

.top-bar-logo {
  z-index: 102;
  line-height: 0;
  margin-top: 4px;

  svg {
    width: 183px;
  }
}

@media (min-width: 992px) {
  .top-bar-logo {
    margin-right: 100px;

    svg {
      width: 230px;
    }
  }
}

.top-bar-right {
  flex-grow: 1;
}

.top-bar-nav-btn {
  position: fixed;
  top: 29px;
  right: 14px;
  width: 32px;
  height: 4px;
  margin: 8px 0;
  background-color: white;
  z-index: 102;
  transition: top 0.5s ease-in-out;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: white;
    left: 0;
  }
  &::before {
    top: -8px;
  }
  &::after {
    top: 8px;
  }
}

.top-bar-scroll .top-bar-nav-btn {
  top: 18px;
}

@media (min-width: 992px) {
  .top-bar-nav-btn {
    display: none;
  }
}

.top-bar-menu {
  margin-top: 6px;
  position: absolute;
  display: none;

  &.active {
    display: block;
  }
}

@media (min-width: 992px) {
  .top-bar-menu {
    position: static;
    display: block;
  }
}

.top-bar-subtext {
  display: none;
}

@media (min-width: 992px) {
  .top-bar-subtext {
    display: block;
  }
}
</style>
