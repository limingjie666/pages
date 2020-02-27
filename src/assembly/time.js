import React from 'react'
import './time.css'
class Time extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			
		}
	    
	}
	render(){
		return (
			<div className="time-box">
				<div className="time-head">
					<div style={{float:'left',paddingLeft:'10px'}}>取消</div>
					日期
					<div style={{float:'right',paddingRight:'10px'}}>完成</div>
				</div>
				<div className="time-list">
					<div className="time-list-div">2016年</div>
					<div className="time-list-div">5月</div>
					<div className="time-list-div">28日</div>
				</div>
				<div className="time-list time-active">
					<div className="time-list-div">2016年</div>
					<div className="time-list-div">5月</div>
					<div className="time-list-div">28日</div>
				</div>
				<div className="time-list">
					<div className="time-list-div">2016年</div>
					<div className="time-list-div">5月</div>
					<div className="time-list-div">28日</div>
				</div>
			</div>
		)
	}
}
export default Time;