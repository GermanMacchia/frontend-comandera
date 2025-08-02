import { Action, createReducer, on } from '@ngrx/store'
import { dataLoading, dataLoadingError, dataLoadingSuccess } from '../actions'

export interface DataState {
	loading: boolean
	error: any
	areas: any[]
	mesasActivas: number[]
	mesasCobrando: number[]
	mesasLibres: number[]
}

export const DataInitialState: DataState = {
	loading: false,
	error: null,
	areas: [],
	mesasActivas: [],
	mesasCobrando: [],
	mesasLibres: [],
}

const _DataReducer = createReducer(
	DataInitialState,

	on(dataLoading, state => ({
		...state,
		loading: true,
	})),

	on(dataLoadingSuccess, (state, { data }) => ({
		...state,
		loading: false,
		areas: data.areas ?? [],
		mesasActivas: data.mesasActivas ?? [],
		mesasCobrando: data.mesasCobrando ?? [],
		mesasLibres: data.mesasLibres ?? []
	})),

	on(dataLoadingError, (state, { error }) => ({
		...state,
		loading: false,
		error: error?.error,
	})),
)

export function DataReducer(
	state: DataState | undefined,
	action: Action<string>,
) {
	return _DataReducer(state, action)
}
