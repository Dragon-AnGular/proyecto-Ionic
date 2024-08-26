import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,private navCtrl:NavController) {}

  canActivate(): boolean {
    const esInvitado = localStorage.getItem('esInvitado') === 'true';
    if (esInvitado || this.authService.isAuthenticated()) {
      this.navCtrl.navigateForward('/home');
      return false;
    } else {
      this.navCtrl.navigateForward('/login');
      return false;
    }
  }
}
