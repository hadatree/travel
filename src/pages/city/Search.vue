<template>
    <div>
        <div class="search">
            <input type="text" placeholder="输入城市或拼音" class='searchinput' v-model='keyword'>
        </div>
        <div class="search-content" ref='search' v-show='keyword'>
            <ul>
                <li v-for='item in list' :key='item.id' class="search-item border-bottom" @click='handlecityclick(item.name)'>{{item.name}}</li>
                <li class="search-item border-bottom" v-show='hasnodata'>没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Bscroll from 'better-scroll'
    import {
        mapMutations
    } from 'vuex'
    export default {
        name: 'CitySearch',
        data() {
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        computed: {
            hasnodata() {
                return !this.list.length
            }
        },
        props: ['cities'],
        watch: {
            keyword() {
                if (this.timer) {
                    clearInterval(this.timer)
                }
                if (!this.keyword) {
                    this.list = []
                    return
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for (let i in this.cities) {
                        this.cities[i].forEach((value) => {
                            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                }, 100)
            }
        },
        methods: {
            handlecityclick(city) {
                this.changecity(city)
                this.$router.push("/")
            },
            ...mapMutations(['changecity'])
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.search)
        }
    }
</script>
<style lang='stylus' scoped>
    .search {
        height: .72rem;
        background: #00bcd4;
        padding: 0 .1rem
    }
    
    .searchinput {
        height: .62rem;
        line-height: .62rem;
        width: 100%;
        text-align: center;
        border-radius: .06rem;
        color: #666;
        padding: 0 .1rem;
        box-sizing: border-box
    }
    
    .search-content {
        overflow: hidden;
        position: absolute;
        top: 1.58rem;
        bottom: 0;
        left: 0;
        right: 0;
        background: #eee;
        z-index: 1;
    }
    
    .search-item {
        line-height: .62rem;
        padding-left: .2rem;
        color: #666;
        background: #fff;
    }
</style>