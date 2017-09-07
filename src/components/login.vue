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
  @import "../base/css/login"
</style>


