<template>
  <div class="carousel-bar">
    <div class="carousel-box">
      <el-carousel :interval=ISpeed :height=CHeight arrow="never">
        <el-carousel-item v-for="(item,key) in imageList" :key="key">
          <img :src="item.src" :height=IHeight>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselBar',
  props: ['imageList', 'imageHeight', 'carouselHeight', 'speed'],
  data: function () {
    return {
      IList: this.imageList,
      IHeight: this.imageHeight,
      CHeight: this.carouselHeight,
      ISpeed: this.speed
    }
  }
}
</script>

<style lang="stylus" scoped>
  .carousel-bar
    min-width 1200px
    height 650px
</style>
