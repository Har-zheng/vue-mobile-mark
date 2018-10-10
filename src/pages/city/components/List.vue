<template>
    <div class="list" ref="wrapper">
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div><div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div><div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div><div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div><div class="button-wrapper">
                        <div class="button">北京</div> 
                    </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="(item, index) of hot" :key="index" >
                    <div class="button"> {{ item }} </div> 
                </div> 
            </div>
        </div>
        <div class="area"
         v-for="(itcities,index) of cities" 
         :key="index" 
         :ref="itcities.title"
         >
            <div class="title border-topbottom">{{ itcities.title }}</div>
            <div class="item-list">
                    <div class="item bordet-bottom " v-for="(itcity,index) of itcities.lists" :key="index"> {{ itcity }}</div>
                </div> 
        </div>
       </div>
    </div>
</template>
<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "CityList",
        props: {
            hot: Array,
            cities: Array,
            letter: String
            },
        mounted() {
            // var wrapper = document.querySelector('.list')
            // let scroll = new Bscroll(wrapper)
            this.scroll = new Bscroll(this.$refs.wrapper)
        },
        watch: {
            letter () {
                if (this.letter) {
                    const element = this.$refs[this.letter][0];
                    this.scroll.scrollToElement(element);
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .bordet-bottom
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            line-height .44rem
            background #eeeeee
            padding-left  .2rem
            color #666
            font-size .26rem
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                width 33.33%
                float left
                .button
                    margin .1rem
                    padding  .1rem
                    text-align center
                    border .02rem solid #ccc
                    border-radius 0.06rem
        .item-list
            .item
                line-height .76rem
                padding-left .2rem
</style>
