import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.view.html',
  styleUrls: ['./notificaciones.view.scss'],
})
export class NotificacionesView  implements OnInit {
  isLoading = true;
  constructor() { }

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  } 
   mensajes = [
    {
      tipo: 'anulada',
      fecha: new Date('2024-08-24T09:00:00'),
      rutaId: 'RUTA123',
      vehiculo: 'Camión A1',
      horaNotificacion: new Date('2024-08-24T08:45:00'),
      cantidadClientes: 15,
      colonias: ['Colonia 1', 'Colonia 2', 'Colonia 3'],
      fechaRecibido: new Date('2024-08-24T11:00:00'),
      fechaTermino: new Date('2024-08-24T13:00:00')
    },
    {
      tipo: 'recibida',
      fecha: new Date('2024-08-23T09:00:00'),
      rutaId: 'RUTA124',
      vehiculo: 'Camión B2',
      horaNotificacion: new Date('2024-08-23T08:30:00'),
      cantidadClientes: 20,
      colonias: ['Colonia 4', 'Colonia 5', 'Colonia 6'],
      fechaRecibido: new Date('2024-08-23T10:00:00'),
      fechaTermino: new Date('2024-08-23T12:30:00')
    },
    {
      tipo: 'enviada',
      fecha: new Date('2024-08-22T09:00:00'),
      rutaId: 'RUTA125',
      vehiculo: 'Camión C3',
      horaNotificacion: new Date('2024-08-22T08:15:00'),
      cantidadClientes: 18,
      colonias: ['Colonia 7', 'Colonia 8'],
      fechaRecibido: new Date('2024-08-22T11:30:00'),
      fechaTermino: new Date('2024-08-22T14:00:00')
    }, {
      tipo: 'finalizada',
      fecha: new Date('2024-08-21T09:00:00'),
      rutaId: 'RUTA126',
      vehiculo: 'Camión D4',
      horaNotificacion: new Date('2024-08-21T08:00:00'),
      cantidadClientes: 12,
      colonias: ['Colonia 9', 'Colonia 10'],
      fechaRecibido: new Date('2024-08-21T10:30:00'),
      fechaTermino: new Date('2024-08-21T13:00:00')
    }
  ];

  verDetalles(mensaje: any) {
    // Lógica para mostrar detalles adicionales
    console.log('Detalles del mensaje:', mensaje);
  }

}
