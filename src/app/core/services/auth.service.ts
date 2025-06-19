import { inject, Injectable, signal } from '@angular/core'
import { Router } from '@angular/router'
import { NgxPermissionsService } from 'ngx-permissions'
import { Auth } from '../interfaces/interfaces'

export const USER_VALUES = 'user_values'
export const ACCESS_VALUES = 'access_values'

@Injectable({ providedIn: 'root' })
export class AuthService {
	private permissions = inject(NgxPermissionsService)
	private router = inject(Router)
	public isPermissionGranted = signal<boolean>(false)

	constructor() {
		this.settleUserIfReloadedWindow()
	}

	private flushPermissions() {
		sessionStorage.removeItem(ACCESS_VALUES)
		this.isPermissionGranted.set(false)
		this.permissions.flushPermissions()
	}

	setAccessValues(accessValues: Auth) {
		this.settlePermissions(accessValues)
		sessionStorage.setItem(ACCESS_VALUES, JSON.stringify(accessValues))
	}

	logout() {
		this.flushPermissions()
		this.router.navigate(['login'])
	}

	private settlePermissions(accessValues: Auth) {
		this.permissions.loadPermissions([accessValues.user.rol.nombre])
		this.isPermissionGranted.set(true)
		this.router.navigate([''])
	}

	private settleUserIfReloadedWindow(): void {
		const accessValues = JSON.parse(sessionStorage.getItem(ACCESS_VALUES)!)

		if (!accessValues) return

		this.setAccessValues(accessValues as unknown as Auth)
		this.router.navigate([''])
	}
}
