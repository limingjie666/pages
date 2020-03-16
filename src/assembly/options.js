import React from 'react';
import aa from '../imge/u891.png'

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
			<div style={{height:'44px',backgroundColor:"#fff",marginBottom:'5px',lineHeight:'44px',padding:'0 10px',color:'#333'}}>
				<div style={{float:'left'}}>
					<div style={{float:'left',lineHeight: 'normal',marginTop:'13px',marginRight:'10px'}}><img style={{width:'19px'}} src={this.state.imge}/></div>
					<span>{this.state.title}</span>
				</div>
				<div style={{float:'right'}}><img style={{width:'12px'}} src={aa}/></div>
			</div>
		);
	}
}

export default Options;
