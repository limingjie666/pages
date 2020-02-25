import React from 'react';


class Olist extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			json:this.props.json
	    }
		// this.keyd=this.keyd.bind(this);
	}
	render(){
	  return (
			<div style={{paddingLeft:this.state.json.type.img?'10px':'40px',backgroundColor:"#fff",height:'64px',marginBottom:'5px',paddingTop:'10px'}}>
				<div style={{height:'100%',padding:'0 10px'}}>
					<div style={{float:'left'}}>
						<div style={{float:'left',marginRight:'10px',height:'19px'}}><img style={{width:'19px',height:'19px',display:this.state.json.img?'block':'none'}} src={this.state.json.img}/></div>
						<span>{this.state.json.xm}</span><br/>
						<span style={{backgroundColor:'rgba(215, 215, 215, 1)',padding:'0 3px',marginRight:'5px',borderRadius:'5px',color:'#fff',fontSize:'18px',display:this.state.json.type.on?'inline-block':'none'}}>{this.state.json.type.on}</span>
						<img style={{width:'19px'}} src={this.state.json.type.img}/>
						<span>{this.state.json.name}</span>
					</div>
					<div style={{float:'right'}}>
						<span style={{color:'#FF0000',fontSize:'28px',fontWeight:'700'}}>{this.state.json.mar}</span><br/>
						<span style={{marginRight:'10px',color:'#999999',display:this.state.json.coun?'inline-block':'none'}}>{this.state.json.coun}人送礼</span>
						<span style={{color:'#999999'}}>{this.state.json.time}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Olist;
