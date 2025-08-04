import {  Component, inject} from '@angular/core'
import { MenubarModule } from 'primeng/menubar'
import { MesasDisplayComponent } from '@src/app/components/mesas-display/mesas-display.component'
import { AppService } from '@src/app/core/services/app.service'

@Component({
	selector: 'main',
	imports: [MenubarModule, MesasDisplayComponent],
	templateUrl: './main.component.html',
	styles: [
		'::ng-deep .p-menubar-mobile-active ul.p-menubar-root-list {width: 50%; left: inherit; right:0;}',
	],

})
export class MainComponent{
	appService = inject(AppService)

}
