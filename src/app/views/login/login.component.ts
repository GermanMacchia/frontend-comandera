import {
	Component,
	inject,
	OnInit,
	signal
} from '@angular/core'

import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators
} from '@angular/forms'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext'
import { KeyFilterModule } from 'primeng/keyfilter'
import { PasswordModule } from 'primeng/password'

import { login } from '@actions'
import { AppState } from '@src/app/app.reducers'
import { loginLoading } from '@src/app/core/store/selectors'

@UntilDestroy()
@Component({
	selector: 'login',
	imports: [
		CardModule,
		InputTextModule,
		KeyFilterModule,
		ReactiveFormsModule,
		PasswordModule,
		ButtonModule
	],
	templateUrl: './login.component.html',
	host: {
		class: 'flex justify-center bg-dark-green h-screen'
	}
})
export class LoginComponent implements OnInit {
	private fb = inject(FormBuilder)
	private store$: Store<AppState> = inject(Store)

	emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	formGroup: FormGroup
	loading = signal<boolean>(false)

	constructor() {
		this.formGroup = this.fb.group({
			email: [null, Validators.required],
			clave: [null, Validators.required]
		})
	}

	ngOnInit(): void {
		this.store$
			.select(loginLoading)
			.pipe(
				untilDestroyed(this)
			)
			.subscribe(this.loading.set)
	}

	login() {
		if (!this.formGroup.valid) return

		this.store$.dispatch(login(this.formGroup.value))
	}
}
