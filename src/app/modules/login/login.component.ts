import {
	ChangeDetectionStrategy,
	Component,
	inject,
	OnInit,
	signal,
} from '@angular/core'

import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
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
import { map } from 'rxjs'

@UntilDestroy()
@Component({
	selector: 'login',
	standalone: true,
	imports: [
		CardModule,
		InputTextModule,
		KeyFilterModule,
		ReactiveFormsModule,
		PasswordModule,
		ButtonModule,
	],
	templateUrl: './login.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: ['::ng-deep .main{ margin: 15vh 0 }'],
	host: {
		class: 'flex align-center justify-center main',
	},
})
export class LoginComponent implements OnInit {
	private fb = inject(FormBuilder)
	private store: Store<AppState> = inject(Store)

	emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	formGroup: FormGroup
	loading = signal<boolean>(false)

	constructor() {
		this.formGroup = this.fb.group({
			email: [null, Validators.required],
			clave: [null, Validators.required],
		})
	}

	ngOnInit(): void {
		this.store
			.select('login')
			.pipe(
				map(ele => ele.loading),
				untilDestroyed(this),
			)
			.subscribe(this.loading.set)
	}

	login() {
		if (!this.formGroup.valid) return

		this.store.dispatch(login(this.formGroup.value))
	}
}
