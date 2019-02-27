<template>
    <div class="wraper">
        <swiper :options="swiperOption" >
                <!-- slides -->
                <swiper-slide v-for="item of swiperList" :key="item.id">
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
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList: [{
                    id: '0001',
                    imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/59e329fb916e2a30bb64f26f0279b307.jpg_750x200_5c24cc64.jpg'
                }, {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg'
                }]
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