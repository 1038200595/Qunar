<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <!--添加<keep-alive exclude="Detail">  
      除了Detail组件不会被缓存，别的都会被缓存--因为点击详情页的时候需要把id传入并重新获取详情
      多了keep-alive后，多了两个生命周期钩子函数activated和deactivated,也可以在这两个钩子函数做修改
    -->
    <keep-alive exclude="Detail">  
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>

</style>
