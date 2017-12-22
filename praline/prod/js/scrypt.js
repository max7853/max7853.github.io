Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  data: {
    modal_bg: 0,
    modal: 0,
    slider: {
      speed: 600,
      loop: true,
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
       }
    },
  },
  methods: {reset_form:function(){event.target.reset()}
  },
})
