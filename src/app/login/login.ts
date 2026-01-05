import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ServicioLogin } from '../servicio-login';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private servicelogin: ServicioLogin){

  }

  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.servicelogin.login(email,password); //Invocacion al metodo login del servicio.
  }
}
