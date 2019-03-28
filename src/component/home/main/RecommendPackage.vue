<template>
  <div class="recommend-package-box">
    <!-- 推荐套餐标题 -->
    <div class="recommend-package-title">
      <div class="line">
        <img src="@/assets/images/icon/line.png">
      </div>
      <div class="title">套 / 餐 / 推 / 荐</div>
      <div class="line">
        <img src="@/assets/images/icon/line.png">
      </div>
    </div>
    <!-- 推荐套餐内容列表 -->
    <div class="recommend-package-content">
      <div class="carousel-bar">
        <div class="carousel-box">
          <el-carousel :nterval="3000" height="765px" arrow="never" indicator-position="outside">
            <el-carousel-item>
              <div style="background-image: url(../../../static/images/commodity/taocan_1.png)" class="recommend-package-bg">
                <div class="recommend-package-text">
                    <div class="recommend-package-style">
                      <p class="text-chinese">- 现代北欧 极简清新 -</p>
                      <p class="text-english">Modern Nordic</p>
                    </div>
                    <div class="recommend-package-desc">
                      <p>
                        北欧风格简洁实用，体现对传统的尊重，对自然材料的欣赏，对形式和装饰的克制，以及力求在形式和功能的统一；在建筑室内设计方面，就是室内的顶、墙、地三个面，完全不用纹样和图案装饰，只用线条、色块来区分点缀
                      </p>
                    </div>
                    <div class="recommend-package-tips">
                      客厅+餐厅+主卧=<s>34578</s> <font style="color:red;font-size:28px;margin-left:5px">32998</font>
                    </div>
                    <div class="recommend-package-enter">
                      <router-link to="" class="router-link">查看清单<i class="el-icon-d-arrow-right"></i></router-link>
                    </div>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div>
                222222
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <!-- 更多推荐套餐按钮 -->
    <div class="recommend-package-bottom">
        <router-link to="" class="more-recomend-package">点击更多套餐<i class="el-icon-caret-right"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendPackage'
}
</script>

<style lang="stylus" scoped>
  .recommend-package-box
    width 1200px
    margin 0 auto
    // 标题
    .recommend-package-title
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
    // 轮播套餐列表
    .recommend-package-content
      .carousel-box
        .recommend-package-bg
          width 100%
          height 100%
          background-repeat no-repeat
          background-size cover
          -webkit-background-size cover
          -moz-background-size cover
          -o-background-size cover
          // 背景图文本框内容
          .recommend-package-text
            width 440px
            height 550px
            background #292929
            border-radius 4px
            opacity 0.9
            position relative
            left 380px
            top 204px
            .recommend-package-style
              .text-chinese
                font-size 18px
                font-family SourceHanSansCN-Medium
                font-weight 500
                color #FFFFFF
                line-height 27px
                padding-top 80px
                padding-left 40px
              .text-english
                font-size 18px
                font-family SourceHanSansCN-Light
                font-weight 300
                color #FFFFFF
                line-height 18px
                // padding-top 10px
                padding-left 65px
                opacity 0.8
            .recommend-package-desc
              margin-top 62px
              margin-left 56px
              p
                font-size 18px
                font-family SourceHanSansCN-Light
                font-weight 300
                color #FFFFFF
                line-height 27px
                letter-spacing 5px
                width 345px
                word-wrap break-word  // 超出宽度换行
                word-break break-all  // 换行对象适用所有
                opacity 0.8
            .recommend-package-tips
              font-size 20px
              font-family SourceHanSansCN-Regular
              font-weight 400
              color #FFFFFF
              line-height 30px
              margin-left 56px
              margin-top 60px
            .recommend-package-enter
              margin-left 56px
              margin-top 30px
              .router-link
                padding 0
                width 130px
                height 30px
                background #FF6F61
                border-radius 13px
                font-size 18px
                font-family SourceHanSansCN-Light
                font-weight 300
                color rgba(255,255,255,1)
                line-height 30px
                letter-spacing 1px
    // 更多套餐按钮
    .recommend-package-bottom
      height 36px
      width 155px
      margin 0 auto
      margin-top 42px
      .more-recomend-package
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
