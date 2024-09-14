import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  username: string | undefined;
  constructor(private router: Router) { }
  ngOnInit() {

  const navigation = this.router.getCurrentNavigation();
  const state = navigation?.extras?.state;

  if (state) {
    this.username = state['username'];
  }
}
}
