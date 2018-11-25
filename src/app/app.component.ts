import { Component } from '@angular/core';
import { DummyDataService } from './dummy-data.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  newData='';
  data = [];

  pushItem=function(){
    if(this.newData!=''){
      this.data.push(this.newData);
      this.newData= '';
    }
  }

  constructor(private dummy:DummyDataService){
    this.data=dummy.getData();
  }
}
