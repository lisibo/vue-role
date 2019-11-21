<template>
  <div>
    <ul class="nav">
      <li v-for="(item,index) in routes" :key="index">
        <el-button v-if="item.meta && item.meta.btnPermission" v-permission="item.meta.btnPermission" @click="jump(item)">{{item.name}}</el-button>
        <el-button v-else @click="jump(item)">{{item.name}}</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
import permission from '@/directive/permission/index'
  export default {
    data() {
      return {
        routes:[
         
        ]
      };
    },
    created(){
      this.routes = this.$store.getters.permission_routes
      console.log(this.$store.getters.permission_routes)
    },
    methods: {
      jump(item){
        this.$router.push({path:item.path})
      }
    },
    directives:{
      permission
    }
  }
</script>
<style>
  .nav{
    display: flex;
    margin-bottom: 20px;
  }
  .nav li .el-button{
    margin:20px 20px 0 0;
  }
  .nav li:last-child{
    display: none;
  }
</style>