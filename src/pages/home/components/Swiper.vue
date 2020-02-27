<template>
    <div class=wrapper>
        <swiper :options="swiperOption">
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
    data () {
      return {
        swiperOption: {
            pagination:'.swiper-pagination',
            loop:true
        },
        swiperList:[{
            id:'0001',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1812/5a/5a4129c70246ac2da3.img.jpg_600x330_b21708ee.jpg'
        },{
            id:'0002',
            imgUrl:'http://img1.qunarzz.com/sight/p0/2001/45/45ad86f7511c332ba3.img.jpg_600x330_f032b1de.jpg'
        },{
            id:'0003',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1603/87/87146cf32fa8635e90.water.png_600x330_54030989.png'
        }]
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