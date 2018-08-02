import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatMensajesComponent } from './components/chat-mensajes/chat-mensajes.component';

const routes: Routes = [
  {path: '' , component: ChatMensajesComponent},
  { path: 'mensaje/:user', component: ChatMensajesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
