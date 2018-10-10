<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>
<script>
    export default {
        name: "CitySearch",
    }
</script>
<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .search
        height .72rem
        background $bgColor
        padding 0 .1rem
        .search-input
            height .62rem
            line-height .62rem
            width 100%
            text-align center
            border-radius  .06rem
            color #666666
            padding 0 .1rem
            box-sizing border-box
</style>
