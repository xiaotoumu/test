<template>
  <div class="executive">
    <yd-navbar title="贷款人详细信息" bgcolor="rgba(0,102,153,0.78)" color="#fff">
      <a @click="goBack" slot="left">
          <yd-navbar-back-icon  color="#fff"></yd-navbar-back-icon>
      </a>
    </yd-navbar>
    <div class="List">
      <button class="yd-btn bg"  type="primary"  @click="getList">业务信息列表</button>
      <button class="yd-btn bg"  type="primary"  @click="getDateTo">信息打回列表</button>
      <button class="yd-btn bg"  type="primary"  @click="getHou">贷后业务列表</button>
      </div>
    <div class="no_inline">
      <div class="form-group">
        <input type="text" class="form-control" id="exampleInputEmail2" placeholder="查询相关业务信息">
        <button type="submit" class="btn btn-default">搜索</button>
      </div>
    </div>
    <tables class="tables" :pages="pages"></tables>
    <div class="loading-container" v-show="!pages.length">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import Tables from 'components/table';
import Loading from 'components/loading';
import axios from 'axios';
export default {
  data () {
    return {
      pages: [],
      loading: false
    };
  },
  components: {
    Tables,
    loading: Loading
  },
  created () {
    this.$nextTick(() => {
      this.getList();
    });
  },
  methods: {
    goBack () {
      this.$router.back();
    },
    getDateTo () {
      this.loading = true;
      axios.get(`/index/no_pass`).then((res) => {
        this.pages = res.data.list;
        this.loading = false;
      });
    },
    getDate () {
      this.loading = true;
      axios.get(`/index/pass`).then((res) => {
        this.pages = res.data.list;
        this.loading = false;
      });
    },
    getList () {
      this.loading = true;
      axios.get(`/index/pass`).then((res) => {
        this.pages = res.data.list;
        this.loading = false;
      });
    },
    getHou () {
      this.loading = true;
      axios.get(`/index/daihou`).then((res) => {
        this.pages = res.data.list;
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="stylus">
@import '../base/css/executive' 
.loading-container
  position: absolute
  width: 100%
  top: 50%
  transform: translateY(-50%)
  
</style>
