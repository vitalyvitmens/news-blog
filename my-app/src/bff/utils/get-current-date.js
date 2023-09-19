export const getCurrentDate = () =>
	new Date()
		.toLocaleString()
		.substring(0, 17)
		.replaceAll('.', '-')
		.replace(',', '')
