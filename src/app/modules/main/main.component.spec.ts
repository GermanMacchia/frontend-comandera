import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MainComponent } from './main.component'

describe('MainComponent', () => {
	let fixture: ComponentFixture<MainComponent>
	let compiled: HTMLElement
	let component: MainComponent

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [MainComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(MainComponent)
		compiled = fixture.nativeElement as HTMLElement
		component = fixture.componentInstance

		// fixture.detectChanges()
	})

	it('should create component', () => {
		expect(component).toBeTruthy()
	})
})
