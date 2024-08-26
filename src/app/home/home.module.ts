import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { DescripcionEntregaComponent } from './Views/descripcion-entrega/descripcion-entrega.component';
import { HomePageRoutingModule } from './home-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa FontAwesomeModule
import { NotificacionesView } from './Views/notificaciones/notificaciones.view';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,FontAwesomeModule  
  ],
  declarations: [HomePage,DescripcionEntregaComponent,NotificacionesView]
})
export class HomePageModule {}
