import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
@Component({
  selector: 'app-rentaldummy',
  templateUrl: './rentaldummy.component.html',
  styleUrls: ['./rentaldummy.component.css']
})
export class RentaldummyComponent implements OnInit {
  @ViewChild('qrcodeInput') qrcodeInput: ElementRef;
  @ViewChild('barcodeInput') barcodeInput: ElementRef;

  public webSocket: WebSocket;
  public state: 'ReadQRCode' | 'ReadBarcode' | 'ShowProposal' | 'confirmProposal';
  public waiting: boolean;
  public purpose: string;

  constructor() { }

  ngOnInit() {
    this.state = 'ReadQRCode';
  }

  private onChangeQRCodeInput(uploadEvent: any) {
    this.waiting = true;
    setTimeout(() => {
      this.waiting = false;
      this.state = 'ReadBarcode';
    }, 1500);
  }

  private onChangeBarcodeInput(uploadEvent: any) {
    this.waiting = true;
    setTimeout(() => {
      this.waiting = false;
      this.state = 'ShowProposal';
    }, 3000);
  }

  private confirmProposal(event: any) {
    this.waiting = true;
    setTimeout(() => {
      this.waiting = false;
      this.state = 'confirmProposal';
    }, 4000);
  }

  private propagateToQrCodeInput(event: any) {
    this.qrcodeInput.nativeElement.click();
  }

  private propagateToBarcodeInput(event: any) {
    this.barcodeInput.nativeElement.click();
  }

  private cancelOnQrCode(event: any) {
  }

  private cancelOnBarcode(event: any) {
    this.waiting = true;
    setTimeout(() => {
      this.waiting = false;
      this.state = 'ReadQRCode';
    }, 1500);
  }

  private cancelOnProposal(event: any) {
    this.waiting = true;
    setTimeout(() => {
      this.waiting = false;
      this.state = 'ReadBarcode';
    }, 1500);
  }


}
