import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolestoreService {

  private roleType: string;

  constructor() { }

  get roleTypeInfo() {
    return this.roleType;
  }

  set roleTypeInfo(roleType: string) {
    this.roleType = roleType;
  }
}
