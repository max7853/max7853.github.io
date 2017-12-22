Vue.component('modal-bg', {
  template: '#modal-bg'
})

Vue.component('modal-1', {
  template: '#modal-1'
})

Vue.component('modal-2', {
  template: '#modal-2'
})

Vue.component('modal-3', {
  template: '#modal-3'
})

Vue.component('modal-4', {
  template: '#modal-4'
})

Vue.use(VueAwesomeSwiper)

new Vue({

  el: '#app',
  data: {
    modal_bg: false,
    modal_1: false,
    modal_2: false,
    modal_3: false,
    modal_4: false,
    swiperOptionA: {
      speed: 700,
      loop: true,
       pagination: {
         el: '.swiper-pagination'
       },
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
       }
    },
  },
  methods: {
    reset_form: function() {
      event.target.reset()
    }
  },

})
