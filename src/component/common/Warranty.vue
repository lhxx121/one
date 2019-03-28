<template>
  <div class="warranty-box">
    <div class="warranty-content">
      <ul>
        <li class="warranty-item">
          <span class="item-image">
            <img src="~@/assets/images/footer/欧标制作.png">
          </span>
          <span>
            <p class="item-text">品牌工厂制造，100%严检查</p>
          </span>
          <span>
            <p class="item-title">欧 标 制 造 </p>
          </span>
        </li>
        <li class="warranty-item">
          <span class="item-image">
            <img src="~@/assets/images/footer/省40%.png">
          </span>
          <span>
            <p class="item-text">直连大厂，省去中间环节</p>
          </span>
          <span>
            <p class="item-title">省 40 %</p>
          </span>
        </li>
        <li class="warranty-item">
          <span class="item-image">
            <img src="~@/assets/images/footer/O2O双平台.png">
          </span>
          <span>
            <p class="item-text">网上商城+家居体验馆</p>
          </span>
          <span>
            <p class="item-title">O2O 双 平 台</p>
          </span>
        </li>
        <li class="warranty-item">
          <span class="item-image">
            <img src="~@/assets/images/footer/配送.png">
          </span>
          <span>
            <p class="item-text">全城免费，省力更省心</p>
          </span>
          <span>
            <p class="item-title">免 费 配 送 安 装</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Warranty'
}
</script>

<style lang="stylus" scoped>
  .warranty-box
    background-image url("~@/assets/background/bg_footer.png")
    height 302px
    .warranty-content
      width 1200px
      // height 302px
      margin 0 auto
      .warranty-item
        float left
        width 230px
        height 300px
        margin-top 73px
        margin-right 93px
        span
          font-family SourceHanSansCN-Regular
          font-weight 400
          color #ffffff
        .item-image
          width 81px
          height 81px
          margin 0 auto
          display block
          position relative
          img
            position absolute
            bottom 0
        .item-text
          font-size 18px
          line-height 27px
          height 27px
          margin-top 24px
          text-align center
        .item-title
          font-size 28px
          line-height 42px
          height 42px
          margin-top 10px
          text-align center
      .warranty-item:last-child
        margin-right 0
</style>
