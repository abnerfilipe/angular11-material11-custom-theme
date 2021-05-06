import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObraComponent } from './obra.component';
import { UsuarioModule } from '../usuario/usuario.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ObraComponent]
})
export class ObraModule { }
