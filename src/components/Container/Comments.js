import React,  {Component} from 'react';
import Comment from '../Presentation/Comment';
import styles from '../Styles/styles.js';
import superagent from 'superagent';

class Comments extends Component{
	constructor(){
		super();
		
		this.state = {
			comment: {
				username: '',
				body: '',
				timestamp: ''
			},
			list: []
		}
	}
	
	componentDidMount(){
		superagent
		.get('/api/comment')
		.query(null)
		.set('Accept', 'application/json')
		.end((err,response) =>{
			if(err){
				console.log('No Data' + err);
				return
			}
			
			console.log(JSON.stringify(response.body));
			let results = response.body.results;
			this.setState({
				list: results
			})
		})
	}
	
	submitComment(){
		//console.log('submittedComment:'+JSON.stringify(this.state.comment));
		let updatedList = Object.assign([],this.state.list);
		updatedList.push(this.state.comment);
		
		this.setState({
			list: updatedList
		})
		
	}
	
	updateUsername(event){
		//wrong way to do
		// this.state.comment['username'] = event.target.value, never mutate state,create copy update copy and reset the state
		let updatedComment = Object.assign({},this.state.comment);
		updatedComment['username'] = event.target.value;
		this.setState({
			comment: updatedComment
		});
	}
	
	updateBody(event){
		let updatedComment = Object.assign({},this.state.comment);
		updatedComment['body'] = event.target.value;
		this.setState({
			comment: updatedComment
		});
	}
	
	updateTimestamp(event){
		let updatedComment = Object.assign({},this.state.comment);
		updatedComment['timestamp'] = event.target.value;
		this.setState({
			comment: updatedComment
		})
	}
	
	render(){
		const commentList = this.state.list.map((comment,i) =>{
			return (
			<li key={i}><Comment currentComment={comment} /></li>
			)
		});
		return (
			<div>
			<h2>Comment Zone: 1</h2>
			<div style={styles.comment.commentsBox}>
				<ul style={styles.comment.listDots}>
				{commentList}
				</ul>
				
				<input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" /><br />
				<input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment" /><br />
				<input onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder="Time Stamp" /><br />
				<button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
			</div>
			</div>
		)
	}
}

export default Comments;