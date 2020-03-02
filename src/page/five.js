import React from 'react';
import './tow.css'
import Heads from '../assembly/heads.js'
import Olist from '../assembly/olist.js'
import aa from '../imge/u102.png'
import bb from '../imge/u19.svg'
import cc from '../imge/u381.svg'
import dd from '../imge/u380.svg'
import {store} from '../store'
import Time from '../assembly/time.js'
import Information from '../assembly/information.js'

class Five extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			...store.getState(),
			val:'￥ 0.00',
			val1:'请输入备注信息，最多可输入100字。如“孩子满月，请亲戚吃饭，共收礼8000元”。',
			val2:'2016.06.27',
			val3:'选择收礼类型',
			time_type:false,
			information_type:false,
			index:'收',
			list:[{
				relationship:'亲',
				name:'李华刚',
				money:'500'
			}]
	    }
		this.unSubscribe = null;
		this.handlerChange=this.handlerChange.bind(this);
		this.onchangs=this.onchangs.bind(this);
		this.onclick=this.onclick.bind(this);
		this.submission=this.submission.bind(this);
		this.onChang=this.onChang.bind(this);
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
	handlerChange(ev){
		this.setState({
			[ev.target.name]: ev.target.name=='val'?(ev.target.value.length>2?ev.target.value:'￥ '):ev.target.value
		})
	}
	onchangs(al){
		this.setState({information_type:al})
	}
	onclick(al){
		var list=this.state.list
		list.push({relationship:al.val1==='亲属'||al.val1==='朋友'?al.val1.substr(0,1):al.val1.substr(1,1) ,name:al.val2,money:al.val3,type:{on:this.state.index}})
	}
	submission(){
		this.state.list.map((time,index)=>{
			this.state.account.push({
				img:aa,
				xm:'类目名称',
				mar:time.money,
				type:{
					on:this.state.index
				},
				name:time.name,
				coun:'10',
				time:'2016.5.21',
				relationship:time.relationship
			})
		})
		
		this.state.list=[]
		store.dispatch({type:'setname',name:'one'})
	}
	onChang(al){
		this.setState({index:al===0?'收':'送'})
	}
	render(){
		var olistDiiv=this.state.list.map((time,index)=>{
			return (<div key={index} style={{height:'44px',lineHeight:'44px',padding:'0 5px'}}>
				<span style={{display:'block',width:'24px',height:'24px',lineHeight:'24px',float:'left',fontSize:'18px',color:'#fff',backgroundColor:'rgba(215, 215, 215, 1)',textAlign:'center',marginTop:'10px',marginRight:'10px'}}>{time.relationship}</span>
				<span style={{marginRight:'10px'}}>{time.name}</span>
				<span style={{color:'#008000'}}>{time.money}</span>
				<div style={{height:'100%',lineHeight:'44px',float:'right'}}>
					<img style={{width:'19px',marginLeft:'10px'}} src={cc}/>
					<img style={{width:'19px',marginLeft:'10px'}} src={dd}/>
				</div>
			</div>)
		})
	  return (
		<div className="tow" style={{position:'relative'}}>
			<Heads path="/one/tow" title={['收礼','送礼']} onChang={this.onChang}/>
			<div style={{height:'44px',backgroundColor:'#fff',marginBottom:'2px',fontSize:'28px',color:'#199ED8',padding:'0 5px',position:'relative'}}>
				<input name="val" onChange={this.handlerChange} style={{position:'absolute',left:'5px',top:'0',width:'100%',height:'100%',border:'none',outline:'none',lineHeight:'44px',fontWeight: '700'}} type="text" value={this.state.val} />
			</div>
			<div style={{width:'100%',height:'87px',backgroundColor:'#fff',marginBottom:'2px',position:'relative'}}>
				<textarea onChange={this.handlerChange} name="val1" value={this.state.val1} wrap="hard" style={{position:'absolute',left:'0',top:'0',padding:'10px 5px',fontSize:'16px',boxSizing:'border-box',color:'#666',width:'100%',height:'100%',border:'none',outline:'none',lineHeight:'normal'}}></textarea>
			</div>
			<div style={{height:'44px',backgroundColor:'#fff',marginBottom:'2px',fontSize:'14px',color:'#333',padding:'0 5px',lineHeight:'44px'}}>
				<div style={{float:'left'}}>
					<img src={aa} style={{width:'19px',marginRight:'10px'}}/>
				</div>
				<span>{this.state.val2}</span>
			</div>
			<div style={{height:'44px',backgroundColor:'#fff',marginBottom:'4px',fontSize:'14px',color:'#333',padding:'0 5px',lineHeight:'44px'}}>
				<div style={{float:'left'}}>
					<img src={aa} style={{width:'19px',marginRight:'10px'}}/>
				</div>
				<span>{this.state.val3}</span>
			</div>
			<div onClick={()=>{this.setState({information_type:true})}} style={{height:'44px',backgroundColor:'rgb(215, 215, 215)',lineHeight:'44px'}}>
				<p style={{textAlign:'center'}}>
					<img src={bb} style={{width:'24px',marginBottom:'-5px',marginRight:'5px'}}/>
					<span>收礼人</span>
				</p>
			</div>
			
			{olistDiiv}
			
			<div onClick={this.submission} style={{width:'100%',height:'44px',lineHeight:'44px',position:'fixed',bottom:'0',color:'#fff',textAlign:'center',backgroundColor:'rgb(22, 155, 213)'}}>
				提交
			</div>
			{this.state.time_type?<Time/>:''}
			{this.state.information_type?<Information onclick={this.onclick} onChange={this.onchangs}/>:''}
			
		</div>
		);
	}
}

export default Five;
