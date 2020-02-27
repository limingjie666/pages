import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import One from './page/one'
import Tow from './page/tow'
import Four from './page/four'
import Three from './page/three'
import Five from './page/five'

function App() {
  return (
    <div className="App">
		<HashRouter basename='/www'>
			<Switch>
			<Route  path="/one">
				<div className="center"> 
					<Route exact path="/one">
						<One/>
					</Route>
					<Route exact path="/one/tow">
						<Tow/>
					</Route>
					<Route exact path="/one/three">
						<Three/>
					</Route>
					<Route exact path="/one/four">
						<Four/>
					</Route>
			
				</div>	
				<div className="tab">
					<div className="tab-list"><NavLink style={{color:'#333',textDecoration:'none',backgroundColor:'#fff'}} to={{pathname:'/one'}}>首页</NavLink></div>
					<div className="tab-list"><Link style={{color:'#333',textDecoration:'none'}} to={{pathname:'/one/tow'}}>礼账</Link></div>
					<div className="tab-list"></div>
					<div className="tab-list"><Link style={{color:'#333',textDecoration:'none'}} to={{pathname:'/one/three'}}>理事</Link></div>
					<div className="tab-list"><Link style={{color:'#333',textDecoration:'none'}} to={{pathname:'/one/four'}}>我的</Link></div>
				</div>
			</Route>
			<Route exact path="/five">
				<Five/>
			</Route>
			<Redirect to="/one" />
			</Switch>
			</HashRouter>
    </div>
  );
}

export default App;
