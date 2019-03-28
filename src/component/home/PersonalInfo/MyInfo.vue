<template>
  <div class="myinfo-contanier">
    <TopMenu></TopMenu>
    <PITopMenu></PITopMenu>

    <!-- 头像 -->
    <div class="avatar-contanier">
      <div class="avatar">
        <div class="a-content">
          <div class="a-Img">
            <img src="static/images/PersonalInfo/myinfo/avatar.png" alt>
          </div>
          <div class="content">
            <p class="userName">菥蓂</p>
            <p class="grade">有家生活小粉</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 银行卡 -->
    <div class="bankCard-contanier">
      <p class="manageCard">管理银行卡</p>
      <div class="cardLogo">
        <div class="logo">
          <img src="static/images/PersonalInfo/myinfo/bg1.png" alt>
          <div class="logoInfo">
            <img src="static/images/PersonalInfo/myinfo/logo1.png" alt>
            <p class="bankName">中国建设银行</p>
            <p class="bankSize">储蓄卡</p>
            <p class="cardName">**** **** **** 2856</p>
          </div>
        </div>
        <div class="logo">
          <img src="static/images/PersonalInfo/myinfo/bg1.png" alt>
          <div class="logoInfo">
            <img src="static/images/PersonalInfo/myinfo/logo1.png" alt>
            <p class="bankName">中国建设银行</p>
            <p class="bankSize">储蓄卡</p>
            <p class="cardName">**** **** **** 2856</p>
          </div>
        </div>
        <div class="logo">
          <img src="static/images/PersonalInfo/myinfo/bg1.png" alt>
          <div class="logoInfo">
            <img src="static/images/PersonalInfo/myinfo/logo1.png" alt>
            <p class="bankName">中国建设银行</p>
            <p class="bankSize">储蓄卡</p>
            <p class="cardName">**** **** **** 2856</p>
          </div>
        </div>
        <div class="logo">
          <img src="static/images/PersonalInfo/myinfo/bg1.png" alt>
          <div class="logoInfo">
            <img src="static/images/PersonalInfo/myinfo/logo1.png" alt>
            <p class="bankName">中国建设银行</p>
            <p class="bankSize">储蓄卡</p>
            <p class="cardName">**** **** **** 2856</p>
          </div>
        </div>

        <a href="#">
          <div class="addCard">+添加银行卡</div>
        </a>
      </div>

      <!-- 收货地址 -->
      <div class="deliverAddress">
        <p class="da-title">管理收货地址</p>
        <div class="da-main">
          <div class="da-main-left">
            <p>
              <span class="userName">菥蓂</span>
              <span class="phoneNumber">19907125251</span>
            </p>
            <p class="userAddress">
              广东省深圳市龙岗区正中时代广
              场25
            </p>
            <a href="#">
              <img src="static/images/PersonalInfo/myinfo/jiantou.png" alt class="checkInfo">
            </a>
          </div>
          <div class="da-main-rigth">
            <a href="#">
              <div class="addCard">+添加收货地址</div>
            </a>
          </div>
        </div>
      </div>
    </div>
<Footer></Footer>
  </div>
</template>


<script>
import TopMenu from "@/component/menu/TopMenu.vue";
import PITopMenu from "@/component/common/PersonalInfo/PITopMenu.vue";
import Footer from "@/component/common/Footer.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    PITopMenu,
    TopMenu,
    Footer
  }
};
</script>


<style lang="less">
.myinfo-contanier {
  width: 100%;
  min-width: 1200px;
  // padding-left: 361px;

  // 个人头像
  .avatar-contanier {
    width: 100%;
    min-width: 1200px;
    padding-top: 67px;
    .avatar {
      width: 1200px;
      margin-left: 361px;
      padding-bottom: 64px;
      border-bottom: 1px solid #ccc;
      .a-content {
        width: 200px;
        display: flex;
        justify-content: space-between;
        p {
          margin-bottom: 19px;
        }
        .userName {
          font-family: SourceHanSansCN-Normal;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #333333;
        }
        .grade {
          font-family: SourceHanSansCN-Normal;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #666666;
        }
      }
    }
  }

  // 管理银行卡
  .bankCard-contanier {
    width: 921px;
    margin-left: 361px;
    margin-top: 28px;
    padding-bottom: 280px;
    .manageCard {
      font-family: SourceHanSansCN-Normal;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #333333;
      margin-bottom: 22px;
    }
    .cardLogo {
      width: 920px;
      display: flex;
      flex-wrap: wrap;
      .logo {
        width: 292px;
        height: 130px;
        background-color: #ccc;
        margin-bottom: 13px;
        position: relative;
        margin-right: 10px;
        .logoInfo {
          width: 230px;
          height: 80px;
          position: absolute;
          top: 23px;
          left: 10px;
          img {
            float: left;
            margin-right: 10px;
            margin-bottom: 30px;
          }

          .bankName {
            font-family: SourceHanSansCN-Normal;
            font-size: 21px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 3px;
            color: #ffffff;
            margin-bottom: 4px;
          }
          .bankSize {
            font-family: SourceHanSansCN-Light;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 2px;
            color: #ffffff;
            margin-bottom: 20px;
          }
          .cardName {
            font-family: SourceHanSansCN-Light;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 2px;
            color: #ffffff;
          }
        }
      }
    }
  }
  .addCard {
    width: 120px;
    height: 60px;
    border-radius: 2px;
    border: solid 1px #666666;
    line-height: 60px;
    text-align: center;
    font-family: SourceHanSansCN-Normal;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
  }
  //   收货地址
  .deliverAddress {
    width: 426px;
    margin-top: 110px;

    .da-title {
      font-family: SourceHanSansCN-Normal;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #333333;
      margin-bottom: 22px;
    }
    .da-main {
      width: 426px;
      display: flex;
      justify-content: space-between;
    }
    .da-main-left {
      width: 292px;
      height: 130px;
      border-radius: 2px;
      border: solid 1px #666666;
      padding-top: 20px;
      padding-left: 29px;
      position: relative;
      margin-right: 10px;
      p {
        margin-bottom: 10px;
      }
      .userName {
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #282828;
      }
      .phoneNumber {
        font-family: SourceHanSansCN-Normal;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #525252;
      }
      .userAddress {
        font-family: SourceHanSansCN-Normal;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: -1px;
        color: #282828;
        width: 215px;
      }
      .checkInfo {
        position: absolute;
        bottom: 42px;
        right: 41px;
      }
    }
  }
}
</style>


