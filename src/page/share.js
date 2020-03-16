import React from 'react';
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import Heads from '../assembly/heads.js'
import Options from '../assembly/options'
import aa from '../imge/u852.svg'
import bb from '../imge/u857.svg'
import cc from '../imge/u862.svg'
import dd from '../imge/u867.svg'

class Share extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	
	render() {
		return ( 
		<div style={{backgroundColor:'rgba(242, 242, 242, 1)'}}>
			<Heads path={"/one/four"} titles="帮助" />
			<div style={{height:'44px',textAlign:'center',lineHeight:'44px',backgroundColor:'rgba(174, 174, 174, 1)'}}>通过推荐让您的其他朋友知道礼尚往来</div>
			<div>
				<Options imge={aa} title="微信好友" />
				<Options imge={bb} title="QQ好友" />
				<Options imge={cc} title="微信朋友圈" />
				<Options imge={dd} title="通讯录好友" />
			</div>
		</div>
		);
	}
}

export default Share;
