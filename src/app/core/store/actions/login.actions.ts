import { createAction, props } from '@ngrx/store'
import { Usuario } from '../../interfaces/interfaces'

export const login = createAction(
	'[Auth] Login',
	props<{ email: string; clave: string }>(),
)

export const loginSuccess = createAction('[Auth] Login Success')

export const loginError = createAction(
	'[Auth] Login Error',
	props<{ error: any }>(),
)

export const setUsuario = createAction(
	'[Auth] Set Usuario',
	props<{ usuario: Usuario }>(),
)

export const logoutSuccess = createAction('[Auth] LogoutSuccess')

export const logout = createAction('[Auth] Logout')
