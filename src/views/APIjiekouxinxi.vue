<template>
  <div class="app">
    <div class="box1">
      <ul class="ul1">
        <li class="el-icon-s-home"></li>
        <li>>></li>
        <li>设置</li>
        <li>>></li>
        <li>api接口信息</li>
      </ul>
    </div>
    <p class="p1">API信息列表</p>
    <div class="box2">
      <el-button type="success" class="but1">+添加API接口信息</el-button>
    </div>
    <el-table class="box"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="ID" width="40">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="接口名称" width="80"></el-table-column>
      <el-table-column prop="address" label="接口URL" width="80" show-overflow-tooltip></el-table-column>
      <el-table-column prop="jkdm" label="接口代码" width="80"></el-table-column>
      <el-table-column prop="dycs" label="每日限制调用次数" width="80"></el-table-column>
      <el-table-column prop="zdycs" label="总调用次数" width="90"></el-table-column>
      <el-table-column prop="ydycs" label="月调用次数" width="90"></el-table-column>
      <el-table-column prop="zdycs1" label="周调用次数" width="90"></el-table-column>
      <el-table-column prop="rdycs" label="日调用次数" width="90"></el-table-column>
      <el-table-column prop label="最后一次调用时间" width="80"></el-table-column>
      <el-table-column prop="sfjy" label="是否禁用" width="80"></el-table-column>
      <el-table-column prop="cz" label="操作" width="120">
          <img src="../assets/QQ图片20201113104856.png" class="tu2">
          <img src="../assets/QQ图片20201113104901.png" class="tu2">
      </el-table-column>
    </el-table>
    <div class="box2-3">
       <el-button class="but3">批量删除</el-button> 
      <span class="span4">每页显示</span>
      <input type="text" class="tex" />
      <span class="span4">条，然后输入回车</span>
      <span class="span5">共40条</span>
      <div class="blc3">
        <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        tableData: [{
          date: '1',
          name: '接口',
          address: '/user/login',
          jkdm:'Apicode',
          dycs:'0',
          zdycs:'0',
          ydycs:'0',
          zdycs1:'0',
          rdycs:'0',
          sfjy:'否'
        }, {
          date: '1',
          name: '接口',
          address: '/user/login',
          jkdm:'Apicode',
          dycs:'0',
          zdycs:'0',
          ydycs:'0',
          zdycs1:'0',
          rdycs:'0',
          sfjy:'否'
        }, {
         date: '1',
          name: '接口',
          address: '/user/login',
          jkdm:'Apicode',
          dycs:'0',
          zdycs:'0',
          ydycs:'0',
          zdycs1:'0',
          rdycs:'0',
          sfjy:'否'
        }, {
          date: '1',
          name: '接口',
          address: '/user/login',
          jkdm:'Apicode',
          dycs:'0',
          zdycs:'0',
          ydycs:'0',
          zdycs1:'0',
          rdycs:'0',
          sfjy:'否'
        }, {
           date: '1',
          name: '接口',
          address: '/user/login',
          jkdm:'Apicode',
          dycs:'0',
          zdycs:'0',
          ydycs:'0',
          zdycs1:'0',
          rdycs:'0',
          sfjy:'否'
        }, {
          date: '1',
          name: '接口',
          address: '/user/login',
          jkdm:'Apicode',
          dycs:'0',
          zdycs:'0',
          ydycs:'0',
          zdycs1:'0',
          rdycs:'0',
          sfjy:'否'
        }, {
          date: '1',
          name: '接口',
          address: '/user/login',
          jkdm:'Apicode',
          dycs:'0',
          zdycs:'0',
          ydycs:'0',
          zdycs1:'0',
          rdycs:'0',
          sfjy:'否'
        }],
        multipleSelection: []
      }
    }
};
</script>
<style scoped>
.app {
  margin-top: 60px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.box{
    margin-left: 50px;
}
.box1 {
  width: 99.9%;
  height: 80px;
  background-color: rgba(240, 244, 246, 1);
  display: flex;
  align-items: center;
  border: solid 1px rgb(202, 198, 198);
}
.ul1 li {
  display: inline;
  list-style: none;
  color: grey;
  font-size: 14px;
  margin-right: 10px;
}
.ul1 li:nth-of-type(1) {
  font-size: 18px;
  color: rgba(4, 4, 252, 0.726);
}
.p1 {
  font-size: 14px;
  text-indent: 20px;
  background: rgba(240, 244, 246, 1);
  height: 40px;
  line-height: 40px;
  border: solid 1px rgb(202, 198, 198);
}
.box2 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.but1 {
  margin-left: 30px;
  margin-right: 20px;
}
.tu2{
    width: 40%;
    margin-right: 10px;
}
.box2-3 {
  width: 90%;
  height: 50px;
  margin-left: 50px;
  margin-top: 30px;
}
.span4 {
  font-size: 14px;
  color: #777;
  margin-right: 10px;
  margin-left: 5px;
  
}
.tex {
  height: 30px;
  width: 60px;
  outline: none;
  border: solid 1px #777;
}
.blc3 {
  float: right;
  margin-top: 5px;
}
.span5 {
  color: #777;
  font-size: 15px;
  margin-left: 320px;
}
.but3{
    margin-left: 20px;
    margin-right: 20px;
}
</style>