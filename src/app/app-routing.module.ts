import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CvComponent } from './components/cv/cv.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { ProposComponent } from './components/propos/propos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  { path: 'propos', component: ProposComponent },
  { path: 'cv', component: CvComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'contact', component: ContactComponent },

  { path: '**' , component: NotFoundComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
