<template>
<div>
<div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg"/>
<div class="banner-info">
    <div class="banner-title">{{this.sightName}}</div>
    <div class="banner-number"><span class="iconfont">&#xe632;</span>{{this.gallaryImgs.length}}</div>
</div>
</div>
<common-fade>
<common-gallary
 :imgs="gallaryImgs"
  v-show="showGallary"
  @close="handleGallaryClose"></common-gallary>
</common-fade>
</div>
</template>

<script>
import CommonGallary from "@/components/common/gallary/Gallary"
import CommonFade from "@/components/common/fade/Fade"
export default {
name:'DetailBanner',
props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
components:{
    CommonGallary,
    CommonFade
},
data(){
    return {
    imgs:[require('@/assets/images/roy.jpg'),require('@/assets/images/karry.jpg'),require('@/assets/images/jackson.jpg')],
    showGallary:false
    }
},
methods:{
    handleBannerClick(){
        this.showGallary=true
    },
    handleGallaryClose(){
         this.showGallary=false
    }
}
}
</script>

<style lang="stylus" scoped>
    .banner{
        position relative
        overflow :hidden;
        height:auto
        padding-bottom:0%
       .banner-img{
        width:100%
    }
    .banner-info{
        display:flex;
        position :absolute
        left:0;
        right:0
        bottom:0
        line-height:.6rem
        color :#fff
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-title{
        flex: 1
        
        font-size: .32rem
        padding: 0 .2rem
    }
    .banner-number{
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon{
        font-size: .24rem
        }
        
    }
    }
    
    }
   
</style>

