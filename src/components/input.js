import React, {Component} from 'react';
import 'whatwg-fetch'; // from github.com/github/fetch  use npm install whatwg-fetch --save 

class	Input extends	Component{
	//define states in class based components
	//functional components don't have state
	//states are ONLY available in CLASS based components
	constructor(props){
		super(props);
		this.state = {value : ''};
	}

	render(){
		return(
			<div>
				<p>The input value is {this.state.value}.</p>
				<input onChange={this.onInputChange.bind(this)}></input>
			</div>
		);
	}

	onInputChange(event){
		//the only way to make react re-render a view is to call the setState function
		this.setState({value : event.target.value});
		//console.log(event.target.value);
	}
}

export default Input;

