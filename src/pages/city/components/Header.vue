<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe67c;</div>
        </router-link>
    </div>
</template>
<script>
    export default {
        name: "CityHeader"
    }
</script>
<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .header 
        position relative
        height $headerHeight
        line-height $headerHeight
        overflow hidden
        color  #fff
        text-align  center
        background $bgColor
        font-size .32rem
    .header-back
        position absolute
        width .64rem
        text-align center
        font-size .4rem
        top 0
        left 0
        color #fff
</style>
