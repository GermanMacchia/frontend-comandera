import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MainComponent } from './main.component'
import { provideMockStore} from '@ngrx/store/testing';
import {mockStore} from '@utils/test-utils';

describe('MainComponent', () => {
	let fixture: ComponentFixture<MainComponent>
	let compiled: HTMLElement
	let component: MainComponent

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [MainComponent],
			providers:[
				provideMockStore(mockStore)
			]
		}).compileComponents()

		fixture = TestBed.createComponent(MainComponent)
		compiled = fixture.nativeElement as HTMLElement
		component = fixture.componentInstance

		fixture.detectChanges()
	})

	it('should create component', () => {
		expect(component).toBeTruthy()
	})
})
