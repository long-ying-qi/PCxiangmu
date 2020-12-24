<template>
    <div id="app">
        <div id="box">
            <ul class="uls">
                <li class="el-icon-s-home"></li>
                <li>>></li>
                <li>界面</li>
                <li>>></li>
                <li>栏目</li>
            </ul>
        </div>
        <div id="big-box">
            <p>分类列表</p>
            <el-button id="buttonVal" type="primary">+添加单页栏目</el-button>
            <el-button id="buttonVal" type="primary">+添加文章栏目</el-button>
            <el-button id="buttonVal" type="primary">+添加链接栏目</el-button>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp">ID</span>
                <span class="sp">栏目名称</span>
                <span class="sp">栏目类型</span>
                <span class="sp">访问路径</span>
                <span class="sp">栏目页模板</span>
                <span class="sp">内容页模板</span>
                <span class="sp">是否显示</span>
                <span class="sp">排序</span>
                <span class="sp">操作</span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">新手入门</span>
                <span class="sp01">文章项目</span>
                <span class="sp01">xsrm</span>
                <span class="sp01">网站公告栏目.html</span>
                <span class="sp01">网站公告内容.html</span>
                <span class="sp01">是</span>
                <span class="sp01">10</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">新手入门</span>
                <span class="sp01">文章项目</span>
                <span class="sp01">xsrm</span>
                <span class="sp01">网站公告栏目.html</span>
                <span class="sp01">网站公告内容.html</span>
                <span class="sp01">是</span>
                <span class="sp01">10</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">新手入门</span>
                <span class="sp01">文章项目</span>
                <span class="sp01">xsrm</span>
                <span class="sp01">网站公告栏目.html</span>
                <span class="sp01">网站公告内容.html</span>
                <span class="sp01">是</span>
                <span class="sp01">10</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">新手入门</span>
                <span class="sp01">文章项目</span>
                <span class="sp01">xsrm</span>
                <span class="sp01">网站公告栏目.html</span>
                <span class="sp01">网站公告内容.html</span>
                <span class="sp01">是</span>
                <span class="sp01">10</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">新手入门</span>
                <span class="sp01">文章项目</span>
                <span class="sp01">xsrm</span>
                <span class="sp01">网站公告栏目.html</span>
                <span class="sp01">网站公告内容.html</span>
                <span class="sp01">是</span>
                <span class="sp01">10</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">新手入门</span>
                <span class="sp01">文章项目</span>
                <span class="sp01">xsrm</span>
                <span class="sp01">网站公告栏目.html</span>
                <span class="sp01">网站公告内容.html</span>
                <span class="sp01">是</span>
                <span class="sp01">10</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            <div class="box02">
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="sp01">1</span>
                <span class="sp01">新手入门</span>
                <span class="sp01">文章项目</span>
                <span class="sp01">xsrm</span>
                <span class="sp01">网站公告栏目.html</span>
                <span class="sp01">网站公告内容.html</span>
                <span class="sp01">是</span>
                <span class="sp01">10</span>
                <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
            </div>
            
            <el-button class="buttonVal01">保存排序</el-button>
            <el-button class="buttonVal01">批量删除</el-button>
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
        margin-left: 65px;
        font-weight: 600;
        cursor: pointer;
        color: #666;
    }
    .sp01{
        font-size: 12px;
    }
    .sp01:nth-of-type(1){
      margin-left: 68px;
    }
    .sp01:nth-of-type(2){
      margin-left: 78px;
    }
    .sp01:nth-of-type(3){
      margin-left:79px;
    }
    .sp01:nth-of-type(4){
      margin-left: 95px;
    }
    .sp01:nth-of-type(5){
      margin-left: 75px;
    }
    .sp01:nth-of-type(6){
      margin-left: 45px;
    }
    .sp01:nth-of-type(7){
      margin-left: 80px;
    }
    .sp01:nth-of-type(8){
      margin-left: 100px;
    }
    .sp01:nth-of-type(9){
      margin-left: 50px;
    }
    #buttonVal{
        margin: 10px;
    }
    .buttonVal01{
        margin: 10px;
    }
</style>9