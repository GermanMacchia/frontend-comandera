import { createFeatureSelector, createSelector } from '@ngrx/store'
import { DataState, LoginState } from './reducers'

export const selectUsuario = createSelector(
	createFeatureSelector<LoginState>('login'),
	state => state.usuario,
)

export const loginLoading = createSelector(
	createFeatureSelector<LoginState>('login'),
	state => state.loading,
)

export const selectAreas = createSelector(
	createFeatureSelector<DataState>('data'),
	state => state.areas,
)
