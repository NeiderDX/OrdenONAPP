import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'; // Importar el servicio

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  mdl_user: string = '';
  mdl_name: string = '';
  mdl_pass: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  crearCuenta() {
    // Lógica para crear una cuenta
    this.userService.register({
      username: this.mdl_user,
      name: this.mdl_name,
      password: this.mdl_pass,
    });

    // Redirigir al login después de registrar
    this.router.navigate(['login']);
  }
}
