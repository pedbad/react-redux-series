import React, {component} from 'react';
import ReactDOM from 'react-dom';
//import Input from './components/Input';
import Post from './components/Post';

//creating a component

const	App	= () =>{
	return(
		<div>
			<Post/>
		</div>
	)
}

//inserting it on the Dom

ReactDOM.render(<App/>, document.querySelector('#container'));