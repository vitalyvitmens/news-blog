import { setUserRole } from '../api'
import { sessions } from '../sessions'
import { ROLE } from '../constants'

export const updateUserRole = async (hash, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN]

	const access = await sessions.access(hash, accessRoles)

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		}
	}

	setUserRole(userId, newUserRoleId)

	return {
		error: null,
		res: true,
	}
}
