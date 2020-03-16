import React from 'react';
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import Heads from '../assembly/heads.js'
import Tableb from '../assembly/tableb'

class Upthree extends React.Component {
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
		var lisDiv=this.state.arr.map((item,index)=>{
			return (
			<div key={index} style={{width:'33.33%',float:'left',textAlign: 'center',lineHeight:'44px',backgroundColor:this.state.type===index?'rgba(208, 216, 218, 1)':'rgba(240, 248, 250, 1)'}}>按盈亏</div>
			)
		})
		return ( 
		<div>
			<Heads path={"/one"} titles="排行榜" />
			<div>
			{lisDiv}
			</div>
			<Tableb/>
		</div>
		);
	}
}

export default Upthree;
