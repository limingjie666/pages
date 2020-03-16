import React from 'react';
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import Heads from '../assembly/heads.js'
import Tableb from '../assembly/tableb'
import Pdatal from '../assembly/pdatal'
import aa from '../imge/u889.svg'

class Pdata extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type:0,
			arr:[
				'按盈亏','按收入','按支出'
			]
		}
	}
	
	render() {
		return ( 
		<div style={{backgroundColor:'rgba(242, 242, 242, 1)'}}>
			<Heads path={"/one/four"} titles="个人资料" />
			<div>
			<div style={{height:'88px',backgroundColor:'#fff',lineHeight:'88px',padding:'0 10px'}}>
				<div style={{float:'left'}}>头像</div>
				<div style={{float:'right',paddingTop:'10px',height:'64px'}}>,
					<img src={aa} />
				</div>
			</div>
			<div style={{height:'10px'}}></div>
			<Pdatal title="昵称" datas="默认第三方昵称" />
			<Pdatal title="性别" datas="男" />
			<Pdatal title="生日" datas="1990-01-01" />
			<Pdatal title="所在地" datas="重庆 南岸区" />
			<div style={{height:'10px'}}></div>
			<Pdatal title="用户ID" datas="16000015" type="false" />
			<Pdatal title="注册时间" datas="2016-08-20" type="false" />
			</div>
		</div>
		);
	}
}

export default Pdata;
