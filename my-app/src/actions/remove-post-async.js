export const removePostAsync = (requestServer, id) => () =>
	requestServer('removePost', id)
