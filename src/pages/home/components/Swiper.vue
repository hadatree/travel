<template>
    <div class="wraper">
        <swiper :options="swiperOption" v-if="list.length" >
                <!-- slides -->
                <swiper-slide data-swiper-autoplay="3000" v-for="item of list" :key="item.id">
                    <img class="swiper-img" :src="item.imgUrl" />
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
     </div>
</template>

<script>
    export default {
        name: 'Homedswiper',
        props: {
            list: Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                    autoplay: true,
                },

            }
        }
    }
</script>
<style lang="stylus" scoped>
    .wraper>>>.swiper-pagination-bullet-active {
        background: #fff
    }
    
    .wraper {
        overflow: hidden;
        width: 100%;
        background: #eee;
    }
    
    .wraper .swiper-img {
        width: 100%;
    }
</style>