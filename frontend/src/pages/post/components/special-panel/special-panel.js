import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../../../../components'
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions'
import { checkAccess } from '../../../../utils'
import { selectUserRole } from '../../../../selectors'
import { ROLE } from '../../../../constants'
import { getCurrentDate } from '../../../../utils'
import styled from 'styled-components'

const SpecialPanelContainer = ({
	className,
	id,
	publishedAt,
	editButton,
	viewsCount,
}) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const userRole = useSelector(selectUserRole)

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(id)).then(() => navigate('/'))
					dispatch(CLOSE_MODAL)
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			})
		)
	}

	const isAdmin = checkAccess([ROLE.ADMIN], userRole)

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon
						inactive={true}
						id="fa-calendar-o"
						margin="0 7px 0 0"
						size="18px"
					/>
				)}
				{getCurrentDate(publishedAt)}
				<div className="views-count">
					<Icon
						inactive={true}
						id="fa fa-eye"
						margin="0 7px 0 15px"
						size="18px"
					/>
					{viewsCount}
				</div>
			</div>

			{isAdmin && (
				<div className="buttons">
					{editButton}
					{publishedAt && (
						<Icon
							id="fa-trash-o"
							size="21px"
							margin="0 0 0 7px"
							onClick={() => onPostRemove(id)}
						/>
					)}
				</div>
			)}
		</div>
	)
}

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& .views-count {
		display: flex;
	}

	& .buttons {
		display: flex;
	}

	& i {
		position: relative;
		top: -1px;
	}
`

SpecialPanel.propTypes = {
	id: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButton: PropTypes.node.isRequired,
	viewsCount: PropTypes.number.isRequired,
}
