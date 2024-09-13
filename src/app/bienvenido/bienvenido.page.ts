import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {
  username: string = '';
  constructor(
    private router: Router,
    private dataService: DataService
) { }

  ngOnInit() {
    this.username = this.dataService.asignarNombre();
  }

}
