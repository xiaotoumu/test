<template>
  <div>
    <div class="no_pass">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>名称</th>
            <th>电话</th>
            <th>身份证号</th>
            <th>业务类型</th>
            <th>编辑</th>
            <th>预览审核</th>
          </tr>
        </thead>
        <tbody> 
          <tr v-for="(items, index) in pages" :key="index">
            <td>{{items.name}}</td>
            <td>{{items.phone}}</td>
            <td>{{items.idr}}</td>
            <td>{{items.fd}}</td>
            <td> <router-link :to="{path:'/loan_detail'}">{{items.bj}}</router-link></td>
            <td> <router-link :to="{path:'/edit'}">{{items.yl}}</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      item: ''
    };
  },
  props: {
    pages: Array
  },

  methods: {
  }
};
</script>

<style lang="stylus">
@import '../base/css/executive' 
</style>
