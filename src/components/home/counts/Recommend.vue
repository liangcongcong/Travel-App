<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li"   class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/'+item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
list:Array
  },
  data() {
    return {
      // recommendList: [
      //   {
      //     id: "001",
      //     imgurl:
      //      "https://imgs.qunarzz.com/p/tts9/1809/f0/dfcedf0e0b984702.jpg_r_480x320x90_c98002f9.jpg",
      //     title: "南昌直飞巴厘岛",
      //     desc: "南湾玻璃底船+皇宫市场+金巴兰海滩+情人崖下午茶+住精品泳池酒店"
      //   },
      //   {
      //     id: "002",
      //     imgurl:
      //       "https://imgs.qunarzz.com/p/tts2/1706/56/c1bf0c75946f3702.jpg_r_480x320x90_cc3a3b59.jpg",
      //     title: "南昌直飞泰国",
      //     desc: "出境游特价泰国曼谷芭提雅6日☂无强消+泳池酒店+双岛出海+豪华自助餐+人妖秀"
      //   },
      //   {
      //     id: "003",
      //     imgurl:
      //       "https://imgs.qunarzz.com/p/tts9/1804/cd/ce9e798f1e475202.jpg_r_480x320x90_1843eb1c.jpg",
      //     title: "南昌-曼谷",
      //     desc: "尾单低价-泰式五星酒店|无自费（人妖表演秀+魅力双岛）+东方公主号+大皇宫 "
      //   }
      // ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.recommend-title {
  margin-top: 0.2rem;
  line-height: 0.6rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
  }

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    font-size: 0.24rem;
    ellipsis();
  }

  .item-button {
    line-height: 0.44rem;
    margin-top: 0.16rem;
    background: #ff9300;
    padding: 0 0.1rem;
    border-radius: 0.06rem;
    color: #fff;
  }
}
</style>
