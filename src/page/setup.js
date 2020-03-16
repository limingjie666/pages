import React from 'react';
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import Heads from '../assembly/heads.js'
import Tableb from '../assembly/tableb'
import Pdatal from '../assembly/pdatal'
import aa from '../imge/u889.svg'
import bb from '../imge/u1148.svg'
import cc from '../imge/u3800.svg'
import dd from '../imge/u1156.svg'
import ee from '../imge/u895.svg'
import ff from '../imge/关_u1158.svg'
import gg from '../imge/开_u1157.svg'

class Setup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type:0,
			arr:[
				'按盈亏','按收入','按支出'
			],
			mi:false,
			ti:false
		}
	}
	
	render() {
		return ( 
		<div style={{backgroundColor:'rgba(242, 242, 242, 1)'}}>
			<Heads path={"/one/four"} titles="设置" />
			<div>
				<div style={{height:'44px',lineHeight:'44px',backgroundColor:'#fff'}}>
					<img style={{width:'19px'}} src={bb} />
					检查更新
				</div>
				<div style={{height:'10px'}}></div>
				<div style={{height:'44px',lineHeight:'44px',backgroundColor:'#fff'}}>
					<img style={{width:'19px'}} src={cc} />
					初始化
				</div>
				<div style={{height:'10px'}}></div>
				<div style={{height:'44px',lineHeight:'44px',backgroundColor:'#fff'}}>
					<img style={{width:'19px'}} src={dd} />
					密码锁
					<div onClick={()=>{this.setState({mi:!this.state.mi})}} style={{float:'right',height:'100%'}}>
						<img style={{width:'53px'}} src={this.state.mi?gg:ff} />
					</div>
				</div>
				<div style={{height:'10px'}}></div>
				<div style={{height:'44px',lineHeight:'44px',backgroundColor:'#fff'}}>
					<img style={{width:'19px'}} src={ee} />
					记账提醒
					<div onClick={()=>{this.setState({ti:!this.state.ti})}} style={{float:'right',height:'100%'}}>
						<img style={{width:'53px'}} src={this.state.ti?gg:ff} />
					</div>
				</div>
				<div style={{height:'10px'}}></div>
			</div>
		</div>
		);
	}
}

export default Setup;
