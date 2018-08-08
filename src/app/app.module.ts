import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InfoComponent } from './components/info/info.component';
import { ChatMensajesComponent } from './components/chat-mensajes/chat-mensajes.component';
import { FiltroUsuariosPipe } from './pipes/filtro-usuarios.pipe';
import { StatusDirective } from './directives/status.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserpiperPipe } from './pipes/userpiper.pipe';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MensajesComponent,
    UsuariosComponent,
    InfoComponent,
    ChatMensajesComponent,
    FiltroUsuariosPipe,
    StatusDirective,
    NavbarComponent,
    UserpiperPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
