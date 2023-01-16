import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[] = [
    { usuario: "respinoza", nombre: 'Ramiro', apellido: "Espinoza", sexo:'Masculino'},
    { usuario: "wmeneses", nombre: 'Wilton', apellido: "Meneses", sexo:'Masculino'},
    { usuario: "nlopez", nombre: 'Nicolas', apellido: "Lopez", sexo:'Masculino'},
    { usuario: "fsaldaña", nombre: 'Fernando', apellido: "Saldaña", sexo:'Masculino'},
    { usuario: "snoriega", nombre: 'Sara', apellido: "Noriega", sexo:'Femenino'},
    { usuario: "asanchez", nombre: 'Andrea', apellido: "Sanchez", sexo:'Femenino'},
  ]

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
