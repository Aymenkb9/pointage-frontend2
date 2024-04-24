import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjouterPointageComponent } from './ajouter-pointage/ajouter-pointage.component';
import { AjouterEscalesComponent } from './ajouter-escales/ajouter-escales.component';
import { EscalesListComponent } from './escales-list/escales-list.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PointageDetailsComponent } from './pointage-details/pointage-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator"
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { AjouterReserveComponent } from './ajouter-reserve/ajouter-reserve.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AjouterPointageComponent,
    AjouterEscalesComponent,
    EscalesListComponent,
    MenubarComponent,
    PointageDetailsComponent,
    AjouterReserveComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginator,
    MatPaginatorModule,
    MatSidenavModule ,
     MatIconModule , 
    MatDividerModule , 
     MatListModule ,
      MatToolbarModule , 
      RouterOutlet , 
      MatMenuModule, 
      MatBadgeModule , 
      HttpClientModule, 
      FormsModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
