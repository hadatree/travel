<template>
        <div>
            <city-header />
            <city-search :cities='cities'/>
            <city-list :cities='cities' :hot='hotCities' :letter='letter'/>
            <city-alphabet :cities='cities' @change='handlechange'/>
        </div>
    </template>
<script>
    import axios from 'axios'
    import CityHeader from './city/Header'
    import CitySearch from './city/Search'
    import CityList from './city/List'
    import CityAlphabet from './city/Alphabet'
    export default {
        name: "City",
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data() {
            return {
                cities: {},
                hotCities: [],
                letter: ''
            }
        },
        methods: {
            getcityinfo() {
                axios.get('/api/city.json').then(this.getcityinfoscc)
            },
            getcityinfoscc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.cities = data.cities
                    console.log(data.hotCities)
                    this.hotCities = data.hotCities

                }
            },
            handlechange(letter) {
                this.letter = letter
            }
        },
        mounted() {
            this.getcityinfo()
        }
    }
</script>
<style scoped>

</style>