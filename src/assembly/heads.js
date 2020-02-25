import React from 'react';
import './heads.css'

class Heads extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			index:0
	    }
		// this.keyd=this.keyd.bind(this);
	}
	render(){
	  return (
			<div style={{overflow: 'hidden',padding:'0 10px',height:'51px',marginBottom:'10px',position: 'relative',backgroundColor:'#fff'}}>
				<div style={{float:'left',paddingTop:'15px'}}><img style={{width:'12px'}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=1ad96b278a9b02376d9bb82d90be1711568545cb3000c81b1469e3035f745adc"/></div>
				<div style={{width:'204px',height:'39px',position: 'absolute',top:'50%',left:'50%',marginLeft:'-102px',marginTop:'-19px'}}>
					<div onClick={()=>{this.setState({index:0});this.props.onChang(0)}} className={this.state.index==0?'active':''} style={{width:'50%',float:'left',textAlign: 'center',lineHeight:' 39px',fontSize: '16px',border:'1px rgba(25, 158, 216, 1) solid',boxSizing:'border-box'}}>{this.props.title[0]}</div>
					<div onClick={()=>{this.setState({index:1});this.props.onChang(1)}} className={this.state.index==1?'active':''} style={{width:'50%',float:'right',textAlign: 'center',lineHeight:' 39px',fontSize: '16px',border:'1px rgba(25, 158, 216, 1) solid',boxSizing:'border-box'}}>{this.props.title[0]}</div>
				</div>
				<div style={{float:'right',paddingTop:'15px'}}><img style={{width:'24px'}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u90.svg?token=33918b7e3ed4680ac760fdc250f3c5b4611b1f87f1ce094886df1bc4a9565ab9"/></div>
			</div>
		);
	}
}

export default Heads;
