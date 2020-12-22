<template>
    <div id="app">
        <div id="box">
            <ul class="uls">
                <li class="el-icon-s-home"></li>
                <li>>></li>
                <li>商品</li>
                <li>>></li>
                <li>品牌管理</li>
            </ul>
        </div>
        <div id="big-box">
            <p>品牌列表</p>
            <div class="right-box01">
                <div class="box-top">
                    <p><el-button id="butVal" type="primary">添加分类</el-button></p>
                </div>
                <div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp">ID</span>
                    <span class="sp">品牌名称</span>
                    <span class="sp">品牌类型</span>
                    <span class="sp">官网网址</span>
                    <span class="sp">排列顺序</span>
                    <span class="sp">精选品牌</span>
                    <span class="sp">是否禁用</span>
                    <span class="sp">操作</span>
                </div>
                <div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">18</span>
                    <span class="sp01">8</span>
                    <span class="sp01">数码</span>
                    <span class="sp01">http://www.youzhifang.net</span>
                    <span><input type="text" id="buttonVal" value="3"></span>
                    <span class="sp01">否</span>
                    <span class="sp01">否</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div>
                <div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">18</span>
                    <span class="sp01">8</span>
                    <span class="sp01">数码</span>
                    <span class="sp01">http://www.youzhifang.net</span>
                    <span><input type="text" id="buttonVal" value="3"></span>
                    <span class="sp01">否</span>
                    <span class="sp01">否</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div><div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">18</span>
                    <span class="sp01">8</span>
                    <span class="sp01">数码</span>
                    <span class="sp01">http://www.youzhifang.net</span>
                    <span><input type="text" id="buttonVal" value="3"></span>
                    <span class="sp01">否</span>
                    <span class="sp01">否</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div><div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">18</span>
                    <span class="sp01">8</span>
                    <span class="sp01">数码</span>
                    <span class="sp01">http://www.youzhifang.net</span>
                    <span><input type="text" id="buttonVal" value="3"></span>
                    <span class="sp01">否</span>
                    <span class="sp01">否</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div><div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">18</span>
                    <span class="sp01">8</span>
                    <span class="sp01">数码</span>
                    <span class="sp01">http://www.youzhifang.net</span>
                    <span><input type="text" id="buttonVal" value="3"></span>
                    <span class="sp01">否</span>
                    <span class="sp01">否</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div><div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">18</span>
                    <span class="sp01">8</span>
                    <span class="sp01">数码</span>
                    <span class="sp01">http://www.youzhifang.net</span>
                    <span><input type="text" id="buttonVal" value="3"></span>
                    <span class="sp01">否</span>
                    <span class="sp01">否</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div><div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">18</span>
                    <span class="sp01">8</span>
                    <span class="sp01">数码</span>
                    <span class="sp01">http://www.youzhifang.net</span>
                    <span><input type="text" id="buttonVal" value="3"></span>
                    <span class="sp01">否</span>
                    <span class="sp01">否</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div><div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">18</span>
                    <span class="sp01">8</span>
                    <span class="sp01">数码</span>
                    <span class="sp01">http://www.youzhifang.net</span>
                    <span><input type="text" id="buttonVal" value="3"></span>
                    <span class="sp01">否</span>
                    <span class="sp01">否</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div><div class="box02">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span class="sp01">18</span>
                    <span class="sp01">8</span>
                    <span class="sp01">数码</span>
                    <span class="sp01">http://www.youzhifang.net</span>
                    <span><input type="text" id="buttonVal" value="3"></span>
                    <span class="sp01">否</span>
                    <span class="sp01">否</span>
                    <span class="sp01"><el-button type="primary" icon="el-icon-edit" circle></el-button> <el-button type="danger" icon="el-icon-delete" circle></el-button></span>
                </div>
                <div id="butVal01">
                    <el-button plain>保存排序</el-button><el-button plain>批量删除</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
          checked: true,
        data: [{
          id: 1,
          label: '日用百货',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '数码',
          children: [{
            id: 5,
            label: '手机'
          }, {
            id: 6,
            label: '笔记本'
          }, {
            id: 6,
            label: '电脑整机'
          }, {
            id: 6,
            label: '办公'
          }, {
            id: 6,
            label: '摄影摄像'
          }]
        }, {
          id: 3,
          label: '服装',
          children: [{
            id: 7,
            label: '男装'
          }, {
            id: 8,
            label: '女装'
          }, {
            id: 8,
            label: '童装'
          }, {
            id: 8,
            label: '内衣'
          }, {
            id: 8,
            label: '套装'
          }]
        },
        {
          id: 3,
          label: '鞋包配饰',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        },
        {
          id: 3,
          label: '家居建材',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        },{
          id: 3,
          label: '珠宝手表',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        options: [
        {
          value: "选项1",
          label: "在售"
        },
        {
          value: "选项2",
          label: "下架"
        }
      ]
      };
    }
  };
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
        height: 870px;
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
    .box-top>p{
        font-size: 14px
    }
    .box-top>p>span{
        color: #409eff;
    }
    #butVal{
        /* margin-right: -8px; */
        margin-left: 10px;
    }
    #butVal01{
        margin-top: 8px;
        margin-left: 20px;
    }
    #buttonVal{
        width: 30px;
        height: 30px;
        border: 1px solid #eaeaea;
        border-radius: 5px;
        margin-left: 40px;
    }
    .right-box01{
        float: left;
        width: 1180px;
        /* border: 1px solid red; */
        /* top: 100px; */
        margin-top: 00px;
    }
    
    
    .box02{
        height: 65px;
        line-height: 65px;
        padding-left: 15px;
        border: 1px solid #eaeaea;
        /* margin-top: 5px; */
        position: relative;
    }
    .sp{
        margin-left: 85px;
        font-weight: 600;
        cursor: pointer;
        color: #999;
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
      margin-left: 85px;
    }
    .sp01:nth-of-type(2){
      margin-left: 112px;
    }
    .sp01:nth-of-type(3){
      margin-left: 135px;
    }
    .sp01:nth-of-type(4){
      margin-left: 60px;
    }
    .sp01:nth-of-type(6){
      margin-left: 125px;
    }
    .sp01:nth-of-type(7){
      margin-left: 143px;
    }
    .sp01:nth-of-type(8){
      margin-left: 75px;
    }
  
    
</style>