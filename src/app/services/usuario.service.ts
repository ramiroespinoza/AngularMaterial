import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  listUsuarios: Usuario[] = [
    { usuario: "respinoza", nombre: 'Ramiro', apellido: "Espinoza", sexo:'Masculino'},
    { usuario: "wflores", nombre: 'Wilton', apellido: "Flores", sexo:'Masculino'},
    { usuario: "nlopez", nombre: 'Nicolas', apellido: "Lopez", sexo:'Masculino'},
    { usuario: "fsanchez", nombre: 'Fernando', apellido: "Sanchez", sexo:'Masculino'},
    { usuario: "snoriega", nombre: 'Sara', apellido: "Noriega", sexo:'Femenino'},
    { usuario: "asanchez", nombre: 'Andrea', apellido: "Sanchez", sexo:'Femenino'},
  ];
  
  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }
}
