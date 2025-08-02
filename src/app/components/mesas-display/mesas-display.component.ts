import {
	ChangeDetectionStrategy,
	Component,
	inject,
	OnInit,
	signal,
} from '@angular/core'
import { Store } from '@ngrx/store'
import { Mesa } from '@interfaces'
import { selectAreas } from '@src/app/core/store/selectors'

import { ProgressSpinnerModule } from 'primeng/progressspinner'
@Component({
	selector: 'mesas-display',
	imports: [ProgressSpinnerModule],
	templateUrl: './mesas-display.component.html',
	host: {
		class: 'flex flex-col h-dvh',
	},
})
export class MesasDisplayComponent implements OnInit {
	private store = inject(Store)
	mesas = signal<Mesa[]>([])

	ngOnInit(): void {
		this.store.select(selectAreas).subscribe(areas => {
			if (!areas.length) return
			this.mesas.set(areas[0].mesas)
		})
	}

	// mesas = [
	// 	{ id: 1, nombre: '10' },
	// 	{ id: 1, nombre: '20' },
	// 	{ id: 1, nombre: '30' },
	// 	{ id: 1, nombre: '40' },
	// 	{ id: 1, nombre: '50' },
	// 	{ id: 1, nombre: '60' },
	// 	{ id: 1, nombre: '70' },
	// 	{ id: 1, nombre: '80' },
	// 	{ id: 1, nombre: '90' },
	// 	{ id: 1, nombre: '100' },
	// 	{ id: 1, nombre: '110' },
	// 	{ id: 1, nombre: '120' },
	// ]
}
