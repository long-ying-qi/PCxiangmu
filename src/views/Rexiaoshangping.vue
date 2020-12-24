<template>
    <div id="app">
        <div id="box">
            <ul class="uls">
                <li class="el-icon-s-home"></li>
                <li>>></li>
                <li>商品</li>
                <li>>></li>
                <li>热销商品</li>
            </ul>
        </div>
        <div id="big-box">
            <p>订单列表</p>
            <div class="big-input">
                <div class="block">
                    <span class="demonstration">咨询时间：</span>
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">----</span>
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </div>&nbsp;&nbsp;
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-button class="buttonVal01" type="primary">查询</el-button>
            </div>
            <div class="box02">
                <span class="sp">商品名称</span>
                <span class="sp">分类名称</span>
                <span class="sp">销量</span>
            </div>
              <div class="box02">
                <span class="sp01">Apple iPad Air 2 平板电脑</span>
                <span class="sp01">平板电脑</span>
                <span class="sp01">5</span>
              </div>
              <div class="box02">
                <span class="sp01">Apple iPad Air 2 平板电脑</span>
                <span class="sp01">平板电脑</span>
                <span class="sp01">5</span>
              </div>
              <div class="box02">
                <span class="sp01">Apple iPad Air 2 平板电脑</span>
                <span class="sp01">平板电脑</span>
                <span class="sp01">5</span>
              </div>
              <div class="box02">
                <span class="sp01">Apple iPad Air 2 平板电脑</span>
                <span class="sp01">平板电脑</span>
                <span class="sp01">5</span>
              </div>
              <div class="box02">
                <span class="sp01">Apple iPad Air 2 平板电脑</span>
                <span class="sp01">平板电脑</span>
                <span class="sp01">5</span>
              </div>
              <div class="box02">
                <span class="sp01">Apple iPad Air 2 平板电脑</span>
                <span class="sp01">平板电脑</span>
                <span class="sp01">5</span>
              </div>
                <div id="butVal01">
                    <el-button plain>保存排序</el-button><el-button plain>批量删除</el-button>
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
    </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '手机'
        }, {
          value: '选项2',
          label: '三星'
        }, {
          value: '选项3',
          label: '苹果'
        }, {
          value: '选项4',
          label: '华为'
        }, {
          value: '选项5',
          label: '笔记本'
        }],
        value: ''
      }
    }
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
        height: 700px;
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
    .big-input{
        padding-left: 8px;
    }
    .buttonVal{
        width: 140px;
        margin-left: 8px;
    }
    .buttonVal01{
        /* display: block; */
        margin-left: 28px;
    }
    .block{
        display: inline-block;
        margin-left: 20px;
    }
    .box02{
        height: 65px;
        line-height: 65px;
        padding-left: 15px;
        border: 1px solid #eaeaea;
        /* margin-top: 5px; */
        position: relative;
        margin-top: 5px;
    }
    .sp{
        margin-left: 265px;
        font-weight: 600;
        cursor: pointer;
        color: #666;
    }
    .box02>img{
        width: 40px;
        margin-left: 85px;
        /* margin-top: 10px; */
        width: 30px;
        height: 40px;
        position: absolute;
        top: 15px;
    }
    .sp01{
        cursor: pointer;
        font-size: 13px;
        /* color: #999; */
    }
    .sp01:nth-of-type(1){
      margin-left: 215px;
    }
    .sp01:nth-of-type(2){
      margin-left: 230px;
    }
    .sp01:nth-of-type(3){
      margin-left: 285px;
    }
    #butVal01{
        padding: 20px;
    }
</style>