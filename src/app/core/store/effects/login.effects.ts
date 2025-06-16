import { inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'
import { ApiService } from '../../api/api.service'
import { Auth } from '../../interfaces/interfaces'
import { AuthService } from '../../services/auth.service'
import {
	login,
	loginError,
	loginSuccess,
	logout,
	logoutSuccess,
} from '../actions'

@Injectable()
export class LoginEffects {
	private actions$ = inject(Actions)
	private apiService = inject(ApiService)
	private authService = inject(AuthService)
	private router = inject(Router)

	login$ = createEffect(() =>
		this.actions$.pipe(
			ofType(login),
			mergeMap(({ email, clave }) =>
				this.apiService.login(email, clave).pipe(
					map((auth: Auth) => {
						this.authService.setAccessValues(auth)
						this.router.navigate([''])
						return loginSuccess()
					}),
					catchError(error => of(loginError({ error }))),
				),
			),
		),
	)

	logout$ = createEffect(() =>
		this.actions$.pipe(
			ofType(logout),
			map(() => {
				this.authService.logout()
				return logoutSuccess()
			}),
		),
	)
}
