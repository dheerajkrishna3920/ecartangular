import { Component } from '@angular/core';
import { DataService } from 'src/app/product/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


searchData:any


constructor(private ds:DataService){}

search(event:any){
  this.searchData=event.target.value


  //send the string data (stream) in to behaviour subject class
  this.ds.searchInput.next(this.searchData)
}

}
