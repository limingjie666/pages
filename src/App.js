import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import One from './page/one'
import Tow from './page/tow'
import Four from './page/four'
import Three from './page/three'

function App() {
  return (
    <div className="App">
		<HashRouter basename='/www'>
		<div className="center"> 
			<Switch> 
			<Route exact path="/">
				<One/>
			</Route>
			<Route exact path="/tow">
				<Tow/>
			</Route>
			<Route exact path="/three">
				<Three/>
			</Route>
			<Route exact path="/four">
				<Four/>
			</Route>
			</Switch>
		</div>
		<div className="tab">
			<div className="tab-list"><Link style={{color:'#333',textDecoration:'none'}} to={{pathname:'/'}}>首页</Link></div>
			<div className="tab-list"><Link style={{color:'#333',textDecoration:'none'}} to={{pathname:'/tow'}}>礼账</Link></div>
			<div className="tab-list"></div>
			<div className="tab-list"><Link style={{color:'#333',textDecoration:'none'}} to={{pathname:'/three'}}>理事</Link></div>
			<div className="tab-list"><Link style={{color:'#333',textDecoration:'none'}} to={{pathname:'/four'}}>我的</Link></div>
		</div>
			</HashRouter>
    </div>
  );
}

export default App;
