import Vue from 'vue';
import Router from 'vue-router';
import Login from 'components/login';
import Business from 'components/business';
import Loandetail from 'components/loan_detail';
import Executive from 'components/executive';
import Ywdetail from 'components/yw_detail';
import Edit from 'components/edit';
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
      component: Login
    },
    {
      path: '/business',
      name: 'business',
      component: Business
    },
    {
      path: '/loan_detail',
      name: 'loan_detail',
      component: Loandetail
    },
    {
      path: '/executive',
      name: 'executive',
      component: Executive
    },
    {
      path: '/yw_detail',
      name: 'yw_detail',
      component: Ywdetail
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    }
  ]
});
