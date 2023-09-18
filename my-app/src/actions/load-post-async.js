import { setPostData } from './set-post-data'

export const loadPostAsync = (requestServer, postId) => (dispatch) =>
	requestServer('fetchPost', postId).then((postData) => {
		if (postData.res) {
			dispatch(setPostData(postData.res))
		}

		return postData
	})
