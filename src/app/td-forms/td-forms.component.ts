import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.css']
})
export class TdFormsComponent implements OnInit {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  submitted: Boolean = false;
  user = {
    email: '',
    subscription: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.email = form.value.email;
    this.user.subscription = form.value.subscription;
    this.user.password = form.value.password;
  }

}
