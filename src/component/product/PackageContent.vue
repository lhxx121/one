<template>
  <div class="package-content-box">
    <!-- 所属套餐 -->
    <div class="ascription-package">
      <p class="ascription-package-title">所属套餐</p>
      <div class="ascription-package-content">
        <div class="ascription-package-item" v-for="(item, index) in ascriptionPackageList" :key="index" :class="{isLastItem: index === 1}">
          <img class="package-item-img" :src="item.img">
          <p class="package-item-title">{{item.title}}</p>
          <p class="package-item-desc">{{item.desc}}</p>
        </div>
      </div>
    </div>
    <!-- 推荐商品 -->
    <div class="recommend-product">
      <p class="recommend-product-title">为你安利</p>
      <div class="recommend-product-content">
        <div class="recommend-product-item" v-for="(item, index) in recommendProductList" :key="index" :class="{isRightItem: (index+1)%4 ===0}">
          <img class="product-item-img" :src="item.img">
          <p class="product-item-price"><font style="font-size:12px;">￥</font>{{item.price}}起</p>
          <p class="product-item-title">{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackageContent',
  props: ['ascriptionPackageData', 'recommendProductData'],
  data: function () {
    return {
      ascriptionPackageList: this.ascriptionPackageData,
      recommendProductList: this.recommendProductData
    }
  }
}
</script>

<style lang="less" scoped>
  .package-content-box{
    width: 1200px;
    margin: 0 auto;
    // background-color: #666666;
    .ascription-package{
      // 所属套餐标题
      .ascription-package-title{
	      height: 31px;
        font-family: SourceHanSansCN-Regular;
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 31px;
        letter-spacing: 0px;
        color: #333333;
        margin-bottom: 32px;
      }
      // 所属套餐套餐项
      .ascription-package-item{
        width: 578px;
        height: 320px;
        background-color: #ffffff;
        display: inline-block;
        // 套餐图片
        .package-item-img{
          margin: 20px 20px;
          width: 538px;
	        height: 200px;
        }
        // 套餐标题
        .package-item-title{
          height: 19px;
          font-family: SourceHanSansCN-Regular;
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 19px;
          letter-spacing: 0px;
          color: #333333;
          margin-left: 20px;
        }
        // 套餐描述
        .package-item-desc{
          width: 528px;
          font-family: SourceHanSansCN-Regular;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 20px;
          letter-spacing: 0px;
          color: #333333;
          opacity: 0.8;
          margin-left: 20px;
          margin-top: 14px;
        }
      }
      .isLastItem{
        float: right;
      }
    }
    // 推荐商品
    .recommend-product{
      width: 1200px;
      margin-top: 45px;
      // 推荐商品标题
      .recommend-product-title{
	      height: 31px;
        font-family: SourceHanSansCN-Regular;
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 31px;
        letter-spacing: 0px;
        color: #333333;
        margin-bottom: 32px;
      }
      // 推荐商品
      .recommend-product-item{
        width: 261px;
        height: 284px;
        display: inline-block;
        background-color: #ffffff;
        margin-right: 52px;
        // 推荐商品图片
        .product-item-img{
          width: 201px;
          height: 201px;
          margin: 20px 30px 10px 30px; 
        }
        // 推荐商品价钱
        .product-item-price{
          width: 261px;
          font-family: SourceHanSansCN-Normal;
          font-size: 16px;
          font-weight: normal;
          letter-spacing: 0px;
          color: #ff6f61;
          text-align: center;
        }
        // 推荐商品标题
        .product-item-title{
          font-family: SourceHanSansCN-Normal;
          width: 261px;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 35px;
          letter-spacing: 0px;
          color: #333333;
          text-align: center;
          opacity: 0.8;
        }
      }
      .isRightItem{
        margin-right: 0;
      }
    }
  }
</style>

