import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { ChatMensajesComponent } from './components/chat-mensajes/chat-mensajes.component';

const routes: Routes = [
  // { path: 'mensaje/:user/:id', component: MensajesComponent }
  { path: 'mensaje', component: MensajesComponent},
  { path: 'mensaje/:user/:id', component: MensajesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
