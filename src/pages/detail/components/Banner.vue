<template>
<div>   
  <div class="banner" @click="handBannerClick">
        <img class="banner-img" :src="bannerImg" alt="">
        <div class="banner-info">
            <div class="banner-title">{{ sightName }}</div>
            <div class="banner-number banner-icon">
                <span class="iconfont">&#xe631;</span>视屏
                {{this.gallaryImgs.length}}
                </div>
        </div>
    </div>
    <fade-anmiation>
        <common-gallary :imgs="gallaryImgs" v-show="gallaryshow" @close="handGallaryClick"></common-gallary>
    </fade-anmiation>
</div>
</template>
<script>
import CommonGallary from '../../../common/gallary/Gallary'
import FadeAnmiation from '../../../common/fade/fade'
  export default {
        name: 'Banner',
        props: {
            sightName: String,
            bannerImg: String,
            gallaryImgs: Array
        },
        data () {
            return {
                gallaryshow: false
            }
        },
        components: {
            CommonGallary,
            FadeAnmiation
        },
        methods: {
            handBannerClick () {
                this.gallaryshow = true;
            },
            handGallaryClick () {
                console.log('123')
                this.gallaryshow = false;
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

