<template>
  <div class="header">
    <div class="header-left">
        <span class="iconfont">&#xe624;</span>
        </div>
    <div class="header-input">
         <span class="iconfont">&#xe612;</span>输入城市/景点/游玩主题</div>
         <router-link to="/City">
    <div class="header-right">
         {{this.city}}
         <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
         </router-link>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  name: "header",
  data() {
    return {};
  },
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }

};
</script>

<style lang="stylus" scoped>
 @import '~@/assets/styles/variable.styl'
.header {
  display: flex;
  line-height: 0.86rem;
  height: 0.86rem;
  background: $bgcolor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;
  }

  .header-input {
    flex: 1;
    line-height: 0.64rem;
    height: 0.64rem;
    padding-left :.1rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align: center;
    color:#fff;
    .arrow-icon{
        font-size:.24rem;
    }
  }
}
</style>
