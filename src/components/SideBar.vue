<template>
    <aside class="sidebar">
        <side-bar-fixed></side-bar-fixed>
        <side-bar-slide></side-bar-slide>
    </aside>
</template>

<script>
import SideBarFixed from '@/components/SideBarFixed.vue';
import SideBarSlide from '@/components/SideBarSlide.vue';

export default {
    name: 'SideBar',
    components: {
        SideBarFixed,
        SideBarSlide,
    },
};
</script>

<style scoped lang="scss">
    .sidebar {
        display: flex;
        height: 100vh;
        position: relative;
    }
    // .sidebar-fixed {
    //     width: 80px;
    //     background-color: #0052cc;
    //     color: #ffffff;
    // }
    // .sidebar-slider {
    //     width: 220px;
    //     background-color: #ddeaff;
    // }
    // .sidebar-slider-heading {
    //     height: 80px;
    //     background-color: #ffffff;
    // }
</style>
