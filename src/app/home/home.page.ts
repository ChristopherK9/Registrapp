import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [MatFormFieldModule, MatInputModule, FormsModule]
})
export class HomePage {
  username: string = '';	
  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  rutaBienvenido(){
    console.log(this.username);
    
    this.router.navigate(['/bienvenido'])
    this.dataService.obtenerNombre(this.username);
  }  
}
