	export default{
	// module.exports={		
		data: function () {
			return {
				count: 0,
				counter:0,
				message: 'You loaded this page on ' + new Date().toLocaleString(),
				remessage: 'Hello Vue.js!'
			}
		},
		mounted:function(){
			setInterval(() => {
				this.counter++
			}, 1000)
		},
		methods:{
			reverseMessage() {
				this.remessage = this.remessage
				.split('')
				.reverse()
				.join('')
			}
		}
	}	