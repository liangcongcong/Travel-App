<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./counts/header.vue";
import HomeSwiper from "./counts/Swiper.vue";
import HomeIcons from "./counts/Icons.vue";
import HomeRecommend from "./counts/Recommend.vue";
import HomeWeekend from "./counts/Weekend.vue";
import {mapState} from 'vuex'
export default {
  name: "home",
   computed: {
    ...mapState(['city'])
  },
  data() {
    return {
      lastCity:'',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo() {
      this.$axios.get("/mock/index.json?city="+this.city)
      .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
      // console.log(res);
    }
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
};
</script>

<style>
</style>
