import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { CvComponent } from './components/cv/cv.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { ProposComponent } from './components/propos/propos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  { path: '', component: ProposComponent },
  { path: 'propos', component: ProposComponent },
  
  { path: 'cv', component: CvComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'thanks', component:  ThanksComponent},
  
  { path: '**' , component: NotFoundComponent},
  { path: '', redirectTo: 'propos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
