import React from 'react';

class Table extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			arr:this.props.arr
	    }
		// this.keyd=this.keyd.bind(this);
	}
	render(){
	  return (
		<div style={{borderBottom:'1px rgba(228, 228, 228, 1) solid',overflow: 'hidden'}}>
			<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px'}}>{this.state.arr[0]}</div>
			<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px'}}>{this.state.arr[1]}</div>
			<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px'}}>{this.state.arr[2]}</div>
			<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px'}}>{this.state.arr[3]}</div>
			<div style={{width:'20%',height:'35px',float:'left',textAlign:'center',lineHeight:'35px'}}>{this.state.arr[4]}</div>
		</div>
  );
	}
}

export default Table;
