import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  data=[];
  constructor() { }

  getData(){
    return this.data;
  }
}
