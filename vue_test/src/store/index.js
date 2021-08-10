// 改文件用于创建Vuex中最为核心的store
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

// 准备actions——用于相应组件中的动作
const actions = {
    // jia(context, value) {
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
        if (context.state.sum % 2) context.commit('JIA', value)
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 1000)
    }
}

// 准备mutations——用于操作数据（state）
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }
}


// 准备state——用于存储数据
const state = {
    sum: 0
}

// 创建store
export default new Vuex.Store({ actions, mutations, state })