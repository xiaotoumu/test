<template>
  <div class="business">
    <div class="business_page">
       <i class="iconfont icon-fanhui" @click="goBack"></i>
       贷款业务
    </div>
    <div class="loan_page">贷前业务</div>
        <tables></tables>
    <BackTop></BackTop>
</div>
</template>
<script>
import Tables from 'components/table';
import BackTop from 'components/backtop';
import axios from 'axios';
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
      axios.get(`/index/List`).then((res) => {
        this.pages = res.data.list;
      });
    }
  }
};
</script>

<style lang="stylus">
.business
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
        padding 2px
        text-align center
        border 1px solid #ccc
        vertical-align middle
        word-break break-all
        word-wrap break-word
        a
          text-decoration none     
</style>
