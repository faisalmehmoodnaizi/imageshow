import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ImageDisplayComponent } from './image-display/image-display.component';

const routes: Routes = [
  { path: 'images', component: ImageDisplayComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    ImageDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
