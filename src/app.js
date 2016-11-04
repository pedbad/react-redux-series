import React from 'react';
import ReactDOM from 'react-dom';

//creating a component

const	App	= function(){
	return <div><p>Hello World! 4</p></div>;
}

//inserting it on the Dom

ReactDOM.render(<App/>, document.querySelector('#container'));