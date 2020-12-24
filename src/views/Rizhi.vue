<template>
    <div id="app">
        <div id="box">
            <ul class="uls">
                <li class="el-icon-s-home"></li>
                <li>>></li>
                <li>商品</li>
                <li>>></li>
                <li>广告版位</li>
            </ul>
        </div>
        <div id="big-box">
            <p>广告版位列表</p>
            <el-button id="buttonVal" type="primary">+添加角色</el-button>
            <div class="box02">
                <span class="sp">ID</span>
                <span class="sp">标题</span>
                <span class="sp">内容</span>
                <span class="sp">操作时间</span>
            </div>
            <div class="box02">
                <span class="sp01">1</span>
                <span class="sp01">login success</span>
                <span class="sp01">修复规格字段名称重复引起的款式问题。</span>
                <span class="sp01">2017-11-13 13:43:07</span>
            </div>
            <div class="box02">
                <span class="sp01">1</span>
                <span class="sp01">login success</span>
                <span class="sp01">修复规格字段名称重复引起的款式问题。</span>
                <span class="sp01">2017-11-13 13:43:07</span>
            </div>
            <div class="box02">
                <span class="sp01">1</span>
                <span class="sp01">login success</span>
                <span class="sp01">修复规格字段名称重复引起的款式问题。</span>
                <span class="sp01">2017-11-13 13:43:07</span>
            </div>
            <div class="box02">
                <span class="sp01">1</span>
                <span class="sp01">login success</span>
                <span class="sp01">修复规格字段名称重复引起的款式问题。</span>
                <span class="sp01">2017-11-13 13:43:07</span>
            </div>
            <div class="box02">
                <span class="sp01">1</span>
                <span class="sp01">login success</span>
                <span class="sp01">修复规格字段名称重复引起的款式问题。</span>
                <span class="sp01">2017-11-13 13:43:07</span>
            </div>
            <div class="box02">
                <span class="sp01">1</span>
                <span class="sp01">login success</span>
                <span class="sp01">修复规格字段名称重复引起的款式问题。</span>
                <span class="sp01">2017-11-13 13:43:07</span>
            </div>
            <div class="box02">
                <span class="sp01">1</span>
                <span class="sp01">login success</span>
                <span class="sp01">修复规格字段名称重复引起的款式问题。</span>
                <span class="sp01">2017-11-13 13:43:07</span>
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
        margin-left: 205px;
        font-weight: 600;
        cursor: pointer;
        color: #666;
    }
    .sp01{
        font-size: 12px;
    }
    .sp01:nth-of-type(1){
      margin-left: 208px;
    }
    .sp01:nth-of-type(2){
      margin-left: 190px;
    }
    .sp01:nth-of-type(3){
      margin-left: 100px;
    }
    .sp01:nth-of-type(4){
      margin-left: 80px;
    }
    #buttonVal{
        margin: 10px;
    }
    #buttonVal01{
        margin: 10px;
    }
</style>