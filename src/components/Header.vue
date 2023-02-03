<template>
    <nav>Header
        <router-link to="signin">登录</router-link>
        <router-link to="signup">注册</router-link>
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
    nav {
        min-height: 56px;
        width: 100%;
        background: rgb(204, 226, 233);
    }
</style>
