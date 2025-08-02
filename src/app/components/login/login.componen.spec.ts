import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LoginComponent } from './login.component'
import { provideMockStore} from '@ngrx/store/testing';
import {mockStore} from '@utils/test-utils';

describe('LoginComponent', () => {
	let fixture: ComponentFixture<LoginComponent>
	let component: LoginComponent
	let compiled: HTMLElement

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LoginComponent],
			providers:[
				provideMockStore(mockStore)
			]
		}).compileComponents()

		fixture = TestBed.createComponent(LoginComponent)
		compiled = fixture.nativeElement as HTMLElement
		component = fixture.componentInstance;
		fixture.detectChanges();
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
