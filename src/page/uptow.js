import React from 'react';
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import aa from '../imge/u1537.png'

class Uptow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	
	render() {
		return ( 
		<Link style={{textDecoration:'none'}} to={{pathname:'/upthree'}}>
			<div style={{width:'100%',height:'100%',textAlign:'center'}}>
				<p style={{fontSize:'28px',color:'#199ED8',marginTop:'60px'}}>有收有送&nbsp;&nbsp;盈亏清晰</p>,
				<img style={{width:'100%',marginTop:'100px'}} src={aa}/>
			</div>
		</Link>
		);
	}
}

export default Uptow;
