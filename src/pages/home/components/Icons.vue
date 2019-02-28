<template>
    <div class="icons">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(page,index) in pages"  :key="index">
                    <div class="icon" v-for="item of page" >
                        <div class="icon-img">
                            <img class="icon-img-content" :src="item.imgUrl" alt="">
                        </div>
                        <p class="icon-desc">{{item.desc}}</p>
                    </div>
                </swiper-slide>                            
         </swiper>
    </div>

</template>
<script>
    export default {
        name: 'HomeIcons',
        props: ['list'],
        data() {
            return {
                swiperOption: {
                    autoplay: false,
                },

            }
        },
        computed: {
            pages() {
                const pages = []
                this.list.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item);

                })
                return pages
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .icons>>>.swiper-container {
        height: 0;
        padding-bottom: 50%;
    }
    
    .icons {
        margin-top: 0.1rem;
    }
    
    .icons .icon {
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        padding-bottom: 25%;
        height: 0;
    }
    
    .icons .icon .icon-img {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: .44rem;
        box-sizing: border-box;
        padding: 0.1rem
    }
    
    .icon-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
    }
    
    .icon-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 0.44rem;
        height: 0.44rem;
        color: #333;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }
</style>