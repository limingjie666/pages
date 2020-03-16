import React from 'react';
import aa from '../imge/u891.png'

class Pdatal extends React.Component{
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
					<span>{this.state.title}</span>
				</div>
				<div style={{float:'right'}}><span>{this.props.datas} </span>{this.props.type==="false"?'':<img style={{width:'12px'}} src={aa}/>}</div>
			</div>
		);
	}
}

export default Pdatal;
