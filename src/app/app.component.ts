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
  isEdit=false;

  pushItem=function(){
    if(this.newData!=''){
      var newItem={name:this.newData,editible:false};
      this.data.push(newItem);
      this.newData= '';

    }
  }

  deleteItem=(indexValue) =>{
    console.log(indexValue);
    this.data.splice(indexValue);
    console.log(this.data.length);
  }

  editItem =(indexValue)=>{
    console.log('Inside editValue');
    this.data[indexValue].editible=true;

  }


  afterEdit=(indexValue) =>{
console.log('after blur');
this.data[indexValue].editible=false;
  }

  constructor(private dummy:DummyDataService){
    this.data=dummy.getData();
  }
}
