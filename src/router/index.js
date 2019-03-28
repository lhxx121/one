import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/user/Login'
import Register from '@/pages/user/Register'
import Home from '@/pages/main/Home'
import ProductDetails from '@/pages/main/ProductDetails'
import Product from '@/pages/main/Product'
// import Test from '@/component/menu/CategorySubmenu'
// import Test from '@/component/menu/TopToolBar'
// import Test from '@/component/menu/Menu'
// import Test from '@/component/common/CarouselBar'
// import Test from '@/component/product/CarouselProduct'
// 关于有家
import AboutYokea from '@/component/home/AboutYokea/AboutYokea'
// 有家设计
import DesignYokea from '@/component/home/DesignYokea/DesignYokea'
// 跳转我的资料
import MyInfo from '@/component/home/PersonalInfo/MyInfo.vue'
// 软装
import SoftCover from '@/pages/SoftCover'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/details',
      name: 'details',
      component: ProductDetails,
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      meta: {
        title: '品类'
      }
    },
    {
      path: '/aboutYokea',
      name: 'aboutYokea',
      component: AboutYokea,
      meta: {
        title: '关于有家'
      }
    },
    {
      path: '/designYokea',
      name: 'designYokea',
      component: DesignYokea,
      meta: {
        title: '有家设计'
      }
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: MyInfo,
      meta: {
        title: '我的资料'
      }
    },
    {
      path: '/softcover',
      name: 'softcover',
      component: SoftCover,
      meta: {
        title: '软装'
      }
    }
  ]
})
