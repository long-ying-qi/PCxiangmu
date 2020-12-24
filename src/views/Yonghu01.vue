<template>
    <div id="app">
        <div id="box">
            <ul class="uls">
                <li class="el-icon-s-home"></li>
                <li>>></li>
                <li>商品</li>
                <li>>></li>
                <li>用户等级</li>
            </ul>
        </div>
        <div id="big-box">
            <p>用户等级列表</p>
            <el-button id="buttonVal" type="primary">+添加用户等级</el-button>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp">ID</span>
                <span class="sp">用户等级</span>
                <span class="sp">所需积分</span>
                <span class="sp">折扣</span>
                <span class="sp">操作</span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">2</span>
                <span class="sp01">高级会员</span>
                <span class="sp01">500</span>
                <span class="sp01">80</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">3</span>
                <span class="sp01">金牌会员</span>
                <span class="sp01">1000</span>
                <span class="sp01">70</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">普通会员</span>
                <span class="sp01">0</span>
                <span class="sp01">90</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            
            <el-button id="buttonVal01">批量删除</el-button>
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
        margin-left: 155px;
        font-weight: 600;
        cursor: pointer;
        color: #666;
    }
    .sp01{
        font-size: 12px;
    }
    .sp01:nth-of-type(1){
      margin-left: 158px;
    }
    .sp01:nth-of-type(2){
      margin-left: 168px;
    }
    .sp01:nth-of-type(3){
      margin-left: 192px;
    }
    .sp01:nth-of-type(4){
      margin-left: 195px;
    }
    .sp01:nth-of-type(5){
      margin-left: 140px;
    }
    #buttonVal{
        margin: 10px;
    }
    #buttonVal01{
        margin: 10px;
    }
</style>