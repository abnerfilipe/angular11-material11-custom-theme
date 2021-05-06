import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: [
    UsuarioComponent,
    ListarUsuarioComponent,
    CadastrarUsuarioComponent,
  ],
  exports: [
    UsuarioComponent,
    ListarUsuarioComponent,
    CadastrarUsuarioComponent,
  ]
})
export class UsuarioModule { }
