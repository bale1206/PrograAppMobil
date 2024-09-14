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
  validar() {
    if (!this.username.user || this.username.user.length === 0) {
      console.log('Sin usuario');
      return;
    }

    if (!this.username.password || this.username.password.length === 0){
      console.log('Sin contraseña');
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
