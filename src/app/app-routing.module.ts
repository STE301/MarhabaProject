import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { ReserverComponent } from './reserver/reserver.component';
import { ChercherVolComponent } from './chercher-vol/chercher-vol.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  /*{ path: '', component: PageAccueilComponent },*/
  { path: 'reserver', component: ReserverComponent },
  { path: 'chercherVol', component: ChercherVolComponent },
  { path: '', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
