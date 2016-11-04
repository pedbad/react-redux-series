import React, {component} from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input';

//creating a component

const	App	= () =>{
	return(
		<div>
			<Input/>
		</div>
	)
}

//inserting it on the Dom

ReactDOM.render(<App/>, document.querySelector('#container'));