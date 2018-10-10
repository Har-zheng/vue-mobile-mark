<template>
<div>
    <ul class="list">
        <li class="item"
        v-for="(items, key) of cities"
        :key="key"
        :ref="items.title"
        @touchstart="handleTouchStart"
        @touchmove = "handleTouchMove"
        @touchend = "handleTouchEnd"
        @click="handleLetterClick"
           >{{ items.title }}</li>
    </ul>
</div>

</template>
<script>
    export default {
        name: "CityAlphabet",
        props: {
            cities: Array
        },
        computed: {
            // letters() {
            //     const letters = [];
            // }
        },
        data (){
            return {
                touchStatus: false,
                startY: 0,
                timer: null
            }
        },
        methods: {
            handleLetterClick (e) {
                this.$emit('change', e.target.innerText);
            },
            handleTouchStart () {
                this.touchStatus = true
            },
            handleTouchMove (e) {
                if( this.touchStatus = true ){
                    if (this.timer){
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(()=> {
                        const startY = this.$refs['A'][0].offsetTop;
                        const touchY = e.touches[0].clientY - 79;
                        const index = Math.floor((touchY-startY) / 20);
                        if( index >= 0 && index < this.cities.length) {
                            this.$emit('change', this.cities[index].title);
                        }
                    }, 16);
                }
            },
            handleTouchEnd () {
                this.touchStatus = false
            }
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
