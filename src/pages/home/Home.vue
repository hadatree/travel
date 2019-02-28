<template>
    <div>
       <HomeHeader :city="city" ></HomeHeader>
        <Swiper :list="swiperList"></Swiper>
        <Icons  :list="iconList" ></Icons>
        <Recommend :list="recommendList"></Recommend>
        <Weekend :list='weekendList'></Weekend>
    </div>
</template>

<script>
    import HomeHeader from './components/HomeHeader'
    import Swiper from './components/Swiper'
    import Icons from './components/Icons'
    import Recommend from './components/Recommend'
    import Weekend from './components/Weekend'
    import axios from 'axios'
    export default {
        name: 'Home',
        components: {
            HomeHeader,
            Swiper,
            Icons,
            Recommend,
            Weekend
        },
        data() {
            return {
                city: '',
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: []
            }
        },
        methods: {
            getHomeInfo() {
                axios.get('/api/index.json')
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                res = res.data;
                // console.log(res.data)
                if (res.ret && res.data) {
                    const data = res.data;
                    this.city = data.city;
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }

            }
        },
        mounted() {
            this.getHomeInfo()
        }
    }
</script>