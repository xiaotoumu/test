<template>
  <div class="loan_detail">
     <!-- <div class="loan_detail_in">
       <i class="iconfont icon-fanhui" @click="goBack"></i>
       贷款人详细信息
       </div>   -->
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
    <mt-button size="small" type="primary">提交并保存</mt-button>
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
a{
  text-decoration none
}
label{
  margin-bottom 0
}
.mint-button{
  margin-left 20px
}
h1
  margin-bottom 0
  margin-top 0
.mint-header
  background-color rgba(0,102,153,0.78)
  height auto
  .mint-button
    margin-left 0
    .mint-button-text
      font-weight normal
      font-size 14px
.mint-checklist-label
  font-weight normal  
[class*="col-"] {
  padding-top 15px
  padding-bottom 15px
  text-align center
  font-size 14px
}
.loan_detail
  height 100%
  a
    text-decoration none
  .loan_detail_in
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
  .row
    margin-left 0
    margin-right 0
    .col-xs-3
      padding-left 0
      padding-right 0
    .in
      padding 7px
      .input-group
        display block
        .form-control
          height 36px
          font-size 14px
          border none
          outline none
          border-bottom 1px solid #ddd
          padding 0
          box-shadow inset 0 1px 1px rgba(0,0,0,0)
    .daikuan
      padding-left 8px
      .btn-group
        display block
        text-align left
        .selectpicker
          padding 0px 10px
          border-radius 4px
          display flex
          font-size 14px
          option
            border-radius 4px  
    .zheng
      padding-bottom 9px
      padding-left 8px
      .form-group
        margin-bottom 0
        input[type=file]
          width 100%
    .bei
      padding-left 4px
      .form-group
        margin-bottom 0
        p
          margin 0
          text-align left
          color red
  .submit
    position relative
    .btn
      position absolute
      top .83rem
      color #fff
    .btn-primary  
      left 18%
    .btn-danger
      left 55%
</style>
