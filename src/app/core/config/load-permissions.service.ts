/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, Injectable } from '@angular/core';
import { RolesUsuarios } from '@enums';
import { NgxPermissionsService } from 'ngx-permissions';
import { ACCESS_VALUES } from '@src/app/core/services/auth.service'

@Injectable({ providedIn: 'root' })
export class LoadPermissionsService {
    public loadPermissions() {
        const stored = sessionStorage.getItem(ACCESS_VALUES);
        const permisos = stored
            ? JSON.parse(stored)
            : { usuario: { rol: RolesUsuarios.CAMARERO } };
        return new Promise((res) => res(permisos.usuario.rol));
    }
}

export function initializePermissions() {
    const loadPermissionsService = inject(LoadPermissionsService);
    const ngxPermissionsService = inject(NgxPermissionsService);

    return loadPermissionsService.loadPermissions().then((permissions: any) => {
        return ngxPermissionsService.addPermission(permissions);
    });
}
