import { Routes } from '@angular/router'
import { AuthGuard } from './core/guards/auth.guard'
import { LoginGuard } from './core/guards/login.guard'
import { LoginComponent } from '@src/app/components/login/login.component'
import { MainComponent } from '@src/app/components/main/main.component'

export const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		component: MainComponent,
	},
	{
		path: 'login',
		canActivate: [LoginGuard],
		component: LoginComponent,
	},
	{ path: '**', pathMatch: 'full', redirectTo: 'login' },
]
