import React from 'react';
import './four.css';
import Options from '../assembly/options'
import aa from '../imge/u895.svg'
import bb from '../imge/u889.svg'
import cc from '../imge/u102.png'
import dd from '../imge/u891.png'

class Four extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			
	    }
		// this.keyd=this.keyd.bind(this);
	}
	render(){
	  return (
		<div className="four">
			<div className="f-head">
				<div style={{position: 'absolute',left:'50%',top:'50%',marginTop:'-20px',marginLeft:'-25px',width:'50px',fontSize:'24px',}}>我的</div>
				<div style={{float:"right",marginTop:"10px"}}><img style={{width:"31px"}} src={aa}/></div>
			</div>
			<div style={{height:'88px',backgroundColor:"#fff",marginBottom:'10px',lineHeight:'88px',padding:'0 10px',fontSize:'14px'}}>,
				<div style={{float:'left'}}>
					<div style={{float:'left',lineHeight: 'normal',marginTop:'10px',marginRight:'10px'}}><img src={bb}/></div>
					<span>调用QQ、微信昵称</span>
				</div>
				<div style={{float:'right'}}><img style={{width:'12px'}} src={dd}/></div>
			</div>
			<Options imge={cc} title="设置" />
			<Options imge={cc} title="反馈" />
			<Options imge={cc} title="帮助" />
			<Options imge={cc} title="关于" />
			<Options imge={cc} title="分享" />
		</div>
		);
	}
}

export default Four;
