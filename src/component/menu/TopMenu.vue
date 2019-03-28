<template>
    <div class="menu-bar">
        <div class="top-menu">
            <div class="small-menu">
                <div class="left-menu">
                    <ul>
                        <li>
                            <router-link class="menu" to="/">首页</router-link>
                        </li>
                        <li class="category">
                            <router-link class="menu" to="/product">品类</router-link>
                            <!-- 品类二级菜单组件 -->
                            <category-submenu class="category-submenu-body"></category-submenu>
                        </li>
                        <li>
                            <router-link class="menu" to="#">套餐</router-link>
                        </li>
                        <li>
                            <router-link class="menu" to="#">软装</router-link>
                        </li>
                        <li>
                            <router-link class="menu" to="#">有家社区</router-link>
                        </li>
                        <li>
                            <router-link class="menu" to="/designYokea">有家设计</router-link>
                        </li>
                        <li>
                            <router-link class="menu" to="#">线下体验馆</router-link>
                        </li>
                        <li>
                            <router-link class="menu" to="/aboutYokea">关于有家</router-link>
                        </li>
                    </ul>
                </div>
                <div class="right-menu">
                    <ul>
                        <li class="service-provider">
                            <router-link class="menu" to="#">服务商登录</router-link>
                        </li>
                        <li class="img-btn">
                            <router-link class="router-img-btn" to="#">
                                <img src="@/assets/images/menu/self.png" width=22px>
                            </router-link>
                        </li>
                        <li class="img-btn">
                            <router-link class="router-img-btn" to="#">
                                <img src="@/assets/images/menu/car.png" width=22px>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CategorySubmenu from '@/component/menu/CategorySubmenu'
export default {
  name: 'TopMenu',
  components: {
    CategorySubmenu
  }
}

</script>

<style lang="stylus" scoped>
    @import "~@/styles/varibles.styl"
    .menu-bar
        height 40px
        background-color $top-menu-bagkground
        .top-menu
            width 1200px
            margin 0 auto
            height 40px
            .small-menu
                .left-menu
                    float left
                    height 40px
                    ul
                        li
                            float left
                            padding 0
                            margin-right 35px
                            margin-top 18px
                            font-size 12px
                        .category
                            height 23px
                            .category-submenu-body
                                position absolute
                                display none
                                margin-left -170px
                                margin-top 11px
                        .category:hover
                            .category-submenu-body
                                display block
                ul
                    li
                        .menu
                            color #c7c7c7
                            text-decoration none
                            font-weight normal
                            font-stretch normal
                .right-menu
                    float right
                    height 40px
                    ul
                        li
                            float left
                            margin 0
                        .service-provider
                            padding 0
                            margin-top 18px
                            font-size 14px
                    .img-btn
                        padding 0
                        margin-left 35px
                        margin-top 8px
</style>
