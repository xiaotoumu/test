<template>
    <div class="login">
        <div class="login_page">用户登录</div>
        <div class="login_image">
            <img src="http://www.easyicon.net/api/resizeApi.php?id=1206721&size=128" />
        </div>
        <div class="login_in">
            <input type="text" placeholder="username" class="login_username">
            <input type="password" placeholder="password" class="login_passowrd">
            <router-link class="login_up" :to="{path: '/executive'}">登录</router-link>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
  }
};
</script>
<style lang="stylus">
   .login_page
    text-align center
    line-height 1.25rem
    background rgba(0, 102, 153 , 0.78)
    height 1.25rem
    font-size 16px
    color #fff
   .login_image
     height 220px
     text-align center
     margin 1rem
   .login_in
      text-align center
      input
        padding .6rem
        height .9375rem
        border-radius .125rem
        width 90% 
        border 1px solid #ccc
        font-size 16px
        margin-bottom .3125rem
      .login_up
        display block 
        text-decoration none
        cursor pointer  
        color #fff
        background rgba(0, 102, 153, 0.78)
        width 90%
        margin .5rem
        height 1.075rem
        border-radius .125rem
        line-height  1.075rem
        font-size 16px
</style>


