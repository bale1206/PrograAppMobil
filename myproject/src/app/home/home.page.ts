import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  username: {
    user: string,
    password: string
  };
  burbuja = false;
  cambiarSpin(){
    this.burbuja = !this.burbuja
  }
  constructor(private router: Router) { 
    this.username = {
      user: '',
      password: ''
    }
  }
  async validar() {
    const usuario = this.username.user;
    const contrasena = this.username.password;
  
    if (!usuario || usuario.trim().length === 0) {
      console.log('Usuario no ingresado');
      return;
    }
  
    if (!contrasena || contrasena.trim().length === 0) {
      console.log('Contraseña no ingresada');
      return;
    }
  

    console.log('');
    console.log('Datos ingresados');

    let navigationExtras: NavigationExtras = {
      state: {
        user: this.username.user,
        pass: this.username.password
      }
    };
    this.cambiarSpin();

    setTimeout(() => {
      this.router.navigate(['/perfil'], navigationExtras);
      this.cambiarSpin();
    }, 3500);
  }


}
