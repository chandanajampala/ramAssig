import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { ParaComponent } from './para/para.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import {MatButtonModule} from '@angular/material/button';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { NoSideBarComponent } from './no-side-bar/no-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ParaComponent,
    NavbarComponent,
    ListComponent,
    RightSideBarComponent,
    LeftSideBarComponent,
    NoSideBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
