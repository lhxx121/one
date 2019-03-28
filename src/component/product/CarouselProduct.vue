<template>
  <div class="carouselProductBox">
    <!-- 大视图展示 -->
    <div class="swiper-container view">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-no-swiping" v-for="(val, index1) in carouselImages" :key="index1">
          <img :src="['http://mytest2019217.oss-cn-huhehaote.aliyuncs.com/' + val]" width="560px">
        </div>
      </div>
    </div>
    <!-- 小视图控制 -->
    <div class="controll-bar">
      <div class="prev"><router-link to="" class="router-link"><i class="el-icon-arrow-up"></i></router-link></div>
      <div class="next"><router-link to="" class="router-link"><i class="el-icon-arrow-down"></i></router-link></div>
      <div class="swiper-container gallery-thumbs controll">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-no-swiping" v-for="(val, index2) in carouselImages" :key="index2">
            <img :src="['http://mytest2019217.oss-cn-huhehaote.aliyuncs.com/' + val]" width="101px">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'CarouselProduct',
  props: ['goodszhutuList'],
  data: function () {
    return {
      carouselImages: []
    }
  },
  watch: {
    goodszhutuList: function (val) {
      console.log('watch')
      this.carouselImages = val
    }
  },
  mounted: function () {
    /* eslint-disable no-new */
    // 控制
    var galleryThumbs = new Swiper('.controll', {
      autoplay: 300,
      width: 101,
      height: 101,
      initialSlide: 0,
      direction: 'vertical',
      loop: true,
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      // grabCursor: true,
      navigation: {
        nextEl: '.prev',
        prevEl: '.next'
      }
    })
    // 视图展示
    new Swiper('.view', {
      autoplay: 300,
      width: 560,
      height: 560,
      initialSlide: 0,
      direction: 'vertical',
      loop: true,
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      // grabCursor: true,
      thumbs: {
        swiper: galleryThumbs
      },
      navigation: {
        nextEl: '.prev',
        prevEl: '.next'
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
  .carouselProductBox
    position relative
    // 大视图显示
    .swiper-container
      display inline-block
      width 560px
      height 560px
  // 缩览图控制
  .controll-bar
    display inline-block
    width 101px
    height 560px
    position absolute
    left 577px
    // 小视图显示
    .swiper-container
      margin-top 5px
      display inline-block
      width 101px
      height 490px
      .swiper-slide
        height 101px
    // 向上按钮
    .prev
      display block
      width 100px
      height 32px
      text-align center
      i
        color #535353
        font-size 40px
        font-family SourceHanSansCN-Regular
        font-weight bold
        font-stretch normal
    // 向下按钮
    .next
      bottom 0
      position absolute
      display block
      width 100px
      height 32px
      text-align center
      i
        color #535353
        font-size 40px
        font-family SourceHanSansCN-Regular
        font-weight bold
        font-stretch normal
</style>
