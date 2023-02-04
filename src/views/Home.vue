<template>
  <div class="home">
      <side-bar-fixed></side-bar-fixed>
      <side-bar-slide></side-bar-slide>
      <div class="main-wrapper">
          <Header msg="Welcome to Your Vue.js App"/>
          <!-- <router-view></router-view> -->
          <Footer></Footer>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBarFixed from '@/components/SideBarFixed.vue';
import SideBarSlide from '@/components/SideBarSlide.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'Home',
    components: {
        SideBarFixed,
        SideBarSlide,
        Header,
        Footer,
    },
};
</script>

<style scoped lang="scss">
  .home {
      display: flex;
      height: 100%;
      position: relative;
  }
  .main-wrapper {
      width: 100%;
      min-height:100%;
  }
</style>
