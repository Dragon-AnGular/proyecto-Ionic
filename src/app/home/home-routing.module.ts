import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DescripcionEntregaComponent } from './Views/descripcion-entrega/descripcion-entrega.component';
import { NotificacionesView } from './Views/notificaciones/notificaciones.view';
import { InicioView } from './Views/inicio/inicio.view';
import { PerfilView } from './Views/perfil/perfil.view';
import { MapPage } from './Views/map/map.page';

const routes: Routes = [




  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: '',
        component: InicioView,
      },
      {
        path: 'descripcionEntrega',
        component: DescripcionEntregaComponent,
      },
      {
        path: 'notificaciones',
        component: NotificacionesView,
      },
      {
        path: 'perfil',
        component: PerfilView,
      },
      {
        path: 'ruta',
        component: MapPage,
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
