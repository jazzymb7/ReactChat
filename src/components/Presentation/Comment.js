import React, {Component} from 'react';
import styles from '../Styles/styles.js';

class Comment extends Component{
	
	
	render(){
		return(
			<div> 
			<p style={styles.comment.commentTitle}>
			{this.props.currentComment.body}
			</p>
			<span style={styles.comment.commentUsername}>{this.props.currentComment.username}</span>
			<span style={styles.comment.commentPipe}>|</span>
			<span style={styles.comment.commentTimestamp}>{this.props.currentComment.timestamp}</span>
			<hr/>
			</div>
		)
	}
}

export default Comment