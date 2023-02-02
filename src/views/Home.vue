<template>
  <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <div class="siderbar">
          <SideBar></SideBar>
      </div>
      <div class="main-wrapper">
          <Header msg="Welcome to Your Vue.js App"/>
          <SettingBox></SettingBox>
          <Footer></Footer>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';
import SettingBox from '@/components/SettingBox.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'Home',
    components: {
        Header,
        SideBar,
        SettingBox,
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
</style>
