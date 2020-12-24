import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('./views/Login.vue')
    },
    {
        path: '/',
        redirect: '/Login',
    },
    {
        path: '/Home',
        component: () =>
            import ('./views/Home.vue'),
        children: [{
            path: '/Home01',
            component: () =>
                import ('./views/Home01.vue')
        }, {
            path: '/Shangpinguanli',
            component: () =>
                import ('./views/Shangpingunali.vue')
        }, {
            path: '/Shangpinfabu',
            component: () =>
                import ('./views/Shangpinfabu.vue')
        }, {
            path: '/Fenleiguanli',
            component: () =>
                import ('./views/Fenleiguanli.vue')
        }, {
            path: '/Pinpaiguanli',
            component: () =>
                import ('./views/Pinpaiguanli.vue')
        }, {
            path: '/Guigeguanli',
            component: () =>
                import ('./views/Guigeguanli.vue')
        }, {
            path: '/Leixingguanli',
            component: () =>
                import ('./views/Leixingguanli.vue')
        }, {
            path: '/Shangpinzixun',
            component: () =>
                import ('./views/Shangpinzixun.vue')
        }, {
            path: '/Shangpinpingjia',
            component: () =>
                import ('./views/Shangpinpingjia.vue')
        }, {
            path: '/Rexiaoshangping',
            component: () =>
                import ('./views/Rexiaoshangping.vue')
        }, {
            path: '/Kucunyujing',
            component: () =>
                import ('./views/Kucunyujing.vue')
        }, {
            path: '/Dingdangunali',
            component: () =>
                import ('./views/Dingdangunali.vue')
        }, {
            path: '/Dayin',
            component: () =>
                import ('./views/Dayin.vue')
        }, {
            path: '/Fahuo',
            component: () =>
                import ('./views/Fahuo.vue')
        }, {
            path: '/Tuikuan',
            component: () =>
                import ('./views/Tuikuan.vue')

        }, {
            path: '/Guanliyuan',
            component: () =>
                import ('./views/Guanliyuan.vue')

        }, {
            path: '/Jiaoseguanli',
            component: () =>
                import ('./views/Jiaoseguanli.vue')

        }, {
            path: '/Guanggaobanwei',
            component: () =>
                import ('./views/Guanggaobanwei.vue')

        }, {
            path: '/Guanggaoguanli',
            component: () =>
                import ('./views/Guanggaoguanli.vue')

        }, {
            path: '/Youhuijuan',
            component: () =>
                import ('./views/Youhuijuan.vue')

        }, {
            path: '/Zaixiankefu',
            component: () =>
                import ('./views/Zaixiankefu.vue')

        }, {
            path: '/Shouyehaibao',
            component: () =>
                import ('./views/Shouyehaibao.vue')

        }, {
            path: '/Rizhi',
            component: () =>
                import ('./views/Rizhi.vue')

        }, {
            path: '/Yonghu',
            component: () =>
                import ('./views/Yonghu.vue')

        }, {
            path: '/Yonghu01',
            component: () =>
                import ('./views/Yonghu01.vue')

        }, {
            path: '/Yonghu02',
            component: () =>
                import ('./views/Yonghu02.vue')

        }, {
            path: '/Yonghu03',
            component: () =>
                import ('./views/Yonghu03.vue')

        }, {
            path: '/Yonghu04',
            component: () =>
                import ('./views/Yonghu04.vue')

        }, {
            path: '/Lanmu',
            component: () =>
                import ('./views/Lanmu.vue')

        }, {
            path: '/Wenzhang',
            component: () =>
                import ('./views/Wenzhang.vue')

        }, {
            path: '/Quanjushezhi',
            component: () =>
                import ('./views/Quanjushezhi.vue')

        }, {
            path: '/Jibenshezhi',
            component: () =>
                import ('./views/Jibenshezhi.vue')

        }, {
            path: '/Youxiangshezhi',
            component: () =>
                import ('./views/Youxiangshezhi.vue')

        }, {
            path: '/Dandianshezhi',
            component: () =>
                import ('./views/Dandianshezhi.vue')

        }, {
            path: '/Disanfang',
            component: () =>
                import ('./views/Disanfang.vue')

        }, {
            path: '/Zhifuchajian',
            component: () =>
                import ('./views/Zhifuchajian.vue')

        }, {
            path: '/Gongzhonghao',
            component: () =>
                import ('./views/Gongzhonghao.vue')

        }, {
            path: '/Peisongshezhi',
            component: () =>
                import ('./views/Peisongshezhi.vue')

        }, {
            path: '/APIjiekouguanli',
            component: () =>
                import ('./views/APIjiekouguanli.vue')

        }, {
            path: '/APIjiekouxinxi',
            component: () =>
                import ('./views/APIjiekouxinxi.vue')

        }, {
            path: '/APIjiekoudiaoyong',
            component: () =>
                import ('./views/APIjiekoudiaoyong.vue')

        }, {
            path: '/FTP',
            component: () =>
                import ('./views/FTP.vue')

        }, {
            path: '/Wuliugongsi',
            component: () =>
                import ('./views/Wuliugongsi.vue')

        }, {
            path: '/Quyuguanli',
            component: () =>
                import ('./views/Quyuguanli.vue')

        }, {
            path: '/last',
            component: () =>
                import ('./views/last.vue')

        }]
    }
]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    let user = sessionStorage.getItem('login');
    if (user) {
        next();
    } else {
        if (to.path === '/login') {
            next();
        } else {
            next('/login')
        }
    }

})
export default router