<template>
  <div class="icons">
     <swiper >
        <swiper-slide v-for="(page,index) of pages" :key="index">
    <div class="icon" v-for="(item,index) of page" :key="index" >
      <div class="icon-img">
        <img class="icon-img-content" :src="item.imgUrl">
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
     </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
name:'HomeIcons',
props:{
list:Array
},
data(){
  return{
    // iconList:[
    //   {
    //     id:'001',
    //     imgurl:require('@/assets/images/1.png'),
    //     desc:'机+酒'
    //   },
    //    {
    //     id:'002',
    //     imgurl:require('@/assets/images/2.png'),
    //     desc:'签证'
    //   },
    //   {
    //     id:'003',
    //     imgurl:require('@/assets/images/3.png'),
    //     desc:'包团.定制'
    //   },
    //   {
    //     id:'004',
    //     imgurl:require('@/assets/images/4.png'),
    //     desc:'接送机'
    //   },
    //    {
    //     id:'005',
    //     imgurl:require('@/assets/images/5.png'),
    //     desc:'周边游'
    //   },
    //   {
    //     id:'006',
    //     imgurl:require('@/assets/images/6.png'),
    //     desc:'国内游'
    //   },
    //   {
    //     id:'007',
    //     imgurl:require('@/assets/images/7.png'),
    //     desc:'外国岛屿游'
    //   },
    //    {
    //     id:'008',
    //     imgurl:require('@/assets/images/8.png'),
    //     desc:'美国'
    //   },
    //   {
    //     id:'009',
    //     imgurl:require('@/assets/images/jackson.jpg'),
    //     desc:'易烊千玺'
    //   },
    // ]
  }
},
computed:{
  pages(){
    const pages=[]
    this.list.forEach((item,index)=>{
      const page=Math.floor(index/8)
      if(!pages[page])
      {
        pages[page]=[]
      }
      pages[page].push(item)
    })
    return pages
  }
}
}
</script>

<style lang="stylus" scoped>

 @import '~@/assets/styles/variable.styl'
  @import '~@/assets/styles/mixins.styl'

 .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
.icons {
  margin-top:.1rem;
  .icon {
    overflow: hidden;
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: .1rem;
      .icon-img-content {
        border-radius: 0.1rem;
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc {
        position: absolute;
        margin-top :1.4rem;
        left: 0;
        right: 0;
        line-height: 0.44rem;
        height: 0.44rem;
        color: $darkTextColor ;
        text-align: center;
        ellipsis()
      }
  }
}
</style>
