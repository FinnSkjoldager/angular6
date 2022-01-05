import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { FlexGridComponent } from './flexgrid/flexgrid.component';

const appRoutes: Routes = [
    { path: '', component: FlexGridComponent },
    {path: 'users', component: AppComponent },
    { path: 'contact', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FlexGridComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
