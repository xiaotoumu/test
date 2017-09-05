<template>
  <div class="loan_detail">
       <mt-header title="贷款人详细信息">
       <a @click="goBack" slot="left">
        <mt-button icon="back">返回</mt-button>
      </a>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header> 

     <mt-field label="姓名" placeholder="请输入用户名" v-model="username" ></mt-field>
    <mt-field label="身份证号"  placeholder="请输入身份证号" type="number"></mt-field>
    <mt-field label="联系电话" placeholder="请输入手机号" type="tel" ></mt-field>
    <mt-checklist title="贷款方式" v-model="value" :options="['房贷', '押车']"></mt-checklist>
    <mt-checklist title="业务类型" v-model="value" :options="['方式一', '方式二']"></mt-checklist>
    <mt-field label="证件照片"  type="file"></mt-field>
    <mt-button size="small" type="primary">提交并通过</mt-button>
  </div> 
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        email: '',
        password: '',
        tel: '',
        url: '',
        number: '',
        value: []
      };
    },
    methods: {
      goBack () {
        this.$router.back();
      }
    }
  };
</script>

<style lang="stylus">
  h1
    margin-bottom 0
    margin-top 0
.mint-field-core
  line-height 1    
.mint-button-text
  font-weight normal 
  margin-bottom 0   
.mint-checklist-label
  font-weight normal 
.loan_detail
  height 100%
  .mint-header
    height auto
    background-color rgba(0,102,153,0.78)
    .mint-button
      .mint-button-text
        margin-bottom 0
        font-weight normal
  .mint-cell
    text-decoration none  
    .mint-cell-text
      font-size 14px
  .mint-checklist
    .mint-checklist-title
      font-size 14px
      padding 0 10px
      color #000
      margin 0
      font-weight normal
</style>
