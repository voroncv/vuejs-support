export default {
		loadData (state, data) {
      		state.tickets = data
    	},
		selectItem(state, payload) {
			state.selectItem = []
      		state.selectItem.push(payload.item)
      		payload.item.newForSupport = payload.support
      		payload.item.newForClient = payload.client
		},
		newMessageSupport(state, payload) {
			payload.item.messages.push({ author: 'support', text: payload.text })
      		payload.item.status = 'process'
      		payload.item.newForClient = true
		},
		newMessageUser(state, payload) {
			payload.item.messages.push({ author: 'client', text: payload.text })
      		payload.item.status = 'open'
      		payload.item.newForSupport = true
		},
		complete(state, item) {
      		item.status = 'complete'
		},
		newTicket(state, payload) {
			state.tickets.push({
				status: 'open',
				title: payload.title,
		        id: payload.id,
		        author: 'Николай Николаев',
		        newForSupport: true,
		        newForClient: false,
          		messages: [
            	  {
                    author: 'client',
                    text: payload.problem
                  }
                ]
			})
		}
	}