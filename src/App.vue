<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link tag="a" to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link tag="a" to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link tag="a" to="/seller">商家</router-link>
      </div>
    </div>

  </div>
</template>


<script>
import Header from "./components/header/Header";
export default {
  name: 'app',
  data(){
    return{
      show:false,
      seller:null
    }
  },
  created(){
    this.$http.get('/data.json').then(res=>{
      if(res.status !== 200) return;
      this.seller = res.data.seller
      console.log(this.seller)
    })
  },
  methods:{

  },
  components: {
    Header
  }
}
</script>

<style lang="stylus">
  @import "~@/common/stylus/mixin.styl"
#app
  .tab
    display flex
    width: 100%
    height: 44px
    line-height 44px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
      .router-link-active
        color red
      & > a
        display block
        font-size 14px
        color: rgb(77,85,93);

</style>
