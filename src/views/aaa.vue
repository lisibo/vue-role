<template>
  <div>
    aaa
    <div>
      <el-button v-permission="['admin','lsb']" @click="eee">eee</el-button>
    </div>

    <div class="btn-permission">
      <el-button v-permission="['admin','lsb']">lsb按钮</el-button>
    </div>

    <div class="btn-permission">
      <el-button v-permission="['admin','hbr']">hbr按钮</el-button>
    </div>

    <div class="btn-permission">
      <el-button v-permission="['admin','lsb','hbr']">lsb,hbr双权限按钮</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import permission from '@/directive/permission/index'
export default {
  data(){
    return {
      
    }
  },
  methods:{
    eee(){
      this.$router.push('/aaa/eee')
    }
  },
  directives:{
    permission
  }
}
</script>