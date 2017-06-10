import React, {Component} from 'react';
import styles from '../Styles/styles.js';

class Zone extends Component {
	//this is jsx
	//render function every react component has to implement, this is where we write html
	render(){
		const zoneStyle = styles.zone
		return (
			<div style={zoneStyle.container}>
				<h2 style={zoneStyle.header}><a style={zoneStyle.title} href="#">{this.props.currentZone.name}</a></h2>
				<span className="detail">{this.props.currentZone.zipCode}</span><br/>
				<span className="detail">{this.props.currentZone.numComments} comments</span>
			</div>
		)
	}
}

export default Zone;