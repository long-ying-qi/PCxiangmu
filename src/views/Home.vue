<template>
  <div id="app">
    <Header></Header>
    <div class="cbl">
      <el-container style="border: 1px solid #eee">
        <el-aside width="220px" style="background-color: #333">
          <el-menu class="ys">
            <el-submenu index="1">
              <template slot="title">工作台</template>
              <router-link tag="el-menu-item" to="Home01">工作台</router-link>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">商品</template>
              <router-link tag="el-menu-item" to="Shangpinguanli">商品管理</router-link>
              <router-link tag="el-menu-item" to="Shangpinfabu">发布商品</router-link>
              <router-link tag="el-menu-item" to="Fenleiguanli">分类管理</router-link>
              <router-link tag="el-menu-item" to="Pinpaiguanli">品牌管理</router-link>
              <router-link tag="el-menu-item" to="Guigeguanli">规格管理</router-link>
              <router-link tag="el-menu-item" to="Leixingguanli">类型管理</router-link>
              <router-link tag="el-menu-item" to="Shangpinzixun">商品咨询</router-link>
              <router-link tag="el-menu-item" to="Shangpinpingjia">商品评价</router-link>
              <router-link tag="el-menu-item" to="Rexiaoshangping">热销商品</router-link>
              <router-link tag="el-menu-item" to="Kucunyujing">库存预警</router-link>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">订单</template>
              <router-link tag="el-menu-item" to="ddgl">订单管理</router-link>
              <router-link tag="el-menu-item" to="dykd">打印快递单</router-link>
              <router-link tag="el-menu-item" to="fhxx">发货信息管理</router-link>
              <router-link tag="el-menu-item" to="thfk">退款/退货订单</router-link>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">运营</template>
              <router-link tag="el-menu-item" to="gly">管理员</router-link>
              <router-link tag="el-menu-item" to="jsgl">角色管理</router-link>
              <router-link tag="el-menu-item" to="ggbw">广告版位</router-link>
              <router-link tag="el-menu-item" to="gggl2">广告管理</router-link>
              <router-link tag="el-menu-item" to="yhj">优惠券</router-link>
              <router-link tag="el-menu-item" to="zxkf">在线客服</router-link>
              <router-link tag="el-menu-item" to="syhb">首页海报</router-link>
              <router-link tag="el-menu-item" to="czxtrz">操作系统日志</router-link>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">用户</template>
              <router-link tag="el-menu-item" to="yhgl">用户管理</router-link>
              <router-link tag="el-menu-item" to="yhdj">用户等级</router-link>
              <router-link tag="el-menu-item" to="sjzd">数据字典</router-link>
              <router-link tag="el-menu-item" to="zdlx">字典类型</router-link>
              <router-link tag="el-menu-item" to="znx">站内信</router-link>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">界面</template>
              <router-link tag="el-menu-item" to="lm">栏目</router-link>
              <router-link tag="el-menu-item" to="wz">文章</router-link>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">设置</template>
              <router-link tag="el-menu-item" to="qjzs">全局设置</router-link>
              <router-link tag="el-menu-item" to="jbsz">基本设置</router-link>
              <router-link tag="el-menu-item" to="yxsz">邮箱设置</router-link>
              <router-link tag="el-menu-item" to="djdl">单点登录设置</router-link>
              <router-link tag="el-menu-item" to="dsf">第三方登录设置</router-link>
              <router-link tag="el-menu-item" to="zfsz">支付插件</router-link>
              <router-link tag="el-menu-item" to="gzh">公众号设置</router-link>
              <router-link tag="el-menu-item" to="pssz">配送设置</router-link>
              <router-link tag="el-menu-item" to="apizh">API接口账号管理</router-link>
              <router-link tag="el-menu-item" to="apixx">API接口信息</router-link>
              <router-link tag="el-menu-item" to="apidy">API接口调用记录</router-link>
              <router-link tag="el-menu-item" to="ftp">FTP管理</router-link>
              <router-link tag="el-menu-item" to="wlgs">物流公司</router-link>
              <router-link tag="el-menu-item" to="qygl">区域管理</router-link>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">优职坊</template>
            </el-submenu>
          </el-menu>
        </el-aside>
        <keep-alive>
          <router-view>
          </router-view>
        </keep-alive>
      </el-container>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  name: "home",
  components: {
    Header
  }
};
</script>
<style>
.el-menu-item {
  background: #393d49 ;
  line-height: 120px;
}
.ys {
  background:#393d49;
}
.el-aside {
  margin-top: 60px;
}
.el-aside::-webkit-scrollbar {
  display: none;
}
.el-submenu__title {
  color: #a1a3a6;
}
.el-menu-item {
  color: #a1a3a6;
}
.cbl {
  /* padding-bottom: 100px; */
  height: 500px;
}
</style>