<template>
    <div class="home">
        <Header></Header>
        <div class="main-wrapper">
            <SideBar></SideBar>
            <svg-icon iconClass="menu"></svg-icon>
            <router-view></router-view>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'Home',
    components: {
        SideBar,
        Header,
        Footer,
    },
};
</script>

<style scoped lang="scss">
  .home {
      position: relative;
  }
  .main-wrapper {
      width: 100%;
      min-height:100%;
      display: flex;
  }
</style>
