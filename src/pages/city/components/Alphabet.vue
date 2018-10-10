<template>
<div>
    <ul class="list">
        <li class="item" v-for="(items, index) of cities" :key="index">{{ items.title }}</li>
    </ul>
</div>

</template>
<script>
    export default {
        name: "CityAlphabet",
        props: {
            cities: Array
        }
    }
</script>
<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content  center
        position absolute
        top 1.58rem 
        right 0
        bottom 0
        width .4rem
        .item
            text-align center
            line-height .4rem
            color $bgColor
</style>
