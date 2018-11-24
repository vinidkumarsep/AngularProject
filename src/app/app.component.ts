import { Component } from '@angular/core';
import { DummyDataService } from './dummy-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  data = [];
  constructor(private dummy:DummyDataService){
    this.data=dummy.getData();
  }
}
