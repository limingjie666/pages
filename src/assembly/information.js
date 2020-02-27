import React from 'react'
import './information.css'
class Information extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			val1:'',
			val2:'输出送礼人姓名',
			val3:'输出送礼金额'
		}
	    this.headonchange=this.headonchange.bind(this)
	}
	headonchange(ev){
		this.setState({
			[ev.target.name]:ev.target.value
		})
	}
	render(){
		return (
			<div className="information-box">
				<div className="information-head">
					<div onClick={()=>{this.props.onChange(false)}} style={{float:'left',paddingLeft:'10px'}}>取消</div>
					送礼人信息
					<div onClick={()=>{this.props.onChange(false)}} style={{float:'right',paddingRight:'10px'}}>完成</div>
				</div>
				<div className="information-list">
					<span style={{marginRight:'10px'}}>收礼人关系: </span>
					<label style={{marginRight:'10px'}}><input type="checkbox" value="亲属" />
					亲属 </label>
					
					<label style={{marginRight:'10px'}}><input type="checkbox" value="朋友" />
					朋友 </label>
					
					<label style={{marginRight:'10px'}}><input type="checkbox" value="同学" />
					同学 </label>
					
					<label style={{marginRight:'10px'}}><input type="checkbox" value="同事" />
					同事 </label>
				</div>
				<div className="information-list">
					<input name="val2" onChange={this.headonchange} value={this.state.val2} style={{width:'290px',height:'40px',boxSizing:'border-box',border:'1px #333 solid',float:'left'}} type="text" />
					<span>从通讯录选择</span>
				</div>
				<div className="information-list">
					<input name="val3" onChange={this.headonchange} value={this.state.val3} style={{width:'100%',height:'40px',boxSizing:'border-box',border:'1px #333 solid',float:'left'}} type="text" />
				</div>
			</div>
		)
	}
}
export default Information;