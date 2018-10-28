<template>
    <div>    
        <detail-header></detail-header>
        <detail-banner></detail-banner>
        <div class="content"></div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import  DetailBanner from './components/Banner';
import DetailHeader from './components/Header';
    export default {
        name: 'Detail',
        components: {
            DetailBanner,
            DetailHeader
        },
        watch: {
            // const element = this.$refs[detall][0],
            // this.scroll.scrollToElement(element)
        },
        mounted () {
            // this.scroll.scrollToElement(element);
            // this.scroll = new Bscroll(this.$refs.detall,{ mouseWheel: true, click: true, tap: true })
            
        }
    }
</script>
<style lang="stylus" scoped>
.content
    height 50rem
</style>

