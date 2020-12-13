import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RolestoreService } from '../rolestore.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;
  title = 'DynamicFormApp';
  roleType: string;

  constructor(private formBuilder: FormBuilder, public rolestoreService: RolestoreService) { }

  ngOnInit() {
      this.dynamicForm = this.formBuilder.group({
          numberOfPatients: ['', Validators.required]
      });
  }

  get f() { return this.dynamicForm.controls; }

  onChangePatients(e) {
      this.roleType = e.target.value;
  }

  onSubmit() {
    this.rolestoreService.roleTypeInfo = this.roleType;
  }

}
