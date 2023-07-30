import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {


  id:any
  constructor(private ds:DataService, private ar:ActivatedRoute,private rout:Router){}



  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.id=data['id']
      console.log(this.id);
      this.ds.deleteProduct(this.id).subscribe((result:any)=>{
        alert("product deleted")
        this.rout.navigateByUrl("")
      })
      
    })
  }
}
