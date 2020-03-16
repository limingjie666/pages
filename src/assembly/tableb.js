import React from 'react';
import './heads.css'
import Table from './table'
import {store} from '../store'
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'

class Tableb extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			...store.getState(),
	    }
        this.unSubscribe = null;
		// this.componentWillMount=this.componentWillMount.bind(this);
	}
	componentDidMount(){
	    this.unSubscribe = store.subscribe(()=>{
	        this.setState({
	            ...store.getState()
	        })
	    })
	}
	componentWillUnmount(){
	    this.unSubscribe();
	}
	render(){
		let tableDiv=this.state.rank.map((time,index)=>{
			return (
				<Table key={index} arr={['1',time.name,time.allShouli-time.allSongli,time.benyueShouli-time.benyueSongli]}/>
			)
		})
	  return (
			<div className="o-table">
				<div onClick={()=>{console.log(this.state.rank)}} style={{backgroundColor:'rgba(188, 188, 188, 1)',overflow: 'hidden'}}>
					<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px',fontWeight: '700'}}>排行</div>
					<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px',fontWeight: '700'}}>用户</div>
					<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px',fontWeight: '700'}}>历史盈亏</div>
					<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px',fontWeight: '700'}}>本月盈亏</div>
					<Link style={{color:'#333'}} to={{pathname:'/ranking'}}><div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px',fontWeight: '700'}}>更多</div></Link>
				</div>
				{tableDiv}
			</div>
		);
	}
}

export default Tableb;
