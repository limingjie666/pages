import React from 'react';
import Table from '../assembly/table'
import './one.css'

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
				<div style={{fontSize:'13px',color:'#fff',boxSizing: 'border-box',paddingTop: '20px',position:'absolute',left:'50%',top:'30px',textAlign: 'center',marginLeft:'-36px',width:'72px',height:'72px',borderRidus:'50%',backgroundSize:'100% 100%',backgroundImage:'url(http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u22.png?token=50b512d239836e152424dd56a74280c4400119e8ce5ec818c3cbc3c99392703d)'}}>
					<span>历史盈亏</span>
					<br/>
					<span>2948.00</span>
				</div>
				<div style={{fontSize:'13px',color:'#fff',boxSizing: 'border-box',paddingTop: '20px',position:'absolute',left:'50%',top:'140px',textAlign: 'center',marginLeft:'-36px',width:'72px',height:'72px',borderRidus:'50%',backgroundSize:'100% 100%',backgroundImage:'url(http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u27.png?token=7a5e1fbe35b2850bc3207a9ff5a93bdd2b30e983292e9ac04b61fca7e22e7069)'}}>
					<span>本月盈亏</span>
					<br/>
					<span>2948.00</span>
				</div>
				<div style={{position:'absolute',top:'102px',left:'50%'}}><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u28.png?token=dfd62643a0a41bfac8f80ec37d65b76b6af64fc249cfde9fb39873b281c3e774"/></div>
				<div style={{position:'absolute',top:'212px',left:'50%'}}><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u29.png?token=bcab0b26862e47181c059f10b7b27a5236e712722e067acf616cebfad245e64e"/></div>
				<div style={{position:'absolute',top:'243px',left:'50%',width:'19px',height:'19px',marginLeft:'-9px'}}><img style={{width:'100%',height:'100%'}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u30.svg?token=3718bd9a97ee2abe3683a9c3a31a90e399f0e70552eead1b4902044af01d85e6"/></div>
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
