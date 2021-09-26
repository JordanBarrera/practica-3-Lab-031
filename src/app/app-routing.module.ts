import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'altaClientes', component: AltaClienteComponent},
  {path:'listadoClientes',component: ListaClientesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
