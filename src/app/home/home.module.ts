import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { InputPasswordComponent } from '../components/input-password/input-password.component';
import { InputUserComponent } from '../components/input-user/input-user.component';
import { BtnLoginComponent } from '../components/btn-login/btn-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    InputPasswordComponent,
    InputUserComponent,
    BtnLoginComponent,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
