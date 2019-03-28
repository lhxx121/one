<template>
  <div class="product-list-box">
    <div class="product-list-content">
      <div class="linkage-query-bar">
        <div class="current-location">
          首页 <i class="el-icon-arrow-right"></i> 全部
        </div>
        <div class="select-classification">
          <div class="filter-item style-list">
            <ul>
              <li class="fiter-title"> 风格：</li>
              <!-- <li><router-link to="" class="query-item active">全部</router-link></li>
              <li><router-link to="" class="query-item">现代</router-link></li> -->
              <li v-for="(item, index) in styleList" :key="index"><router-link to="" @click.native="activeStyle(item.id)" class="query-item" :class="{active: item.id===activeStyleID}">{{item.name}}</router-link></li>
            </ul>
          </div><br>
          <div class="filter-item product-list">
            <ul>
              <li class="fiter-title">品类：</li>
              <!-- <li><router-link to="" class="query-item active">全部</router-link></li>
              <li><router-link to="" class="query-item">沙发</router-link></li> -->
              <li v-for="(item, index) in productTextList" :key="index"><router-link to="" @click.native="activeProduct(item.id)" class="query-item" :class="{active: item.id===activeProduceID}">{{item.name}}</router-link></li>
            </ul>
          </div><br>
          <div class="filter-item price-interval">
            <ul>
              <li class="fiter-title">筛选：</li>
              <!-- <li><router-link to="" class="query-item active">综合</router-link></li>
              <li><router-link to="" class="query-item">新品</router-link></li> -->
              <li v-for="(item, index) in filterList" :key="index"><router-link to="" @click.native="activeFilter(item.id)" class="query-item" :class="{active: item.id===activeFilterID}">{{item.name}}</router-link></li>
            </ul>
          </div><br>
          <div class="filter-item product-list">
            <span class="fiter-title">价格区间：</span>
            <input type="text" class="min-money" placeholder="请输入最低价" v-model="minMoney"/>
            <i class="el-icon-minus middle-line"></i>
            <input type="text" class="max-money" placeholder="请输入最高价" v-model="maxMoney"/>
            <el-button class="query-determine" @click="moneyQuery">确认</el-button>
          </div>
        </div>
        <div class="product-list">
          <product-item :productList="productList"></product-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/component/common/ProductItem'
export default {
  name: 'ProductList',
  components: {ProductItem},
  data: function () {
    return {
      productList: [
        {
          id: '1',
          img: '../../../static/images/commodity/productItem.png',
          name: '现代简约建筑装饰挂画',
          price: '219',
          type: '3'
        },
        {
          id: '1',
          img: '../../../static/images/commodity/productItem.png',
          name: '现代简约建筑装饰挂画',
          price: '219',
          type: '3'
        },
        {
          id: '1',
          img: '../../../static/images/commodity/productItem.png',
          name: '现代简约建筑装饰挂画',
          price: '219',
          type: '3'
        },
        {
          id: '1',
          img: '../../../static/images/commodity/productItem.png',
          name: '现代简约建筑装饰挂画',
          price: '219',
          type: '3'
        },
        {
          id: '1',
          img: '../../../static/images/commodity/productItem.png',
          name: '现代简约建筑装饰挂画',
          price: '219',
          type: '3'
        },
        {
          id: '1',
          img: '../../../static/images/commodity/productItem.png',
          name: '现代简约建筑装饰挂画',
          price: '219',
          type: '3'
        },{
          id: '1',
          img: '../../../static/images/commodity/productItem.png',
          name: '现代简约建筑装饰挂画',
          price: '219',
          type: '3'
        },
        {
          id: '1',
          img: '../../../static/images/commodity/productItem.png',
          name: '现代简约建筑装饰挂画',
          price: '219',
          type: '3'
        },
        {
          id: '1',
          img: '../../../static/images/commodity/productItem.png',
          name: '现代简约建筑装饰挂画',
          price: '219',
          type: '3'
        },
        {
          id: '1',
          img: '../../../static/images/commodity/productItem.png',
          name: '现代简约建筑装饰挂画',
          price: '219',
          type: '3'
        },
        {
          id: '1',
          img: '../../../static/images/commodity/productItem.png',
          name: '现代简约建筑装饰挂画',
          price: '219',
          type: '3'
        },
        {
          id: '1',
          img: '../../../static/images/commodity/productItem.png',
          name: '现代简约建筑装饰挂画',
          price: '219',
          type: '3'
        }
      ],
      styleList: [
        {id: "1", name: "全部"},
        {id: "2", name: "现代"},
        {id: "3", name: "北欧"},
        {id: "4", name: "轻奢"},
        {id: "5", name: "欧美"},
        {id: "6", name: "儿童"}
      ],
      productTextList: [
        {id: "1", name: "全部"},
        {id: "2", name: "沙发"},
        {id: "3", name: "床"},
        {id: "4", name: "柜子"},
      ],
      filterList: [
        {id: "1", name: "综合"},
        {id: "2", name: "新品"},
        {id: "3", name: "销量"},
      ],
      activeStyleID: '1',
      activeProduceID: '1',
      activeFilterID: '1',
      minMoney: '',
      maxMoney: ''
    }
  },
  methods: {
    activeStyle: function (id) {
      console.log(id)
      this.activeStyleID = id
    },
    activeProduct: function (id) {
      console.log(id)
      this.activeProduceID = id
    },
    activeFilter: function(id) {
      console.log(id)
      this.activeFilterID = id
    },
    moneyQuery: function () {
      console.log(this.minMoney + "~" + this.maxMoney)
    }
  }
}
</script>

<style lang="less" scoped>
  .product-list-box{
    .product-list-content{
      width: 1200px;
      // border: 1px solid red;
      margin: 0 auto;
      .linkage-query-bar{
        // 所在位置
        .current-location{
          font-family: SourceHanSansCN-Regular;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #666666;
          margin-bottom: 27px;
          i{
            font-size: 14px;
            font-weight: normal;
          }
        }
        // 联合筛选项样式
        .select-classification{
          background-color: #ffffff;
          height: 178px;
          padding-top: 10px;
          margin-bottom: 30px;
          .filter-item{
            margin-top: 20px;
            margin-left: 20px;
            li{
              float: left;
              margin-right: 35px;
              font-family: SourceHanSansCN-Regular;
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #666666;
              .query-item{
                text-decoration: none;
                color: #666666;
              }
              // 选择颜色
              .active{
                letter-spacing: 0px;
                color: #ff6f61;
              }
            }
            // 筛选项标题
            .fiter-title{
              font-family: SourceHanSansCN-Regular;
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #333333;
              margin-right: 44px;
            }
          }
          // 价钱筛选
          .product-list{
            .min-money, .max-money{
              width: 84px;
              height: 14px;
              padding: 0;
              margin: 0;
              border: none;
              font-family: SourceHanSansCN-Regular;
              font-size: 14px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #444444;
              opacity: 0.8;
            }
            .middle-line{
              margin: 0 20px;
              color: #666666;
            }
            // 单个点击查询项
            .query-determine{
              width: 47px;
              height: 14px;
              background-color: #ff6f61;
              padding: 0;
              line-height: 14px;
              font-family: SourceHanSansCN-Regular;
              font-size: 12px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 2px;
              color: #ffffff;
              border: none;
              border-radius: 7px;
              margin-left: 53px;
              :hover{
                color: #ffffff;
              }
            }
          }
        }
        // 商品列表
        .product-list{
          width: 1200px;
          margin: 0 auto;
        }
      }
    }
  }
</style>
