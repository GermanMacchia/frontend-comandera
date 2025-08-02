import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { AppConfigService } from '../config/app-config.service'
import { Auth } from '../interfaces/interfaces'
import { endpoints } from './endpoints'

@Injectable({ providedIn: 'root' })
export class ApiService {
	private endpoints = endpoints
	private http = inject(HttpClient)
	private config = inject(AppConfigService)

	getApiUrl = () => this.config.getConfigByKey('apiUrl')

	login = (email: string, clave: string) =>
		this.http.post<Auth>(this.endpoints.auth.login(this.getApiUrl()), {
			email,
			clave,
		})

	getData = (usuario_id: number) => {
		const params = new HttpParams().set('usuario_id', usuario_id)
		return this.http.get<any>(this.endpoints.dataUsuario(this.getApiUrl()), {
			params,
		})
	}
}
