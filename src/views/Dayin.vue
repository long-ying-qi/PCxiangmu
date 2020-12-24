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
            选择快递单模板
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>选择快递单模板</el-dropdown-item>
                <el-dropdown-item>测试</el-dropdown-item>
                <el-dropdown-item>圆通快递</el-dropdown-item>
                <el-dropdown-item>顺丰快递</el-dropdown-item>
                <el-dropdown-item>测试物流</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="xiala" split-button type="primary">
            全部订单
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>全部订单</el-dropdown-item>
                <el-dropdown-item>已打印</el-dropdown-item>
                <el-dropdown-item>未打印</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp">ID</span>
                <span class="sp">订单编号</span>
                <span class="sp">物流编号</span>
                <span class="sp">是否打印快递面单</span>
                <span class="sp">操作员</span>
                <span class="sp">操作</span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">2</span>
                <span class="sp01">1492674091791</span>
                <span class="sp01">861492587823613</span>
                <span class="sp01">未打印</span>
                <span class="sp01">admin</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">2</span>
                <span class="sp01">1492674091791</span>
                <span class="sp01">861492587823613</span>
                <span class="sp01">未打印</span>
                <span class="sp01">admin</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">2</span>
                <span class="sp01">1492674091791</span>
                <span class="sp01">861492587823613</span>
                <span class="sp01">未打印</span>
                <span class="sp01">admin</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">2</span>
                <span class="sp01">1492674091791</span>
                <span class="sp01">861492587823613</span>
                <span class="sp01">未打印</span>
                <span class="sp01">admin</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">2</span>
                <span class="sp01">1492674091791</span>
                <span class="sp01">861492587823613</span>
                <span class="sp01">未打印</span>
                <span class="sp01">admin</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">2</span>
                <span class="sp01">1492674091791</span>
                <span class="sp01">861492587823613</span>
                <span class="sp01">未打印</span>
                <span class="sp01">admin</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">2</span>
                <span class="sp01">1492674091791</span>
                <span class="sp01">861492587823613</span>
                <span class="sp01">未打印</span>
                <span class="sp01">admin</span>
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
        margin-left: 120px;
        font-weight: 600;
        cursor: pointer;
        color: #666;
    }
    .sp01{
        font-size: 12px;
    }
    .sp01:nth-of-type(1){
      margin-left: 120px;
    }
    .sp01:nth-of-type(2){
      margin-left: 120px;
    }
    .sp01:nth-of-type(3){
      margin-left: 88px;
    }
    .sp01:nth-of-type(4){
      margin-left: 145px;
    }
    .sp01:nth-of-type(5){
      margin-left: 172px;
    }
    .sp01:nth-of-type(6){
      margin-left: 98px;
    }
    #buttonVal{
        /* padding: 10px; */
        padding-left: 20px;
    }
</style>