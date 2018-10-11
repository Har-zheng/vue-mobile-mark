<template>
<div>
    <div class="search">
        <input v-model="keyword"  class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
            <li class="search-item border-bottom" 
            v-for="item of list"
            :key="item.id"
            @click="handleCityClick( item.name )"
            >
                {{ item.name }}
            </li>
            <li class="search-item border-bottom" v-show="!list.length">
                没有搜索到
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'
    export default {
        name: "CitySearch",
        props: {
            cities: Object
        },
        data () { 
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        methods: {
            handleCityClick: function (city) {
                // this.$store.commit('changeCity', city); 简化  处理方式
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        computed: {
            hasNoData () {
                return !this.list.length
            }
        },
        watch: { //帧听器
            keyword () {
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if (!this.keyword){
                    this.list = [];
                    return
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for (let i in this.cities){
                        this.cities[i].forEach((value) => {
                            if (value.spell.indexOf(this.keyword) > -1 ||
                             value.name.indexOf(this.keyword) > -1){
                                 result.push(value)
                             }
                             
                        });
                    }
                    this.list = result
                },  100)
            }
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.search,{ mouseWheel: true, click: true, tap: true });
            console.log(this.$refs.search);
        }
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
    .search-content
        overflow hidden
        position absolute
        top 1.5rem
        right 0
        left 0
        bottom 0
        background #eee
        z-index 1
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            background #fff
            
</style>
