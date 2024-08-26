import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  driverName: string = '';
  fechaTexto!: string;
  namePage: string = "Inicio"
  totalEntregas: number = 9
  nombreRepartidor: string = "Nicolas Antonio"
  constructor(private authService: AuthService, private router: Router, private navCtrl: NavController) {
    this.fechaTexto = this.obtenerFechaTexto();

  }
  obtenerFechaTexto() {
    let diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    let meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    let fecha = new Date();
    let diaSemana = diasSemana[fecha.getDay()];
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    return `${diaSemana} / ${mes} / ${año}`;
  }


  selectedTab: string = 'home'; // Seleccionar 'home' por defecto

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  get userName(): string | null {
    return this.authService.getUserName();
  }


  get isAuthenticated(): boolean {
    return this.authService.getIsAuthenticated();
  }

  
  navigateToLogin() {
    this.navCtrl.navigateForward('/login').then(() => {
      console.log('Navigated to login page');
      localStorage.removeItem('esInvitado');

    }).catch(error => {
      console.error('Error in navigation:', error);
    });
  }
  login() {
    // Elimina el item 'esInvitado' del localStorage si está presente
    if (localStorage.getItem('esInvitado')) {
      localStorage.removeItem('esInvitado');
    }

    // Navega a la página de login
    this.navCtrl.navigateForward('/login').then(() => {
      alert("Navegación completada y 'esInvitado' eliminado.");
    }).catch(error => {
      console.error('Error en la navegación:', error);
    });
  }
  redirectTo(route: string) {
    this.navCtrl.navigateForward(['/home', route]);
  }

  startNewRoute() {
    this.navCtrl.navigateForward('/new-route');
  }

  viewCompletedDeliveries() {
    this.navCtrl.navigateForward('/descripcionEntrega');
  }

  viewPendingDeliveries() {
    this.navCtrl.navigateForward('/pending-deliveries');
  }

  openSettings() {
    this.navCtrl.navigateForward('/settings');
  }



}
