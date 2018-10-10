<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list
        :cities="cities"
        :hot="hotCities"
        :letter="letter"
        @change="handleLetterChange"
        ></city-list>
<<<<<<< HEAD
        <city-alphabet :cities="cities"></city-alphabet>
=======
        <city-alphabet 
        :cities="cities"
        @change="handleLetterChange"
        ></city-alphabet>
>>>>>>> city-components
    </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

    export default {
        name: "City",
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data (){
            return{
                cities:[],
                hotCities:[],
                letter: null
            }
        },
        methods: {
            getCityInfo () {
                axios.get('/static/city')
                .then(this.handleGetCityInfo)
            },
            handleGetCityInfo (res) {
               res = res.data
               console.log(res);
               if(res.ret && res.data){
                   const data = res.data
                   this.cities = data.cities
                   this.hotCities = data.hotCities
               }
            },
            handleLetterChange (letter) {
<<<<<<< HEAD
                this.letter = letter
=======
                this.letter = letter;
                console.log(this.letter)
>>>>>>> city-components
            }
        },
        mounted () {
            this.getCityInfo()
        }
    }
</script>
<style lang="stylus" scoped>

</style>
