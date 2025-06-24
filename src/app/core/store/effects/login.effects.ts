import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'
import { ApiService } from '../../api/api.service'
import { Auth } from '../../interfaces/interfaces'
import { AuthService } from '../../services/auth.service'

import { Store } from '@ngrx/store'
import { RolesUsuarios } from '../../interfaces/enums'
import {
	dataLoading,
	login,
	loginError,
	loginSuccess,
	logout,
	logoutSuccess,
	setUsuario,
} from '../actions'

@Injectable()
export class LoginEffects {
	private actions$ = inject(Actions)
	private apiService = inject(ApiService)
	private authService = inject(AuthService)
	private store = inject(Store)

	login$ = createEffect(() =>
		this.actions$.pipe(
			ofType(login),
			mergeMap(({ email, clave }) =>
				this.apiService.login(email, clave).pipe(
					map((auth: Auth) => {
						this.authService.setAccessValues(auth)
						return setUsuario({ usuario: auth.user })
					}),
					catchError(error => of(loginError({ error }))),
				),
			),
		),
	)

	setUsuario$ = createEffect(() =>
		this.actions$.pipe(
			ofType(setUsuario),
			map(data => {
				this.store.dispatch(loginSuccess())

				const { usuario } = data
				const nombreRol = usuario.rol.nombre

				if (nombreRol === RolesUsuarios.ADMINISTRADOR)
					return dataLoading({
						id: usuario.id,
						rol: nombreRol,
					})
				else return dataLoading({ id: usuario.id, rol: nombreRol })
			}),
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
