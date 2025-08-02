import { Directive, ElementRef, inject, input, InputSignal, Renderer2 } from '@angular/core'
import { Router } from '@angular/router'

@Directive({
	selector: '[app-navigate]',
})
export class AppNavigateDirective {
	private el = inject(ElementRef)
	private renderer = inject(Renderer2)
	private router = inject(Router)

	readonly route: InputSignal<string> = input.required()

	constructor() {
		this.renderer.listen(this.el.nativeElement, 'click', () => {
			this.router.navigate([this.route()])
		})
	}
}
