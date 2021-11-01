<template>
  <header>
    <div class="container header-container">
      <picture>
        <source srcset="~/assets/i/header-main.jpg?webp" type="image/webp">
        <img class="header-bg" width="2608" height="1124" src="~/assets/i/header-main.jpg" alt="">
      </picture>
      <div class="header-content">
        <h1 class="header-databar">
          Databar®
        </h1>
        <h4 class="header-discription">
          Intelligent Data
          <br>
          Hall Busway System
        </h4>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  position: relative;
  background-color: #5B9AEC;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1;
  }
}

@media (min-width: 360px) {
  header {
    width: 100%;
  }
}

@media (min-width: 992px) {
  header {
    width: 100%;

    &::before {
      display: none;
    }
  }
}

.header-container {
  position: relative;
  height: 492px;
}

@media (min-width: 992px) {
  .header-container {
    height: 562px;
  }
}

.header-bg {
  position: absolute;
  right: -7%;
  top: 0;
  width: 114%;
  height: 100%;
  object-fit: cover;
  object-position: right top;
}

@media (min-width: 576px) {
  .header-bg {
    position: absolute;
    left: 50%;
    top: 0;
    width: 140%;
    transform: translateX(-50%);
  }
}

@media (min-width: 992px) {
  .header-bg {
    right: -15%;
    width: 125%;
    height: 100%;
  }
}

.header-content {
  position: relative;
}

.header-databar {
  margin: 0 auto;
  margin-bottom: 8px;
  padding: 297px 135px 0 0;
  font-family: 'Nunito', sans-serif;
  font-size: 36px;
  color: #fff;
}

@media (min-width: 576px) {
  .header-databar {
    font-size: 48px;
    margin-bottom: 12px;
    padding: 257px 135px 0 0;
  }
}

@media (min-width: 992px) {
  .header-databar {
    font-size: 64px;
    margin-bottom: 18px;
    padding-top: 162px;
  }
}

.header-discription {
  max-width: 350px;
  font-size: 18px;
  color: #fff;
}

@media (min-width: 576px) {
  .header-discription {
    font-size: 22px;
  }
}

@media (min-width: 992px) {
  .header-discription {
    font-size: 28px;
  }
}
</style>
