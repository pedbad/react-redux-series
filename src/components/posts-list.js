import React from 'react';
import PostItem from './post-item';

const PostsList = (props) => {
	const posts = props.posts.map((post) => {
		return <PostItem post = {post} />

	});
	


	return(
		<ul>{posts}</ul>
	)
}

export default PostsList;