import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

   getData()
  {
    var data = [{"name":"fernando"},
    {"name":"fernando"},
    {"name":"fernando"},
    {"name":"fernando"}];
    return data;
  };
}
