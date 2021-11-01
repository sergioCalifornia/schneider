<template>
  <footer>
    <div id="contacts" class="local-link" />
    <div class="container">
      <div class="footer-logo" v-html="require('~/assets/i/sel-logo.svg?include')" />
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <p><strong>Адрес:</strong> Москва, 109316, Волгоградский проспект, 42</p>
          <p>
            <strong>Факс:</strong> (495) 777 99 94
            <br>
            <strong>Email:</strong>
            <a href="mailto:ru.ccc@se.com">ru.ccc@se.com</a>
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-4 offset-lg-1">
          <p>
            <strong>Телефон:</strong>
            <br>
            <small>(звонок по России бесплатный)</small>
            <br>
            <span class="icon-call" />
            <a href="tel:88002006446">8 (800) 200 64 46</a>
            <br>
            <span class="icon-call" />
            <a href="tel:+74957779988">(495) 777 99 88</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
footer {
  padding: 40px 0;
  background: #4B4B4B;
  color: #fff;

  a {
    display: inline-block;
    margin-top: 4px;
  }
}
@media (min-width: 992px) {
  footer {
    padding: 65px 0 80px 0;
  }
}

.footer-logo {
  margin-bottom: 28px;

  svg {
    width: 266px;
  }
}
</style>
