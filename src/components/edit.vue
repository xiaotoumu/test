<template>
  <div class="loan_detail">
       <yd-navbar title="贷款人详细信息">
      <a @click="goBack" slot="left">
          <yd-navbar-back-icon>返回</yd-navbar-back-icon>
      </a>
    </yd-navbar>
    <yd-cell-group>
        <yd-cell-item>
            <span slot="left">用户名：</span>
            <yd-input slot="right" required v-model="input1" max="20" placeholder="请输入用户名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">身份证号：</span>
            <yd-input slot="right" type="number"  v-model="input2" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item arrow type="label">
           <span slot="left">业务类型：</span>
            <select slot="right">
                <option value="">押本押车</option>
                <option value="1">房抵押</option>
                <option value="2">押车不押本</option>
            </select>
        </yd-cell-item>
        <yd-cell-item arrow type="label">
           <span slot="left">贷款方式：</span>
            <select slot="right">
                <option value="">贷款方式一</option>
                <option value="1">贷款方式二</option>
            </select>
        </yd-cell-item>
    </yd-cell-group>
  </div> 
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        email: '',
        password: '',
        input1: '',
        input2: '',
        input3: '',
        input8: '',
        input9: '',
        input12: '',
        result: ''
      };
    },
    methods: {
      goBack () {
        this.$router.back(); //  返回上一级
      }
    }
  };
</script>

<style lang="stylus">
 @import '../base/css/detail'
</style>
