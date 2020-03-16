import {createStore,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';
import reduxpromise from 'redux-promise';
import aa from './imge/u102.png'

var json= {
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
	],
	rank:[]
  }
  

var selectFoods = function(state =json,action){
    switch (action.type) {
        case 'ADD':
            return [...state,action.food] 
        case 'JIAN':
            var arr = [];
            state.forEach((el,i)=>{
              if(action.index != i ){
                arr.push(el)
              }
            })
            console.log(arr);
            return arr;
        default:
            return state
    }
  }
		
var store = createStore(selectFoods,applyMiddleware(reduxThunk,reduxpromise));

export {store};