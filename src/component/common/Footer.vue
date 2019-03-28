<template>
    <div class="footer-bar">
        <div class="footer-box">
            <!-- 底部图标信息 -->
            <div class="footer-top">
                <ul>
                    <li class="label">
                        <span>
                            <img src="@/assets/images/footer/mall.png">
                        </span>
                        <span>
                            <p>线上商城+体验馆</p>
                        </span>
                    </li>
                    <li class="label">
                        <span>
                            <img src="@/assets/images/footer/real.png">
                        </span>
                        <span>
                            <p>100%正品</p>
                        </span>
                    </li>
                    <li class="label">
                        <span>
                            <img src="@/assets/images/footer/doubleCheck.png">
                        </span>
                        <span>
                            <p>双重质检</p>
                        </span>
                    </li>
                    <li class="label">
                        <span>
                            <img src="@/assets/images/footer/brandSupply.png">
                        </span>
                        <span>
                            <p>大牌供应商</p>
                        </span>
                    </li>
                    <li class="label">
                        <span>
                            <img src="@/assets/images/footer/sevenDay.png">
                        </span>
                        <span>
                            <p>七天退货</p>
                        </span>
                    </li>
                    <li class="label">
                        <span>
                            <img src="@/assets/images/footer/xingjiabi.png">
                        </span>
                        <span>
                            <p>性价比</p>
                        </span>
                    </li>
                    <li class="label last-label">
                        <span>
                            <img src="@/assets/images/footer/gaokoubei.png">
                        </span>
                        <span>
                            <p>万千口碑</p>
                        </span>
                    </li>
                </ul>
            </div>
            <!-- 底部服务、引导 -->
            <div class="footer-bottom">
                <ul>
                    <!-- 双重质检链接 -->
                    <li class="link-block">
                        <ul>
                            <li class="link-title">双重质检</li>
                            <li>
                                <router-link to="" class="router-link">购物流程</router-link>
                            </li>
                             <li>
                                <router-link to="" class="router-link">支付方式</router-link>
                            </li>
                             <li>
                                <router-link to="" class="router-link">发票制度</router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- 服务保障链接 -->
                    <li class="link-block">
                        <ul>
                            <li class="link-title">服务保障</li>
                            <li>
                                <router-link to="" class="router-link">100%正品</router-link>
                            </li>
                             <li>
                                <router-link to="" class="router-link">免费送货</router-link>
                            </li>
                            <li>
                                <router-link to="" class="router-link">七天退换</router-link>
                            </li>
                            <li>
                                <router-link to="" class="router-link">三年质保</router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- 配送方式链接 -->
                    <li class="link-block">
                        <ul>
                            <li class="link-title">配送方式</li>
                            <li>
                                <router-link to="" class="router-link">物流配送</router-link>
                            </li>
                             <li>
                                <router-link to="" class="router-link">安装说明</router-link>
                            </li>
                            <li>
                                <router-link to="" class="router-link">收货指南</router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- 售后服务链接 -->
                    <li class="link-block">
                        <ul>
                            <li class="link-title">售后服务</li>
                            <li>
                                <router-link to="" class="router-link">退换货政策</router-link>
                            </li>
                             <li>
                                <router-link to="" class="router-link">退换货流程</router-link>
                            </li>
                            <li>
                                <router-link to="" class="router-link">维护补件</router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- 关于我们链接 -->
                    <li class="link-block">
                        <ul>
                            <li class="link-title">关于我们</li>
                            <li>
                                <router-link to="" class="router-link">公司简介</router-link>
                            </li>
                            <li>
                                <router-link to="" class="router-link">加入我们</router-link>
                            </li>
                            <li>
                                <router-link to="" class="router-link">招商合作</router-link>
                            </li>
                            <li>
                                <router-link to="" class="router-link">加盟有家</router-link>
                            </li>
                            <li>
                                <router-link to="" class="router-link">有家设计</router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- 扫码关注微信 -->
                    <li class="link-block erweima">
                        <ul>
                            <li>
                                扫码关注官方微信
                            </li>
                            <li>
                                <img src="@/assets/images/footer/gongzhonghao.png">
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- 版权信息 -->
            <div class="footer-copyring">
                <p>&copy; 2005-2019 有家生活 版权所有，并保留所有权利。 粤ICP备18044771号-1</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonFooter'
}
</script>

<style lang="stylus" scoped>
    @import "~@/styles/varibles.styl"
    .footer-bar
        background-color $footer-bagkground
        // 底部组件外边框
        .footer-box
            margin 0 auto
            width 1200px
            height: 627px
            // 顶部图标
            .footer-top
                height 280px
                .label
                    float left
                    display inline-block
                    width 120px
                    margin-right 60px
                    margin-top 54px
                    span
                        display inline-block
                        width 120px
                        height 80px
                        text-align center
                        img
                            width 80px
                            height 80px
                        p
                            font-family SourceHanSansCN-Medium
                            font-size 14px
                            font-weight normal
                            font-stretch normal
                            line-height 38px
                            letter-spacing 1px
                            color #ffffff
                .last-label
                    margin-right 0
            // 底部购物指引、服务
            .footer-bottom
                width 1100px
                height: 311px
                margin 0 auto
                .link-block
                    width 76px
                    float left
                    margin-right 120px
                    text-align center
                    li
                        font-family SourceHanSansCN-Regular
                        font-size 12px
                        font-weight normal
                        letter-spacing 1px
                        color #ffffff
                        margin-bottom 10px
                    .link-title
                        font-family SourceHanSansCN-Bold
                        font-size 14px
                        line-height 26px
                        letter-spacing 1px
                        color #ffffff
                .erweima
                    width 104px
                    margin-right 0
            // 版权信息
            .footer-copyring
                width 1200px
                text-align center
                p
                    font-family SourceHanSansCN-Regular
                    font-size 12px
                    font-weight normal
                    font-stretch normal
                    line-height 35px
                    letter-spacing 1px
                    color #ffffff
</style>
