export interface menuOpts {
  icon:       string;
  name:       string;
  redirectTo: string;
}

export interface Categorias {
  id:        number;
  nombre:    string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comercios {
  id:          number;
  nombre:      string;
  direccion:   string;
  telefono:    number;
  email:       string;
  password:    string;
  cif:         string;
  categoria:   string;
  descripcion: string;
  createdAt:   Date;
  updatedAt:   Date;
}