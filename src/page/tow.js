import React from 'react';
import './tow.css'
import Heads from '../assembly/heads.js'
import Olist from '../assembly/olist.js'
import aa from '../imge/u102.png'
import {store} from '../store'

class Tow extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			...store.getState(),
			index:'收'
	    }
		this.onChang=this.onChang.bind(this);
	}
	onChang(al){
		this.setState({index:al===0?'收':'送'})
	}
	render(){
		var olistDiv=this.state.account.map((time,index)=>{
			return (time.type.on===this.state.index?<Olist key={index} json={time}/>:'')
		})
	  return (
		<div className="tow">
			<Heads  path="/one/tow" title={['收礼','送礼']}  topath="/five" onChang={this.onChang}/>
			{olistDiv}
		</div>
		);
	}
}

export default Tow;
