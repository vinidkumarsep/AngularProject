import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  data=[
    {id:1,name:'VinidKumar'},
    {id:2,name:'Dayakar'},
    {id:3,name:'LaxmanKumar'}
  ];
  constructor() { }

  getData(){
    return this.data;
  }
}
