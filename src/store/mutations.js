export default {
		loadData (state, data) {
      		state.tickets = data
    	},
		selectItem(state, payload) {
			state.selectItem = []
      		state.selectItem.push(payload.item)
      		const tickets = state.tickets.find(tickets => {
      			return tickets == payload.item
      		})
      		tickets.newForSupport = payload.support
      		tickets.newForClient = payload.client
		},
		newMessageSupport(state, payload) {
			const tickets = state.tickets.find(tickets => {
      			return tickets == payload.item
      		})
			tickets.messages.push({ author: 'support', text: payload.text })
      		tickets.status = 'process'
      		tickets.newForClient = true
		},
		newMessageUser(state, payload) {
			const tickets = state.tickets.find(tickets => {
      			return tickets == payload.item
      		})
			tickets.messages.push({ author: 'client', text: payload.text })
      		tickets.status = 'open'
      		tickets.newForSupport = true
		},
		complete(state, item) {
			const tickets = state.tickets.find(tickets => {
      			return tickets == item
      		})
      		tickets.status = 'complete'
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