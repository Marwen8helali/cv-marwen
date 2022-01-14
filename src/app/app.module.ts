import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProposComponent } from './components/propos/propos.component';
import { CvComponent } from './components/cv/cv.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { ThanksComponent } from './components/thanks/thanks.component';


@NgModule({
  declarations: [
    AppComponent,
    ProposComponent,
    CvComponent,
    ProjetsComponent,
    ContactComponent,
    NotFoundComponent,
    FooterComponent,
    ModalComponent,
    ThanksComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }