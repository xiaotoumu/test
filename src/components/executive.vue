<template>
  <div class="executive">
    <mt-header title="贷款业务审核">
        <a @click="goBack" slot="left">
        <mt-button icon="back">返回</mt-button>
        </a>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
      <div class="input-group-addon">业务审核列表</div>
      <div class="no_inline">
          <mt-field  placeholder="输入查询相关信息" v-model="username"></mt-field>
          <mt-button type="primary" size="small">保存并提交</mt-button>
      </div>
    <div class="no_pass">
      <table class="table table-striped">
      <thead>
        <tr>
          <th>名称</th>
          <th>电话</th>
          <th>身份证号</th>
          <th>业务类型</th>
          <th>编辑</th>
          <th>预览审核</th>
        </tr>
      </thead>
      <tbody> 
        <tr v-for="(items, index) in pages" :key="index">
          <td>{{items.name}}</td>
          <td>{{items.phone}}</td>
          <td>{{items.idr}}</td>
           <td>{{items.fd}}</td>
          <td> <router-link :to="{path:'/loan_detail'}">{{items.bj}}</router-link></td>
          <td> <router-link :to="{path:'/edit'}">{{items.yl}}</router-link></td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="input-group-addon">未通过审核业务</div>
    <div class="no_pass">
      <table class="table table-striped">
      <thead>
        <tr>
          <th>名称</th>
          <th>电话</th>
          <th>身份证号</th>
          <th>业务类型</th>
          <th>修改</th>
          <th>预览审核</th>
        </tr>
      </thead>
      <tbody> 
        <tr v-for="(items, index) in pages" :key="index">
          <td>{{items.name}}</td>
          <td>{{items.phone}}</td>
          <td>{{items.idr}}</td>
           <td>{{items.fd}}</td>
          <td> <router-link :to="{path:'/loan_detail'}">{{items.xg}}</router-link></td>
          <td> <router-link :to="{path:'/loan_detail'}">{{items.yl}}</router-link></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      pages: '',
      username: ''
    };
  },
  created () {
    this.$nextTick(() => {
      this.getDate();
    });
  },
  methods: {
    goBack () {
      this.$router.back();
    },
    getDate () {
      axios.get(`http://g.cn`).then((res) => {
        this.pages = res.data.list;
      });
    }
  }
};
</script>

<style lang="stylus">
.mint-header
  background-color rgba(0,102,153,0.78)
  height auto
  .mint-button-text
    margin-bottom 0
    font-weight normal 
  h1
    margin-bottom 0
    margin-top 0
.input-group[class*=col-]
  padding-left 15px
.executive
  height 100%
  .business_page
    text-align center
    line-height 1.25rem
    background rgba(0, 102, 153 , 0.78)
    height 1.25rem
    font-size 16px
    color #fff
    .iconfont
      font-size 16px
      position absolute 
      left 3%
  .form-inline
    .form-group
      .input-group
        float left  
  .input-group-addon
    border none
    border-bottom 1px solid #ccc
    text-align left
    background #fff
    padding 14px
    color red 
  .no_inline
    margin 10px
    .mint-cell-wrapper
      padding 0
    .form-inline
      position relative
      .form-group
        margin-bottom 0
    .mint-button--primary
      background-color rgba(0,102,153,0.78)
      margin-left 0      
  .loan_page,.create_loan
    text-align left
    height 1.25rem
    border-bottom 1px solid #ccc
    line-height 1.25rem
    font-size 16px
    color red
    text-indent .3125rem
    .create_loan_zi
      color #000
      text-indent .625rem
      font-size 14px
      display block
      text-decoration none
      .iconfont
        font-weight 500
        font-size 14px
  .no_pass,.daihou
    .no_pass_page,.daihou_da
      height 1.25rem
      line-height 1.25rem
      font-size 16px
      text-indent 0.3125rem
      color red
      border-bottom 1px solid #ccc      
    .table
      margin-bottom 0
      margin-top .45rem 
      border 1px solid #ccc
      td,th
        padding 10px
        text-align center
        border 1px solid #ccc
        vertical-align middle
        word-break break-all
        word-wrap break-word
        a
          text-decoration none     
</style>
