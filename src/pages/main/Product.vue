<template>
  <div class="product-body">
    <!-- 头部菜单条 -->
    <div class="top-menu-body">
      <top-menu></top-menu>
    </div>
    <!-- 图片logo -->
    <div class="logo">
      <router-link to="/">
        <img src="~@/assets/images/logo/youjia_logo.png">
      </router-link>
    </div>
    <!-- 品类商品列表区域 -->
    <div class="product-list-body">
      <product-list></product-list>
    </div>
    <!-- 脚步区域 -->
    <div class="product-footer-body">
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
import TopMenu from '@/component/menu/TopMenu'
import ProductList from '@/component/product/ProductList'
import CommonFooter from '@/component/common/Footer'
export default {
  name: 'Product',
  components: {
    TopMenu, ProductList, CommonFooter
  }
}
</script>

<style lang="scss" scoped>
  .product-body{
    background-color: #f8f8f8;
    .logo{
      width: 1200px;
      margin: 0 auto;
      margin-top: 44px;
      margin-bottom: 23px;
    }
  }
</style>
