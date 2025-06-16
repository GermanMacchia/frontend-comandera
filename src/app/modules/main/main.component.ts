import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Store } from '@ngrx/store'
import { logout } from '@src/app/core/store/actions'
import { MenuItem } from 'primeng/api'
import { MenubarModule } from 'primeng/menubar'
import { MesasDisplayComponent } from '../mesas-display/mesas-display.component'

@Component({
	selector: 'main',
	standalone: true,
	imports: [MenubarModule, MesasDisplayComponent],
	templateUrl: './main.component.html',
	styles: [
		'::ng-deep .p-menubar-mobile-active ul.p-menubar-root-list {width: 50%; left: inherit; right:0;}',
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
	private store = inject(Store)
	items: MenuItem[] | undefined

	ngOnInit() {
		this.items = [
			{
				label: 'Salon',
				icon: 'pi pi-objects-column',
			},
			{
				label: 'Logout',
				icon: 'pi pi-sign-out',
				command: () => this.store.dispatch(logout()),
			},
		]
	}
}
