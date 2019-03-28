<template>
  <div class="pi-contanier">
    <div class="topMenu">
      <div class="tm-list">
        <ul class="tm-ul">
          <li>
            <a href="#">我的收藏</a>
          </li>
          <li>
            <a href="#">我的购物车</a>
          </li>
          <li>
            <a href="#">我的订单</a>
          </li>
          <li>
            <a href="#">我的消息</a>
          </li>
          <li>
            <a href="#">会员中心</a>
          </li>
          <li>
            <a href="#">我要晒图</a>
          </li>
          <li>
            <a href="#">我的资料</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>



<style lang="less">
.pi-contanier {
  .topMenu {
    width: 100%;
    min-width: 960px;
    .tm-list {
      line-height: 36px;
      margin-top: 16px;
      border-bottom: 1px solid #ccc;
      .tm-ul {
        height: 40px;
        padding-left: 314px;
        li {
          float: left;
          margin-left: 43px;
          text-align: center;

          a {
            font-family: SourceHanSansCN-Normal;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #555555;
          }
        }
        li:last-child {
          border-bottom: 4px solid #212121;
        }
        li:hover {
          border-bottom: 4px solid #212121;
          z-index: 999;
        }
      }
    }
    .line {
      width: 100%;
    }
  }
}
</style>

