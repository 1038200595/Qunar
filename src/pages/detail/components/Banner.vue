<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="https://imgs.qunarzz.com/p/tts3/1709/41/becd3c7f9ee5a402.jpg_r_390x260x95_7bd04798.jpg"/>
            <div class="banner-info">
                <div class="banner-title">上海-泰国 6天4晚跟团游</div>
                <div class="banner-number">
                    <span class="iconfont back-icon banner-icon">&#xe69b;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'Banner',
    data(){
        return{
            showGallary:false,
            imgs:['https://imgs.qunarzz.com/vs_ceph_vs_tts/94998547-5efc-44ea-90b3-66c5cd6c0c46.jpg_r_390x260x90_20f66bbf.jpg','https://imgs.qunarzz.com/vs_ceph_vs_tts/57464b53-d00a-4b69-b9a5-a27e29155df7.jpg_r_390x260x90_7d5c68f4.jpg']
        }
    },
    methods:{
        handleBannerClick(){
            this.showGallary = true;
        },
        handleGallaryClose(){
            this.showGallary = false;
        }
    },
    components:{
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position :relative
        overflow :hidden
        height:0
        padding-bottom :55%
        .banner-img
            width:100%
        .banner-info
            display :flex
            position :absolute
            left :0
            right :0
            bottom:0
            line-height :.6rem
            color:#000
            background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.3))
            .banner-title
                font size 0.32rem
                flex:1
                padding:0 .2rem
            .banner-number
                margin-top :.14rem
                padding 0 .4rem
                line-height :.4rem
                height :.32rem
                border-radius :.2rem
                background :rgba(0,0,0,.2)
                font-size :.24rem
                .banner-icon
                    font-size :.24rem
</style>