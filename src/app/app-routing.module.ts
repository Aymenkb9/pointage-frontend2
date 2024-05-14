import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjouterPointageComponent } from './ajouter-pointage/ajouter-pointage.component';
import { EscalesListComponent } from './escales-list/escales-list.component';
import { PointageDetailsComponent } from './pointage-details/pointage-details.component';
import { AjouterEscalesComponent } from './ajouter-escales/ajouter-escales.component';
import { AjouterReserveComponent } from './ajouter-reserve/ajouter-reserve.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
  { path: 'ajouter-pointage', component: AjouterPointageComponent, data: { breadcrumb: 'Ajouter Pointage' } },
  { path: 'escales-list', component: EscalesListComponent, data: { breadcrumb: 'Liste des Escales' } },
  { path: 'pointage-details/:id', component: PointageDetailsComponent, data: { breadcrumb: 'Détails du Pointage' } }, // Updated path
  { path : 'ajouter-escales', component : AjouterEscalesComponent, data: { breadcrumb: 'Ajouter Escales' } },
  { path : 'ajouter-reserve', component : AjouterReserveComponent, data: { breadcrumb: 'Ajouter Réserve' } },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
