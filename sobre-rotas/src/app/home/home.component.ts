import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authenticated?: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.checkAuth();
  }

  loadProduct(id: number) {
    // códigos
    this.router.navigate(['/produtos', id, 'editar'], {
      queryParams: { permiteEditar: '1' },
      fragment: 'carregando'
    });
  }

  login(): void {
    this.authService.login();
    this.checkAuth();
  }

  logout(): void {
    this.authService.logout();
    this.checkAuth();
  }

  checkAuth(): void {
    this.authService.isAutheticated()
      .then( authenticated => {
        this.authenticated = authenticated ? 'autenticado' : 'não autenticado';
      });
  }

}
