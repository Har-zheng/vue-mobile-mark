<template>
    <div>
        <div class="item" 
        v-for="(item, index) in List"
         :key="index">

            <div class="item-title">
                <span class="item-title-icon"></span>
                {{ item.title }}
            </div>
            <div v-if="item.children" class="item-children">
                <detall-List :List="item.children">
                    {{ item.children.title }}
                </detall-list>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: "DetallList",
    props: {
        List: Array
    }
}
</script>
<style lang="stylus" scoped>
.item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    position relative
    padding 0  0  0 .8rem 
.item-title-icon
    display: inline-block;
    position: absolute;
    width: .36rem;
    height: .36rem;
    top: .26rem;
    left: .2rem;
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
.item-children
    padding 0 .2rem
</style>
