<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"/>
    <detail-header />
    <div class="content">
      <detail-list :list="list"/>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner.vue";
import DetailHeader from "./components/Header.vue";
import DetailList from "./components/List.vue";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
    sightName: '',
    bannerImg: '',
    gallaryImgs: [],
    list:[]
    //   list: [
    //     {
    //       title: "最美的时光",
    //       children: [
    //         {
    //           content: "我们的青春不散 不需告别 也无须伤感 "
    //         }
    //       ]
    //     },
    //     {
    //       title: "因为遇见你",
    //       children: [
    //         {
    //           content: " 与你一起牵手往前进 每天值得回忆"
    //         }
    //       ]
    //     },
    //     {
    //       title: "骄傲",
    //       children: [
    //         {
    //           content: "我只想有一天你能为我骄傲"
    //         }
    //       ]
    //     },
    //     {
    //       title: "吆不到台",
    //       children: [
    //         {
    //           content: "让你晓得你源哥你惹不起"
    //         }
    //       ]
    //     }
    //   ]
    
  }
    },
  methods:{
      getDetailInfo(){
        //   this.$axios.get('/api/detail.json?id='+this.$route.params.id)
         this.$axios.get('/mock/detail.json',
         {
             params:{
                 id:this.$route.params.id
             }
         }).then(this.handleDetailSuccess)
      },
      handleDetailSuccess(res){
        res=res.data
        if(res.ret&&res.data)
        {
            const data=res.data
            this.sightName=data.sightName
            this.bannerImg=data.bannerImg
            this.gallaryImgs=data.gallaryImgs
            this.list=data.categoryList
            console.log(data)
        }
      }
  },
  mounted(){
      this.getDetailInfo()
  }
};
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>

