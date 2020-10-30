// Define a new component called button-counter
//import Practise from '@/components/Practise4.vue'
//import Practise from '@/components/Practise5.vue'
import Practise from '@/components/Practise6.vue'
import todoitem from '@/components/Practise7.vue'
	export default
	{
		components:{			
			Practise,
			todoitem			
		},	
		data:function(){
			return {
				groceryList:[],
			}
		},
		mounted:function(){	
			this.groceryList= [
				{ id: 0, text: 'Vegetables' },
				{ id: 1, text: 'Cheese' },
				{ id: 2, text: 'Whatever else humans are supposed to eat' }
				];
				console.log(this.groceryList[0].text);
		},
	}