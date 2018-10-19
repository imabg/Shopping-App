var vm = new Vue({
	el: '#app',
	data: {
		state: 'default',
		header: 'Shopping App',
		newItem: '',
		items: [
			
		]
	},

	methods: {
		addItem: function () {
			this.items.unshift({
				content: this.newItem,
				purchase: false
			});
			this.newItem = '';
		},
		changeState: function (newState) {
			this.state = newState;
			this.newItem = '';
		},
		togglePurchased: function (item) {
			item.purchase = !item.purchase;
		}
	}
});