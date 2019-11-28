<template>
  <div>
    bbb
    <el-button v-permission="['hbr']">hbr按钮</el-button>
    <lsb-menu></lsb-menu>
    <router-view></router-view>
  </div>
</template>
<script>
import lsbmMenu from '@/components/menu/index.vue'
import permission from '@/directive/permission/index'
export default {
  data(){
    return {
      
    }
  },
  created(){
    console.log(this.$router.options)
  },
  directives:{
    permission
  },
  components:{
    'lsb-menu':lsbmMenu
  }
}
</script>