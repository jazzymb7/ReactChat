import React, {Component} from 'react';
import Zone from '../Presentation/Zone';
import superagent from 'superagent';

class Zones extends Component {
	constructor(){
		super();
		this.zone ={
			name: '',
			zipCode: '',
			numComments: ''
		}
		this.state = {
			list: []
		}
	}
	
	componentDidMount(){
		superagent
		.get('/api/zone')
		.query(null)
		.set('Accept', 'application/json')
		.end((err,response) =>{
			if(err){
				console.log('No Data' + err);
				return
			}
			
			let results = response.body.results;
			this.setState({
				list: results
			})
		})
	}
	
	addZone(event){
		let updatedZone = Object.assign([],this.state.list);
		updatedZone.push(this.state.zone);
		
		this.setState({
			list: updatedZone
		})
	}
	
	updateZone(event){
		let updatedZipCode = Object.assign({},this.state.zone);
		updatedZipCode[event.target.id] = event.target.value;
		this.setState({
			zone: updatedZipCode
		})
	}
	
	//this is jsx
	//render function every react component has to implement, this is where we write html
	render(){
		//const firstZone = {name:'Zone 1', zipCode: '111',  numComments: 10}
		//const secondZone = {name:'Zone 1', zipCode: '112',  numComments: 10}
		//const thirdZone = {name:'Zone 1', zipCode: '113',  numComments: 10}
		//const fourthZone = {name:'Zone 1', zipCode: '114',  numComments: 10}
		const listItems = this.state.list.map((zone, i) => {
			return (
			<li key={zone._id}><Zone currentZone = {zone} /></li>
			)
		})
		
		return (
			<div>
			<ul>
				{listItems}
			</ul>
			<input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name" /><br />
			<input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="ZipCode" /><br />
			<input id="numComments" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="numComments" /><br />
			<button className="btn btn-danger" onClick={this.addZone.bind(this)} >Update Zone</button>
			</div>
		)
	}
}

export default Zones;