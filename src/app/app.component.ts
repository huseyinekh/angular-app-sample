import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  showSpinner() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1200);
  }
  title = 'angular-app-sample';
  ngOnInit() {
    this.showSuccess();
    this.showSpinner();
  }
}
