interface BaseDB {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  activo?: boolean;
}

export interface Roles extends BaseDB {
  nombre: string;
}

export interface Usuario extends BaseDB {
  nombre: string;
  apellido: string;
  email: string;
}

export interface Auth {
  acces_token: string;
  iat: number;
  exp: number;
  rol: string;
}
