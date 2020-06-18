import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBE39cguJcLpFJxmJSUfV2rQtfrcqE6qm0",
  authDomain: "test-app-d6e4b.firebaseapp.com",
  databaseURL: "https://test-app-d6e4b.firebaseio.com",
  projectId: "test-app-d6e4b",
  storageBucket: "test-app-d6e4b.appspot.com",
  messagingSenderId: "712383253433"
};
firebase.initializeApp(config)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
