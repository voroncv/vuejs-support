export default {
		selectItem({commit}, payload) {
			commit('selectItem', payload)
		},
		newMessageSupport({commit}, payload) {
			commit('newMessageSupport', payload)
		},
		newMessageUser({commit}, payload) {
			commit('newMessageUser', payload)
		},
		complete({commit}, item) {
			commit('complete', item)
		},
		newTicket({commit}, payload) {
			commit('newTicket', payload)
		}
	}