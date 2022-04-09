import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from "vue-router";
//引入路由器 index 可省略
import router from './router'
//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

//应用路由插件
Vue.use(VueRouter)
//应用ElementUI插件
Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App),
    //beforeCreate 生命周期
    beforeCreate() {
        //安装全局事件总线
        Vue.prototype.$bus = this
    },
    router:router
})
//.$mount('#app') == el:'#app',
