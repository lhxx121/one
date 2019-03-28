<template>
  <div class="new-commodity-box">
    <!-- 新商品标题 -->
    <div class="new-commodity-title">
      <div class="line">
        <img src="@/assets/images/icon/line.png">
      </div>
      <div class="title">新 / 品 / 展 / 示</div>
      <div class="line">
        <img src="@/assets/images/icon/line.png">
      </div>
    </div>
    <!-- 新商品内容列表 -->
    <div class="new-commodity-content">
      <div v-for="(item,index) in newCommodity" :key="index" class="commodity-item" :class=index>
        <div class="commodity-msg" :style="{backgroundColor: item.background}">
          <ul>
            <li class="photo">
              <router-link :to="'/getCommodity?id='+item.id" class="router-link"><img :src="item.src"></router-link>
            </li>
            <li class="name">
              <router-link :to="'/getCommodity?id='+item.id" class="router-link">{{item.name}}</router-link>
            </li>
            <li class="color">
              <button v-for="(colorItem,index) in item.color" :key="index" :style="{backgroundColor: colorItem}" class="commodity-color-btn" :title="colorItem"></button>
            </li>
            <li class="price">¥ {{item.price}}起</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 更多新商品按钮 -->
    <div class="new-commodity-bottom">
        <router-link to="" class="moreCommodity">点击更多新品<i class="el-icon-caret-right"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewCommodity',
  props: ['newCommodityList'],
  data: function () {
    return {
      newCommodity: this.newCommodityList
    }
  }
}
</script>

<style lang="stylus" scoped>
  .new-commodity-box
    width 1200px
    margin 0 auto
    // 标题
    .new-commodity-title
      text-align center
      height 133px
      div
        display inline
        height 32px
      .line
        position relative
        text-align center
        top -10px
      .title
        font-size 32px
        font-family SourceHanSansCN-Medium
        font-weight 500
        color #333333
        line-height 48px
    // 商品列表
    .new-commodity-content
      // 单个商品布局
      .commodity-item
        width 280px
        height 360px
        display inline-block
        .commodity-msg
          width 100%
          height 100%
          text-align center
          opacity 0.8
          ul
            li
              width 100%
              height 18px
              margin 0 auto
            .photo
              width 242px
              height 241px
              text-align center
              padding-top 20px
            .commodity-color-btn
              width 10px
              height 14px
              paddin 0
              marign 0
              border none
              border-radius 14px
              margin-top 12px
              margin-right 17px
            .name
              width 219px
              height 19px
              font-size 15px
              font-family SourceHanSansCN-Medium
              font-weight 500
              color #FFFFFF
              line-height 23px
              margin-top 15px
              max-width 219px
              max-height 19px
              overflow hidden
            .price
              width 63px
              height 20px
              font-size 18px
              font-family SourceHanSansCN-Light
              font-weight 300
              color #FFFFFF
              line-height 20px
              margin-top 2px
              max-height 20px
              overflow hidden
            .color
              height 30px
              max-width 219px
              max-height 30px
              overflow hidden
      // 中间商品左右做间隔处理
      .commodity-item:nth-child(2), .commodity-item:nth-child(5)
        margin 0 175px
      .commodity-item:nth-child(1), .commodity-item:nth-child(2), .commodity-item:nth-child(3)
        margin-bottom 100px
    // 更多商品
    .new-commodity-bottom
      height 36px
      width 155px
      margin 0 auto
      margin-top 42px
      .moreCommodity
        width 155px
        height 36px
        border-radius 18px
        border 1px solid #FF6F61
        text-decoration none
        font-size 18px
        font-family SourceHanSansCN-Normal
        font-weight 400
        color #FF6F61
        display inline-block
        line-height 36px
        text-align center
</style>
