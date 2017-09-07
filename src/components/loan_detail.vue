<template>
  <div class="loan_detail">
    <yd-navbar title="贷款人详细信息">
      <a @click="goBack" slot="left">
          <yd-navbar-back-icon></yd-navbar-back-icon>
      </a>
    </yd-navbar>
    <yd-cell-group>
        <yd-cell-item>
          <yd-icon slot="icon" name="ucenter" size=".45rem"></yd-icon>
            <span slot="left">真实姓名：</span>
            <yd-input slot="right" required v-model="input1" max="20" placeholder="请输入用户名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
        <yd-icon slot="icon" name="feedback" size=".45rem"></yd-icon>
            <span slot="left">身份证号：</span>
            <yd-input slot="right" type="number"  v-model="input2" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item arrow type="label">
           <yd-icon slot="icon" name="warn-outline" size=".45rem"></yd-icon>
           <span slot="left">业务类型：</span>
            <select slot="right">
                <option value="">请选择</option>
                <option value="">押本押车</option>
                <option value="1">房抵押</option>
                <option value="2">押车不押本</option>
            </select>
        </yd-cell-item>
       <div class=" yd-cell-item">
         <div class="yd-cell-left">
           <yd-icon slot="icon" name="discover" size=".45rem"></yd-icon>
           <span class="yd-cell-icon"></span>
          <span>证件照片：</span>
          </div>
          <div class="yd-cell-right">
            <div class="yd-input">
          <input type="file" id="inputfile">
          </div>
          </div>
        </div>
       <yd-cell-group>
            <yd-cell-item>
                <span slot="left">手机号：</span>
                <yd-input slot="right" v-model="input9" ref="input9" required regex="^1[3-9]\d{9}$" placeholder="请输入手机号码"></yd-input>
            </yd-cell-item>
            <p slot="bottom" style="color:#F00;padding: 0 .3rem;" v-html="result"></p>
        </yd-cell-group>
    <yd-cell-group title="意见评定">
        <yd-cell-item>
          <yd-icon name="footmark"></yd-icon>
            <yd-textarea slot="right" placeholder="请给出意见评定" maxlength="100"></yd-textarea>
        </yd-cell-item>
    </yd-cell-group>
         <yd-button type="primary">primary</yd-button>
        <yd-button type="danger">danger</yd-button>
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
        result: '',
        start1: false
      };
    },
    methods: {
      goBack () {
        this.$router.back();
      },
      // 验证码发送
      sendCode1 () {
        this.$dialog.loading.open('发送中...');
        setTimeout(() => {
          this.start1 = true;
          this.$dialog.loading.close();
          this.$dialog.toast({
            mes: '已发送',
            icon: 'success',
            timeout: 1500
          }, 1000);
        });
      }
    }
  };
</script>

<style lang="stylus">
@import '../base/css/detail'
</style>