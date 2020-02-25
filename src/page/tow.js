import React from 'react';
import './tow.css'
import Heads from '../assembly/heads.js'
import Olist from '../assembly/olist.js'

class Tow extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			arr:[{
				img:'http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=522cc59d330b615a14e904bb529fe55a9c414eca4fb611c2c53bdb77b6ff30e7',
				xm:'类目名称',
				mar:'15000.00',
				type:{
					on:'收'
				},
				name:'姓名',
				coun:'10',
				time:'2016.5.21'
			},{
				img:'http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=522cc59d330b615a14e904bb529fe55a9c414eca4fb611c2c53bdb77b6ff30e7',
				xm:'类目名称',
				mar:'15000.00',
				type:{
					on:'收'
				},
				name:'姓名',
				coun:'10',
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
			<Heads title={['收礼','送礼']} onChang={this.onChang}/>
			{olistDiv}
		</div>
		);
	}
}

export default Tow;
