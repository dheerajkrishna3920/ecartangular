import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {



  productObject: any

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) { }


  addNewForm = this.fb.group({

    id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pn: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    cid: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    dn: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    pe: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    ay: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    pi: ['',],
    rg: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    rw: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    ve: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    wy: ['', [Validators.required, Validators.pattern('[0-9]+')]],
  })




  ngOnInit(): void {


  }

  add() {


    const newData = {
      id: this.addNewForm.value.id,
      productName: this.addNewForm.value.pn,
      categoryId: this.addNewForm.value.cid,
      description: this.addNewForm.value.dn,
      price: this.addNewForm.value.pe,
      availabaility: this.addNewForm.value.ay,
      productImage: this.addNewForm.value.pi,
      rating: this.addNewForm.value.rg,
      review: this.addNewForm.value.rw,
      vendorName: this.addNewForm.value.ve,
      warranty: this.addNewForm.value.wy
    }

    if (this.addNewForm.valid) {
      this.ds.addNewProduct(newData).subscribe((result: any) => {
        alert("new product added")
        this.router.navigateByUrl('product')
      })
    }
    else {
      alert("invalid data")
      this.router.navigateByUrl('product')
    }

  }




}
