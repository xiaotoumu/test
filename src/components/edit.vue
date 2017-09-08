<template>
  <div class="loan_detail">
       <yd-navbar title="贷款人详细信息"  bgcolor="rgba(0,102,153,0.78)" color="#fff">
      <a @click="goBack"  slot="left">
          <yd-navbar-back-icon color="#fff"></yd-navbar-back-icon>
      </a>
    </yd-navbar>
      <div>
        <div class="yd-grids-2">
          <div class="yd-grids-item">
            <div class="yd-grids-txt">
              <span>真实姓名：</span>
            </div>
          </div>
          <div class="yd-grids-item" >
            <div class="yd-grids-txt">
              <span>{{pages.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="yd-grids-2">
          <div class="yd-grids-item">
            <div class="yd-grids-txt">
              <span>手机号码：</span>
            </div>
          </div>
          <div class="yd-grids-item" >
            <div class="yd-grids-txt">
              <span>{{pages.phone}}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="yd-grids-2">
          <div class="yd-grids-item">
            <div class="yd-grids-txt">
              <span>身份证号：</span>
            </div>
          </div>
          <div class="yd-grids-item" >
            <div class="yd-grids-txt">
              <span>{{pages.idr}}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="yd-grids-2">
          <div class="yd-grids-item">
            <div class="yd-grids-txt">
              <span>业务类型：</span>
            </div>
          </div>
          <div class="yd-grids-item" >
            <div class="yd-grids-txt">
              <span>{{pages.fd}}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="yd-grids-2">
          <div class="yd-grids-item">
            <div class="yd-grids-txt">
              <span>证件照片：</span>
            </div>
          </div>
          <div class="yd-grids-item" >
            <div class="yd-grids-txt">
              <img :src="pages.img">
            </div>
          </div>
        </div>
      </div>
       <yd-button size="large" bgcolor="rgba(0,102,153,0.78)" color="#fff" type="primary">保存并通过</yd-button>
  </div> 
</template>

<script>
  import axios from 'axios';
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
        pages: ''
      };
    },
    created () {
      this.getDate();
    },
    methods: {
      goBack () {
        this.$router.back(); //  返回上一级
      },
      getDate () {
        axios.get(`/index/edit`).then((res) => {
          this.pages = res.data.list;
          console.log(this.pages);
        });
      }
    }
  };
</script>

<style lang="stylus">
 @import '../base/css/detail'
</style>
