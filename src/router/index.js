//该文件用于创建整个项目的路由器
import VueRouter from "vue-router";
import About from "@/components/About";
import Home from "@/components/Home";

//配置并暴露路由器
//export default 默认暴露
const router = new VueRouter({
    routes: [
        {
            name: 'aboutName',
            path: '/about',
            component: About,
            //meta 路由元信息
            meta: {isAuth: true}
        },
        {
            path: '/home',
            component: Home
        }
    ]
})

//路由守卫
router.beforeEach((to, from, next) => {
    //console.log(to, from, next)
    /*    if (localStorage.getItem('user') === 'admin') {
            //放行
            next()
        }*/

    console.log(to.fullPath)

    if (to.meta.isAuth || to.fullPath === '/') {
        //放行
        next()
    }else {
        alert('无权限查看')
    }

})

//手动暴露
export default router;