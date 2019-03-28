<template>
  <div class="product-details-body">
    <!-- 头部菜单 -->
    <div class="top-menu-body">
      <top-menu></top-menu>
    </div>
    <!-- 图片logo -->
    <div class="logo">
      <router-link to="/">
        <img src="~@/assets/images/logo/youjia_logo.png">
      </router-link>
    </div>
    <!-- 商品基本信息 -->
    <div class="product-base-msg">
      <product-base-message :staticData="product" :goodsMsg="goodsMessage"></product-base-message>
    </div>
    <!-- 套餐内容 -->
    <div class="taocan-content">
      <package-content :ascriptionPackageData="packageList" :recommendProductData="recommendProductList"></package-content>
    </div>
    <!-- 商品详细信息 -->
    <div class="product-details-msg">
      <product-message :productData="product" :goodsMsg="goodsMessage"></product-message>
    </div>
    <!-- 脚部 -->
    <div class="product-footer">
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopMenu from '@/component/menu/TopMenu'
import ProductMessage from '@/component/product/ProductMessage'
import ProductBaseMessage from '@/component/product/ProductBaseMessage'
import CommonFooter from '@/component/common/Footer'
import PackageContent from '@/component/product/PackageContent'
export default {
  name: 'ProductDetails',
  components: {
    TopMenu, ProductMessage, ProductBaseMessage, CommonFooter, PackageContent
  },
  data: function () {
    return {
      goodsMessage: {},
      product: {
        'id': '001',
        'title': '北欧卧室带储物柜头层皮艺床',
        'price': '9999.00',
        'experienceHallNum': '1',
        'specification': ['1.8m床：2190*2230*805'],
        'colors': ['#ff6f61', '#7d7d7d', '#ccc'],
        'Material': ['真皮', '仿真皮', '手工皮'],
        'inventory': '9900',
        'classification': '床',
        'brand': '卡图-北欧',
        'style': '北欧风格',
        'model': 'BA009',
        'fabric': '皮艺',
        'mainMateral': '坂木',
        'img': '/static/images/commodity/taocan_1.png'
      },
      packageList: [
        {
          id: '1',
          title: '- 现代北欧 极简清新 -',
          img: '../../../static/images/commodity/details-taocan1.png',
          desc: '北欧风格简洁实用，体现对传统的尊重，对自然材料的欣赏，对形式和装饰的克制。'
        },
        {
          id: '1',
          title: '- 现代北欧 极简清新 -',
          img: '../../../static/images/commodity/details-taocan1.png',
          desc: '北欧风格简洁实用，体现对传统的尊重，对自然材料的欣赏，对形式和装饰的克制。'
        }
      ],
      recommendProductList: [
        {
          id: '1',
          title: '北欧五金简洁风主卧布艺床',
          price: '3250',
          img: '../../../static/images/commodity/details-taocan2.png'
        },
        {
          id: '1',
          title: '北欧五金简洁风主卧布艺床',
          price: '3250',
          img: '../../../static/images/commodity/details-taocan2.png'
        },
        {
          id: '1',
          title: '北欧五金简洁风主卧布艺床',
          price: '3250',
          img: '../../../static/images/commodity/details-taocan2.png'
        },
        {
          id: '1',
          title: '北欧五金简洁风主卧布艺床',
          price: '3250',
          img: '../../../static/images/commodity/details-taocan2.png'
        }
      ]
    }
  },
  methods: {
  },
  mounted: function () {
    // 跳转请求获取商品信息
    var self = this
    this.$axios.get('http://192.168.1.5:8090/yjwork-2/sys/goods/getGoodsById', {
      params: {
        // goodsId: '2855'
        goodsId: '2859'
      }
    }).then(function (response) {
      self.goodsMessage = response.data.da.goodsNew
      Vue.set(self.goodsMessage, 'goodsthumbnewList', response.data.da.goodsNew.goodsthumbnew.split(';')) // 商品详情图片
      Vue.set(self.goodsMessage, 'goodszhutuoutList', response.data.da.goodsNew.goodszhutuout.split(';'))
      Vue.set(self.goodsMessage, 'goodszhutuList', response.data.da.goodsNew.goodszhutu.split(';')) // 商品轮播图
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style lang="less" scoped>
  .product-details-body{
    background-color: #f8f8f8;
    .logo{
      width: 1200px;
      margin: 0 auto;
      margin-top: 40px;
      .product-base-msg{
        margin-top: 24px;
      }
      .product-details-msg{
        margin-top: 47px;
      }
    }
  }

</style>
