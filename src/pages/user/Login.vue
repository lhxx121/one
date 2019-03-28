<template>
  <div class="login">
    <div class="login-top">
      <top-menu class="top-menu"></top-menu>
    </div>
    <div class="login-body">
      <login-bar class="login-bar"></login-bar>
    </div>
  </div>
</template>

<script>
import TopMenu from '@/component/menu/TopMenu'
import LoginBar from '@/component/user/LoginBar'
export default {
  name: 'Login',
  components: {
    TopMenu,
    LoginBar
  }
}
// window.onload = function () {
//   document.getElementsByClassName('login')[0].style.height = window.document.body.offsetHeight
//   console.log(window.document.body.offsetHeight)
// }
</script>

<style lang="stylus" scoped>
.login {
  background: url('~@/assets/images/login/background.png');
  background-repeat: no-repeat;
  // position fixed
  // background-size 100% 100%
  width: 100%;
  // height 100%
  height: 938px;

  .login-body {
    width: 580px;
    margin: 0 auto;
    margin-top: 206px;
  }
}

@media screen and (max-width: 1200px) {
  .login {
    width: 1200px;
  }
}
</style>
