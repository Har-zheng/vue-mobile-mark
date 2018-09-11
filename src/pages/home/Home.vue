<template>
    <div>
        <div class="home">home</div>
        <router-link to="/list">列表页</router-link>
    </div>
</template>
<script>
    export default {
        name: "Home"
    }
</script>
<style lang="stylus">
*
    font-size 12px
    .home
        font-size 2rem
</style>