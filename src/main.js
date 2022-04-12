import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './utils/router';
import App from './App.vue';


Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
