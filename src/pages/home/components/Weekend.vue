<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>

                <div class="item-info">
                    <p class="item-title" v-text="item.title"></p>
                    <p class="item-desc" v-text="item.desc"></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    data(){
        return {
            recommendList:[{
                id:'0001',
                imgUrl:'https://imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg',
                title:'上海-名古屋 5天自由行',
                desc:'【自由行】确认后100%出行🎉赠一晚酒店💕上海🛫名古屋5-7日自由行🎁代办签证 '
            },{
                id:'0002',
                imgUrl:'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg',
                title:'不负嵊夏好时光，泗乎太安逸',
                desc:'世界上最远的距离就是，你知道嵊泗近在咫尺'
            },{
                id:'0003',
                imgUrl:'https://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg',
                title:'瓯江古埠传渔歌，丽水源头藏画乡',
                desc:'瓯江上有渔歌， 樟树 下有桃花酒，住在有江风的小木楼，看一行白鹭，载来了我的乡愁。'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        margin-top :.2rem
        line-height :.8rem
        background :#eee
        text-indent :.2rem
    .item-img-wrapper
        overflow :hidden
        height:0
        padding-bottom:33.9%
        .item-img
            width :100%
    .item-info
        padding :.1rem
        .item-title
            line-height :.54rem
            font-size :.32rem
            ellipsis()
        .item-desc
            line-height :.4rem
            color :#ccc
            ellipsis()
</style>