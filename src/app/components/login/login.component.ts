import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    }
    )
  }

  ngOnInit(): void {
  }

  ingresar(){

    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'respinoza' && password == 'ramiro'){
      // Redireccionamos al dashboard

    } else {
      // Mostramos un mensaje error; 
      this.error();
    }
  }

  error(){
    this._snackBar.open('Usuario o contraseña ingresado son inválidos', '',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
}
