import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { AppConfigService } from '../config/app-config.service'
import { Auth } from '../interfaces/interfaces'
import { endpoints } from './endpoints'

@Injectable({ providedIn: 'root' })
export class ApiService {
	private endpoints = endpoints
	private http = inject(HttpClient)
	private config = inject(AppConfigService)

	login = (email: string, clave: string) =>
		this.http.post<Auth>(
			this.endpoints.auth.login(this.config.getConfigByKey('apiUrl')),
			{
				email,
				clave,
			},
		)
}
