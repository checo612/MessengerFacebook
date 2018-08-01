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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
