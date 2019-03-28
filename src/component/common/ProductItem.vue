<template>
  <div class="product-list-content">
    <div class="product-item" v-for="(product, index) in productListData" :key="index">
      <div class="product-image">
        <router-link to="" @click.native="findProductByID(product.id)">
          <img :src="product.img" width="300px">
        </router-link>
      </div>
      <div class="product-text-msg">
        <p class="product-name"><router-link class="product-name-link" to="" @click.native="findProductByID(product.id)">{{product.name}}</router-link></p>
        <p class="product-price">￥{{product.price}}起</p>
        <p class="product-type">{{product.type}}色可选</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["productList"],
  data: function () {
    return {
      productListData: this.productList
    }
  },
  methods: {
    findProductByID: function (id) {
      console.log(id)
    }
  }
}
</script>

<style lang="less" scoped>
  .product-item{
    width: 300px;
    height: 447px;
    display: inline-block;
    .product-text-msg{
      .product-name, .product-price, .product-type{
        width: 307px;
        text-align: center;
        margin-bottom: 6px;
      }
      .product-image{
        width: 307px;
        height: 307px;
      }
      .product-name{
        font-family: SourceHanSansCN-Medium;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 2px;
        color: #333333;
        margin-top: 18px;
        .product-name-link{
          text-decoration: none;
          color: #333333;
        }
      }
      .product-price{
        font-family: SourceHanSansCN-Regular;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #ff6f61;
      }
      .product-type{
        font-family: SourceHanSansCN-Regular;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #999999;
      }
    }
  }
</style>
