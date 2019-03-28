<template>
    <div class="category-submenu-bar">
        <ul class="category-submenu">
            <li>
                <router-link to="#" class="submenu">
                    <span class="menu-item">
                        <img src="@/assets/images/menu/category-submenu/shafa.png">
                    </span>
                    <span class="menu-text">
                        沙发
                    </span>
                </router-link>
            </li>
            <li>
                <router-link to="#" class="submenu">
                    <span class="menu-item">
                        <img src="@/assets/images/menu/category-submenu/chuang.png">
                    </span>
                    <span class="menu-text">
                        床
                    </span>
                </router-link>
            </li>
            <li>
                <router-link to="#" class="submenu">
                    <span class="menu-item">
                        <img src="@/assets/images/menu/category-submenu/guizi.png">
                    </span>
                    <span class="menu-text">
                        柜子
                    </span>
                </router-link>
            </li>
            <li>
                <router-link to="#" class="submenu">
                    <span class="menu-item">
                        <img src="@/assets/images/menu/category-submenu/dianshigui.png">
                    </span>
                    <span class="menu-text">
                        电视柜
                    </span>
                </router-link>
            </li>
            <li>
                <router-link to="#" class="submenu">
                    <span class="menu-item">
                        <img src="@/assets/images/menu/category-submenu/chaji.png">
                    </span>
                    <span class="menu-text">
                        茶几
                    </span>
                </router-link>
            </li>
            <li>
                <router-link to="#" class="submenu">
                    <span class="menu-item">
                        <img src="@/assets/images/menu/category-submenu/canzhuo.png">
                    </span>
                    <span class="menu-text">
                        餐桌
                    </span>
                </router-link>
            </li>
            <li>
                <router-link to="#" class="submenu">
                    <span class="menu-item">
                        <img src="@/assets/images/menu/category-submenu/children.png">
                    </span>
                    <span class="menu-text">
                        孩子
                    </span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CategorySubmenu'
}
</script>

<style lang="stylus" scoped>
    .category-submenu-bar
        width 1200px
        height 100px
        background-color #666666
        opacity 0.5
        .category-submenu
            padding-left 140px
            li
                float left
                text-align center
                display inline-block
                width 60px
                height 60px
                margin-top 29px
                margin-right 50px
                .submenu
                    color #ffffff
                    text-decoration none
                    font-family SourceHanSansCN-Light
                    font-size 18px
                    letter-spacing 0px
                    .menu-item
                        width 60px
                        height 40px
                        display inline-block
                        text-align center
                    .menu-text
                        width 60px
                        height 20px
                        display inline-block
                        text-align center
</style>
