<template>
  <div id="app">
      <div id="box">
          <ul class="uls">
              <li class="el-icon-s-home"></li>
              <li>>></li>
              <li>商品</li>
              <li>>></li>
              <li>库存预警</li>
          </ul>
      </div>
      <div id="big-box">
        <p>库存预警</p>
        <div class="box02">
          <span class="sp">商品名称</span>
          <span class="sp">分类</span>
          <span class="sp">品牌</span>
          <span class="sp">类型</span>
          <span class="sp">库存</span>
          <span class="sp">库存预警值</span>
        </div>
        <div class="box02">
          <span class="sp01">测试商品</span>
          <span class="sp01">三星</span>
          <span class="sp01">平板电脑</span>
          <span class="sp01">三星</span>
          <span class="sp01">5</span>
          <span class="sp01">1111</span>
        </div>
        <div class="box02">
          <span class="sp01">测试商品</span>
          <span class="sp01">三星</span>
          <span class="sp01">平板电脑</span>
          <span class="sp01">三星</span>
          <span class="sp01">5</span>
          <span class="sp01">1111</span>
        </div>
        <div class="box02">
          <span class="sp01">测试商品</span>
          <span class="sp01">三星</span>
          <span class="sp01">平板电脑</span>
          <span class="sp01">三星</span>
          <span class="sp01">5</span>
          <span class="sp01">1111</span>
        </div>
        <div class="box02">
          <span class="sp01">测试商品</span>
          <span class="sp01">三星</span>
          <span class="sp01">平板电脑</span>
          <span class="sp01">三星</span>
          <span class="sp01">5</span>
          <span class="sp01">1111</span>
        </div>
        <div class="box02">
          <span class="sp01">测试商品</span>
          <span class="sp01">三星</span>
          <span class="sp01">平板电脑</span>
          <span class="sp01">三星</span>
          <span class="sp01">5</span>
          <span class="sp01">1111</span>
        </div>
        <div class="box02">
          <span class="sp01">测试商品</span>
          <span class="sp01">三星</span>
          <span class="sp01">平板电脑</span>
          <span class="sp01">三星</span>
          <span class="sp01">5</span>
          <span class="sp01">1111</span>
        </div>
        <div class="box02">
          <span class="sp01">测试商品</span>
          <span class="sp01">三星</span>
          <span class="sp01">平板电脑</span>
          <span class="sp01">三星</span>
          <span class="sp01">5</span>
          <span class="sp01">1111</span>
        </div><div class="box02">
          <span class="sp01">测试商品</span>
          <span class="sp01">三星</span>
          <span class="sp01">平板电脑</span>
          <span class="sp01">三星</span>
          <span class="sp01">5</span>
          <span class="sp01">1111</span>
        </div><div class="box02">
          <span class="sp01">测试商品</span>
          <span class="sp01">三星</span>
          <span class="sp01">平板电脑</span>
          <span class="sp01">三星</span>
          <span class="sp01">5</span>
          <span class="sp01">1111</span>
        </div><div class="box02">
          <span class="sp01">测试商品</span>
          <span class="sp01">三星</span>
          <span class="sp01">平板电脑</span>
          <span class="sp01">三星</span>
          <span class="sp01">5</span>
          <span class="sp01">1111</span>
        </div>
        <div class="block">
                        <span class="demonstration"></span>
                        <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage2"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="sizes, prev, pager, next"
                        :total="1000">
                        </el-pagination>
                    </div>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#app{
        background-color: #f0f4f6;  
        width: 1300px;
        margin-top: 60px;
        /* height: 500px; */
    }
    .uls{
        list-style: none;
        /* margin-top: -20px; */
    }
    .uls>li{
        display: inline-block;
        margin-left: 10px;
        cursor: pointer;
        color: #666;
    }
    .uls>li:nth-of-type(1){
        color: #409eff;
    }
    #big-box{
        width: 1180px;
        height: 870px;
        margin: 50px;
        margin-top: -0px;
        background-color: white;
    }
    #big-box>p{
        height: 50px;
        line-height: 50px;
        border: 1px solid #dfdfdf;
        padding-left: 20px;
        background-color: #eceff1;
    }
    .box02{
        height: 65px;
        line-height: 65px;
        padding-left: 15px;
        border: 1px solid #eaeaea;
        /* margin-top: 5px; */
    }
    .sp{
        margin-left: 125px;
        font-weight: 600;
        cursor: pointer;
        color: #999;
    }
    .sp01{
        cursor: pointer;
        font-size: 13px;
        /* color: #999; */
    }
    .sp01:nth-of-type(1){
      margin-left: 130px;
    }
    .sp01:nth-of-type(2){
      margin-left: 132px;
    }
    .sp01:nth-of-type(3){
      margin-left: 122px;
    }
    .sp01:nth-of-type(4){
      margin-left: 118px;
    }
    .sp01:nth-of-type(5){
      margin-left: 140px;
    }
    .sp01:nth-of-type(6){
      margin-left: 160px;
    }
    .block{
      padding: 20px;
    }
</style>