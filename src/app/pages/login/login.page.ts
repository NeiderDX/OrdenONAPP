import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from '../../services/user.service'; // Importar el servicio

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mdl_user: string = '';
  mdl_pass: string = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  navegar() {
    // Validar las credenciales
    if (this.userService.validate(this.mdl_user, this.mdl_pass)) {
      let extras: NavigationExtras = {
        replaceUrl: true,
        state: {
          usuario: this.mdl_user,
          contrasena: this.mdl_pass,
        },
      };
      this.router.navigate(['principal'], extras);
    } else {
      console.log("Credenciales Inválidas");
      alert("Credenciales Inválidas. Intenta de nuevo.");
    }
  }

  navegarRegistro() {
    this.router.navigate(['registro']);
  }
}
