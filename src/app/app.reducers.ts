import { ActionReducerMap } from '@ngrx/store'
import * as reducers from '@src/app/core/store/reducers'

export interface AppState {
	login: reducers.LoginState
}

export const appReducers: ActionReducerMap<AppState> = {
	login: reducers.LoginReducer,
}
