import React from 'react';
import axios from 'axios'
import {
	store
} from '../store'
import Tableb from '../assembly/tableb'
import './one.css'
import aa from '../imge/download.svg'
import bb from '../imge/u28.png'
import cc from '../imge/u22.png'
import dd from '../imge/u27.png'
import { connect } from "react-redux";

class One extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...store.getState(),
			benr:{
				"allShouli":10000,
				"allSongli":8000,
				"benyueShouli":100,
				"benyueSongli":80
			  }
		}
		this.unSubscribe = null;
		// this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount(){
	    this.unSubscribe = store.subscribe(()=>{
	        this.setState({
	            ...store.getState()
	        })
	    })
		var that=this
		var ajax = new XMLHttpRequest();
		ajax.open('get','json/rank.json');
		ajax.send();
		ajax.onreadystatechange = function () {
		   if (ajax.readyState==4 &&ajax.status==200) {
			   that.state.rank.length=0
			   JSON.parse(ajax.responseText).map((item,index)=>{
					that.state.rank.push(item)
			   })
			   store.dispatch({type:'setname'})
		  　　}
		}

	}
	componentWillUnmount(){
	    this.unSubscribe();
	}
	render() {
		return ( <
			div className = "one" >
			<
			div className = "o-Statistical" >
			< div style = {
				{
					position: 'absolute',
					left: '98px',
					top: '50px',
					width: ' 53px',
					height: '32px',
					fontSize: '13px'
				}
			} >
			<
			span > 历史收礼 < /span> <
			br / >
			<
			span > {this.state.benr.allShouli} < /span> <
			/div> <
			div style = {
				{
					position: 'absolute',
					left: '98px',
					top: '166px',
					width: ' 53px',
					height: '32px',
					fontSize: '13px'
				}
			} >
			<
			span > 历史送礼 < /span> <
			br / >
			<
			span > {this.state.benr.allSongli} < /span> <
			/div> <
			div style = {
				{
					position: 'absolute',
					left: '270px',
					top: '50px',
					width: ' 53px',
					height: '32px',
					fontSize: '13px'
				}
			} >
			<
			span > 本月收礼 < /span> <
			br / >
			<
			span >{this.state.benr.benyueShouli} < /span> <
			/div> <
			div style = {
				{
					position: 'absolute',
					left: '270px',
					top: '166px',
					width: ' 53px',
					height: '32px',
					fontSize: '13px'
				}
			} >
			<
			span > 本月送礼 < /span> <
			br / >
			<
			span > {this.state.benr.benyueSongli} < /span> <
			/div> <
			div style = {
				{
					fontSize: '13px',
					color: '#fff',
					boxSizing: 'border-box',
					paddingTop: '20px',
					position: 'absolute',
					left: '50%',
					top: '30px',
					textAlign: 'center',
					marginLeft: '-36px',
					width: '72px',
					height: '72px',
					borderRidus: '50%',
					backgroundSize: '100% 100%',
					backgroundImage: 'url(' + cc + ')'
				}
			} >
			<
			span > 历史盈亏 < /span> <
			br / >
			<
			span > {this.state.benr.allShouli- this.state.benr.allSongli}< /span> <
			/div> <
			div style = {
				{
					fontSize: '13px',
					color: '#fff',
					boxSizing: 'border-box',
					paddingTop: '20px',
					position: 'absolute',
					left: '50%',
					top: '140px',
					textAlign: 'center',
					marginLeft: '-36px',
					width: '72px',
					height: '72px',
					borderRidus: '50%',
					backgroundSize: '100% 100%',
					backgroundImage: 'url(' + dd + ')'
				}
			} >
			<
			span > 本月盈亏 < /span> <
			br / >
			<
			span >{this.state.benr.benyueShouli - this.state.benr.benyueSongli}< /span> <
			/div> <
			div style = {
				{
					position: 'absolute',
					top: '102px',
					left: '50%'
				}
			} > < img src = {
				bb
			}
			/></div >
			<
			div style = {
				{
					position: 'absolute',
					top: '212px',
					left: '50%'
				}
			} > < img src = {
				bb
			}
			/></div >
			<
			div style = {
				{
					position: 'absolute',
					top: '243px',
					left: '50%',
					width: '19px',
					height: '19px',
					marginLeft: '-9px'
				}
			} > < img style = {
				{
					width: '100%',
					height: '100%'
				}
			}
			src = {
				aa
			}
			/></div >
			<
			/div> <
			Tableb / >
			<
			/div>
		);
	}
}

export default One;
