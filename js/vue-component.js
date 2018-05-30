//VUE Component file for FESC project
Vue.component('main-module',{
  props: ['header', 'para', 'page'],
  template: '<div class="module"><h1><span>FESC</span> {{ header }}</h1><p> {{ para }}</p><a href="{{ page }}">Learn More.....</a>'
})
