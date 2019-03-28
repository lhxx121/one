<template>
  <div class="register">
    <div class="register-top">
        <top-menu ></top-menu>
    </div>
    <div class="register-body">
        <register-bar></register-bar>
    </div>
  </div>
</template>

<script>
import TopMenu from '@/component/menu/TopMenu'
import RegisterBar from '@/component/user/RegisterBar'
export default {
  name: 'Register',
  components: {
    TopMenu, RegisterBar
  }
}
</script>

<style lang="stylus" scoped>
  .register
        background url('~@/assets/images/login/background.png')
        background-repeat no-repeat
        // position fixed
        // background-size cover
        width 100%
        height 938px
        .register-body
            width 580px
            margin 0 auto
            margin-top 206px
  @media screen and (max-width:1200px) {
      .register{
          width 1200px
      }
  }
</style>
