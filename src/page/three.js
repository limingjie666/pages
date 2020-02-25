import React from 'react';
import './tow.css'
import Heads from '../assembly/heads.js'
import Olist from '../assembly/olist.js'

class Tow extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			arr:[{
				img:'',
				xm:'王大锤搬家请客',
				mar:'待参加',
				type:{
					on:null,
					img:'http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼事列表/u478.svg?token=f62ddd7d781570d9e70cdc24e1f8f7d6341a469714b2ebb1e73e99fa3a89ebd0',
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
					img:'http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼事列表/u478.svg?token=f62ddd7d781570d9e70cdc24e1f8f7d6341a469714b2ebb1e73e99fa3a89ebd0',
				},
				name:'地点名称地点名称',
				coun:'',
				time:'2016.5.21'
			}]
	    }
		this.onChang=this.onChang.bind(this);
	}
	onChang(al){
		console.log(al)
	}
	render(){
		var olistDiv=this.state.arr.map((time,index)=>{
			return (<Olist key={index} json={time}/>)
		})
	  return (
		<div className="tow">
			<Heads title={['待参加','已参加']} onChang={this.onChang}/>
			{olistDiv}
		</div>
		);
	}
}

export default Tow;
