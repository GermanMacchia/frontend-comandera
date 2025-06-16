import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import {
	APP_INITIALIZER,
	ApplicationConfig,
	importProvidersFrom,
} from '@angular/core'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideRouter, withInMemoryScrolling } from '@angular/router'

// ngrx
import { provideEffects } from '@ngrx/effects'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'

//primeng
import Aura from '@primeng/themes/aura'
import { providePrimeNG } from 'primeng/config'

//ngx-permissions
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions'

import { appReducers } from './app.reducers'
import { routes } from './app.routes'
import {
	AppConfigService,
	initializeApp,
} from './core/config/app-config.service'
import {
	LoadPermissionsService,
	permissionsFactory,
} from './core/config/load-permissions.service'
import { effectsArray } from './core/store/effects'

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withInterceptorsFromDi()),
		LoadPermissionsService,
		NgxPermissionsService,
		{
			provide: APP_INITIALIZER,
			useFactory: initializeApp,
			deps: [AppConfigService],
			multi: true,
		},
		{
			provide: APP_INITIALIZER,
			useFactory: permissionsFactory,
			deps: [LoadPermissionsService, NgxPermissionsService],
			multi: true,
		},
		importProvidersFrom(NgxPermissionsModule.forRoot()),
		provideAnimationsAsync(),
		provideStore(appReducers),
		provideEffects(effectsArray),
		provideStoreDevtools({
			maxAge: 25,
			logOnly: false,
		}),
		providePrimeNG({
			theme: {
				preset: Aura,
				options: {
					darkModeSelector: '.dark',
				},
			},
		}),
		provideRouter(
			routes,
			withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
		),
	],
}
