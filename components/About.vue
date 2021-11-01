<template>
  <div class="about white-block">
    <div id="about" class="local-link" />
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-9">
          <h2 class="about-title">
            Intelligent Data Hall Busway
          </h2>
          <p class="about-discription">
            The Databar busway system is a unique open channel modular busway
            system designed for mission critical rack power distribution in data centers.
            The system has been developed to be extremely compact and features
            patent pending design innovations in the integral plug-n-play coupling
            system. This allows for simpler and faster installation and tap-off actuator
            mechanisms that put safety at the forefront.
          </p>
        </div>
      </div>
      <NuxtLink to="/intelligent#start" class="btn about-btn" >
        Learn more
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">

.about-discription {
  margin: 0;
  color: #434343;
}

@media (min-width: 992px) {
  .about-discription {
    margin-top: 40px;
    margin-bottom: 54px;
  }
}

@media (min-width: 992px) {
  .about-title {
    margin-top: 112px;
  }
}

@media (min-width: 992px) {
  .about-btn {
    margin-bottom: 40px 0 75px;
  }
}

</style>
