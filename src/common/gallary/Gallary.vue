<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper swiper-containerr" :swiperOptions="swiperOptions">
                <swiper>
        <!-- slides
                        swiperList:[{
                    id: '001',
                    imgUrl: 'http://img1.qunarzz.com/qs/1808/4d/077b11817a69b102.jpg'
                },{
                    id: '002',
                    imgUrl 'http://img1.qunarzz.com/qs/1809/f6/18a4edd3d78d1102.jpg'
                }] -->
            <!-- <swiper-slide  v-for=" (item, index) of list" :key="index"> -->
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="swiper-img gallary" :src="item"/>
                </swiper-slide>
            <!-- </swiper-slide> -->
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        </div>
    </div>
</template>
<script>
    export default{
        name: "CommonGallary",
        props: {
            imgs: {
                type: Array
            }
        },
        data () {
            return {
                swiperOptions: {
                    pagination: '.swiper-options',
                    paginationType: 'fraction',
                    observer:true,
                    observeParents:true,
                }
            }
        },
        methods: {
            handleGallaryClick () {
                // console.log('123')
                this.$emit('close');
            }
        }
    }
</script>
<style lang="stylus" scoped>
// .container >>> .swiper-container
//     overflow invert
    .container
        display flex  
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        left  0
        right 0
        top 0
        bottom 0
        background #333
        .wrapper
            background #fff
            overflow hidden
            height 0
            width 100%
            padding-bottom  100%
            .gallary-img
                width 100%
            .swiper-img
                width 100%
            .swiper-pagination
                color #ffff
                bottom -1rem
</style>
