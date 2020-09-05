import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-r-forms',
  templateUrl: './r-forms.component.html',
  styleUrls: ['./r-forms.component.css']
})
export class RFormsComponent implements OnInit {
  projectForm: FormGroup;
  statuses: string[] = ['Stable', 'Critical', 'Finished'];
  submitted: Boolean = false;
  formData: {project: string, email: string, projStatus: string};
  invalidNames: string[] = ['Test', 'test'];

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'project': new FormControl(null, [Validators.required, this.invalidProjectNames.bind(this)], this.asyncInvalidProjectNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projStatus': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.formData = this.projectForm.value;
    console.log(this.formData);
    this.submitted = true;
    this.projectForm.reset();
  }

  invalidProjectNames(control: FormControl): {[s: string]: boolean} {
    if (this.invalidNames.indexOf(control.value) !== -1) {
      return {'invalidName': true};
    }
    return null;
  }

  asyncInvalidProjectNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'TestProject') {
          resolve({'invalidName': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
