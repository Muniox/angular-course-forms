import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild(NgForm, { static: true }) signupForm: NgForm;
  @ViewChild('f', { static: true }) signupForm: NgForm; //static tylko wtedy jak nie ma structural directive np. ngIf
  defaultQuestion = 'pet';
  answer: string = ''

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  onSubmit() {
    console.log(this.signupForm)
  }
}
