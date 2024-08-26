import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.view.html',
  styleUrls: ['./inicio.view.scss'],
})
export class InicioView {
  driverName: string = '';
  fechaTexto!: string;
  namePage: string = "Inicio"
  totalEntregas: number = 9
  nombreRepartidor: string = "Nicolas Antonio"
  constructor(private authService: AuthService, private navCtrl: NavController) {
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
  
  redirectTo(route: string) {
    this.navCtrl.navigateForward(['/home', route]);
  }


}
