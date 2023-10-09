import { useLayoutEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Icon, Input } from '../../../../components'
import { SpecialPanel } from '../special-panel/special-panel'
import { useServerRequest } from '../../../../hooks'
import { savePostAsync } from '../../../../actions'
import { sanitizeContent } from './utils'
import { styled } from 'styled-components'
import { PROP_TYPE } from '../../../../constants'

const PostFormContainer = ({
	className,
	post: { id, imageUrl, title, content, publishedAt },
}) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl)
	const [titleValue, setTitleValue] = useState(title)
	const contentRef = useRef(null)

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl)
		setTitleValue(title)
	}, [imageUrl, title])

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const requestServer = useServerRequest()

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML)

		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			})
		).then(({ id }) => navigate(`/post/${id}`))
	}

	const onImageChange = ({ target }) => setImageUrlValue(target.value)
	const onTitleChange = ({ target }) => setTitleValue(target.value)

	return (
		<div className={className}>
			<Input
				value={imageUrlValue}
				placeholder="Изображение..."
				onChange={onImageChange}
			/>
			<Input
				value={titleValue}
				placeholder="Заголовок..."
				onChange={onTitleChange}
			/>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={
					<Icon
						id="fa-floppy-o"
						size="21px"
						margin="0 10px 0 0"
						onClick={onSave}
					/>
				}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	)
}

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		min-height: 80px;
		border: 1px solid #000;
		font-size: 18px;
		white-space: pre-line;
	}
`

PostForm.propTypes = {
	post: PROP_TYPE.POST.isRequired,
}
