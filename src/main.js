import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import feather from 'vue-icon'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './registerServiceWorker'

Vue.use(feather, 'v-icon')

const options = {
  confirmButtonColor: '#9A21F7',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2,options);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
