import GLightbox from 'glightbox'

import 'glightbox/dist/css/glightbox.min.css'

export default ({ app }, inject) => {
  app.glightbox = new GLightbox({
    selector: '.glightbox'
  })

  inject('glightbox', app.glightbox)
}
