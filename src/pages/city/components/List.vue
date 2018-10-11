<template>
    <div class="list" ref="wrapper">
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                     <div class="button">{{this.currentCity}}</div> 
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" 
                v-for="item of hot"
                 :key="item.id"
                 @click="handleCityClick( item.name )"
                  >
                    <div class="button"> {{ item.name }} </div> 
                </div> 
            </div>
        </div>
        <div class="area"
         v-for="(itcities,key) of cities" 
         :key="key" 
         :ref="key"
         >
            <div class="title border-topbottom">{{ key }}</div>
            <div class="item-list">
                    <div class="item bordet-bottom"
                     v-for="arrayItem in itcities" 
                     :key="arrayItem.id"
                     @click="handleCityClick( arrayItem.name )"
                     > {{ arrayItem.name }}</div>
                </div> 
        </div>
       </div>
    </div>
</template>
<script>
    import Bscroll from 'better-scroll';
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "CityList",
        props: {
            hot: Array,
            cities: Object,
            letter: String
        },
        methods: {
            handleCityClick: function (city) {
                // this.$store.commit('changeCity', city); 简化  处理方式
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        watch: { //帧听器
            letter () {
                if (this.letter) {
                    const element = this.$refs[this.letter][0];
                    this.scroll.scrollToElement(element);
                }
            }
        },
        computed: {
            ...mapState({
                currentCity: 'city'
            })
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.wrapper,{ mouseWheel: true, click: true, tap: true })
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
