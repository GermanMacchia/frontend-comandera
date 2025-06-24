import { inject, Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { ApiService } from '../api/api.service'

@Injectable({
	providedIn: 'root',
})
export class DataService {
	private store = inject(Store)
	private apiService = inject(ApiService)

	private getDataAdmin() {}

	private getDataCamarero(usuario_id: number) {}
}
