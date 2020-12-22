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