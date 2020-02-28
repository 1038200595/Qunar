<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title" v-text="item.title"></p>
                    <p class="item-desc" v-text="item.desc"></p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    data(){
        return {
            recommendList:[{
                id:'0001',
                imgUrl:'https://imgs.qunarzz.com/p/tts4/1809/9d/f8db3b5cb0007702.jpg_r_480x320x90_2f6b0821.jpg',
                title:'上海-名古屋 5天自由行',
                desc:'【自由行】确认后100%出行🎉赠一晚酒店💕上海🛫名古屋5-7日自由行🎁代办签证 '
            },{
                id:'0002',
                imgUrl:'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg',
                title:'带娃出游，疲累与幸福同行',
                desc:'厦门 ☆ 这里很美，而我们正好有空~'
            },{
                id:'0003',
                imgUrl:'https://img1.qunarzz.com/sight/p0/1905/44/44c6db1f35f281f6a3.water.jpg_256x160_249fdf75.jpg',
                title:'横店影视城5A景区',
                desc:'浙江省金华东阳市横店镇横店影视城'
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
    .item
        overflow :hidden
        display :flex
        height :1.9rem
        .item-img
            width :1.7rem
            height :1.7rem
            padding :.1rem
        .item-info
            flex:1
            padding :.1rem
            min-width :0
            .item-title
                line-height :.54rem
                font-size :.32rem
                ellipsis()
            .item-desc
                line-height :.4rem
                color :#ccc
                ellipsis()
            .item-button
                line-height :.44rem
                margin-top:.16rem
                background :#ff9300
                padding :0 .2rem
                border-radius :.06rem
</style>