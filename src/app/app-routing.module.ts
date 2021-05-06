import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ObraComponent } from './modules/obra/obra.component';
import { CadastrarUsuarioComponent } from './modules/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './modules/usuario/listar-usuario/listar-usuario.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { UsuarioModule } from './modules/usuario/usuario.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'usuarios',
    children: [
      {
        path: '',
        component: UsuarioComponent,
      },
      {
        path: 'listar',
        component: ListarUsuarioComponent,
      },
      {
        path: 'cadastrar',
        component: CadastrarUsuarioComponent,
      },
    ],
  },
  { path: 'obras', component: ObraComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    UsuarioModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
