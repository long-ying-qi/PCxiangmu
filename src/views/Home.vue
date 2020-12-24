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
              <router-link tag="el-menu-item" to="Dingdangunali">订单管理</router-link>
              <router-link tag="el-menu-item" to="Dayin">打印快递单</router-link>
              <router-link tag="el-menu-item" to="Fahuo">发货信息管理</router-link>
              <router-link tag="el-menu-item" to="Tuikuan">退款/退货订单</router-link>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">运营</template>
              <router-link tag="el-menu-item" to="Guanliyuan">管理员</router-link>
              <router-link tag="el-menu-item" to="Jiaoseguanli">角色管理</router-link>
              <router-link tag="el-menu-item" to="Guanggaobanwei">广告版位</router-link>
              <router-link tag="el-menu-item" to="Guanggaoguanli">广告管理</router-link>
              <router-link tag="el-menu-item" to="Youhuijuan">优惠券</router-link>
              <router-link tag="el-menu-item" to="Zaixiankefu">在线客服</router-link>
              <router-link tag="el-menu-item" to="Shouyehaibao">首页海报</router-link>
              <router-link tag="el-menu-item" to="Rizhi">操作系统日志</router-link>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">用户</template>
              <router-link tag="el-menu-item" to="Yonghu">用户管理</router-link>
              <router-link tag="el-menu-item" to="Yonghu01">用户等级</router-link>
              <router-link tag="el-menu-item" to="Yonghu02">数据字典</router-link>
              <router-link tag="el-menu-item" to="Yonghu03">字典类型</router-link>
              <router-link tag="el-menu-item" to="Yonghu04">站内信</router-link>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">界面</template>
              <router-link tag="el-menu-item" to="Lanmu">栏目</router-link>
              <router-link tag="el-menu-item" to="Wenzhang">文章</router-link>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">设置</template>
              <router-link tag="el-menu-item" to="Quanjushezhi">全局设置</router-link>
              <router-link tag="el-menu-item" to="Jibenshezhi">基本设置</router-link>
              <router-link tag="el-menu-item" to="Youxiangshezhi">邮箱设置</router-link>
              <router-link tag="el-menu-item" to="Dandianshezhi">单点登录设置</router-link>
              <router-link tag="el-menu-item" to="Disanfang">第三方登录设置</router-link>
              <router-link tag="el-menu-item" to="Zhifuchajian">支付插件</router-link>
              <router-link tag="el-menu-item" to="Gongzhonghao">公众号设置</router-link>
              <router-link tag="el-menu-item" to="Peisongshezhi">配送设置</router-link>
              <router-link tag="el-menu-item" to="APIjiekouguanli">API接口账号管理</router-link>
              <router-link tag="el-menu-item" to="APIjiekouxinxi">API接口信息</router-link>
              <router-link tag="el-menu-item" to="APIjiekoudiaoyong">API接口调用记录</router-link>
              <router-link tag="el-menu-item" to="FTP">FTP管理</router-link>
              <router-link tag="el-menu-item" to="Wuliugongsi">物流公司</router-link>
              <router-link tag="el-menu-item" to="Quyuguanli">区域管理</router-link>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">优职坊</template>
              <router-link tag="el-menu-item" to="last">优职坊</router-link>
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