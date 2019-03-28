<template>
  <div class="product-msg-box">
    <!-- <el-tabs type="card" v-model="activeItem" @tab-click="activeClick"> -->
    <el-tabs type="card" v-model="activeItem">
      <el-tab-pane label="商品详情" name="productDetails" class="details">
        <div class="details-content">
          <div class="product-attributes-msg">
            <ul>
              <li class="text-msg classification">分类：{{goods.catName}}</li>
              <li class="text-msg brand">品牌：{{goods.brandName}}</li>
              <li class="text-msg style">风格：{{goods.styleName}}</li>
              <li class="text-msg model">型号：{{product.model}}</li>
              <li class="text-msg fabric">面料：{{goods.catMoName}}</li>
              <li class="text-msg main-material">主材：{{product.mainMateral}}</li>
            </ul>
          </div>
          <div class="product-img">
            <span v-for="(val, index) in goods.goodsthumbnewList" :key="index">
              <img :src="['http://mytest2019217.oss-cn-huhehaote.aliyuncs.com/' + val]" width="1100px">
            </span>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="商品评论" name="productComment" class="comment">
        <div class="comment-content">
          <p class="product-comment-msg">
            评论区待开放
          </p>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'ProductMessage',
  props: ['productData', 'goodsMsg'],
  data: function () {
    return {
      activeItem: 'productDetails',
      product: this.productData,
      goods: this.goodsMsg
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
  .product-msg-box
    width 1200px
    margin 0 auto
    // 商品详情
    .details
      .details-content
        margin 0
        padding 0
        width 1198px
        background-color #ffffff
        border-left solid 1px #999999
        border-right solid 1px #999999
        opacity 0.8
        padding-bottom 100px
        // 商品属性
        .product-attributes-msg
          margin 0 auto
          width 1088px
          height 80px
          padding-top 18px
          .text-msg
            float left
            font-family SourceHanSansCN-Regular
            font-size 24px
            font-weight normal
            font-stretch normal
            line-height 42px
            letter-spacing 0px
            color #666666
            width 250px
            height 42px
            max-width 250px
            max-height 42px
            margin-right 20px
            overflow hidden
        // 商品图片
        .product-img
          margin-top 37px
          text-align center
    // 品论区
    .comment
      .comment-content
        height 500px
        border-left solid 1px #999999
        border-right solid 1px #999999
        .product-comment-msg
          font-size 24px
          color gray
</style>
