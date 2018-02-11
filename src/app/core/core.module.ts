import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [Title]
})
export class CoreModule { }
