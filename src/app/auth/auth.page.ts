import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  authForm: FormGroup;
  isIniciarSesion: boolean = false;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private fb: FormBuilder
  ) {
    // Inicializa el formulario en el constructor
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  ngOnInit(): void { }


  loginAsCount() {
    this.isIniciarSesion = true;

  }
  onLogin() {
    if (this.authForm.valid) {
      const { username, password, rememberMe } = this.authForm.value;
      // Lógica de autenticación normal
      console.log('Username:', username);
      console.log('Password:', password);

      if (rememberMe) {
        localStorage.setItem('authToken', 'your-auth-token');
      }

      // Redirige al home
      this.navCtrl.navigateForward('/home');
    }
  }

  loginAsGuest() {
    // Configura el localStorage y redirige al home
    localStorage.setItem('esInvitado', 'true');
    this.navCtrl.navigateForward('/home');
  }
}
