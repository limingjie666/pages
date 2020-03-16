import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import One from './page/one'
import Tow from './page/tow'
import Four from './page/four'
import Three from './page/three'
import Five from './page/five'
import Six from './page/six'
import Upone from './page/upone'
import Uptow from './page/uptow'
import Upthree from './page/upthree'
import Upfour from './page/upfour'
import Ranking from './page/ranking'
import Pdata from './page/pdata'
import Setup from './page/setup'
import Help from './page/help'
import Share from './page/share'
import About from './page/about'

function App() {
  return (
    <div className="App">
		<HashRouter basename='/www'>
			<Switch>
			<Route exact path="/">
				<Upone/>
			</Route>
			<Route exact path="/uptow">
				<Uptow/>
			</Route>
			<Route exact path="/upthree">
				<Upthree/>
			</Route>
			<Route exact path="/upfour">
				<Upfour/>
			</Route>
			<Route exact path="/ranking">
				<Ranking/>
			</Route>
			<Route exact path="/pdata">
				<Pdata/>
			</Route>
			<Route exact path="/setup">
				<Setup/>
			</Route>
			<Route exact path="/help">
				<Help/>
			</Route>
			<Route exact path="/share">
				<Share/>
			</Route>
			<Route exact path="/about">
				<About/>
			</Route>
			<Route  path="/one" >
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
			<Route exact path="/six">
				<Six/>
			</Route>
			<Redirect to="/one" />
			</Switch>
			</HashRouter>
    </div>
  );
}

export default App;
