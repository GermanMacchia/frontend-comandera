/* eslint-disable @typescript-eslint/no-explicit-any */

import { NgxPermissionsService } from 'ngx-permissions'
import { RolesUsuarios } from '../interfaces/enums'
import { ACCESS_VALUES } from '../services/auth.service'

export class LoadPermissionsService {
	public loadPermissions() {
		if (!sessionStorage.getItem(ACCESS_VALUES))
			return new Promise(res => res([RolesUsuarios.CAMARERO]))

		const access_values = JSON.parse(
			sessionStorage.getItem(ACCESS_VALUES) as string,
		)

		return new Promise(res => res([access_values.rol]))
	}
}

export function permissionsFactory(
	loadPermissionsService: LoadPermissionsService,
	ngxPermissionsService: NgxPermissionsService,
) {
	return () =>
		loadPermissionsService.loadPermissions().then((data: any) => {
			ngxPermissionsService.loadPermissions(data)
			return true
		})
}
