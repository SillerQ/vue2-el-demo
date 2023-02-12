<template>
    <nav class="nav css-1cychdt">
        <div class="nav-left">LOGO</div>
        <div class="nav-right">
            <router-link to="signin">登录</router-link>
            <router-link to="signup">注册</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    props: {
        msg: String,
    },
};
</script>

<style scoped lang="scss">
    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
        width: 100%;
        position: relative;
        background: #ffffff;
        .nav-left {}
        .nav-right {}
    }
    .css-1cychdt::after {
        height: 4px;
        position: absolute;
        top: 100%;
        right: 0px;
        left: 0px;
        background: linear-gradient(rgba(9, 30, 66, 0.13) 0px, rgba(9, 30, 66, 0.13) 1px, rgba(9, 30, 66, 0.08) 1px, rgba(9, 30, 66, 0) 4px);
        content: "";
    }
    // .css-1sjc3tg {
    //     background: linear-gradient(to left, rgba(0, 0, 0, 0.2) 0px, rgba(0, 0, 0, 0.2) 1px, rgba(0, 0, 0, 0.1) 1px, rgba(0, 0, 0, 0) 100%);
    //     bottom: 0px;
    //     left: -3px;
    //     opacity: 0.5;
    //     pointer-events: none;
    //     position: absolute;
    //     top: 0px;
    //     transition-duration: 0.22s;
    //     transition-property: left, opacity, width;
    //     transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
    //     width: 3px;
    // }
</style>
