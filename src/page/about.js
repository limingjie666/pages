import React from 'react';
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import Heads from '../assembly/heads.js'
import Options from '../assembly/options'
import aa from '../imge/u852.svg'

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	
	render() {
		return ( 
		<div>
			<Heads path={"/one/four"} titles="关于" />
			<div style={{borderBottom:'2px rgba(242, 242, 242, 1) solid'}}></div>
			<div style={{position:'relative',paddingTop:'230px'}}>
				<div style={{position:'absolute',top:'100px',left:'50%',color:'#fff',marginLeft:'-52.5px',textAlign:'center',lineHeight:'105px',backgroundColor:'rgba(25, 158, 216, 1)',borderRadius:'10px',width:'105px',height:'105px'}}>
					icon
				</div>
				<p style={{textAlign:'center',color:'rgba(25, 158, 216, 1)',fontSize:'24px'}}>礼尚往来</p>
				<p style={{textAlign:'center'}}>V1.0.0</p>
				<p style={{padding:'0 20px',marginTop:'20px',fontSize:'20px'}}>您身边的家庭礼尚往来记账管理专家，礼数清晰，礼事提醒，从此不再担忧送礼收礼问题！</p>
			</div>
		</div>
		);
	}
}

export default About;
