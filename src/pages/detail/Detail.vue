<template>
    <div>    
        <detail-header></detail-header>
        <detail-banner 
        :sightName="sightName"
         :bannerImg="bannerImg"
         :gallaryImgs="gallaryImgs"
         ></detail-banner>
        <detail-list :List="list"></detail-list>
        <div class="content"></div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import  DetailBanner from './components/Banner';
import DetailHeader from './components/Header';
import DetailList from './components/List';
import axios from 'axios'
    export default {
        name: 'Detail',
        data () {
            return {
                sightName: '',
                bannerImg: '',
                gallaryImgs: [],
                list: []
            }

        },
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        mounted () {
            this.geDetailInfo();
        },
        methods: {
            geDetailInfo () {
                axios.get('/static/mock/detall',
                {params:{
                    id: this.$route.params.id}}).then(this.handleGetDataSucc)
                .catch(function(error) {
                    console.log(error)
                })
            },
            handleGetDataSucc ( res ) {
                res = res.data
                if(res.ret && res.data) {
                    const data = res.data
                    this.sightName = data.sightName;
                    this.bannerImg = data.bannerImg;
                    this.gallaryImgs = data.gallaryImgs;
                    this.list = data.categoryList;
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
.content
    height 50rem
</style>

