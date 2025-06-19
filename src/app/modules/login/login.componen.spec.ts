import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
	let fixture: ComponentFixture<LoginComponent>
	let compiled: HTMLElement
	let component: LoginComponent

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [LoginComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(LoginComponent)
		compiled = fixture.nativeElement as HTMLElement
		component = fixture.componentInstance

		// fixture.detectChanges()
	})

	it('should create component', () => {
		expect(component).toBeTruthy()
	})
})
