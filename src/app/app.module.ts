import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { RentaldummyComponent } from './rentaldummy/rentaldummy.component';
const routes: Routes = [
  {
    path: '',
    component: RentaldummyComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    RentaldummyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
