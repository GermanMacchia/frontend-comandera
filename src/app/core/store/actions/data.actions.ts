import { createAction, props } from '@ngrx/store'

export const dataLoading = createAction(
	'[Data] Data Loading',
	props<{ id: number; rol: string }>(),
)

export const dataLoadingSuccess = createAction(
	'[Data] Data Loading Success',
	props<{ data: any }>(),
)

export const dataLoadingError = createAction(
	'[Data] Data Loading Error',
	props<{ error: any }>(),
)
