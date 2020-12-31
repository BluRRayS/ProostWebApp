import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import feather from 'vue-icon'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase';

const options = {
  confirmButtonColor: '#3F51B5',
  cancelButtonColor: '#ff7674',
};

Vue.use(feather, 'v-icon');

Vue.use(VueSweetalert2, options);

Vue.config.productionTip = false;


const firebaseConfig = {
  apiKey: "AIzaSyByd6UgKelFUbkVByP_69EK7ROH5hksP3s",
  authDomain: "picollo-b51b3.firebaseapp.com",
  databaseURL: "https://picollo-b51b3.firebaseio.com",
  projectId: "picollo-b51b3",
  storageBucket: "picollo-b51b3.appspot.com",
  messagingSenderId: "568218515745",
  appId: "1:568218515745:web:b28b6ecdf932550202a660"
};
firebase.initializeApp(firebaseConfig)


const unsubscribe = firebase.auth()
  .onAuthStateChanged((firebaseUser) => {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
      created() {
        if (firebaseUser) {
          store.dispatch('user/autoSignIn', firebaseUser)
        }
      }
    }).$mount('#app')
    unsubscribe()
  });
