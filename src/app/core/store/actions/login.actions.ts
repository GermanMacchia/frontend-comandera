import { createAction, props } from '@ngrx/store'

export const login = createAction(
	'[Auth] Login',
	props<{ email: string; clave: string }>(),
)

export const loginSuccess = createAction('[Auth] Login Success')

export const loginError = createAction(
	'[Auth] Login Error',
	props<{ error: any }>(),
)

export const logout = createAction('[Auth] Logout')

export const logoutSuccess = createAction('[Auth] LogoutSuccess')
