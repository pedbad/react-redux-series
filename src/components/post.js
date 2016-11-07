import React, {Component} from 'react';
import 'whatwg-fetch'; // from github.com/github/fetch  use npm install whatwg-fetch --save
import PostsList from './posts-list';

class	Post extends	Component{
	//define states in class based components
	//functional components don't have state
	//states are ONLY available in CLASS based components
	constructor(props){
		super(props);
		this.state = {posts : []};
	}

	render(){
		return(
			<div>
				<button onClick={this.onFetchClick.bind(this)}> fetch json data </button>
				<PostsList posts={this.state.posts} />
			</div>
		);
	}

	onFetchClick(event){
		//the only way to make react re-render a view is to call the setState function
		//this.setState({value : event.target.value});
		//console.log(event.target.value);
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(function(response) {
			return response.json();
		}).then((posts) => {
			this.setState({posts : posts});
		})
	}
}

export default Post;