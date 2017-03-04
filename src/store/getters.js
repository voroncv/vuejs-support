export default {
		allTickets(state) {
			return state.tickets
		},
		openTickets(state) {
			return state.tickets.filter(item => {
        		return item.status.indexOf('open') !== -1
      		})
		},
		processTickets(state) {
			return state.tickets.filter(item => {
        		return item.status.indexOf('process') !== -1
      		})
		},
		completeTickets(state) {
			return state.tickets.filter(item => {
        		return item.status.indexOf('complete') !== -1
      		})
		},
		userTickets(state) {
			return state.tickets.filter(item => {
        		return item.status.indexOf('complete') // Здесь мы выводим все тикеты, у которых статус НЕ-ЗАКРЫТЫЕ
      		})
		},
		selectItem(state) {
			return state.selectItem
		}
}