<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>

     <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="inneritem of hotcities" :key="inneritem.id" @click="handleCityClick(inneritem.name)">
            <div class="button" >{{inneritem.name}}</div>
          </div>
        </div>
      </div>
    

      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="city of item" :key="city.id"  @click="handleCityClick(city.name)">{{city.name}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  props: {
    cities: Object,
    hotcities: Array,
    letter:String
  },
  name: "CityList",
   mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
  },
  methods:{
//   handleCityClick(city){
//   this.$store.dispatch('changCity',city)
// }
handleCityClick(city) {
      // this.$store.commit('changeCity',city);
       this.changeCity(city);
        this.$router.push("/");
    },
     ...mapMutations(["changeCity"])
  },
  watch:{
    letter(){
      if (this.letter){
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element);
      }
    }
      }  
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.44rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;
    }

    .button {
      margin: 0.1rem;
      padding: 0.1rem 0;
      text-align: center;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
