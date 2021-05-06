import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
}
