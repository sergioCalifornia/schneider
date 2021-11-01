<template>
  <section class="unique blue-block">
    <div class="container unique-container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="unique-content">
            <h2 class="h2-nunito">
              Unique integral coupling system
            </h2>
          </div>
        </div>
        <div class="unique-second col-12 col-md-6">
          <div class="unique-pic-continer">
            <picture>
              <source srcset="~/assets/i/unique.jpg?webp" type="image/webp">
              <img class="unique-pic" width="1010" height="1020" src="~/assets/i/unique.jpg" alt="">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@media (min-width: 768px) {
  .unique {
    padding-bottom: 70px;
  }
}
.unique-content {
  margin-top: 40px;
}

@media (min-width: 768px) {
  .unique-content {
    max-width: 290px;
    margin-top: 120px;
  }
}

.unique-second {
  text-align: right;
}

.unique-pic-continer {
  margin-top: -20px;
}

.unique-pic {
  width: 200px;
  height: auto;
  position: relative;
  top: 20px;
}

@media (min-width: 768px) {
  .unique-pic {
    width: 100%;
    max-width: 505px;
    top: 0;
  }
}
</style>
