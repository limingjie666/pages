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
			index:'待'
	    }
		this.onChang=this.onChang.bind(this);
	}
	onChang(al){
		this.setState({index:al===0?'待':'已'})
	}
	render(){
		var olistDiv=this.state.matter.map((time,index)=>{
			return (time.mar.slice(0,1)===this.state.index?<Olist key={index} json={time}/>:'')
		})
	  return (
		<div className="tow">
			<Heads path="/one/three" topath="/six" title={['待参加','已参加']} onChang={this.onChang}/>
			{olistDiv}
		</div>
		);
	}
}

export default Tow;
