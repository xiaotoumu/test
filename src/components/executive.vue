<template>
  <div class="executive">
    <yd-navbar title="贷款人详细信息">
      <a @click="goBack" slot="left">
          <yd-navbar-back-icon>返回</yd-navbar-back-icon>
      </a>
    </yd-navbar>
    <div class="input-group-addon">业务审核列表</div>
    <div class="no_inline">
      <div class="form-group">
        <input type="text" class="form-control" id="exampleInputEmail2" placeholder="查询相关业务信息">
        <button type="submit" class="btn btn-default">搜索</button>
      </div>
    </div>
    <tables></tables>
    <BackTop></BackTop>
  </div>
</template>

<script>
import BackTop from 'components/backtop';
import Tables from 'components/table';
export default {
  data () {
    return {
      pages: ''
    };
  },
  components: {
    BackTop,
    Tables
  },
  methods: {
    goBack () {
      this.$router.back();
    }
  }
};
</script>

<style lang="stylus">
@import '../base/css/executive' 
</style>
