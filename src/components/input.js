import React, {Component} from 'react';

class	Input extends	Component{
	render(){
		return (<input onChange={this.onInputChange} />);
	}

	onInputChange(event){
		console.log(event.target.value);
	}
}

export default Input;