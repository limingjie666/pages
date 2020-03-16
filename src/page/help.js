import React from 'react';
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import Heads from '../assembly/heads.js'
import Tableb from '../assembly/tableb'
import Pdatal from '../assembly/pdatal'
import aa from '../imge/u891.png'

class Help extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	
	render() {
		return ( 
		<div style={{backgroundColor:'rgba(242, 242, 242, 1)'}}>
			<Heads path={"/one/four"} titles="帮助" />
			<div>
				<div style={{height:'44px',lineHeight:'44px',padding:'0 10px',backgroundColor:'#fff',marginBottom:'5px'}}>
					<div style={{float:'left'}}>通过礼尚往来记账记事的好处</div>
					<div style={{float:'right'}}><img src={aa} /></div>
				</div>
				<div style={{height:'44px',lineHeight:'44px',padding:'0 10px',backgroundColor:'#fff',marginBottom:'5px'}}>
					<div style={{float:'left'}}>如何记账</div>
					<div style={{float:'right'}}><img src={aa} /></div>
				</div>
				<div style={{height:'44px',lineHeight:'44px',padding:'0 10px',backgroundColor:'#fff',marginBottom:'5px'}}>
					<div style={{float:'left'}}>如何记事</div>
					<div style={{float:'right'}}><img src={aa} /></div>
				</div>
				<div style={{height:'44px',lineHeight:'44px',padding:'0 10px',backgroundColor:'#fff',marginBottom:'5px'}}>
					<div style={{float:'left'}}>如何发请柬</div>
					<div style={{float:'right'}}><img src={aa} /></div>
				</div>
				<div style={{height:'44px',lineHeight:'44px',padding:'0 10px',backgroundColor:'#fff',marginBottom:'5px'}}>
					<div style={{float:'left'}}>如何看盈亏</div>
					<div style={{float:'right'}}><img src={aa} /></div>
				</div>
				<div style={{height:'44px',lineHeight:'44px',padding:'0 10px',backgroundColor:'#fff',marginBottom:'5px'}}>
					<div style={{float:'left'}}>如何计算婚宴预订桌数</div>
					<div style={{float:'right'}}><img src={aa} /></div>
				</div>
			</div>
		</div>
		);
	}
}

export default Help;
