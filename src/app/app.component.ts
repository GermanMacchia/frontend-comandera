import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AppNavigateDirective } from '@src/app/core/directives/app-navigate.directive'

@Component({
	selector: 'app-root',
	imports: [RouterOutlet],
	providers: [AppNavigateDirective],
	template: '<router-outlet />',
})
export class AppComponent {}
