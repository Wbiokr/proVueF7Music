// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import './mixin/title';
import store from './vuex/store';
import App from './views/App';
import router from './router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './style/normalize.css';
import './style/iconfont.css';

import VueLazyLoad from 'vue-lazyload';

Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: 'dist/loading.gif',
  attempt: 3
})

Vue.use(MintUI);
Vue.use(Vuex);

Vue.config.silent=true;
Vue.config.devtools=true;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
