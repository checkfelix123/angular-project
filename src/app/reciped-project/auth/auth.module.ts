import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AuthComponent} from './auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    SharedModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {

}
