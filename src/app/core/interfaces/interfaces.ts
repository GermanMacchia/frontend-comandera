interface BaseDB {
	id: number
	createdAt: Date
	updatedAt: Date
	activo?: boolean
}

export interface Mesa extends BaseDB {
	id: number
	nombre: string
}

export interface Auth {
	acces_token: string
	iat: number
	exp: number
	user: Usuario
}

export interface Usuario {
	id: number
	nombre: string
	apellido: string
	email: string
	activo: boolean
	rol: Rol
}

export interface Rol {
	id: number
	nombre: string
}
