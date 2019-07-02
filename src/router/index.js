import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers } from './router'

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  routes: routers,
}

const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  // 权限检测 TODO
  next()
})

router.afterEach(() => {
  // 返回顶部
  window.scrollTo(0, 0)
})
export default router
