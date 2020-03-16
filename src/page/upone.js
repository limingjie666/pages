import React from 'react';
import aa from '../imge/u202.png'
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'

class Upone extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	
	render() {
		return ( 
		<Link to={{pathname:'/uptow'}}>
			<div style={{width:'100%',height:'100%'}}>
				<div style={{width:'260px',position: 'absolute',top:"100px",left:'50%',marginLeft:'-130px',textAlign: 'center'}}>
					<img src={aa} style={{width:'259px',height:'149px'}} />,
					<p style={{fontSize:'14px',color:'#999',marginTop:'20px'}}>6月21日  星期二</p>
					<p style={{fontSize:'20px',color:'#000',marginTop:'20px'}}>礼尚往来的第3天</p>
				</div>
				<div style={{width:'140px',position:'absolute',bottom:'20px',left:'50%',marginLeft:'-70px'}}>
					<div style={{width:'42px',float:'left',height:'42px',backgroundColor:'rgba(25, 158, 216, 1)',borderRadius:'10px',textAlign:'center',lineHeight:'42px',color:'#fff'}}>icon</div>
					<div style={{float:'left',height:'42px',borderRadius:'10px',textAlign:'center',lineHeight:'42px',color:'rgba(25, 158, 216, 1)',marginLeft:'20px'}}>李尚往来</div>
				</div>
			</div>
		</Link>
		);
	}
}

export default Upone;
