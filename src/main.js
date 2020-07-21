import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import './assets/app.scss';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCX_3rs7z30Im5xyMDtxehjTWYAF9cnVOY'
  },
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
