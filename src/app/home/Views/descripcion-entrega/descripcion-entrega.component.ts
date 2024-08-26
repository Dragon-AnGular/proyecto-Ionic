import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-descripcion-entrega',
  templateUrl: './descripcion-entrega.component.html',
  styleUrls: ['./descripcion-entrega.component.scss', '../../GlobalStyles/toast.scss']
})

export class DescripcionEntregaComponent {

  constructor(private navCtrl: NavController,

    private toastController: ToastController

  ) { }
  mensajes = [
    {
      nombre: 'Juan Perez',
      colonia: 'Centro',
      municipio: 'Ciudad',
      cantidadPidio: 5,
      fecha: new Date('2023-08-15'),
      cantidadSolicitado: 5,
      cantidadEntregado: 3,
      estado: 'pendiente'
    },
    {
      nombre: 'Maria Lopez',
      colonia: 'Norte',
      municipio: 'Ciudad',
      cantidadPidio: 10,
      fecha: new Date('2023-08-10'),
      cantidadSolicitado: 10,
      cantidadEntregado: 10,
      estado: 'entregado'
    }
  ];

  setRoleMessage(ev: any) {
    const { role } = ev.detail;
    console.log(`Dismissed with role: ${role}`);
  }

  public toastButtons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        console.log('More Info clicked');
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }


  ubicar() {
    console.log('Ubicar mensaje:');
  }
  redirectTo() {
    this.navCtrl.navigateForward('/home');
  }


}
