const Post = require('../models/Post')

// add
function addPost(post) {
	return Post.create(post)
}

// edit
async function editPost(id, post) {
	const newPost = await Post.findByIdAndUpdate(id, post, {
		returnDocument: 'after',
	})

	return newPost
}

// delete
function deletePost(id) {
	return Post.deleteOne({ _id: id })
}

// get list with search and pagination
async function getPosts(search = '', limit = 9, page = 1) {
	const [posts, count] = await Promise.all([
		Post.find({ title: { $regex: search, $options: 'i' } })
			.limit(limit)
			.skip((page - 1) * limit)
			.sort({ createdAt: -1 }),
		Post.countDocuments({ title: { $regex: search, $options: 'i' } }),
	])

	return {
		posts,
		lastPage: Math.ceil(count / limit),
	}
}

// get item
function getPost(id) {
	return Post.findById(id)
}

module.exports = {
	addPost,
	editPost,
	deletePost,
	getPosts,
	getPost,
}
