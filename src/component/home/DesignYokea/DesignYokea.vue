<template>
  <div class="designYokea">
    <top-tool-bar></top-tool-bar>
    <Menu></Menu>

    <!-- 开始设计banner -->
    <div class="beginDesign">
      <img src="static/images/DesignYokea/banner.png" alt width="100%">
      <a href>
        <div class="logo">
          <img src="static\images\DesignYokea\yLogo.png" alt>
        </div>
        <p class="link">美好生活 有家开始</p>
      </a>

      <a href>
        <div class="b-content">
          <span class="b-s">开始设计</span>
          <img src="static\images\DesignYokea\logojiantou.png" alt class="bImg">
        </div>
      </a>
    </div>

    <!-- 五大优势 -->
    <div class="ad">
      <div class="content">
        <div class="c-header">YOKEA 五大优势</div>
        <div class="c-middle">
          <span>50+</span>国内一线品牌，
          <span>50+</span>家供应商。通过完整产品线给客户提供适应其家居风格的产品，公司以最专业的设计师为客户提供完善的家具搭配设计方案。设计和工程的有效延伸，完美诠释家具设计风格、颜色、材质等。最大程度优化用户体验，有家生活本着“服务”的核心理念，公司充分运用互联网资源优势，以及公司卓越的线下营销团队，为产品供应厂商、合作经销商、消费者提供综合性服务。
        </div>
        <div class="c-footer">
          <el-row type="flex" justify="space-around">
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <img src="static/images/DesignYokea/noinstall.png" alt>
                <p>无需安装</p>
                <p>全程免费</p>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple-light">
                <img src="static\images\DesignYokea\xuehui.png" alt>
                <p>傻瓜式操作</p>
                <p>三分钟学会</p>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <img src="static\images\DesignYokea\xiaoguotu.png" alt>
                <p>数秒生成效果图</p>
                <p>行业遥遥领先</p>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple-light">
                <img src="static\images\DesignYokea\360.png" alt>
                <p>360°逼真全景图</p>
                <p>提前预知2未来的家</p>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <img src="static\images\DesignYokea\tuku.png" alt>
                <p>百万户型图库</p>
                <p>轻松获得你的户型</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <!-- 设计案例 -->
    <div class="designExample">
      <div class="introduce">
        <p class="p-header">YOKEA 设计案列</p>
        <p
          class="p-content"
        >有家推出360°逼真全景VR虚拟现实体验技术，合理规范的方案报价与预算，防止超过预算或资金不足，完美诠释家具设计风格、颜色、材质等。最大程度优化用户体验，有家生活本着“服务”的核心理念，公司充分运用互联网资源优势，百万户型任你体验、挑选。</p>
      </div>
      <div class="examples">
        <el-row :gutter="10">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-row type="flex" justify="space-between">
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <img src="static\images\DesignYokea\1.png" alt>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple-light">
                    <div class="e-item">
                      <p class="e-r-header">客厅</p>
                      <p class="e-r-middle">舒适的客厅让你忘掉一天的疲惫，享受与家人欢聚时光。</p>
                      <a href>
                        <p class="e-r-footer">
                          <span>查看更多</span>
                          <img src="static\images\DesignYokea\jiantou.png" alt>
                        </p>
                      </a>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-row>
                <el-col :span="12">
                  <div class="grid-content bg-purple-light">
                    <div class="e-item">
                      <p class="e-r-header">厨房</p>
                      <p class="e-r-middle">装下锅碗瓢盆，不舍热爱和美食。</p>
                      <a href>
                        <p class="e-r-footer-right">
                          <span>查看更多</span>
                          <img src="static\images\DesignYokea\jiantou.png" alt>
                        </p>
                      </a>
                    </div>
                  </div>
                </el-col>

                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <img src="static\images\DesignYokea\2.png" alt>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-row>
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <img src="static\images\DesignYokea\3.png" alt>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple-light">
                    <div class="e-item">
                      <p class="e-r-header">卧室</p>
                      <p class="e-r-middle">安静不是放松，舒适自然才是。</p>
                      <a href>
                        <p class="e-r-footer">
                          <span>查看更多</span>
                          <img src="static\images\DesignYokea\jiantou.png" alt>
                        </p>
                      </a>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-row>
                <el-col :span="12">
                  <div class="grid-content bg-purple-light">
                    <div class="e-item">
                      <p class="e-r-header">自由设计</p>
                      <p class="e-r-middle">轻松完成你的设计方案，秒出效果图 享受360°全景消费服务。</p>
                      <a href>
                        <p class="e-r-footer-right">
                          <span>查看更多</span>
                          <img src="static\images\DesignYokea\jiantou.png" alt>
                        </p>
                      </a>
                    </div>
                  </div>
                </el-col>

                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <img src="static\images\DesignYokea\4.png" alt>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 设计步骤 -->
    <div class="styleStep-contanier">
      <div class="s-content">
        <p class="c-title">家的样子 三步搞定</p>

        <div class="c-main">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="7">
              <div class="grid-content">
                <div class="m-header"></div>
                <p class="m-middle">画户型</p>
                <p class="m-footer">支持搜索、自己画和导入CAD三种方式</p>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="grid-content">
                <div class="grid-content">
                  <div class="m-header"></div>
                  <p class="m-middle">去装修</p>
                  <p class="m-footer">
                    点击、拖动、摆放家具
                    软装硬装轻松完成
                  </p>
                </div>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="grid-content">
                <div class="grid-content">
                  <div class="m-header"></div>
                  <p class="m-middle">渲染图</p>
                  <p class="m-footer">
                    一键渲染，10秒即可获取
                    照片级效果图
                  </p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <!-- 设计我的家 -->
    <div class="designHome">
      <img src="static\images\DesignYokea\di.png" alt width="100%">
      <a href>
        <div class="d-link">
          <span>设计我的家</span>
          <img src="static\images\DesignYokea\youjiantou.png" alt="">
        </div>
      </a>
    </div>
<Footer></Footer>

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
.designYokea {
  /* 开始设计 */
  .beginDesign {
    width: 100%;
    min-width: 960px;
    margin-top: 29px;
    // background: url(/static/images/DesignYokea/banner.png) no-repeat center center;
    // background-size: cover;
    position: relative;
    .logo {
      position: absolute;
      top: 113px;
      left: 786px;
      text-align: center;
    }
    .link {
      font-family: SourceHanSansCN-Medium;
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 11px;
      color: #fefefe;
      position: absolute;
      margin-left: 3px;
      position: absolute;
      top: 206px;
      left: 798px;
    }
    .b-content {
      width: 260px;
      height: 80px;
      background-color: #ff6f61;
      border-radius: 14px;
      position: absolute;
      top: 293px;
      left: 828px;
      text-align: center;
      line-height: 80px;
      .b-s {
        width: 156px;
        height: 33px;
        font-family: SourceHanSansCN-Medium;
        font-size: 34px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 8px;
        color: #fefefe;
      }
      .bImg {
        vertical-align: middle;
        position: absolute;
        top: 25px;
      }
    }
  }

  // 五大优势
  .ad {
    width: 100%;
    min-width: 960px;
    margin: 0 auto;
    margin-top: 104px;
    .content {
      width: 1228px;
      margin: 0 auto;
      .c-header {
        text-align: center;
        font-family: SourceHanSansCN-Medium;
        font-size: 52px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 5px;
        color: #080a10;
      }
      .c-middle {
        font-family: SourceHanSansCN-Regular;
        font-size: 22px;
        font-weight: normal;
        letter-spacing: 2px;
        color: #080a10;
        margin-top: 57px;
        span {
          font-family: SourceHanSansCN-Bold;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 2px;
          color: #080a10;
        }
      }
      .c-footer {
        width: 1159px;
        margin: 0 auto;
        margin-top: 51px;

        .el-row {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .el-col {
          border-radius: 4px;
        }
        .grid-content {
          border-radius: 4px;
          min-height: 36px;
          text-align: center;
          padding-top: 39px;
          img {
            margin-bottom: 33px;
            height: 100px;
          }
          p {
            font-family: SourceHanSansCN-Medium;
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            color: #080a10;
          }
        }
        .row-bg {
          padding: 10px 0;
        }
      }
    }
  }

  // 设计案例
  .designExample {
    width: 100%;
    min-width: 960px;
    background: url(/static/images/DesignYokea/anli.png) no-repeat center center;
    background-size: cover;
    margin-top: 208px;
    padding-bottom: 203px;
    .introduce {
      width: 1136px;
      height: 244px;
      margin: 0 auto;
      padding-top: 56px;
      text-align: center;
      p {
        font-family: SourceHanSansCN-Medium;
        font-size: 52px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 5px;
        color: #ffffff;
      }
      .p-header {
        font-family: SourceHanSansCN-Medium;
        font-size: 48px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 2px;
        color: #ffffff;
        margin-bottom: 55px;
      }
      .p-content {
        width: 1136px;
        height: 140px;
        font-family: SourceHanSansCN-Regular;
        font-size: 28px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 38px;
        letter-spacing: 3px;
        color: #ffffff;
      }
    }
    .examples {
      width: 1200px;
      margin: 0 auto;
      margin-top: 67px;
      // margin-bottom: 100px;

      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
      }
      .bg-purple {
        background-color: #fff;
      }
      .bg-purple-light {
        background-color: #fff;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
        height: 300px;
      }

      .e-item {
        padding-top: 59px;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 227px;

        .e-r-header {
          font-family: SourceHanSansCN-Regular;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 2px;
          color: #010306;
          margin-bottom: 30px;
        }
        .e-r-middle {
          font-family: SourceHanSansCN-Regular;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 22px;
          letter-spacing: 2px;
          color: #010306;
          // margin-bottom: 70px;
        }
        .e-r-footer {
          width: 137px;
          height: 40px;
          background-color: #b8bdc2;
          border-radius: 6px;
          text-align: center;
          line-height: 40px;
          margin-left: 118px;
          // bottom: 10px;
          span {
            font-family: SourceHanSansCN-Regular;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 4px;
            color: #24262a;
          }
        }

        .e-r-footer-right {
          width: 137px;
          height: 40px;
          background-color: #b8bdc2;
          border-radius: 6px;
          text-align: center;
          line-height: 40px;
          //  margin-left: 0px;
          // margin-bottom: 35px;
          span {
            font-family: SourceHanSansCN-Regular;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 4px;
            color: #24262a;
          }
        }
      }
    }
  }

  // 设计步骤
  .styleStep-contanier {
    width: 100%;
    min-width: 960px;
    padding-top: 150px;
    padding-bottom: 88px;
    .s-content {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      .c-title {
        font-family: SourceHanSansCN-Medium;
        font-size: 52px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 38px;
        letter-spacing: 5px;
        color: #080a10;
        margin-bottom: 141px;
      }
      .c-main {
        .m-header {
          height: 300px;
          background-color: #bebebe;
          margin-bottom: 38px;
        }
        .m-middle {
          font-family: SourceHanSansCN-Medium;
          font-size: 32px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 3px;
          color: #080a10;
        }
        .m-footer {
          font-family: SourceHanSansCN-Medium;
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 2px;
          color: #080a10;
        }
        .el-row {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .el-col {
          border-radius: 4px;
        }

        .grid-content {
          border-radius: 4px;
          min-height: 36px;
        }
        .row-bg {
          padding: 10px 0;
          background-color: #f9fafc;
        }
      }
    }
  }

  // 设计我的家
  .designHome {
    width: 100%;
    min-width: 960px;
    position: relative;
    .d-link {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-150px, 19px);
      span {
        width: 192px;
        height: 34px;
        font-family: SourceHanSansCN-Medium;
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 38px;
        letter-spacing: 4px;
        color: #ccc;
      }
    }
  }
}
</style>


