import { inject, Injectable, signal } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { logout } from '@actions'
import { Store } from '@ngrx/store'


@Injectable({ providedIn: 'root' })
export class AppService {
	store$ = inject(Store)
	menuItems = signal<MenuItem[]>([
		{
			label: 'Salón',
			icon: 'pi pi-objects-column'
		},
		{
			label: 'Logout',
			icon: 'pi pi-sign-out',
			command: () => this.store$.dispatch(logout())
		}
	])


}
