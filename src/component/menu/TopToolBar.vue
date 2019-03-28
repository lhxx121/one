<template>
    <div class="tool-bar">
        <div class="tool-left">
            <ul class="tool-address">
                <li class="address-btn">
                    <router-link to="" class="router-link">
                        <img src="@/assets/images/menu/address.png">
                    </router-link>
                </li>
                <li class="address-value">
                    {{addredd}}
                </li>
                <li class="toggle-address">
                    <router-link to="" class="toggle-address-btn router-link">【切换】</router-link>
                </li>
            </ul>
            <ul class="tool-user">
                <li><router-link to="/login" class="go-login router-link">登录</router-link></li>
                <li class="middle-line">|</li>
                <li><router-link to="/register" class="to-register router-link">注册</router-link></li>
            </ul>
        </div>
        <div class="tool-right">
            <ul class="search-and-login">
                <li>
                    <form v-on:submit.prevent="submitSearch">
                        <el-input id="tool-search" class="tool-search" placeholder="搜索有家产品" v-model="searchWord">
                            <i class="el-icon-search el-input__icon search-icon" slot="suffix"></i>
                        </el-input>
                    </form>
                </li>
                <li class="fuwu-login">
                    <router-link to="" class="router-link">服务商登录</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TopToolBar',
  data: function () {
    return {
      addredd: '全国',
      searchWord: ''
    }
  },
  methods: {
    submitSearch: function () {
      this.searchWord = ''
      alert(this.searchWord)
    }
  }
}
</script>

<style lang="stylus" scoped>
    .tool-bar
        margin 0 auto
        width 1200px
        height 40px
        background-color #666666
        position relative
        .tool-left
            line-height 40px
            display inline-block
            position absolute
            left 0
            ul
                display inline-block
            .tool-address
                font-family SourceHanSansCN-Light
                font-size 14px
                font-weight normal
                font-stretch normal
                letter-spacing 0px
                color #ffffff
                .address-btn
                    width 18px
                    height 20px
                    margin-right 4px
                    margin-top 3px
                .address-value
                    margin-right 4px
                    font-family SourceHanSansCN-Light
                    font-size 14px
                    font-weight normal
                    font-stretch normal
                .toggle-address
                    .toggle-address-btn
                        font-family SourceHanSansCN-Light
                        font-size 14px
                        font-weight normal
                        font-stretch normal
            .tool-user
                margin-left 13px
                .go-login, .to-register
                    font-family SourceHanSansCN-Normal
                    font-size 14px
                    ont-weight normal
                    font-stretch normal
                .middle-line
                    color #ffffff
                    margin-left 4px
                    margin-right 4px
                    text-align center
        .tool-right
            display inline-block
            position absolute
            right 0
            .search-and-login
                text-align center
                .fuwu-login
                    margin-left 22px
                    line-height 40px
                    .router-link
                        font-family SourceHanSansCN-Normal
                        font-size 14px
                        font-weight normal
                        font-stretch normal
                        line-height 26px
                        letter-spacing 1px
                        color #ffffff
        li
            list-style none
            float left
</style>
