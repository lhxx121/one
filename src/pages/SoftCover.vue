<template>
  <div class="softcover-container">
    <TopToolBar></TopToolBar>
    <Menu></Menu>
    <!-- 头部banner -->
    <div class="topBanner">
      <img src="static/images/SoftCover/图层2.png" alt width="100%">
    </div>

    <!-- 软装内容 -->
    <div class="softMiddle">
      <div class="softMain">
        <!-- 目录 -->
        <ul class="softContent">
          <li>
            <a href="#">家具</a>
          </li>
          <li>
            <a href="#">饰品</a>
          </li>
          <li>
            <a href="#">灯饰</a>
          </li>
          <li>
            <a href="#">布艺织物</a>
          </li>
          <li>
            <a href="#">花艺及绿化造景</a>
          </li>
        </ul>
      </div>

      <!-- 商品列表 -->
      <div class="softList">
        <a href="#">
          <div class="listItem">
            <img src="static/images/SoftCover/图层3.png" alt width="100%">
            <p class="l-title">现代简约建筑装饰挂画</p>
            <p class="l-middle">￥219起</p>
            <p class="l-footer">3色可选</p>
          </div>
        </a>
        <a href="#">
          <div class="listItem">
            <img src="static/images/SoftCover/图层4.png" alt width="100%">
            <p class="l-title">现代简约建筑装饰挂画</p>
            <p class="l-middle">￥219起</p>
            <p class="l-footer">3色可选</p>
          </div>
        </a>
        <a href="#">
          <div class="listItem">
            <img src="static/images/SoftCover/图层5.png" alt width="100%">
            <p class="l-title">现代简约建筑装饰挂画</p>
            <p class="l-middle">￥219起</p>
            <p class="l-footer">3色可选</p>
          </div>
        </a>
        <a href="#">
          <div class="listItem">
            <img src="static/images/SoftCover/图层6.png" alt width="100%">
            <p class="l-title">现代简约建筑装饰挂画</p>
            <p class="l-middle">￥219起</p>
            <p class="l-footer">3色可选</p>
          </div>
        </a>
        <a href="#">
          <div class="listItem">
            <img src="static/images/SoftCover/图层7.png" alt width="100%">
            <p class="l-title">现代简约建筑装饰挂画</p>
            <p class="l-middle">￥219起</p>
            <p class="l-footer">3色可选</p>
          </div>
        </a>
        <a href="#">
          <div class="listItem">
            <img src="static/images/SoftCover/图层8.png" alt width="100%">
            <p class="l-title">现代简约建筑装饰挂画</p>
            <p class="l-middle">￥219起</p>
            <p class="l-footer">3色可选</p>
          </div>
        </a>
        <a href="#">
          <div class="listItem">
            <img src="static/images/SoftCover/图层9.png" alt width="100%">
            <p class="l-title">现代简约建筑装饰挂画</p>
            <p class="l-middle">￥219起</p>
            <p class="l-footer">3色可选</p>
          </div>
        </a>
        <a href="#">
          <div class="listItem">
            <img src="static/images/SoftCover/图层10.png" alt width="100%">
            <p class="l-title">现代简约建筑装饰挂画</p>
            <p class="l-middle">￥219起</p>
            <p class="l-footer">3色可选</p>
          </div>
        </a>
        <a href="#">
          <div class="listItem">
            <img src="static/images/SoftCover/图层11.png" alt width="100%">
            <p class="l-title">现代简约建筑装饰挂画</p>
            <p class="l-middle">￥219起</p>
            <p class="l-footer">3色可选</p>
          </div>
        </a>
        <a href="#">
          <div class="listItem">
            <img src="static/images/SoftCover/图层12.png" alt width="100%">
            <p class="l-title">现代简约建筑装饰挂画</p>
            <p class="l-middle">￥219起</p>
            <p class="l-footer">3色可选</p>
          </div>
        </a>
        <a href="#">
          <div class="listItem">
            <img src="static/images/SoftCover/图层13.png" alt width="100%">
            <p class="l-title">现代简约建筑装饰挂画</p>
            <p class="l-middle">￥219起</p>
            <p class="l-footer">3色可选</p>
          </div>
        </a>
        <a href="#">
          <div class="listItem">
            <img src="static/images/SoftCover/图层14.png" alt width="100%">
            <p class="l-title">现代简约建筑装饰挂画</p>
            <p class="l-middle">￥219起</p>
            <p class="l-footer">3色可选</p>
          </div>
        </a>
      </div>

      <!-- footer -->
<Footer></Footer>
    </div>
  </div>
</template>



<script>
import TopToolBar from "@/component/menu/TopToolBar";
import Menu from "@/component/menu/Menu";
import Footer from "@/component/common/Footer.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    TopToolBar,
    Menu,
    Footer
  }
};
</script>


<style lang="less">
.softcover-container {
  width: 100%;
  min-width: 1200px;

  // 软装内容
  .softMiddle {
    width: 100%;
    min-width: 1200px;
    .softMain {
      width: 1200px;
      margin: 0 auto;
      margin-top: 52px;
      .softContent {
        width: 820px;
        margin: 0 auto;
        margin-bottom: 35px;
        li {
          float: left;
          margin-right: 75px;
          a {
            font-family: SourceHanSansCN-Regular;
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            color: #333333;
          }
        }
      }
    }

    .softList {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: 35px;
      .listItem {
        width: 297px;
        height: 410px;
        // background-color: #ccc;
        margin-bottom: 57px;
        text-align: center;
        img {
          margin-bottom: 21px;
        }
        p {
          margin-bottom: 7px;
        }
        .l-title {
          font-family: SourceHanSansCN-Medium;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 2px;
          color: #333333;
        }
        .l-middle {
          font-family: SourceHanSansCN-Regular;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 1px;
          color: #ff6f61;
        }
        .l-footer {
          font-family: SourceHanSansCN-Regular;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 1px;
          color: #999999;
        }
      }
    }
  }
}
</style>

