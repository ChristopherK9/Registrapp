import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'btn-login',
  templateUrl: 'btn-login.component.html',
  styleUrl: 'btn-login.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class BtnLoginComponent {}
