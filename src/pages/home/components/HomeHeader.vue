<template>
  <div class="h">
    <div class="hl">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="hi">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
        <div class="hr">
      {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
     </router-link>
  </div>
</template>

<script>
    export default {
        name: 'HomeHeader',


    }
</script>

<style lang="stylus" scoped>
    /* @import '~styles/varibles.styl'; */
    
    .h {
        line-height: .86rem;
        background: #00bcd4;
        color: #fff;
        display: flex
    }
    
    .h .hl {
        width: .64rem;
        float: left;
    }
    
    .h .hl .back-icon {
        text-align: center;
        font-size: .4rem;
    }
    
    .h .hi {
        height: .64rem;
        line-height: .64rem;
        margin-top: .12rem;
        margin-left: .2rem;
        padding-left: .2rem;
        background: #fff;
        border-radius: .1rem;
        color: #ccc;
        flex: 1;
    }
    
    .h .hr {
        min-width: 1.04rem;
        padding: 0 .1rem;
        float: right;
        text-align: center;
        color: #fff;
    }
    
    .h .hr .arrow-icon {
        margin-left: -.04rem;
        font-size: .24rem
    }
</style>