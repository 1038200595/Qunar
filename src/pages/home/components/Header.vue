<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe743;</div>  
    </div>
    <div class=header-input><span class="iconfont back-icon">&#xe7b3;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <!-- {{this.doubleCity}} -->
        <span class="iconfont back-icon">&#xe7b2;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: "HomeHeader",
  computed:{
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
};
</script>

<style lang="stylus" scoped>
// 在样式中引入自定义的样式，需要在@符号前加～，其中@符表示src目录：@import '~@/assets/styles/varibles.styl';
// 在webpack.base.conf.js中自定义别名：'styles':resolve('src/assets/styles')  设置完webpack之后，需要重新运行项目
@import '~styles/varibles.styl';
  .header
    display:flex
    line-height:$headerHeaght
    background :$bgColor
    color:#fff
    .back-icon
      text-align:center
      font-size:.4rem
    .header-left
      width:.64rem
      float:left
    .header-input
      flex:1
      height:.64rem
      line-height:.64rem
      margin-top:.12rem
      margin-right:.2rem
      padding-left:.2rem
      background:#fff
      border-radius .1rem
      color:#ccc
    .header-right
      min-width:1.04rem
      float:right
      text-align:center
      color:#fff
</style>