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
	    }
		this.onChang=this.onChang.bind(this);
	}
	onChang(al){
		console.log(al)
	}
	render(){
		var olistDiv=this.state.account.map((time,index)=>{
			return (<Olist key={index} json={time}/>)
		})
	  return (
		<div className="tow">
			<Heads title={['收礼','送礼']} onChang={this.onChang}/>
			{olistDiv}
		</div>
		);
	}
}

export default Tow;
