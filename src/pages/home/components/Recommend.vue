<template>
    <div>
        <div class="title">热销推荐</div>
    
    <ul>
        <li  class="item border-bottom" v-for="item of list" :key="item.id">
            <img class="item-img" :src="item.imgUrl" />
            <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
    </div>

</template>
<script>
    export default {
        name: 'HomeRecommend',
        props: ['list'],
        data() {
            return {

            }
        }
    }
</script>
<style lang="stylus" scoped>
    .title {
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
        margin-top: .2rem
    }
    
    .item {
        display: flex;
        overflow: hidden;
        height: 1.9rem;
    }
    
    .item-img {
        height: 1.7rem;
        width: 1.7rem;
        padding: 0.1rem
    }
    
    .item-info {
        flex: 1;
        padding: 0.1rem;
        min-width: 0
    }
    
    .item-info .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }
    
    .item-info .item-desc {
        line-height: 0.4rem;
        color: #ccc;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }
    
    .item-info .item-button {
        background: #ff9300;
        padding: 0 .1rem;
        border-radius: 0.06rem;
        margin-top: 0.16rem;
        color: #fff;
        line-height: 0.44rem;
        text-align: center;
        font-size: 0.1rem
    }
</style>