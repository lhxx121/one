<template>
  <div class="home">
    <!-- 头部导航工具栏 -->
    <div class="top-tool-bar">
      <top-tool-bar></top-tool-bar>
    </div>
    <!-- 菜单项 -->
    <div class="main-menu">
      <main-menu activeMenuItem="home"></main-menu>
    </div>
    <!-- 头部轮播图 -->
    <div class="sweep">
      <carousel-bar :imageList="imageList" :carouselHeight="carouselHeight" :imageHeight="imageHeight" :speed="carouselSpeed"></carousel-bar>
    </div>
    <!-- 新品商品 -->
    <div class="new-commodity">
      <new-commodity :newCommodityList="newCommodityList"></new-commodity>
    </div>
    <!-- 热门商品 -->
    <div class="hot-commodity">
      <hot-commodity></hot-commodity>
    </div>
    <!-- 推荐套餐 -->
    <div class="recommend-package">
      <recommend-package></recommend-package>
    </div>
    <!-- 质保信息 -->
    <div class="warranty">
      <warranty></warranty>
    </div>
    <!-- 脚部信息 -->
    <div class="footer">
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
import TopToolBar from '@/component/common/TopToolBar'
import MainMenu from '@/component/menu/Menu'
import CommonFooter from '@/component/common/Footer'
import CarouselBar from '@/component/common/CarouselBar'
import NewCommodity from '@/component/home/main/NewCommodity'
import HotCommodity from '@/component/home/main/HotCommodity'
import RecommendPackage from '@/component/home/main/RecommendPackage'
import Warranty from '@/component/common/Warranty'
import carouselJSON from '../../../static/images/carousel/carousel.json'
import newCommodityJSON from '../../../static/images/commodity/commodity.json'
export default {
  name: 'home',
  components: {
    TopToolBar, MainMenu, CommonFooter, CarouselBar, NewCommodity, HotCommodity, RecommendPackage, Warranty
  },
  data: function () {
    return {
      imageList: carouselJSON.home_top.imagesList,
      carouselHeight: carouselJSON.home_top.carouselHeight,
      imageHeight: carouselJSON.home_top.imagesHeight,
      carouselSpeed: carouselJSON.home_top.speed,
      newCommodityList: newCommodityJSON.newCommodityList
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    // 头部工具栏
    .top-tool-bar
      // background-color #666666
    // 主页图片轮播
    .sweep
      margin-top 38px
    // 新商品
    .new-commodity
      margin-top 50px
    // 热销商品
    .hot-commodity
      margin-top 100px
    // 推荐套餐
    .recommend-package
      margin-top 90px
    // 质保信息
    .warranty
      margin-top 90px
</style>
