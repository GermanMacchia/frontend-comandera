import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MesasDisplayComponent } from './mesas-display.component'

describe('MesasDisplayComponent', () => {
	let fixture: ComponentFixture<MesasDisplayComponent>
	let compiled: HTMLElement
	let component: MesasDisplayComponent

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [MesasDisplayComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(MesasDisplayComponent)
		compiled = fixture.nativeElement as HTMLElement
		component = fixture.componentInstance

		// fixture.detectChanges()
	})

	it('should create component', () => {
		expect(component).toBeTruthy()
	})
})
