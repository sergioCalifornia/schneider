<template>
  <main>
    <section class="flex-grow-1 d-flex align-items-center">
      <div class="container text-center py-6 my-6">
        <h1 v-if="error.statusCode === 404">
          Запрашиваемая страница не найдена на сайте
        </h1>
        <h1 v-else>
          Ошибка - {{ error.statusCode }}
        </h1>

        <h3 class="mt4">
          У нас много интересного, <a href="/">посмотрите</a>.
        </h3>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
export default {
  layout: 'error', // you can set a custom layout for the error page
  props: {
    error: {
      type: Object,
      default: Function
    }
  },
  head() {
    return {
      title: `Ошибка - ${ this.error.statusCode }`
    }
  }
}
</script>
