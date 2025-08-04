import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LoginComponent } from './login.component'
import { provideMockStore } from '@ngrx/store/testing'
import { mockStore } from '@utils/test-utils'

describe('LoginComponent', () => {
	let fixture: ComponentFixture<LoginComponent>
	let component: LoginComponent
	let compiled: HTMLElement

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LoginComponent],
			providers: [
				provideMockStore(mockStore)
			]
		}).compileComponents()

		fixture = TestBed.createComponent(LoginComponent)
		compiled = fixture.nativeElement as HTMLElement
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('h1 should contain "Login"', () => {
		const h1 = compiled.querySelector('h1')
		expect(h1?.textContent).toContain('Login')
	})

	it('should have a form & regexp', () => {
		expect(component.formGroup).toBeTruthy()
		expect(component.emailRegExp).toEqual( /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
	})

	it('should have a button', () => {
		const btn = compiled.querySelector('[data-testid="btn-login"]')
		expect(btn).toBeTruthy()
		expect(btn?.textContent).toContain('Entrar')
	})


})
