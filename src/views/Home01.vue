<template>
    <div id="app">
        <div id="box">
            <ul class="uls">
                <li class="el-icon-s-home"></li>
                <li>>></li>
                <li>工作台</li>
            </ul>
        </div>
        <div>
            <div class="box">
                <p class="el-icon-s-finance"></p>
                <p>0</p>
                <p>今日销售额</p>
            </div>
            <div class="box">
                 <p class="el-icon-document-checked"></p>
                 <p>0</p>
                 <p>今日订单数</p>
            </div>
            <div class="box">
                <p class="el-icon-document"></p>
                <p>5</p>
                <p>出售商品数</p>
            </div>
            <div class="box">
                <p class="el-icon-user-solid"></p>
                <p>5</p>
                <p>总会员数</p>
            </div>
        </div>
        <div id="box1">
            <div class="left">
                <div class="left-box">
                    <p>待处理</p>
                    <div class="image">
                        <img src="../assets/icon.png" width="25px">
                        <p>代发货</p>
                        <p>1057</p>
                    </div>
                    <div class="image">
                        <img src="../assets/icon (1).png" width="25px">
                        <p>代付款</p>
                        <p>1022</p>
                    </div>
                    <div class="image">
                        <img src="../assets/icon (2).png" width="25px">
                        <p>退货/退款</p>
                        <p>13</p>
                    </div>
                    <div class="image">
                        <img src="../assets/icon_home on.png" width="25px">
                        <p>退货/退款</p>
                        <p>1</p>
                    </div>
                    <div class="image">
                        <img src="../assets/contact icon.png" width="25px">
                        <p>商品咨询</p>
                        <p>68</p>
                    </div>
                </div>
                <div class="left-box01">
                    <p>常用菜单</p>
                    <div class="image01">
                        <img src="../assets/3.jpg">
                        <p>商品发布</p>
                    </div>
                    <div class="image01">
                        <img src="../assets/4.jpg">
                        <p>首页轮播图</p>
                    </div>
                    <div class="image01">
                        <img src="../assets/5.jpg">
                        <p>优惠券</p>
                    </div>
                    <div class="image01">
                        <img src="../assets/6.jpg">
                        <p>在线客服</p>
                    </div>
                    <div class="image01">
                        <img src="../assets/7.jpg">
                        <p>文章发布</p>
                    </div>
                </div>
            </div>
            <div class="right">
                <p>热销商品</p>
                <p>商品名称<span>分类</span><span>数量</span></p>
                <div class="right-box">
                     <p>恋爱女王节妈咪版系列复古的灵感挑战你的高腰牛仔裤<span>女装</span><span>3</span></p>
                     <p>【低价疯抢】Apple iPhone 6 32G<span>三星</span><span>1</span></p>
                     <p>Apple iPad Air 2 平板电脑<span>平板电脑</span><span>1</span></p>
                </div>
            </div>
        </div>
        <div id="box2">
            <p>销售额统计</p>
            <div id="image"><img src="../assets/big.jpg" width="1240px" height="340px"></div>
        </div>
        <div id="box3">
            <div class="bottom-box">
                <el-button class="butVal" type="primary">主要按钮</el-button>
                <p>系统初始时必须生成索引。生成后可加快商品的搜索速度，减小访问数据库的压力。 索引只需要生成一次即可。</p>
            </div>
            <div class="bottom-box01">
                <div class="imageBo">
                    <img src="../assets/8.jpg" width="80px">
                </div>
                <ul>
                    <li>当前系统版本: jspgou 单店版 5.0版</li>
                    <li>最近登录时间: 2018-07-29 15:18:30</li>
                    <li>内存: 已用 508MB     剩余 78MB    最大 3531MB</li>
                </ul>
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
    }
    #box{
        margin-top: 70px;
    }
    .uls{
        list-style: none;
    }
    .uls>li{
        display: inline-block;
        margin-left: 10px;
        cursor: pointer;
    }
    .uls>li:nth-of-type(1){
        color: #409eff;
    }
    .uls>li:nth-of-type(2){
        color: #666;
    }.uls>li:nth-of-type(3){
        color: #666;
    }
    .box{
        display: inline-block;
        width: 300px;
        height: 90px;
        
        margin-left: 17px;
        border-radius: 5px;
    }
    .box:nth-of-type(1){
        background-color: #17d57e;
    }
    .box:nth-of-type(2){
        background-color: #fec92b;
    }
    .box:nth-of-type(3){
        background-color: #2da3fb;
    }
    .box:nth-of-type(4){
        background-color: #c172d8;
    }
    .box>p{
        cursor: pointer;
    }
    .box>p:nth-of-type(1){
        font-size: 35px;
        float: left;
       margin-top: 8px;
       margin-left: 15px;
       color: white;
    }
    .box>p:nth-of-type(2){
        font-size: 35px;
        float: right;
       margin-top: 8px;
       margin-right: 15px;
       color: white;
    }
    .box>p:nth-of-type(3){
        font-size: 15px;
        float: right;
       margin-top: 52px;
       margin-right: -18px;
       color: white;
    }
    #box1{
        margin-top: 13px;
    }
    .left{
        float: left;
        /* border: 1px solid black; */
        width: 610px;
        margin-left: 18px;
        
    }
    .left-box{
        height: 200px;
        border: 1px solid white;
        background-color: white;
    }
    .left-box>p{
        height: 30px;
        border-bottom: 1px solid #dfdfdf;
        padding-left: 8px;
        cursor: pointer;
    }
    .left-box01{
        height: 200px;
         border: 1px solid white;
         background-color: white;
         margin-top: 15px;
    }
    .left-box01>p{
        height: 30px;
        border-bottom: 1px solid #dfdfdf;
        padding-left: 8px;
        cursor: pointer;
    }
    .right{
        /* border: 1px solid black; */
        width: 610px;
        float: right;
        margin-right: 18px;
        height: 420px;
        cursor: pointer;
    }
    .right>p:nth-of-type(1){
        height: 30px;
        border-bottom: 1px solid #dfdfdf;
        padding-left: 8px;
        height: 36px;
        padding: 6px;
        line-height: 40px;
        cursor: pointer;
        background-color: white;
         margin-top: -0px;
    }
    .right>p:nth-of-type(2){
        height: 36px;
        padding: 6px;
        line-height: 40px;
        background-color: #f0f4f6;
        margin-top: -15px;
        
    }
    .right>p:nth-of-type(2)>span{
        float: right;
        margin-right: 50px;
    }
    .right-box{
        background-color: white;
        height: 315px;
    }
    .right-box>p{
        height: 36px;
        padding: 6px;
        line-height: 40px;
        /* background-color: #f0f4f6; */
        margin-top: -15px;
        border-bottom: 1px solid #eaeaea;
    }
    .right-box>p>span{
        float: right;
        margin-right: 50px;
    }
    .image{
        display: inline-block;
        /* border: 1px solid red; */
        width: 110px;
        height: 100px;
        margin-left: 10px;
        text-align: center;
        margin-top: 8px;
        /* line-height: 13px; */
    }
    .image>p{
        cursor: pointer;
    }
    .image>p:nth-of-type(1){
        color: #999999;
        font-size: 11px;
        cursor: pointer;
    }
    .image01{
        display: inline-block;
        width: 110px;
        height: 100px;
        margin-left: 10px;
        text-align: center;
        margin-top: 5px;
        line-height: 10px;
    }
    .image01>image{
        width: 45px;
        height: 45px;
        border-radius: 5px;
    }
    .image01>p{
        font-size: 14px;
        color: #999999;
        cursor: pointer;
    }
    #box2{
        /* border: 1px solid red; */
        height: 400px;
        margin-top: 450px;
        width: 97%;
        margin-left: 20px;
    }
    #box2>p{
        height: 50px;
        border-bottom: 1px solid #dfdfdf;
        padding-left: 8px;
        cursor: pointer;
        background-color: white;
        line-height: 50px;
        margin-top: -0px;
        border-bottom: 1px solid #eaeaea;
    }
    #image>img{
        margin-top: -15px;
    }
    #box3{
        /* border: 1px solid red; */
        height: 150px;
        /* margin-top: 50px; */
        width: 97%;
        margin-left: 20px;
    }
    .bottom-box{
        /* border: 1px solid black; */
        width: 600px;
        height: 110px;
        margin-top: 18px;
        float: left;
        background-color: white;
        padding: 5px;
    }
    .bottom-box01{
        /* border: 1px solid black;s */
        width: 610px;
        height: 120px;
        margin-top: 18px;
        float: right;
        background-color: white;
    }
    
    .bottom-box>p{
        color: #999999;
        font-size: 14px;
    }
    .imageBo>img{
        padding: 10px;
        margin-top: 8px;
        margin-left: 10px;
    }
    .bottom-box01>ul{
        list-style: none;
        margin-top: -100px;
        margin-left: 80px;
    }
    .bottom-box01>ul>li{
        margin-top: 7px;
        color: #999;
        cursor: pointer;
    }
</style>