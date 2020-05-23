import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './route/index.js'

const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey:process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain:process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL:process.env.VUE_APP_DB_URL,
  projectId:process.env.VUE_APP_PROJECT_ID,
  storageBucket:process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.VUE_APP_MSG_SENDER_ID,
  appId:process.env.VUE_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
