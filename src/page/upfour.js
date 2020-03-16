import React from 'react';
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import aa from '../imge/u1575.png'

class Upfour extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	
	render() {
		return ( 
		<Link style={{textDecoration:'none'}} to={{pathname:'/one'}}>
			<div style={{width:'100%',height:'100%',textAlign:'center'}}>
				<p style={{fontSize:'28px',color:'#199ED8',marginTop:'60px'}}>婚柬邀请&nbsp;&nbsp;轻松分享</p>,
				<img style={{width:'100%',marginTop:'100px'}} src={aa}/>
			</div>
		</Link>
		);
	}
}

export default Upfour;
