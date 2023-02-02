<template>
  <div id="app">
    <!-- <nav> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </nav> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'PingFang HK',
        'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Microsoft YaHei', '微软雅黑', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
