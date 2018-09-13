<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe67c;</span>
        </div>
        <div class="header-input">
        <span class="iconfont">&#xe631;</span>
        输入城市/景点/游玩主题
        </div>
        <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe600;</span>
        </div>
    </div>
</template>
<script>
    export default{
        name: "HomeHeader",
        props: {
            city: String
        }
    }
</script>
<style lang="stylus" scoped>
    @import  '~@/assets/styles/varibles.styl'
    .header
        display flex
        line-height .86rem
        background $bgColor
        color #fff
        .header-left
            width .64rem
            float left
        .header-input
            flex 1
            height .64rem
            background #fff
            margin-top .12rem
            border-radius .1rem
            color #ccc
            line-height .64rem
        .header-right
            width 1.24rem
            float right
            text-align center
            .arrow-icon
                font-size .24rem
                margin-left -2px
</style>