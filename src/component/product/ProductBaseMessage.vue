<template>
  <div class="product-base-message-box">
    <div class="current-location">
      有家优品<i class="el-icon-arrow-right middle-line"></i>餐厅<i class="el-icon-arrow-right middle-line"></i>餐椅<i class="el-icon-arrow-right middle-line"></i>西弗家具 北欧风格餐厅家具餐椅
    </div>
    <div class="product-left">
      <carousel-product :goodszhutuList="goods.goodszhutuList"></carousel-product>
    </div>
    <div class="product-right">
      <div class="msg-title">
        <p class="title">{{goods.goodsname}}</p>
      </div>
      <div class="msg-price">
        <ul>
          <li>
            <span class="youpin-text">优品价</span>
            <span class="product-price">
              <font style="font-size: 24px;color: #ff6f61;">￥</font>
              <font style="font-size: 40px;color: #ff6f61;">{{goods.shopprice}}</font>
              </span>
          </li>
          <li>
            <span class="tiyan-text">体验馆</span>
            <span>全球<font style="color: #ff6f61;font-size:20px;margin:0 10px;">{{product.experienceHallNum}}</font>家体验店</span>
          </li>
        </ul>
      </div>
      <div class="msg-attr">
        <ul>
          <li>
            <span class="label-text">规格</span>
            <span v-for="(val, index) in product.specification" :key="index">
              <p class="border" :class="{active: index===0}">{{val}}</p>
            </span>
          </li>
          <li>
            <span class="label-text">颜色</span>
            <span v-for="(val, index) in product.colors" :key="index">
              <button class="product-color" :style="{backgroundColor: val}"></button>
            </span>
          </li>
          <li>
            <span class="label-text">材质</span>
            <span v-for="(val, index) in product.Material" :key="index">
              <p class="border" :class="{active: index===0}">{{val}}</p>
            </span>
          </li>
          <li>
            <span class="label-text">数量</span>
            <span class="num-box">
              <a class="minus">-</a>
              <input type="text" name="number" class="buy-num" value="1"/>
              <a class="add">+</a>
            </span>
            <span class="astock">库存{{goods.goodsnumber}}件</span>
          </li>
        </ul>
      </div>
      <div class="active-link">
        <span>
          <router-link to="" class="collection">
            <img src="~@/assets/images/icon/collection.png">
          </router-link>
        </span>
        <span>
          <el-button class="buy">立即购买</el-button>
        </span>
        <span>
          <el-button class="add-to-car">加入购物车</el-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselProduct from '@/component/product/CarouselProduct'
export default {
  name: 'ProductBaseMessage',
  props: ['staticData', 'goodsMsg'],
  components: {CarouselProduct},
  data: function () {
    return {
      product: this.staticData,
      goods: {}
    }
  },
  watch: {
    goodsMsg: function (val) {
      this.goods = val
    }
  }
}
</script>

<style lang="stylus" scoped>
  .product-base-message-box
    width 1200px
    height 614px
    margin 0 auto
    position relative
    // 当前商品所在页面
    .current-location
      height 32px
      font-family SourceHanSansCN-Regular
      font-size 14px
      font-weight normal
      font-stretch normal
      line-height 32px
      letter-spacing 0px
      color #666666
      .middle-line
        font-weight bold
        margin 0 10px
    // 商品信息图片轮播图
    .product-left
      width 700px
      height 566px
      display inline-block
      position absolute
    // 商品信息右侧属性价钱
    .product-right
      width 480px
      height 566px
      display inline-block
      position absolute
      left 700px
      // 标题
      .msg-title
        .title
          font-family SourceHanSansCN-Regular
          font-size 28px
          font-weight normal
          font-stretch normal
          line-height 32px
          letter-spacing 0px
          color #333333
      // 价钱
      .msg-price
        width 480px
        height 110px
        background-color #f9e9e9
        margin-top 30px
        font-family SourceHanSansCN-Regular
        span
          font-size 20px
          font-weight normal
          font-stretch normal
          line-height 42px
          letter-spacing 0px
          color #333333
          opacity 0.8
        .youpin-text, .tiyan-text
          width 60px
          height 20px
          margin-left 28px
          margin-right 46px
          margin-top 48px
      // 规格信息
      .msg-attr
        font-family SourceHanSansCN-Regular
        font-size 20px
        font-weight normal
        font-stretch normal
        line-height 42px
        letter-spacing 0px
        color #333333
        opacity 0.8
        li
          margin-top 16px
        .label-text
          margin-left 52px
          margin-right 37px
        // 文本框显示
        .border
          border solid 1px #7d7d7d
          display inline-block
          height 28px
          line-height 28px
          padding-left 19px
          padding-right 19px
          margin-right 20px
        .border.active
          border solid 1px #ff6f61
          color #ff6f61
        // 商品规模颜色
        .product-color
          width 22px
          height 22px
          border none
          border-radius 100%
          margin-right 20px
        // 购买数量
        .num-box
          display inline-block
          // width 93px
          height 28px
          box-sizing border-box
          border solid 1px #7d7d7d
          position relative
          top 5px
          .minus, .buy-num, .add
            width 28px
            height 26px
            font-family SourceHanSansCN-Regular
            font-size 24px
          .buy-num, .add, .minus
            width 28px
            height 26px
            line-height 26px
            text-align center
            border-left 1px solid #ccc
            border-right 1px solid #ccc
            background none
            border-top none
            border-bottom none
            vertical-align top
            float left
      // 购买收藏购物车
      .active-link
        margin-left 53px
        margin-top 33px
        .collection
          position relative
          top 5px
        .buy
          width 132px
          height 40px
          background-color #ff6f61
          border-radius none
          font-family SourceHanSansCN-Regular
          font-size 24px
          line-height 42px
          letter-spacing 0px
          color #ffffff
          padding 0
          margin-left 36px
          margin-right 32px
          border-radius 0
        .add-to-car
          width 156px
          height 40px
          border solid 1px #ff6f61
          font-family SourceHanSansCN-Regular
          font-size 24px
          line-height 42px
          letter-spacing 0px
          color #ff6f61
          padding 0
          border-radius 0
</style>
