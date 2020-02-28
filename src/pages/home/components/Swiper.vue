<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>


<script>
export default {
    name:'HomeSwiper',
    props:{
        swiperList:Array
    },
    data () {
      return {
        swiperOption: {
            pagination:'.swiper-pagination',
            loop:true
        }
      }
    },
    computed:{
        showSwiper(){
            return this.swiperList.length
        }
    }
}
</script>

<style lang="stylus" scoped>    //scoped只会对当前页面的样式改变
.wrapper >>> .swiper-pagination-bullet-active    //穿透，不受scoped限制
    background :white!important
.wrapper
    width :100%
    height :0
    overflow hidden
    padding-bottom :31.25% 
    background :#eee
    .swiper-img
        width :100%
        height 2.5rem
</style>