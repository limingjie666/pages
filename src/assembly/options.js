import React from 'react';

class Options extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			title:this.props.title,
			imge:this.props.imge
	    }
		// this.keyd=this.keyd.bind(this);
	}
	render(){
	  return (
			<div style={{height:'44px',backgroundColor:"#fff",marginBottom:'5px',lineHeight:'44px',padding:'0 10px'}}>
				<div style={{float:'left'}}>
					<div style={{float:'left',lineHeight: 'normal',marginTop:'13px',marginRight:'10px'}}><img style={{width:'19px'}} src={this.state.imge}/></div>
					<span>{this.state.title}</span>
				</div>
				<div style={{float:'right'}}><img style={{width:'12px'}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u891.png?token=0415120c11d42e9006dfc6f30eba4a46039f0bb124103371c6d4add21d9b4d37"/></div>
			</div>
		);
	}
}

export default Options;
