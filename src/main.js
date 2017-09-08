// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import 'vue-easytable/libs/themes-base/index.css';
import {VTable, VPagination} from 'vue-easytable';
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);
import FastClick from 'fastclick';
require('./mock.js');
Vue.use(YDUI);
Vue.config.productionTip = false;
document.addEventListener('DOMContentLoaded', function () {
  FastClick.attach(document.body);
}, false);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
