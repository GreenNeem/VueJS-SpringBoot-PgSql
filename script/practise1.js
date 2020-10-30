	import practise2 from '@/components/Practise2.vue'
	export default
	{
		props:{
			Firstname:String,
			Lastname:String
		},
		components:{
			practise2
		},
		data:function(){
			this.mydetails();	
			return{
				package:[],
				// firstname:"Kaung",
				// lastname:"Aung",
			}		
		},
		methods:{
			mydetails:function(){	
				// console.log(this.Firstname);					
				return "I am "+this.Firstname+" "+this.Lastname;
			},
		}
	}