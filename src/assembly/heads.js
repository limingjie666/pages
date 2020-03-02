import React from 'react';
import './heads.css'
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import bb from '../imge/u84.png'
import cc from '../imge/u90.svg'

class Heads extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			index:0,
			path:this.props.path
	    }
	}
	render(){
		console.log(this.props.path)
	  return (
			<div style={{textAlign:'center',lineHeight:'51px',overflow: 'hidden',padding:'0 10px',height:'51px',marginBottom:'10px',position: 'relative',backgroundColor:'#fff'}}>
				<Link to={{pathname:this.state.path||'/one'}}><div style={{float:'left'}}><img style={{width:'12px'}} src={bb}/></div></Link>
				{this.props.title?<div style={{width:'204px',height:'39px',position: 'absolute',top:'50%',left:'50%',marginLeft:'-102px',marginTop:'-19px'}}>
					<div onClick={()=>{this.setState({index:0});this.props.onChang(0)}} className={this.state.index==0?'active':''} style={{width:'50%',float:'left',textAlign: 'center',lineHeight:' 39px',fontSize: '16px',border:'1px rgba(25, 158, 216, 1) solid',boxSizing:'border-box'}}>{this.props.title[0]}</div>
					<div onClick={()=>{this.setState({index:1});this.props.onChang(1)}} className={this.state.index==1?'active':''} style={{width:'50%',float:'right',textAlign: 'center',lineHeight:' 39px',fontSize: '16px',border:'1px rgba(25, 158, 216, 1) solid',boxSizing:'border-box'}}>{this.props.title[1]}</div>
				</div>:'记礼事'}
				<div style={{float:'right'}}><Link to={{pathname:this.props.topath}}><img style={{width:'24px'}} src={cc}/></Link></div>
			</div>
		);
	}
}

export default Heads;
