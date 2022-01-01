import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { FlexgridComponent } from './flexgrid/flexgrid.component';
import { Flexgrid1Component } from './flexgrid1/flexgrid1.component';

const appRoutes: Routes = [
  //{ path: '', component: AppComponent },
  //{ path: 'selv', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FlexgridComponent,
    Flexgrid1Component
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    MatCardModule,
  ],
  providers: [],
  //bootstrap: [AppComponent]
  bootstrap: [FlexgridComponent]
})
export class AppModule { }
