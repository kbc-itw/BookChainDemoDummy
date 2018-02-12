import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { RentaldummyComponent } from './rentaldummy/rentaldummy.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
const routes: Routes = [
  {
    path: '',
    component: RentaldummyComponent
  },
  {
    path: 'qrcode',
    component: QrcodeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RentaldummyComponent,
    QrcodeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
