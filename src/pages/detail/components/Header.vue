<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <span class="iconfont header-abs-back">&#xe743;</span>
        </router-link>
        <div class="header-fixed-back" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-back">&#xe743;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data(){
        return {
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll:function(){
            const top = document.documentElement.scrollTop;
            if(top > 60){
                let opacity = top / 140;
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {
                    opacity
                }
                this.showAbs = false;
            }else{
                this.showAbs = true;
            }
        }
    },
    activated(){
        window.addEventListener('scroll',this.handleScroll);
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

    .header-abs
        position :absolute
        left 0.2rem
        top:.2rem
        width :.8rem
        height :.8rem
        border-radius :.4rem
        background :rgba(0,0,0,.8)
        text-align :center
        .header-abs-back
            color :#fff
            font-size 0.4rem
            line-height:.8rem
    .header-fixed-back
        position :fixed
        top:0
        left:0
        right:0
        height:$headerHeaght
        line-height :$headerHeaght
        text-align:center
        color :#fff
        background :$bgColor
        font-size :.32rem
        .header-back
            position:absolute
            top:0
            left:0
            width:0.64rem
            text-align:center
            font-size :0.4rem
            color:#fff
</style>