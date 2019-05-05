<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
list:Array 
  },
   computed: {
    showSwiper () {
      return this.list.length
    }
  },
  data() {
    return {
      // swiperList: [
      //   {
      //     id: "001",
      //     imgurl: "http://lorempixel.com/1600/900/"
      //   },
      //   {
      //     id: "002",
      //     imgurl:
      //       "https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture"
      //   }
      // ],
      swiperOption: {
        autoplay: true,
        loop:true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #ccc;

  .swiper-img {
    width: 100%;
  }
}
</style>
