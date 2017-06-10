//this is es6 format
import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; //brings react code to the real world
import Home from './components/Layout/Home';

//creating an html tag named app
class App extends Component {
	render(){
		return (
			<div>
				ReactChat!
				<Home />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root')) //this code will interface with the dom,the only time react app hits the DOM