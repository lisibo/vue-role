<template>
  <div class="permission-warp">
    <lsb-menu></lsb-menu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import lsbmMenu from '@/components/menu/index.vue'
export default {
  created(){
    
    
  },
  components:{
    "lsb-menu":lsbmMenu
  }
};
</script>
<style>
.permission-warp{
  display: flex;
}
</style>
