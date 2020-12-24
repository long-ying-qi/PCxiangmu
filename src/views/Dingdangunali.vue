<template>
    <div id="app">
        <div id="box">
            <ul class="uls">
                <li class="el-icon-s-home"></li>
                <li>>></li>
                <li>商品</li>
                <li>>></li>
                <li>商品评价</li>
            </ul>
        </div>
        <div id="big-box">
            <p>订单列表</p>
            <el-dropdown class="xiala" split-button type="primary">
            订单状态
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>订单状态</el-dropdown-item>
                <el-dropdown-item>未确认</el-dropdown-item>
                <el-dropdown-item>已确认</el-dropdown-item>
                <el-dropdown-item>已取消</el-dropdown-item>
                <el-dropdown-item>已完成</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="xiala" split-button type="primary">
            支付状态
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>支付状态</el-dropdown-item>
                <el-dropdown-item>未支付</el-dropdown-item>
                <el-dropdown-item>已支付</el-dropdown-item>
                <el-dropdown-item>已退款</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="xiala" split-button type="primary">
            配送状态
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>配送状态</el-dropdown-item>
                <el-dropdown-item>未发货</el-dropdown-item>
                <el-dropdown-item>已发货</el-dropdown-item>
                <el-dropdown-item>已退货</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="xiala" split-button type="primary">
            配送方式
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>配送方式</el-dropdown-item>
                <el-dropdown-item>普通快递</el-dropdown-item>
                <el-dropdown-item>顺丰快递</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown><br>
             <el-input class="inputVal" v-model="input" placeholder="请输入内容"></el-input>
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
            <el-button class="buttonVal01" type="primary">查询</el-button>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp">ID</span>
                <span class="sp">订单编号</span>
                <span class="sp">买家用户名</span>
                <span class="sp">订单金额(元)</span>
                <span class="sp">下单日期</span>
                <span class="sp">订单状态</span>
                <span class="sp">支付状态</span>
                <span class="sp">支付方式</span>
                <span class="sp">配送状态</span>
                <span class="sp">配送方式</span>
                <span class="sp">操作</span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1688</span>
                <span class="sp01">1533019644791</span>
                <span class="sp01">test1</span>
                <span class="sp01">6398</span>
                <span class="sp01">2018-07-31 14:47:24</span>
                <span class="sp01">未确认</span>
                <span class="sp01">未支付</span>
                <span class="sp01">网上支付</span>
                <span class="sp01">未发货</span>
                <span class="sp01">普通快递</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1688</span>
                <span class="sp01">1533019644791</span>
                <span class="sp01">test1</span>
                <span class="sp01">6398</span>
                <span class="sp01">2018-07-31 14:47:24</span>
                <span class="sp01">未确认</span>
                <span class="sp01">未支付</span>
                <span class="sp01">网上支付</span>
                <span class="sp01">未发货</span>
                <span class="sp01">普通快递</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1688</span>
                <span class="sp01">1533019644791</span>
                <span class="sp01">test1</span>
                <span class="sp01">6398</span>
                <span class="sp01">2018-07-31 14:47:24</span>
                <span class="sp01">未确认</span>
                <span class="sp01">未支付</span>
                <span class="sp01">网上支付</span>
                <span class="sp01">未发货</span>
                <span class="sp01">普通快递</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1688</span>
                <span class="sp01">1533019644791</span>
                <span class="sp01">test1</span>
                <span class="sp01">6398</span>
                <span class="sp01">2018-07-31 14:47:24</span>
                <span class="sp01">未确认</span>
                <span class="sp01">未支付</span>
                <span class="sp01">网上支付</span>
                <span class="sp01">未发货</span>
                <span class="sp01">普通快递</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1688</span>
                <span class="sp01">1533019644791</span>
                <span class="sp01">test1</span>
                <span class="sp01">6398</span>
                <span class="sp01">2018-07-31 14:47:24</span>
                <span class="sp01">未确认</span>
                <span class="sp01">未支付</span>
                <span class="sp01">网上支付</span>
                <span class="sp01">未发货</span>
                <span class="sp01">普通快递</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1688</span>
                <span class="sp01">1533019644791</span>
                <span class="sp01">test1</span>
                <span class="sp01">6398</span>
                <span class="sp01">2018-07-31 14:47:24</span>
                <span class="sp01">未确认</span>
                <span class="sp01">未支付</span>
                <span class="sp01">网上支付</span>
                <span class="sp01">未发货</span>
                <span class="sp01">普通快递</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div><div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1688</span>
                <span class="sp01">1533019644791</span>
                <span class="sp01">test1</span>
                <span class="sp01">6398</span>
                <span class="sp01">2018-07-31 14:47:24</span>
                <span class="sp01">未确认</span>
                <span class="sp01">未支付</span>
                <span class="sp01">网上支付</span>
                <span class="sp01">未发货</span>
                <span class="sp01">普通快递</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
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
        height: 800px;
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
    .xiala{
        margin-left: 20px;
    }
    .block{
        display: inline-block;
        /* margin-top: 8px; */
    }
    .inputVal{
        padding: 8px;
        padding-left: 20px;
        display: inline-block;
        width: 110px;
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
        margin-left: 40px;
        font-weight: 600;
        cursor: pointer;
        color: #666;
    }
    .sp01{
        font-size: 12px;
    }
    .sp01:nth-of-type(1){
      margin-left: 31px;
    }
    .sp01:nth-of-type(2){
      margin-left: 28px;
    }
    .sp01:nth-of-type(3){
      margin-left: 48px;
    }
    .sp01:nth-of-type(4){
      margin-left: 95px;
    }
   .sp01:nth-of-type(5){
      margin-left: 55px;
    }
    .sp01:nth-of-type(6){
      margin-left: 25px;
    }
    .sp01:nth-of-type(7){
      margin-left: 62px;
    }
    .sp01:nth-of-type(8){
      margin-left: 65px;
    }
    .sp01:nth-of-type(9){
      margin-left: 60px;
    }
    .sp01:nth-of-type(10){
      margin-left: 63px;
    }
    .sp01:nth-of-type(11){
      margin-left: 23px;
    }
    .block{
        padding: 10px;
    }
</style>