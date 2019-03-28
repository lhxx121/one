<template>
    <div class="menu-bar">
        <div class="menu-header">
            <div class="logo">
                <router-link to="/">
                    <img src="@/assets/images/logo/youjia_logo.png">
                </router-link>
            </div>
            <div class="personal">
                <ul>
                    <li>
                        <router-link to>
                            <img src="@/assets/images/menu/self_max.png">
                        </router-link>
                    </li>
                    <li>
                        <router-link to class="car-btn">
                            <img src="@/assets/images/menu/car_max.png">
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="menu-content">
            <div class="menu">
                <ul>
                    <li class="menu-item" :class="{active: activeMenu === 'home'}">
                        <router-link to="/" class="menu-item-btn">首页</router-link>
                    </li>
                    <li class="menu-item" :class="{active: activeMenu === 'category'}">
                        <router-link to="/product" class="menu-item-btn">品类</router-link>
                        <div class="category-submenu">
                            <category-submenu></category-submenu>
                        </div>
                    </li>
                    <li class="menu-item" :class="{active: activeMenu === 'setMeal'}">
                        <router-link to class="menu-item-btn">套餐</router-link>
                    </li>
                    <li class="menu-item" :class="{active: activeMenu === 'softLoading'}">
                        <router-link to class="menu-item-btn">软装</router-link>
                    </li>
                    <li class="menu-item" :class="{active: activeMenu === 'community'}">
                        <router-link to class="menu-item-btn">有家社区</router-link>
                    </li>
                    <li class="menu-item" :class="{active: activeMenu === 'design'}">
                        <router-link to="/designYokea" class="menu-item-btn">有家设计</router-link>
                    </li>
                    <li class="menu-item" :class="{active: activeMenu === 'experience'}">
                        <router-link to class="menu-item-btn">线下体验馆</router-link>
                    </li>
                    <li class="menu-item last-menu-item" :class="{active: activeMenu === 'about'}">
                        <router-link to="/aboutYokea" class="menu-item-btn">关于有家</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import CategorySubmenu from "@/component/menu/CategorySubmenu";
export default {
    name: "Menu",
    props: ["activeMenuItem"],
    data: function() {
        return {
            activeMenu: this.activeMenuItem
        };
    },
    components: {
        CategorySubmenu
    }
};
</script>

<style lang="stylus" scoped>
.menu-bar {
    width: 1200px;
    margin: 0 auto;
    position: relative;

    .menu-header {
        heigth: 41px;
        margin-top: 37px;

        .logo {
            display: inline-block;
            margin-left: 477px;
        }

        .personal {
            display: inline-block;
            margin-left: 296px;

            .self-btn {
                margin-right: 42px;

                img {
                    width: 43px;
                    height: 43px;
                }
            }

            .car-btn {
                img {
                    width: 43px;
                    height: 43px;
                }
            }
        }
    }

    .menu-content {
        height: 28px;
        margin-top: 42px;

        .menu {
            .menu-item {
                margin-right: 107px;
                height: 28px;
                border-bottom: 2px solid transparentify;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: content-box;
                -ms-box-sizing: content-box;
                box-sizing: content-box;

                .menu-item-btn {
                    font-family: SourceHanSansCN-Medium;
                    font-size: 18px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #333333;
                    text-decoration: none;
                }

                .category-submenu {
                    padding-top: 4px;
                    display: none;
                    position: absolute;
                    left: -50px;
                    margin-top: 10px;
                    z-index: 99;
                }
            }

            .menu-item:hover {
                border-bottom: 2px solid #ff6f61;

                .category-submenu {
                    display: block;
                }
            }

            .active {
                color: #ff6f61;
                border-bottom: 2px solid #ff6f61;

                .menu-item-btn {
                    color: #ff6f61;
                }
            }

            .last-menu-item {
                margin-right: 0;
            }
        }
    }

    li {
        float: left;
    }
}
</style>
