const pre = 'api'
const auth = 'auth'
const areas = 'areas'

export const endpoints = {
	auth: {
		login: (api: string) => `${api}/${pre}/${auth}/login`,
		refresh: (api: string) => `${api}/${pre}/${auth}/login`,
	},
	areas: (api: string) => `${api}/${pre}/${areas}`,
}
