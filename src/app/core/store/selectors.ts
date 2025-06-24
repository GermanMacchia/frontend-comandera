import { createFeatureSelector, createSelector } from '@ngrx/store'
import { DataState, LoginState } from './reducers'

export const selectUsuario = createSelector(
	createFeatureSelector<LoginState>('login'),
	state => state.usuario,
)

export const selectAreas = createSelector(
	createFeatureSelector<DataState>('data'),
	state => state.areas,
)
