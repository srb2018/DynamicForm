import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RolestoreService } from '../rolestore.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;
  title = 'DynamicFormApp';
  roleType : string;
  roleNumber : number;

  constructor(private formBuilder: FormBuilder, public rolestoreService: RolestoreService) { }

  ngOnInit() {
    this.roleType = this.rolestoreService.roleTypeInfo;
    switch(this.roleType){
      case 'Admin':
        this.roleNumber = 5;
        break;
      case 'Company':
        this.roleNumber = 3;
        break;
      case 'Employee':
        this.roleNumber = 2;
        break;
    }
    this.dynamicForm = this.formBuilder.group({
        patients: new FormArray([])
    });
    for (let i = this.t.length; i < this.roleNumber; i++) {
      this.t.push(this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }));
    }
}

// convenience getters for easy access to form fields
get f() { return this.dynamicForm.controls; }
get t() { return this.f.patients as FormArray; }

onChangePatients(e) {
    this.rolestoreService.roleTypeInfo = e.target.value;
    const numberOfPatients = e.target.value || 0;
    
}

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
}

onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.dynamicForm.reset();
    this.t.clear();
}

onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
    this.t.reset();
}

}
