<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: "Home",
  components: {
    HomeHeader:()=> import('./components/Header'),  //异步组件按需加载
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return{
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
      console.log(res);
    }
  },
  mounted(){
    this.lastCity = this.city;
    // console.log('mounted');
    this.getHomeInfo();
  },
  activated(){  //重新回到该页面时会执行，解决<keep-alive></keep-alive>缓存，当确定点击城市时，可以重新获取接口以便实时更新当前页面的推荐内容
    // console.log('activated');
    if(this.lastCity !== this.city){
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>

<style>

</style>