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
            全部
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>全部</el-dropdown-item>
                <el-dropdown-item>待审核</el-dropdown-item>
                <el-dropdown-item>已审核</el-dropdown-item>
                <el-dropdown-item>已退回</el-dropdown-item>
                <el-dropdown-item>待收货</el-dropdown-item>
                <el-dropdown-item>已收货</el-dropdown-item>
                <el-dropdown-item>已退回</el-dropdown-item>
                <el-dropdown-item>已完成</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp">ID</span>
                <span class="sp">退款流水号</span>
                <span class="sp">订单编号</span>
                <span class="sp">会员名</span>
                <span class="sp">下单日期</span>
                <span class="sp">退款类型</span>
                <span class="sp">申请日期</span>
                <span class="sp">状态</span>
                <span class="sp">操作</span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">1488333077758</span>
                <span class="sp01">1488333005894</span>
                <span class="sp01">test1</span>
                <span class="sp01">2017-03-01 09:50:05</span>
                <span class="sp01">未发货,申请退货</span>
                <span class="sp01">2017-03-01 09:51:17</span>
                <span class="sp01">已完成</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">1488333077758</span>
                <span class="sp01">1488333005894</span>
                <span class="sp01">test1</span>
                <span class="sp01">2017-03-01 09:50:05</span>
                <span class="sp01">未发货,申请退货</span>
                <span class="sp01">2017-03-01 09:51:17</span>
                <span class="sp01">已完成</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">1488333077758</span>
                <span class="sp01">1488333005894</span>
                <span class="sp01">test1</span>
                <span class="sp01">2017-03-01 09:50:05</span>
                <span class="sp01">未发货,申请退货</span>
                <span class="sp01">2017-03-01 09:51:17</span>
                <span class="sp01">已完成</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">1488333077758</span>
                <span class="sp01">1488333005894</span>
                <span class="sp01">test1</span>
                <span class="sp01">2017-03-01 09:50:05</span>
                <span class="sp01">未发货,申请退货</span>
                <span class="sp01">2017-03-01 09:51:17</span>
                <span class="sp01">已完成</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">1488333077758</span>
                <span class="sp01">1488333005894</span>
                <span class="sp01">test1</span>
                <span class="sp01">2017-03-01 09:50:05</span>
                <span class="sp01">未发货,申请退货</span>
                <span class="sp01">2017-03-01 09:51:17</span>
                <span class="sp01">已完成</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">1488333077758</span>
                <span class="sp01">1488333005894</span>
                <span class="sp01">test1</span>
                <span class="sp01">2017-03-01 09:50:05</span>
                <span class="sp01">未发货,申请退货</span>
                <span class="sp01">2017-03-01 09:51:17</span>
                <span class="sp01">已完成</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">1488333077758</span>
                <span class="sp01">1488333005894</span>
                <span class="sp01">test1</span>
                <span class="sp01">2017-03-01 09:50:05</span>
                <span class="sp01">未发货,申请退货</span>
                <span class="sp01">2017-03-01 09:51:17</span>
                <span class="sp01">已完成</span>
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
            <el-row id="buttonVal">
                <el-button>打印订单运单</el-button>
                <el-button>标记为已打印</el-button>
                <el-button>标记为未打印</el-button>
                <el-button>批量删除</el-button>
            </el-row>
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
        padding: 10px;
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
        margin-left: 70px;
        font-weight: 600;
        cursor: pointer;
        color: #666;
    }
    .sp01{
        font-size: 11px;
    }
    .sp01:nth-of-type(1){
      margin-left: 75px;
    }
    .sp01:nth-of-type(2){
      margin-left: 68px;
    }
    .sp01:nth-of-type(3){
      margin-left: 52px;
    }
    .sp01:nth-of-type(4){
      margin-left: 65px;
    }
    .sp01:nth-of-type(5){
      margin-left: 56px;
    }
    .sp01:nth-of-type(6){
      margin-left: 30px;
    }
    .sp01:nth-of-type(7){
      margin-left: 35px;
    }
    .sp01:nth-of-type(8){
      margin-left: 38px;
    }
    .sp01:nth-of-type(9){
      margin-left: 37px;
    }
    #buttonVal{
        /* padding: 10px; */
        padding-left: 20px;
    }
</style>