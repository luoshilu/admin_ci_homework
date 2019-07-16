import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import Vue from 'vue'
import App from './App.vue'

import VueAxios from 'vue-axios'
import axios from 'axios'

import router from './router'
import VueRouter from 'vue-router'

require('@/assets/styles/index.scss')

/* 插件 */
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

/* 注册全局组件 */
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\W{1}.+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})
/* 注册全局组件 */

/* 注册全局指令 */
const instances = []
Vue.directive('click-outside', {
  bind (el, binding) {
    if (typeof binding.value !== 'function') {
      throw new TypeError('Binding value must be a function.')
    }
    if (instances.push({el, binding}) === 1) {
      document.addEventListener('click', function(evt) {
        const target = evt.target
        instances.forEach(item => {
          const { binding, el } = item
          if (target !== el && !el.contains(target)) {
            binding.value.call(this, evt)
          }
        })
      }, false)
    }
  },
})

/* 注册全局指令 */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
