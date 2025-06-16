import { Action, createReducer, on } from '@ngrx/store'

import { login, loginError, loginSuccess } from '../actions'

export interface LoginState {
	loading: boolean
	error: any
}

export const LoginInitialState: LoginState = {
	loading: false,
	error: null,
}

const _LoginReducer = createReducer(
	LoginInitialState,

	on(login, state => ({
		...state,
		loading: true,
	})),

	on(loginSuccess, state => ({
		...state,
		loading: false,
	})),

	on(loginError, (state, { error }) => ({
		...state,
		loading: false,
		error: error?.error,
	})),
)

export function LoginReducer(
	state: LoginState | undefined,
	action: Action<string>,
) {
	return _LoginReducer(state, action)
}
