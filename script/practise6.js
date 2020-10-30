	export default{
		data:function() {					
			return {				
				seen:true,
				todos: []
			};
		},
		mounted:function(){					
			this.DataLoading();
		},
		methods:{
			DataLoading:function(){
				this.todos=[
				{ text: 'Learn JavaScript' },
				{ text: 'Learn Vue' },
				{ text: 'Build something awesome' }
				];
			}
		},		
	}