<template>
    <div id="app">
        <div id="box">
            <ul class="uls">
                <li class="el-icon-s-home"></li>
                <li>>></li>
                <li>商品</li>
                <li>>></li>
                <li>商品咨询</li>
            </ul>
        </div>
        <div id="big-box">
            <p>订单列表</p>
            <div class="big-input">
                咨询人：
                <el-input class="buttonVal" v-model="input" placeholder="请输入内容"></el-input>
                咨询商品：
                <el-input class="buttonVal" v-model="input" placeholder="请输入内容"></el-input>
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
                </div>
                <el-button class="buttonVal01" type="primary">查询</el-button>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp">ID</span>
                <span class="sp">咨询时间</span>
                <span class="sp">咨询商品</span>
                <span class="sp">咨询人</span>
                <span class="sp">操作</span>
            </div>
            <div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">27</span>
                    <span class="sp01">2018-07-27</span>
                    <span class="sp01">奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调</span>
                    <span class="sp01">test1</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div>
                <div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">27</span>
                    <span class="sp01">2018-07-27</span>
                    <span class="sp01">奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调</span>
                    <span class="sp01">test1</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div>
                <div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">27</span>
                    <span class="sp01">2018-07-27</span>
                    <span class="sp01">奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调</span>
                    <span class="sp01">test1</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div>
                <div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">27</span>
                    <span class="sp01">2018-07-27</span>
                    <span class="sp01">奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调</span>
                    <span class="sp01">test1</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div>
                <div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">27</span>
                    <span class="sp01">2018-07-27</span>
                    <span class="sp01">奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调</span>
                    <span class="sp01">test1</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div>
                <div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">27</span>
                    <span class="sp01">2018-07-27</span>
                    <span class="sp01">奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调</span>
                    <span class="sp01">test1</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
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
        margin-left: 18px;
    }
    .block{
        display: inline-block;
        margin-left: 10px;
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
        margin-left: 165px;
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
      margin-left: 165px;
    }
    .sp01:nth-of-type(2){
      margin-left: 140px;
    }
    .sp01:nth-of-type(3){
      margin-left: 55px;
    }
    .sp01:nth-of-type(4){
      margin-left: 35px;
    }
   .sp01:nth-of-type(5){
      margin-left: 145px;
    }
    #butVal01{
        padding: 20px;
    }
</style>