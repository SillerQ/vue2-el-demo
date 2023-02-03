<template>
    <aside class="sidebar-fixed">
        <div class="logo"></div>
        <router-link to="productsview">
            <i class="el-icon-menu"></i>
            <div class="sidebar-btn">产品服务</div>
        </router-link>
        <router-link to="ordermanagementview">
            <i class="el-icon-s-order"></i>
            <div class="sidebar-btn">订单管理</div>
        </router-link>
    </aside>
</template>

<script>
export default {
    name: 'SideBarFixed',
};
</script>

<style scoped lang="scss">
    .sidebar-fixed {
        width: 80px;
        background-color: #0763ee;
        color: #ffffff;
        a {
            display: block;
            text-align: center;
            color: #ffffff;
            i {
                font-size: 24px;
            }
        }
    }
    .sidebar-btn {

    }
</style>
