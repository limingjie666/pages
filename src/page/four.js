import React from 'react';
import './four.css';
import Options from '../assembly/options'

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
				<div style={{float:"right",marginTop:"10px"}}><img style={{width:"31px"}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u895.svg?token=4579c01f18b1d4701713ddf92e71e17465fec086a768788412634fab74124d20"/></div>
			</div>
			<div style={{height:'88px',backgroundColor:"#fff",marginBottom:'10px',lineHeight:'88px',padding:'0 10px',fontSize:'14px'}}>,
				<div style={{float:'left'}}>
					<div style={{float:'left',lineHeight: 'normal',marginTop:'10px',marginRight:'10px'}}><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u889.svg?token=875f1bd368a72309fd9d3f95859fbb21a1e8716347c44358d1a07eb33156bfc1"/></div>
					<span>调用QQ、微信昵称</span>
				</div>
				<div style={{float:'right'}}><img style={{width:'12px'}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u891.png?token=0415120c11d42e9006dfc6f30eba4a46039f0bb124103371c6d4add21d9b4d37"/></div>
			</div>
			<Options imge="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=5ad10f9fd5bebe8de690e29377b65ab869f854656e10ee6c5d35aae50a47f0b3" title="设置" />
			<Options imge="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=5ad10f9fd5bebe8de690e29377b65ab869f854656e10ee6c5d35aae50a47f0b3" title="反馈" />
			<Options imge="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=5ad10f9fd5bebe8de690e29377b65ab869f854656e10ee6c5d35aae50a47f0b3" title="帮助" />
			<Options imge="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=5ad10f9fd5bebe8de690e29377b65ab869f854656e10ee6c5d35aae50a47f0b3" title="关于" />
			<Options imge="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=5ad10f9fd5bebe8de690e29377b65ab869f854656e10ee6c5d35aae50a47f0b3" title="分享" />
		</div>
		);
	}
}

export default Four;
