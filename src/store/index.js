import Vue from 'vue'
// 引入vue
import Vuex from 'vuex'
// 引入getter文件
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

// 完成注册
Vue.use(Vuex)
// 完成实例化
const store = new Vuex.Store({
  // 未设置state,说明将数据放在了子模块中
  modules: {
    app,
    settings,
    user
  },
  // 使用getters访问子模块,属性名和value值一样的话，可以简写
  // 在getters中建立对模块的快捷访问
  getters: getters
})

export default store
