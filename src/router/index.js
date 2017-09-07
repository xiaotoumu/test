import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: resolve => require(['components/login'], resolve) /* <== 主要代码是这 */
    },
    {
      path: '/business',
      name: 'business',
      component: resolve => require(['components/business'], resolve) /* <== 主要代码是这 */
    },
    {
      path: '/loan_detail',
      name: 'loan_detail',
      component: resolve => require(['components/loan_detail'], resolve) /* <== 主要代码是这 */
    },
    {
      path: '/executive',
      name: 'executive',
      component: resolve => require(['components/executive'], resolve) /* <== 主要代码是这 */
    },
    {
      path: '/yw_detail',
      name: 'yw_detail',
      component: resolve => require(['components/yw_detail'], resolve) /* <== 主要代码是这 */
    },
    {
      path: '/edit',
      name: 'edit',
      component: resolve => require(['components/edit'], resolve) /* <== 主要代码是这 */
    }
  ]
});
