<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array
  },
  data() {
    return {
      // WeekendList: [
      //   {
      //     id: "001",
      //     imgurl:
      //      "http://img1.qunarzz.com/sight/p0/1802/7d/7d7edd43a0646f6ba3.img.png_710x360_fc0f17be.png",
      //     title: "婺源风景区 ",
      //     desc: "中国绝美乡村，开始你的文艺之旅"
      //   },
      //   {
      //     id: "002",
      //     imgurl:
      //       "http://img1.qunarzz.com/sight/p0/1902/96/96c483c113e8d80aa3.water.jpg_710x360_3b9b2899.jpg",
      //     title: "婺源篁岭 4A景区",
      //     desc: "自游行的绝佳选择"
      //   },
      //   {
      //     id: "003",
      //     imgurl:
      //       "http://img1.qunarzz.com/sight/p0/1604/17/1752b1666c36d89990.water.jpg_710x360_a39c4d17.jpg",
      //     title: "三清山 5A景区",
      //     desc: "人间四月芳菲尽 三清杜鹃始盛开 "
      //   }
      // ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
  }
}
</style>
