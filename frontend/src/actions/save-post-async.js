import { request } from '../utils/request'
import { setPostData } from './set-post-data'

export const savePostAsync = (newPostData) => (dispatch) =>
	request('/posts', 'POST', newPostData).then((updatedPost) => {
		dispatch(setPostData(updatedPost.data))

		return updatedPost.data
	})
