import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'
import { ApiService } from '../../api/api.service'
import { dataLoading, dataLoadingError, dataLoadingSuccess } from '../actions'
import { RolesUsuarios } from '@enums'

@Injectable()
export class DataEffects {
	private actions$ = inject(Actions)
	private apiService = inject(ApiService)

	//pide los datos iniciales
	setData$ = createEffect(() =>
		this.actions$.pipe(
			ofType(dataLoading),
			mergeMap(({ id, rol }) =>
				this.apiService.getData(id).pipe(
					map(data => dataLoadingSuccess({ data })),
					catchError(error => of(dataLoadingError({ error })))
				)
			)
		)
	)


}
