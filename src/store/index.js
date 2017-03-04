import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const supportModule = {
	state: {
		selectItem: [],
		tickets: []
	},
	getters,
	mutations,
	actions
}

export const store = new Vuex.Store({
	modules: {
		support: supportModule
	}
})