<template>
<div>   
    <div class="banner" @click="handleBannerClick()">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" alt="">
        <div class="banner-info">
            <div class="banner-title">上海迪士尼乐园</div>
            <div class="banner-number banner-icon"><span class="iconfont">&#xe631;</span>视屏</div>
        </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
</div>
  
</template>
<script>
import CommonGallary from '../../../common/gallary/Gallary'
    export default {
        name: 'Banner',
        data () {
            
            return {
                showGallary: false,
                imgs: ['http://img1.qunarzz.com/qs/1809/f6/18a4edd3d78d1102.jpg'
                ]
            }
        },
        components: {
            CommonGallary
        },
        methods: {
            handleBannerClick () {
                console.log(this.showGallary)
                    this.showGallary = true;
                    console.log(this.showGallary)
            },
            handleGallaryClick () {
                    this.showGallary = false;
            }

        }
    }
</script>
<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #fff
        background-image  linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex 1
            font-size .32rem
            padding 0 .2rem
        .banner-number
            padding 0 .4rem
            line-height .32rem
            margin-top .14rem
            height .4rem
            border-radius .2rem
            background rgba(0,0,0,.8)
            font-size .24rem
        .banner-icon
            font-size .24rem
</style>

