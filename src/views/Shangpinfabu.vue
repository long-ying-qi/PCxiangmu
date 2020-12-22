<template>
    <div id="app">
        <div id="box">
            <ul class="uls">
                <li class="el-icon-s-home"></li>
                <li>>></li>
                <li>商品</li>
                <li>>></li>
                <li>商品管理</li>
            </ul>
        </div>
        <div id="big-box">
            <div class="header">
                <p>您当前选择的商品类型是：<span>数码>手机>三星</span></p>
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
        height: 700px;
        margin: 50px;
        margin-top: -0px;
        background-color: white;
    }
    .header{
        width: 1100px;
        height: 50px;
        border: 1px solid #f8ac59;
        margin-left: 35px;
        background-color: #fff4f0;
       padding-left: 13px;
    }
    .header>p{
        color: #f8ac59;
        font-weight: 600;
        cursor: pointer;
    }
    .header>p>span{
        color: #1ab394;
        font-weight: normal;
    }
</style>