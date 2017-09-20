// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './views/App';
import router from './router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './style/normalize.css';
import './style/iconfont.css';
// import 'font-awesome';

Vue.use(MintUI);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
