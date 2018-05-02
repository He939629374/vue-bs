<template>
  <div class="app-wrapper" >
    <!-- <sidebar class="sidebar-container"></sidebar> -->
    <el-aside class="sidebar-container scroll-container"></el-aside>
    <div class="main-container">
      <!-- <navbar></navbar> -->
      <!-- <tags-view></tags-view> -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
