<template>
    <div class="register-bar">
        <div>
            <div class="register-back">
                <router-link to="/login" class="back-btn">
                    <img src="@/assets/images/login/register-back.png">
                </router-link>
            </div>
            <div class="register-body">
                <div class="register-form">
                    <div class="register-title">
                        <p>欢迎加入有家</p>
                    </div>
                    <div class="register-phone">
                        <el-input placeholder="请输入手机号" class="phone-input" id="phone" v-model="phone"></el-input>
                    </div>
                    <div class="phone-code">
                        <span>
                            <el-input placeholder="请输入验证码" class="code-input" id="code" v-model="code"></el-input>
                        </span>
                        <span>
                            <el-button type="info" class="get-code-btn">获取验证码</el-button>
                        </span>
                    </div>
                    <div class="register-btn">
                        <el-button type="info" class="register-submit">注册</el-button>
                    </div>
                    <div class="protocol">
                        <router-link to="" class="protocol-link">
                            <span class="register-msg">注册代表你已同意</span><span class="youjia-protocol">《有家用户协议》</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data: function () {
    return {
      phone: '',
      code: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
    .register-bar
        width 580px
        height 588px
        background-color #ffffff
        border-radius 4px
        position absolute
        font-family SourceHanSansCN-Normal
        .register-back
            width 13px
            height 26px
            position absolute
            top 16px
            left 20px
            .back-btn
                img
                    width 13px
                    height 26px
        .register-body
            .register-form
                .register-title
                    position absolute
                    top 62px
                    width 354px
                    left 113px
                    p
                        margin 0px auto
                        width 160px
                        height 24px
                        font-family SourceHanSansCN-Medium
                        font-size 24px
                        letter-spacing 2px
                        color #222222
                .register-phone
                    position absolute
                    top 166px
                    width 354px
                    left 113px
                    .phone-input
                        marigin 0
                        padding 0
                        width 352px
                        height 40px
                        font-size 18px
                        color #999999
                        letter-spacing 3px
                .phone-code
                    position absolute
                    top 250px
                    width 354px
                    left 113px
                    height 43px
                    .code-input
                        marigin 0
                        padding 0
                        height 42px
                        width 214px
                        font-size 18px
                        color #999999
                    .get-code-btn
                        padding 0
                        height 42px
                        float right
                        width 121px
                        font-size 18px
                        color #ffffff
                        text-align center
                        line-height 42px
                        border-radius 2px
                        letter-spacing 3px
                        background-color #b2b2b2
                        border none
                .register-btn
                    width 354px
                    position absolute
                    top 353px
                    left 113px
                    .register-submit
                        width 353px
                        height 50px
                        font-size 18px
                        color #ffffff
                        letter-spacing 3px
                        background-color #b2b2b2
                        border none
                        border-radius 4px
                .protocol
                    position absolute
                    top 442px
                    width 320px
                    left 132px
                    .protocol-link
                        text-decoration none
                        .register-msg
                            font-size 20px
                            font-weight normal
                            font-stretch normal
                            color #666666
                        .youjia-protocol
                            font-size 20px
                            font-weight normal
                            letter-spacing 0px
                            color #333333

</style>
