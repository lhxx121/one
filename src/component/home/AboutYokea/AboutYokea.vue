<template>
  <div class="aboutYokea-container">
    <top-tool-bar></top-tool-bar>
    <Menu></Menu>

    <!-- banner图片 -->
    <div class="bannerImg">
      <img src="static/images/AboutYokea/banner.png" height="600px" alt>
    </div>

    <!-- 三个小banner -->
    <div class="threeBan">
      <ul class="ulThreeBan">
        <li>
          <img src="static/images/AboutYokea/taozhi.png" alt>
          <p>获顶级资本投资</p>
        </li>
        <li class="middleLi">
          <img src="static/images/AboutYokea/youzhituandui.png" alt>
          <p>获顶级资本投资</p>
        </li>
        <li>
          <img src="static/images/AboutYokea/shuangpingtai.png" alt>
          <p>获顶级资本投资</p>
        </li>
      </ul>
    </div>

    <!-- 文字部分 -->
    <div class="describe">
      <P>[线上商城]＋[线下体验馆]</P>
      <P>为用户打造一个高性价比家具购买平台</P>
    </div>

    <!-- 品牌实力 -->
    <div class="brandStr">
      <!-- 阴影部分 -->
      <div class="bgc"></div>
      <!-- 轮播图图片部分 -->
      <div class="brandImg">
        <ul class="imgUl">
          <!-- <li>
            <img src="static/images/AboutYokea/xianshangxianxiashili.png" alt>
          </li>
          <li></li>
          <li></li>-->

          <el-carousel height="423px">
            <el-carousel-item v-for="item in brandImgList" :key="item.id">
              <img :src="item" alt>
            </el-carousel-item>
          </el-carousel>
        </ul>
        <!-- 小圆点 -->
        <div class="circle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!-- 右边文字部分 -->
      <div class="brandStrL">
        <p>
          全线产品：
          <span>
            产品风格涵盖北欧、意式极简、欧美、轻奢、现代、
            新中式、儿童等50多个国内一线品牌约100余家供应商。
          </span>
        </p>
        <p>
          全线产品：
          <span>
            产品风格涵盖北欧、意式极简、欧美、轻奢、现代、
            新中式、儿童等50多个国内一线品牌约100余家供应商。
          </span>
        </p>
        <p>
          全线产品：
          <span>
            产品风格涵盖北欧、意式极简、欧美、轻奢、现代、
            新中式、儿童等50多个国内一线品牌约100余家供应商。
          </span>
        </p>
        <p>
          全线产品：
          <span>
            产品风格涵盖北欧、意式极简、欧美、轻奢、现代、
            新中式、儿童等50多个国内一线品牌约100余家供应商。
          </span>
        </p>
      </div>
    </div>

    <!-- 发展部分 -->
    <div class="develop">
      <!-- 图片部分 -->
      <div class="developImg">
        <img src="static/images/AboutYokea/fazhan .png" alt>
      </div>
      <!-- 两个轮播图 -->
      <div class="devSwiper">
        <ul class="devSwiperUl">
          <li>
            <div>
              <img src="static/images/AboutYokea/youjia -1.png" alt>
              <p>
                【有家生活】致力于为80,90后年轻群体建立一个高性价比
                的家居购物体验平台，用一半的价格就能买到同品质家具。
                我们始终坚持以缔造品味艺术、传播居家艺术为目标，以提
                升大家居家品位为己任，对每个家庭的居家环保负责任，致
                力于追求中国家居业的美学发展。
              </p>
            </div>
            <div>
              <img src="static/images/AboutYokea/youjia-2.png" alt>
              <p>
                从2018年成立至今，短短一年， 【有家生活】已获得了国内
                顶尖资本投资数百万天使资金。，YOKEA、家居行业专家优
                创始团队倾力打造。开启家具直采时代，结合移动智能终端
                销售辅助体系，4D云设计的VR虚拟场景化销售方式。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 体验店 -->
    <div class="expS">
      <!-- 头部文字 -->
      <div class="expSHeader">
        <span></span>有家全国线下体验店
        <p>our showrooms</p>
      </div>
      <div class="expSImgC">
        <div class="expSImg">
          <img src="static/images/AboutYokea/hubeidian .png" alt>
          <div class="expSImgC-word">
            <span style="margin-right: 20px">湖北武汉店</span>
            <span>汉口香江家具城4楼</span>
          </div>
        </div>
        <div class="expSImg">
          <img src="static/images/AboutYokea/longhuadian .png" alt>
          <div class="expSImgC-word">
            <span>深圳龙华店</span>
            <span>澜园招商体验店</span>
          </div>
        </div>
        <div class="expSImg">
          <img src="static/images/AboutYokea/changchundian.png" alt>
          <div class="expSImgC-word">
            <span>吉林长春店</span>
            <span>吉盛伟邦B座5楼</span>
          </div>
        </div>
      </div>
      <div class="expSFooter">
        <a href="#">
          <span>查看更多有家线下店</span>
          <img src="static/images/AboutYokea/chakangengduoxianxiadian.png" alt>
        </a>
      </div>
    </div>

    <!-- 合作商 -->
    <div class="cooperative">
      <div class="c-header">
        <p class="ch-word">品牌合作供应商</p>
        <p class="ch-eng">Cooperative supplier</p>
      </div>
      <div class="c-main">
        <ul>
          <li>
            <img src="static\images\AboutYokea\logo图\one-1.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\two-2.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\three.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\four.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\five.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\six.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\seven7.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\8ei.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\9n.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\10.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\11.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\12v.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\13s.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\19lkj.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\15sd.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\16fccx.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\17ok.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\18cm.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\19hsdhd.png" alt>
          </li>
          <li>
            <img src="static\images\AboutYokea\logo图\20fjghn.png" alt>
          </li>
        </ul>
      </div>
    </div>

    <!-- 有家未来 -->
    <div class="Future">
      <!-- 背景图片 -->
      <div class="fImg">
        <img src="static/images/AboutYokea/youke未来.png" alt>
      </div>
      <!-- 轮播图 -->
      <!-- <div class="fUl-contanier">
        <ul class="fUl">
          <li></li>
        </ul>
        <div classs="arrows">
          <span class="arrowsL"><img src="static/images/AboutYokea/zuojiantou.png" alt=""></span>
          <span class="arrowsR"><img src="static/images/AboutYokea/youjiantou.png" alt=""></span>
        </div>
      </div>-->
      <div class="fUl-contanier">
        <template>
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item
              v-for="item in futurnSwiperList"
              :key="item"
              class="el-carouse-fix-height"
            >
              <div class="f-swiper">
                <div class="f-swiper1">
                  <img :src="item[0]" alt>
                  <p class="f-s-p1">2019</p>
                  <p class="f-s-p2">
                    销售额突破6000万,全国各地60
                    家线下体验店,公司完成A轮融资
                  </p>
                </div>
                <div class="f-swiper1">
                  <img :src="item[1]" alt>
                  <p class="f-s-p1">2020</p>
                  <p class="f-s-p2">
                    销售量突破3亿,全国线下体验店
                    200家并完成B轮融资
                  </p>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
    </div>

    <!-- 加入供应商 -->
    <div class="joinUs">
      <div class="j-title">
        <span></span>
        <p>加入YOKEA服务商</p>
      </div>
      <div class="j-main">
        <ul>
          <li>
            <p>独家代理</p>
            <p>每个地区仅限一家，利益独享</p>
            <img src="static/images/AboutYokea/daili.png" alt>
          </li>
          <li>
            <p>筹备指导</p>
            <p>体验馆选址、开业筹备等指导</p>
            <img src="static\images\AboutYokea\zhidao.png" alt>
          </li>
          <li>
            <p>运营支持</p>
            <p>各大合作媒体统一品牌推广</p>
            <img src="static\images\AboutYokea\yunying.png" alt>
          </li>
          <li>
            <p>培训支持</p>
            <p>定期进行专业全面的团队建设</p>
            <img src="static\images\AboutYokea\peixunjihua.png" alt>
          </li>
          <li>
            <p>技术支持</p>
            <p>双支付系统与办公SAAS系统</p>
            <img src="static\images\AboutYokea\fuwujicheng.png" alt>
          </li>
          <li>
            <p>服务支持</p>
            <p>8人小组一对一保姆式服务</p>
            <img src="static\images\AboutYokea\fuwuguanli.png" alt>
          </li>
        </ul>
      </div>
    </div>

    <!-- 联系我们。 -->
    <div class="contact">
      <div class="title-contanier">
        <div class="c-title">
          <span></span>
          <p>联系我们</p>
        </div>

        <div class="c-middle">CONTACT US</div>
      </div>
      <div class="c-sendMessage">
        <div class="c-s-header">
          <p>
            <span>你有一个新项目</span>
            <span>不知道如何开始?</span>
          </p>
          <p>
            <span>YOU HAVE A NEW PROJECT AND</span>
            <span>DON’T KNOW HOW TO START??</span>
          </p>
          <hr>
          <p class="p3">
            <span>你别担心，我们帮助你</span>
          </p>
          <p class="p4">
            <span>DON'T WORRY, WE HELP YOU</span>
          </p>
        </div>
        <div class="c-s-message">
          <div class="m-contanier">
            <div class="rows">
              <input v-model="yourName" placeholder="你的名字">
              <input v-model="phoneNumber" placeholder="联系方式">
            </div>
            <div class="rows">
              <input v-model="area" placeholder="现有面积">
              <input v-model="cPurpose" placeholder="合作意向">
            </div>
            <div class="rows">
              <el-input type="textarea" :rows="7" placeholder="详细说明" v-model="state"></el-input>
            </div>
            <el-button class="c-m-commit" @click="messageCommit">发送</el-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 加入步骤 -->
    <div class="step">
      <span></span>
      <el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

      <div class="s-header">
        <span>提交申请</span>
      </div>
    </div>

    <!-- 地址 -->
    <div class="address">
      <div class="a-l">
        <p>
          <img src="static\images\AboutYokea\phone.png" alt>
          <span>18627288139</span>
        </p>
        <p>
          <img src="static\images\AboutYokea\email.png" alt>
          <span>328345814@qq.com</span>
        </p>
        <p>
          <img src="static\images\AboutYokea\dingwei.png" alt>
          <span>
            深圳市龙岗区腾飞路与白灰围一路交叉口
            西南角创投大厦8楼
          </span>
        </p>
        <div class="a-l-card">
          <img src="static\images\AboutYokea\erweima.png" alt>
          <p class="alc-r">扫一扫添加微信</p>
        </div>
      </div>
      <img src="static\images\AboutYokea\ditu.png" alt class="a-r">
    </div>

    <!-- 注册公众号 -->
    <div class="register">
      <div class="inner">
        <img src="static\images\AboutYokea\di.png" alt>
      </div>

      <div class="r-content">
        <div class="r-c-register">
          <div class="rcr-header">
            <img src="static\images\AboutYokea\yonghu.png" alt>
            <p>注册有家用户</p>
            <p>register</p>
          </div>
        </div>
        <div class="r-c-card">
          <img src="static\images\AboutYokea\weixgongzhonghao.png" alt>
          <p>微信扫一扫关注公众号</p>
        </div>
        <div class="rcr-wechat">
          <div class="rcr-header">
            <img src="static\images\AboutYokea\weixin.png" alt>
            <p>关注微信公众号</p>
            <p>follow us</p>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script>
/* 顶部工具栏 */
import TopToolBar from "@/component/menu/TopToolBar";
import Menu from "@/component/menu/Menu";
import Footer from "@/component/common/Footer.vue";
export default {
  name: "AboutYokea",
  data() {
    return {
      yourName: "",
      phoneNumber: "",
      area: "",
      cPurpose: "",
      state: "",
      // 品牌实力的轮播图list
      brandImgList: [
        "static/images/AboutYokea/xianshangxianxiashili.png",
        "static/images/AboutYokea/xianshangxianxiashili.png",
        "static/images/AboutYokea/xianshangxianxiashili.png"
      ],
      futurnSwiperList: [
        [
          "static/images/AboutYokea/2019.png",
          "static/images/AboutYokea/2020.png"
        ],
        [
          "static/images/AboutYokea/2019.png",
          "static/images/AboutYokea/2020.png"
        ]
      ]
    };
  },
  created() {
    console.log(this.futurnSwiperList);
  },
  methods: {
    messageCommit() {}
  },
  components: { TopToolBar, Menu, Footer }
};
</script>

<style lang="less" scoped>
.aboutYokea-container {
  .bannerImg {
    margin-top: 29px;
    overflow: hidden;
  }
  .threeBan {
    height: 425px;
    position: relative;
    .ulThreeBan {
      width: 1302px;
      height: 302px;
      position: absolute;
      top: 50px;
      left: 328px;
      // display: flex;
      padding-top: 9px;
      padding-left: 41px;
      li {
        float: left;
        width: 222px;
        height: 222px;
        // line-height: 302px;
        // margin-right: 258px;
        border-radius: 100%;
        // border: 1px solid #ccc;
        p {
          margin-top: 15px;
          text-align: center;
        }
      }
      .middleLi {
        margin: 0 258px;
      }
    }
  }
  .describe {
    width: 879px;
    height: 140px;
    font-family: SourceHanSansCN-Medium;
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 70px;
    letter-spacing: 0px;
    color: #333333;
    margin: 0 auto;
    text-align: center;
    font-weight: bold;
  }
  // 品牌实力
  .brandStr {
    width: 1199px;
    height: 600px;
    margin: 0 auto;
    // background-color: pin;
    margin-top: 120px;
    position: relative;
    .bgc {
      width: 450px;
      height: 600px;
      background-color: #ccc;
      opacity: 0.3;
    }
    .brandImg {
      width: 634px;
      height: 423px;
      // background-color: red;
      position: absolute;
      left: 120px;
      top: 90px;
      border-radius: 5px;
      .imgUl {
        width: 600px;
        height: 420px;
        background-color: #dddddd;
        box-shadow: 0px 3px 4px 0px rgba(125, 125, 125, 0.75);
        border-radius: 5px;
      }
    }
    .brandStrL {
      width: 454px;
      height: 364px;
      position: absolute;
      top: 89px;
      right: 0;
      p {
        width: 442px;
        height: 48px;
        font-family: SourceHanSansCN-Bold;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 32px;
        letter-spacing: 0px;
        color: #333333;
        margin-bottom: 34px;
        span {
          font-family: SourceHanSansCN-Normal;
          font-size: 16px;
          font-weight: normal;
          letter-spacing: 0px;
          color: #666666;
        }
      }
    }
  }
  // 发展
  .develop {
    height: 850px;
    // width: 1920px;
    background-color: #ccc;
    margin-top: 200px;
    position: relative;
    .developImg {
      overflow: hidden;
    }
    .devSwiper {
      position: absolute;
      width: 1200px;
      height: 500px;
      background-color: #ffffff;
      top: 350px;
      left: 360px;
      .devSwiperUl {
        width: 1200px;
        height: 500px;
        li {
          // height: 500px;
          display: flex;
          justify-content: space-between;
          padding-top: 70px;
          padding-left: 120px;
          padding-right: 120px;
          div {
            background-color: #fff;
            width: 400px;
            // height: 300px;
            // overflow: hidden;
            p {
              // width: 416px;
              margin-top: 30px;
              height: 144px;
              font-family: SourceHanSansCN-Normal;
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 32px;
              letter-spacing: 0px;
              color: #333333;
            }
          }
        }
      }
    }
  }

  /* 体验店 */
  .expS {
    width: 1201px;
    height: 557px;
    margin: 0 auto;
    margin-top: 195px;
    // display: flex;
    position: relative;
    .expSHeader {
      font-family: SourceHanSansCN-Medium;
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #333333;
      text-align: center;
      span {
        width: 10px;
        height: 38px;
        background-color: #ff6f61;
      }
      p {
        font-family: ArialMT;
        font-size: 25px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #666666;
        text-align: center;
      }
    }
    .expSImgC {
      margin-top: 76px;
      display: flex;
      align-content: space-between;
      justify-content: space-around;
      .expSImg {
        width: 372px;
        height: 295px;
        margin-bottom: 28px;
        // flex: 1;
      }
      .expSImgC-word {
        margin-top: 28px;
        span {
          font-family: SourceHanSansCN-Medium;
          font-size: 25px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #333333;
        }
      }
    }
    .expSFooter {
      height: 25px;
      line-height: 25px;
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 471px;
      a {
        width: 223px;
        height: 25px;
        font-family: SourceHanSansCN-Light;
        font-size: 25px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #333333;
        img {
          width: 25px;
          height: 23px;
        }
      }
    }
  }

  /* 合作商 */
  .cooperative {
    width: 1273px;
    height: 772px;
    margin: 0 auto;
    margin-top: 310px;
    text-align: center;
    .ch-word {
      height: 38px;
      font-family: SourceHanSansCN-Medium;
      font-size: 40px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #333333;
    }
    .ch-eng {
      height: 23px;
      font-family: ArialMT;
      font-size: 25px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #666666;
      margin-top: 15px;
    }
    .c-main {
      width: 1273px;
      height: 621px;
      background-color: #fff;
      margin-top: 75px;

      ul {
        width: 1273px;
        height: 621px;
        padding-left: 32px;
        padding-top: 13px;

        li {
          width: 177px;
          height: 79px;
          // background-color: #ccc;
          float: left;
          margin-right: 72px;
          margin-bottom: 78px;
        }
      }
    }
  }

  /* 有家未来 */
  .Future {
    // width: 1920px;
    height: 657px;
    margin-top: 202px;
    overflow: hidden;
    position: relative;
    .fImg {
      width: 1920px;
      height: 406px;
      overflow: hidden;
    }
    .fUl-contanier {
      width: 880px;
      height: 350px;
      // background-color: red;
      box-shadow: 0px 5px 36px 2px rgba(150, 150, 150, 0.2);
      border-radius: 5px;
      position: absolute;
      top: 196px;
      left: 520px;
      /* ul {
        width: 880px;
        height: 350px;
        li {
          float: left;
        }
      }
      .arrowsL {
        position: absolute;
        height: 48px;
        background-color: #fff;
        top: 50%;
        left: -110px;
      }
      .arrowsR {
        position: absolute;
        height: 48px;
        background-color: #fff;
        top: 50%;
        right: -110px;
      } */

      .f-swiper {
        width: 880px;
        height: 350px;
        display: flex;
        justify-content: space-around;
        padding-top: 30px;
        background-color: #fff;
        .f-swiper1 {
          width: 250px;
          height: 380px;

          img {
            margin-bottom: 33px;
          }
          .f-s-p1 {
            font-family: SourceHanSansCN-Bold;
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 32px;
            letter-spacing: 0px;
            color: #333333;
          }
          .f-s-p2 {
            font-family: SourceHanSansCN-Normal;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 32px;
            letter-spacing: 0px;
            color: #333333;
          }
        }
      }

      .el-carousel__item h3 {
        width: 880px;
        height: 350px;
        background-color: #ffffff;
        box-shadow: 0px 5px 36px 2px rgba(150, 150, 150, 0.2);
        border-radius: 5px;
      }
      .el-carousel {
        height: 350px;
        .el-carouse-fix-height {
          height: 350px;
        }
      }
      .el-carousel__arrow .el-carousel__arrow--right {
        right: -100px;
      }
      /* .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      } */
    }
  }

  // 加入有家
  .joinUs {
    width: 1201px;
    height: 574px;
    // background-color: #ccc;
    margin: 0 auto;
    margin-top: 192px;
    .j-title {
      width: 450px;
      height: 50px;
      line-height: 50px;
      margin: 0 auto;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      text-align: center;
      span {
        display: block;
        width: 10px;
        height: 38px;
        background-color: #ff6f61;
        margin-top: 8px;
      }
      p {
        width: 423px;
        height: 50px;
        font-family: SourceHanSansCN-Medium;
        font-size: 51px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 50px;
        letter-spacing: 0px;
        color: #333333;
      }
    }
    .j-main {
      height: 450px;
      width: 1201px;
      background-color: #fff;
      margin-top: 126px;
      ul {
        li {
          width: 350px;
          height: 200px;
          border-radius: 10px;
          border: solid 6px #eeeeee;
          float: left;
          padding-left: 21px;
          position: relative;
          p:nth-child(1) {
            height: 21px;
            font-family: SourceHanSansCN-Medium;
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #333333;
            margin-top: 121px;
            margin-bottom: 19px;
          }
          p:nth-child(2) {
            height: 20px;
            font-family: SourceHanSansCN-Normal;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #666666;
          }
          img {
            position: absolute;
            top: 31px;
            left: 188px;
          }
        }
      }
    }
  }

  /* 联系我们 */
  .contact {
    width: 1200px;
    height: 811px;
    background-color: #ccc;
    margin: 0 auto;
    margin-top: 182px;
    .title-contanier {
      width: 1200px;
      height: 161px;
      background-color: #fff;
      .c-title {
        width: 223px;
        height: 50px;
        line-height: 50px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        text-align: center;
        span {
          display: block;
          width: 10px;
          height: 38px;
          background-color: #ff6f61;
          margin-top: 8px;
        }
        p {
          width: 423px;
          height: 50px;
          font-family: SourceHanSansCN-Medium;
          font-size: 51px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 50px;
          letter-spacing: 0px;
          color: #333333;
        }
      }
    }
    .c-middle {
      width: 160px;
      height: 18px;
      font-family: ArialMT;
      font-size: 25px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 29px;
      letter-spacing: 0px;
      color: #888888;
      margin: 0 auto;
    }
    .c-sendMessage {
      width: 1200px;
      height: 650px;
      background-color: #eeeeee;
      background-color: #ccc;
      padding-top: 49px;
      .c-s-header {
        text-align: center;
        p:nth-child(1) {
          span:nth-child(1) {
            font-family: SourceHanSansCN-Regular;
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 29px;
            letter-spacing: 0px;
            color: #333333;
          }
          span:nth-child(2) {
            font-family: SourceHanSansCN-Regular;
            font-size: 26px;
            font-weight: normal;
            letter-spacing: 0px;
            color: #ff6f61;
            margin-bottom: 19px;
          }
        }
        p:nth-child(2) {
          span:nth-child(1) {
            font-family: ArialMT;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 29px;
            letter-spacing: 0px;
            color: #888888;
          }
          span:nth-child(2) {
            font-family: ArialMT;
            font-size: 14px;
            font-weight: normal;
            letter-spacing: 0px;
            color: #ff6f61;
          }
        }
        .p3 {
          span:nth-child(1) {
            font-family: SourceHanSansCN-Regular;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 29px;
            letter-spacing: 0px;
            color: #444444;
          }
        }
        .p4 {
          span:nth-child(1) {
            font-family: ArialMT;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 29px;
            letter-spacing: 0px;
            color: #666666;
          }
        }

        hr {
          width: 435px;
          height: 2px;
          background-color: #666666;
          border-radius: 1px;
          margin-bottom: 14px;
        }
      }
      .m-contanier {
        width: 630px;
        height: 270px;
        background-color: #ccc;
        margin: 0 auto;
        margin-top: 49px;
        .rows {
          width: 630px;
          margin-bottom: 30px;
          display: flex;
          justify-content: space-between;
          input {
            -webkit-appearance: none;
            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 40px;
            line-height: 40px;
            outline: 0;
            padding: 0 15px;
            -webkit-transition: border-color 0.2s
              cubic-bezier(0.645, 0.045, 0.355, 1);
            transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            width: 300px;
          }
        }
        .el-button {
          margin: 0 auto;
          width: 110px;
          height: 40px;
          background-color: #ffffff;
          border: solid 1px #ff6f61;
          text-align: center;
        }
        .c-m-commit {
          margin-left: 250px;
        }
      }
    }
  }

  // step
  .step {
    width: 1001px;
    height: 270px;
    background-color: #ccc;
    margin: 0 auto;
    margin-top: 149px;
    padding: 0 38px;
  }

  // address
  .address {
    width: 1199px;
    height: 379px;
    margin: 0 auto;
    margin-top: 49px;
    position: relative;
    .a-l {
      width: 412px;
      height: 352px;
      position: absolute;
      top: 27px;
      p {
        margin-bottom: 31px;
        display: flex;
      }
      span {
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #666666;

        padding-left: 20px;
      }
      .a-l-card {
        width: 140px;
        height: 120px;
        position: absolute;
        bottom: 0;
        left: 178px;
      }
      .alc-r {
        float: right;
        width: 16px;
        height: 112px;
        margin-top: 2px;
      }
    }
    .a-r {
      position: absolute;
      right: 0;
    }
  }

  // 注册
  .register {
    width: 1920px;
    height: 500px;
    background-color: #000000;
    opacity: 0.45;
    position: relative;
    margin-top: 200px;
    overflow: hidden;

    .inner {
      width: 1920px;
      height: 500px;
      overflow: hidden;
    }
    .r-content {
      width: 705px;
      height: 250px;
      position: absolute;
      // background-color: #fff;
      left: 615px;
      top: 93px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      overflow: hidden;
      .r-c-register {
        .rcr-header {
          text-align: center;
          p {
            font-family: SourceHanSansCN-Normal;
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 30px;
            letter-spacing: 0px;
            color: #ffffff;
            text-align: center;
            margin-top: 20px;
          }
        }
      }
      .r-c-card {
        width: 220px;
        height: 250px;
        background-color: #fff;
        text-align: center;
        padding-top: 18px;
        // display: none;
        p {
          font-family: SourceHanSansCN-Normal;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 29px;
          letter-spacing: 0px;
          color: #1b1b1b;
        }
      }
      .rcr-wechat {
        .rcr-header {
          text-align: center;
          p {
            font-family: SourceHanSansCN-Normal;
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 30px;
            letter-spacing: 0px;
            color: #ffffff;
            text-align: center;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>

