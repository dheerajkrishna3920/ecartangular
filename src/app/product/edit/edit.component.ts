import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {



  pid: any
  pdata: any
  constructor(private ar: ActivatedRoute, private ds: DataService,private router:Router) { }
  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data.id
    })
    this.ds.viewProduct(this.pid).subscribe((result: any) => {
      this.pdata = result
      console.log(this.pdata);

    })
  }

  updateData(){
    this.ds.updateProduct(this.pid,this.pdata).subscribe((result:any)=>{
      alert("data updated")
      this.router.navigateByUrl("product/view/"+this.pid)
    })
  }
}
