import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
	selector: 'mesas-display',
	standalone: true,
	imports: [],
	templateUrl: './mesas-display.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {},
})
export class MesasDisplayComponent {
	mesas = [
		{ id: 1, nombre: '10' },
		{ id: 1, nombre: '20' },
		{ id: 1, nombre: '30' },
		{ id: 1, nombre: '40' },
		{ id: 1, nombre: '50' },
		{ id: 1, nombre: '60' },
		{ id: 1, nombre: '70' },
		{ id: 1, nombre: '80' },
		{ id: 1, nombre: '90' },
		{ id: 1, nombre: '100' },
		{ id: 1, nombre: '110' },
		{ id: 1, nombre: '120' },
	]
}
