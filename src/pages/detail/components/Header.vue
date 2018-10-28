<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <span class="iconfont back-icon">&#xe67c;</span>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点选择
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe67c;</div>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default{
        name: "DetailHeader",
        data () {
            return {
               showAbs: true,
               opacityStyle: {
                   opacity: 0
               }
            }
        },
        methods: {
            handScroll () {
                console.log('scroll')
                const top = document.documentElement.scrollTop;
                if (top > 60 && top < 140 ) {
                    let opacity = top/140;
                    opacity = opacity > 1 ? 1 : opacity; 
                    this.opacityStyle = {
                        opacity
                    }
                    this.showAbs = false;
                } else if(top < 60){ 
                    this.showAbs =true;
                }
            }
        },
        activated () {
            window.addEventListener('scroll',this.handScroll)
        },
        deactivated () {
            window.removeEventListener('scroll', this.handScroll)
        }
    }
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    background rgba(0,0,0,0.6)
    z-index 99
    span 
        position absolute
        top 50%
        margin-top -8px
        transform translate(50%)
        color #fff
.header-fixed 
    z-index 99
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    color  #fff
    text-align  center
    background $bgColor
    font-size .32rem
    text-align center
.header-fixed-back
    position absolute
    width .64rem
    text-align center
    font-size .4rem
    top 0
    left 0
    color #fff
</style>
