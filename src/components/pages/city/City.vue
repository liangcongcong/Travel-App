<template>
<div>
<city-header></city-header>
<city-search :cities="cities"></city-search>
<city-list :cities="cities" :hotcities="hotcities" :letter='letter'></city-list>
<city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
</div>
</template>

<script>
import CityHeader from './counts/Header.vue'
import CitySearch from './counts/Search.vue'
import CityList from './counts/List.vue'
import CityAlphabet from './counts/Alphabet.vue'
export default {
name:'City',
data(){
    return {
    cities:{},
    hotcities:[],
    letter:''
    }
},
methods:{
    handleLetterChange(letter){
        this.letter=letter
    // console.log(letter)
    },
getCityInfo(){
    this.$axios.get('/mock/city.json')
    .then(this.getCityInfoSucc)
},
getCityInfoSucc(res){
    res=res.data;
    if(res.ret&&res.data){
        const data=res.data
        this.cities=data.cities
        this.hotcities=data.hotCities
    }
    // console.log(res)
}
},
components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
},
mounted(){
    this.getCityInfo()
}
}
</script>

<style>

</style>
