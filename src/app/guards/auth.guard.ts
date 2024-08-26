import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private navCtrl: NavController) {}

  canActivate(): boolean {
    const esInvitado = localStorage.getItem('esInvitado') === 'true';

    if (esInvitado) {
      // Si es invitado, permite el acceso a la página de inicio
      return true;
    } else if (this.authService.isAuthenticated()) {
      // Si está autenticado, permite el acceso
      return true;
    } else {
      // Si no es invitado ni está autenticado, redirige al login
      this.navCtrl.navigateForward('/login');
      return false;
    }
  }
}
