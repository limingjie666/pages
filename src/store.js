import {createStore} from 'redux'
import aa from './imge/u102.png'
var reducer = function(state = {
	account:[
		{
			img:aa,
			xm:'类目名称',
			mar:'15000.00',
			type:{
				on:'收'
			},
			name:'姓名',
			coun:'10',
			time:'2016.5.21'
		},{
			img:aa,
			xm:'类目名称',
			mar:'15000.00',
			type:{
				on:'收'
			},
			name:'姓名',
			coun:'10',
			time:'2016.5.21'
		}
	],
	matter:[
		{
			img:'',
			xm:'王大锤搬家请客',
			mar:'待参加',
			type:{
				on:null,
				img:aa,
			},
			name:'地点名称地点名称',
			coun:'',
			time:'2016.5.21'
		},{
			img:'',
			xm:'王大锤搬家请客',
			mar:'待参加',
			type:{
				on:null,
				img:aa,
			},
			name:'地点名称地点名称',
			coun:'',
			time:'2016.5.21'
		}
	]
  },action){
    switch (action.type) {
      case 'setname':
        return {...state,username:action.name}
      default:
        return state
    }
  }

var store = createStore(reducer);

store.subscribe(()=>{
  console.log(store.getState());
})

export {store};