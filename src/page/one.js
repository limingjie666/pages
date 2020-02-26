import React from 'react';
import Table from '../assembly/table'
import './one.css'
import aa from '../imge/download.svg'
import bb from '../imge/u28.png'
import cc from '../imge/u22.png'
import dd from '../imge/u27.png'

class One extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			
	    }
		// this.keyd=this.keyd.bind(this);
	}
	render(){
	  return (
		<div className="one">
			<div className="o-Statistical">
				<div style={{position: 'absolute',left: '98px',top: '50px',width:' 53px',height: '32px',fontSize:'13px'}}>
					<span>历史收礼</span>
					<br/>
					<span>5500.00</span>
				</div>
				<div style={{position: 'absolute',left: '98px',top: '166px',width:' 53px',height: '32px',fontSize:'13px'}}>
					<span>历史收礼</span>
					<br/>
					<span>5500.00</span>
				</div>
				<div style={{position: 'absolute',left: '270px',top: '50px',width:' 53px',height: '32px',fontSize:'13px'}}>
					<span>历史收礼</span>
					<br/>
					<span>5500.00</span>
				</div>
				<div style={{position: 'absolute',left: '270px',top: '166px',width:' 53px',height: '32px',fontSize:'13px'}}>
					<span>历史收礼</span>
					<br/>
					<span>5500.00</span>
				</div>
				<div style={{fontSize:'13px',color:'#fff',boxSizing: 'border-box',paddingTop: '20px',position:'absolute',left:'50%',top:'30px',textAlign: 'center',marginLeft:'-36px',width:'72px',height:'72px',borderRidus:'50%',backgroundSize:'100% 100%',backgroundImage:'url('+cc+')'}}>
					<span>历史盈亏</span>
					<br/>
					<span>2948.00</span>
				</div>
				<div style={{fontSize:'13px',color:'#fff',boxSizing: 'border-box',paddingTop: '20px',position:'absolute',left:'50%',top:'140px',textAlign: 'center',marginLeft:'-36px',width:'72px',height:'72px',borderRidus:'50%',backgroundSize:'100% 100%',backgroundImage:'url('+dd+')'}}>
					<span>本月盈亏</span>
					<br/>
					<span>2948.00</span>
				</div>
				<div style={{position:'absolute',top:'102px',left:'50%'}}><img src={bb}/></div>
				<div style={{position:'absolute',top:'212px',left:'50%'}}><img src={bb}/></div>
				<div style={{position:'absolute',top:'243px',left:'50%',width:'19px',height:'19px',marginLeft:'-9px'}}><img style={{width:'100%',height:'100%'}} src={aa}/></div>
			</div>
			<div className="o-table">
				<div style={{backgroundColor:'rgba(188, 188, 188, 1)',overflow: 'hidden'}}>
					<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px',fontWeight: '700'}}>排行</div>
					<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px',fontWeight: '700'}}>用户</div>
					<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px',fontWeight: '700'}}>历史盈亏</div>
					<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px',fontWeight: '700'}}>本月盈亏</div>
					<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px',fontWeight: '700'}}>更多</div>
				</div>
				<Table arr={['1',' JAMES 刘 ','95685.00','4500.00']}/>
				<Table arr={['2',' JAMES 刘 ','95685.00','4500.00']}/>
				<Table arr={['3',' JAMES 刘 ','95685.00','4500.00']}/>
				<Table arr={['4',' JAMES 刘 ','95685.00','4500.00']}/>
				<Table arr={['5',' JAMES 刘 ','95685.00','4500.00']}/>
				<Table arr={['6',' JAMES 刘 ','95685.00','4500.00']}/>
				<Table arr={['7',' JAMES 刘 ','95685.00','4500.00']}/>
			</div>
		</div>
		);
	}
}

export default One;
