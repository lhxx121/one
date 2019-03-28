<template>
  <div class="hot-commodity-box">
    <div class="hot-title">
      <div class="line">
        <img src="@/assets/images/icon/line.png">
      </div>
      <div class="title">热 / 卖 / 单 / 品</div>
      <div class="line">
        <img src="@/assets/images/icon/line.png">
      </div>
    </div>
    <div class="hot-content">
      <div>
        <!-- 热销商品一 -->
        <div class="hot-content-left">
          <div class="hot-commodity-image">
            <img src="../../../../static/images/commodity/01.png" width="227px">
          </div>
          <div class="hot-commodity-text">
            <div>
              <ul>
                <li class="hot-commodity-name">伯爵餐椅</li>
                <li class="hot-commodity-number">LH-CY-003</li>
                <li class="commodity-desc">意大利全青皮 坐感舒适 包裹式背部支撑 全面放松身心</li>
                <li><router-link to="" class="router-link understand-more">了解更多</router-link></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="hot-content-right">
          <!-- 热销商品二 -->
          <div class="hot-content-right-top">
            <div class="hot-commodity-image">
              <img src="../../../../static/images/commodity/01.png" width="252px">
            </div>
            <div class="hot-commodity-text">
              <div>
                <ul>
                  <li class="hot-commodity-name">伯爵餐椅</li>
                  <li class="hot-commodity-number">LH-CY-003</li>
                  <li class="commodity-desc">意大利全青皮 坐感舒适 包裹式背部支撑 全面放松身心</li>
                  <li><router-link to="" class="router-link understand-more">了解更多</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 热销商品三 -->
          <div class="hot-content-right-bottom">
            <div class="hot-commodity-text">
              <div>
                <ul>
                  <li class="hot-commodity-name">新主题真皮双人床</li>
                  <li class="hot-commodity-number">LH-C-007</li>
                  <li class="commodity-desc">精选头层牛皮 精寐柔软时光 匠心细节设计 造就云端睡眠体验</li>
                  <li><router-link to="" class="router-link understand-more">了解更多</router-link></li>
                </ul>
              </div>
            </div>
            <div class="hot-commodity-image">
              <img src="../../../../static/images/commodity/06.png" width="252px">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hot-bottom">
      <div class="new-commodity-bottom">
        <router-link to="" class="more-new-commodity">点击更多单品<i class="el-icon-caret-right"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotCommodity'
}
</script>

<style lang="stylus" scoped>
  .hot-commodity-box
    width 1200px
    margin 0 auto
    // 标题
    .hot-title
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
    // 热卖商品框
    .hot-content
      width 1205px
      margin 0 auto
      // 热卖商品一
      .hot-content-left
        display inline-block
        width 405px
        height 720px
        position relative
        .hot-commodity-image
          height 360px
          text-align center
          img
            margin-top 90px
        .hot-commodity-text
          ul
            margin-left 57px
          .hot-commodity-name
            height 48px
            font-size 32px
            font-family SourceHanSansCN-Regular
            font-weight 400
            line-height 48px
            color #000000
            margin-top 94px
          .hot-commodity-number
            font-size 18px
            font-family SourceHanSansCN-Light
            font-weight 300
            height 27px
            line-height 27px
            color #000000
            opacity 0.8
          .commodity-desc
            font-size 22px
            font-family SourceHanSansCN-Light
            font-weight 300
            opacity 0.8
            color #000000
            line-height 33px
            margin-top 32px
            width 291px
          .understand-more
            width 120px
            height 36px
            background #FF6F61
            border-radius 18px
            font-size 16px
            font-family SourceHanSansCN-Light
            font-weight 300
            color #FFFFFF
            line-height 36px
            display inline-block
            text-align center
            margin-top 30px
      .hot-content-right
        position absolute
        display inline-block
        width 790px
        height 720px
        // 热卖商品二
        .hot-content-right-top
          position relative
          height 360px
          background #F3F3F3
          .hot-commodity-image
            width 355px
            display inline-block
            text-align center
            margin-top 90px
          .hot-commodity-text
            display inline-block
            vertical-align top
            .hot-commodity-name
              height 48px
              font-size 32px
              font-family SourceHanSansCN-Regular
              font-weight 400
              line-height 48px
              color #000000
              margin-top 94px
            .hot-commodity-number
              font-size 18px
              font-family SourceHanSansCN-Light
              font-weight 300
              height 27px
              line-height 27px
              color #000000
              opacity 0.8
            .commodity-desc
              font-size 22px
              font-family SourceHanSansCN-Light
              font-weight 300
              opacity 0.8
              color #000000
              line-height 33px
              margin-top 32px
              width 313px
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
            .understand-more
              width 120px
              height 36px
              background #FF6F61
              border-radius 18px
              font-size 16px
              font-family SourceHanSansCN-Light
              font-weight 300
              color #FFFFFF
              line-height 36px
              display inline-block
              text-align center
              margin-top 30px
        // 热卖商品三
        .hot-content-right-bottom
          position relative
          height 360px
          background #ECECEA
          .hot-commodity-image
            width 355px
            display inline-block
            text-align center
            margin-top 90px
          .hot-commodity-text
            display inline-block
            vertical-align top
            ul
              margin-left 57px
            .hot-commodity-name
              height 48px
              font-size 32px
              font-family SourceHanSansCN-Regular
              font-weight 400
              line-height 48px
              color #000000
              margin-top 94px
            .hot-commodity-number
              font-size 18px
              font-family SourceHanSansCN-Light
              font-weight 300
              height 27px
              line-height 27px
              color #000000
              opacity 0.8
            .commodity-desc
              font-size 22px
              font-family SourceHanSansCN-Light
              font-weight 300
              opacity 0.8
              color #000000
              line-height 33px
              margin-top 32px
              width 313px
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
            .understand-more
              width 120px
              height 36px
              background #FF6F61
              border-radius 18px
              font-size 16px
              font-family SourceHanSansCN-Light
              font-weight 300
              color #FFFFFF
              line-height 36px
              display inline-block
              text-align center
              margin-top 30px
    // 更多热卖商品
    .hot-bottom
      .new-commodity-bottom
        height 36px
        width 155px
        margin 0 auto
        margin-top 42px
        .more-new-commodity
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
