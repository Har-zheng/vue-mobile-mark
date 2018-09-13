<template>
    <div class="recommend">
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="(item, index) of recommendList" :key="index">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>    
                    
                <div class="item-info">
                    <p class="ietm-title">{{ item.title }}</p>
                    <p class="item-desc"><span class="mp-comment-num">{{ item.desc }}</span></p>
                </div>

            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name: "HomeWeekend",
        data () {
            return {
                recommendList: [{
                    id: '001',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                    title: '北京欢乐谷',
                    desc: '59005条评论'
                },{
                    id: '002',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                    title: '北京欢乐谷',
                    desc: '59005条评论'
                },{
                    id: '003',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                    title: '北京欢乐谷',
                    desc: '59005条评论'
                },{
                    id: '004',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                    title: '北京欢乐谷',
                    desc: '59005条评论'
                }]
            }
            
        }
    }
</script>
<style lang="stylus" scoped>
    @import  '~@/assets/styles/mixins.styl'
    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 33.9%
        .item-img
            width 100%
    .item-info
        flex 1
        padding .1rem
        min-width 0
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis ()
        .item-desc
            line-height .4rem
            color #ccc
            font-size .12rem
</style>