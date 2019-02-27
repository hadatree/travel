<template>
    <div>
       <HomeHeader></HomeHeader>
        <Swiper></Swiper>

    </div>
</template>

<script>
    import HomeHeader from './components/HomeHeader'
    import Swiper from './components/Swiper'
    export default {
        name: 'Home',
        components: {
            HomeHeader,
            Swiper
        }
    }
</script>