<template>
  <div class="login-bar">
    <div class="login-body">
      <div
        class="phone-login"
        v-if="hiddenPasswordLogin == 'phone'"
      >
        <div class="login-type-title">
          <ul>
            <li class="login-type active">快捷登录</li>
            <li class="separation-line">|</li>
            <li
              class="login-type"
              @click="toggleloginType"
            >密码登录</li>
          </ul>
        </div>
        <div class="login-phone">
          <el-input
            placeholder="请输入手机号"
            class="phone-input"
            id="phone"
            v-model="phone"
          ></el-input>
        </div>
        <div class="code-div">
          <span>
            <el-input
              placeholder="请输入验证码"
              class="code-input"
              id="code"
              v-model="code"
            ></el-input>
          </span>
          <span class="get-code-span">
            <el-button
              type="info"
              class="get-code-btn"
            >获取验证码</el-button>
          </span>
        </div>
        <div>
          <el-button
            type="info"
            class="login-submit"
          >登录</el-button>
        </div>
        <div class="weixin">
          <router-link
            to="#"
            class="weixin-login"
          >微信登录 ></router-link>
        </div>
        <div class="register">
          <router-link
            to="/register"
            class="register-btn"
          >
            <font class="message">还没有账号？</font>立即注册
          </router-link>
        </div>
      </div>
      <div
        class="password-login"
        v-if="hiddenPasswordLogin == 'password'"
      >
        <div class="login-type-title">
          <ul>
            <li
              class="login-type"
              @click="toggleloginType"
            >快捷登录</li>
            <li class="separation-line">|</li>
            <li class="login-type active">密码登录</li>
          </ul>
        </div>
        <div class="login-phone">
          <el-input
            placeholder="请输入手机号"
            class="phone-input"
            id="phone"
            v-model="phone"
          ></el-input>
        </div>
        <div class="passwor-div">
          <span>
            <el-input
              placeholder="请输入密码"
              class="password"
              id="password"
              v-model="password"
              show-password
            ></el-input>
          </span>
        </div>
        <div>
          <el-button
            type="info"
            class="login-submit"
            @click="login"
          >登录</el-button>
        </div>
        <div class="resetPass">
          <router-link
            to="#"
            class="forget-password"
          >忘记密码</router-link>
          <router-link
            to="#"
            class="weixin-login"
          >微信登录 ></router-link>
        </div>
        <div class="register">
          <router-link
            to="/register"
            class="register-btn"
          >
            <font class="message">还没有账号？</font>立即注册
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
// import { getList } from '../API/request.js'
export default {
  name: 'LoginBar',
  data: function () {
    return {
      hiddenPasswordLogin: 'phone', // 标记当前用那种登录方式
      phone: '',
      code: '',
      password: '',
      loginType: '1'
    }
  },
  methods: {
    // 切换登录方式
    toggleloginType: function () {
      if (this.hiddenPasswordLogin === 'password') {
        this.hiddenPasswordLogin = 'phone'
      } else {
        this.hiddenPasswordLogin = 'password'
      }
    },
    // 登录
    login: function () {
      // let elMessage = this.$elMessage
      console.log(this.phone + ';' + this.password + ';' + this.loginType)
      var data = qs.stringify({page: 1, limit: 10})
      console.log(data)
      // getList(data).then(data => {
      //   debugger
      //   console.log(data)
      // })
      var that = this
      that.$api.aa(data).then(data => {
        console.log(data)
      })
      that.$api.bb(data).then(data => {
        console.log(data)
      })
      that.$api.cc(data).then(data => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/varibles.styl';

.login-bar {
  width: 580px;
  height: 588px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid transparent;
  position: relative;
  border: none;

  .login-body {
    .phone-login, .password-login {
      .login-type-title {
        position: absolute;
        top: 62px;
        left: 139px;

        ul {
          li {
            float: left;
            font-size: 24px;
            color: #999999;
            width: 105px;
          }
        }

        .login-type {
          font-family: SourceHanSansCN-Medium;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 2px;
          color: #999999;
        }

        .active {
          color: #222222;
        }

        .separation-line {
          width: 100px;
          text-align: center;
        }
      }

      .login-phone {
        position: absolute;
        top: 166px;
        width: 354px;
        left: 113px;

        .phone-input {
          marigin: 0;
          padding: 0;
          width: 352px;
          height: 40px;
          font-size: 18px;
          color: #999999;
          letter-spacing: 3px;
        }
      }

      .code-div {
        position: absolute;
        top: 250px;
        width: 354px;
        left: 113px;
        height: 43px;

        .code-input {
          marigin: 0;
          padding: 0;
          height: 50px;
          width: 214px;
          font-size: 18px;
          color: #999999;
        }

        .get-code-btn {
          padding: 0;
          height: 42px;
          float: right;
          width: 121px;
          font-size: 18px;
          color: #ffffff;
          text-align: center;
          line-height: 42px;
          border-radius: 2px;
          letter-spacing: 3px;
          background-color: #b2b2b2;
          border: none;
        }
      }

      .passwor-div {
        position: absolute;
        top: 250px;
        left: 113px;

        .password {
          marigin: 0;
          padding: 0;
          height: 50px;
          width: 352px;
          font-size: 18px;
          color: #999999;
        }
      }

      .login-submit {
        width: 353px;
        height: 42px;
        font-size: 18px;
        color: #ffffff;
        position: absolute;
        top: 353px;
        left: 113px;
        letter-spacing: 3px;
        background-color: #b2b2b2;
        border-radius: 4px;
        border: none;
      }

      .weixin {
        text-align: center;
        position: absolute;
        top: 431px;
        left: 250px;
      }

      .register {
        position: absolute;
        top: 528px;
        left: 193px;
      }

      .weixin-login {
        font-size: 18px;
        text-decoration: none;
        color: #666666;
        text-align: center;
        width: 350px;
        padding: 0;
      }

      .resetPass {
        position: absolute;
        top: 415px;
        left: 113px;

        .forget-password, .weixin-login {
          font-size: 18px;
          text-decoration: none;
          color: #666666;
          width: 350px;
          padding: 0;
        }

        .weixin-login {
          margin-left: 190px;
        }
      }

      .register-btn {
        font-size: 20px;
        text-decoration: none;
        color: #666666;
        text-align: center;
        width: 350px;
        padding: 0;
      }

      .message {
        text-decoration: none;
        text-align: center;
        width: 350px;
        padding: 0;
        font-size: 20px;
        color: #666666;
      }
    }
  }
}
</style>
