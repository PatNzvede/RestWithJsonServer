import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantModule } from './restaurant.module';

@Component({
  selector: 'app-restaurant-dashoboard',
  templateUrl: './restaurant-dashoboard.component.html',
  styleUrls: ['./restaurant-dashoboard.component.scss']
})
export class RestaurantDashoboardComponent implements OnInit {
 formValue !: FormGroup;
 restaurantModuleObj :RestaurantModule = new RestaurantModule();
  allRestaurantData: any;
  showAdd! : boolean;
  showbtn!: boolean;
  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name:   [''],
      email:   [''],
      address:   [''],
      mobile:   [''],
      service:   [''],
    })
    this. getAllData();
  }
  clickAddResto() {
    this.formValue.reset();
    this.showAdd = true;
    this.showbtn = false;
  }
    addNewRecord() {
      this.restaurantModuleObj.name =  this.formValue.value.name;
      this.restaurantModuleObj.service = this.formValue.value.service;
      this.restaurantModuleObj.address = this.formValue.value.service;
      this.restaurantModuleObj.mobile = this.formValue.value.mobile;
      this.restaurantModuleObj.email = this.formValue.value.email;
      this.api.postRestaurantData(this.restaurantModuleObj).subscribe(res=>{        
        console.log(res);
       alert ("Record added succesfully ");
       let ref= document.getElementById('clear');
       ref?.click();

       this.formValue.reset();
      }, err =>{alert("something went wrong")})
    }
    getAllData() {
      return this.api.getRestaurant().subscribe(res=>{
        this.allRestaurantData =res;
        console.log(res);
      })
    }

    deleteRecord(id:number) {
      return this.api.deleteRestaurant(id).subscribe(res=> {
        console.log("In ts file res is ")
        console.log(res); 
        alert("Record deleted successfully!!")
        this.getAllData();
      }, err => {alert("Delete record failed");
    })
    }

    onEditRecord(data:any){
      this.showAdd = false;
      this.showbtn = true;
      this.restaurantModuleObj.id = data.id;
       this.formValue.controls['name'].setValue(data.name);
       this.formValue.controls['email'].setValue(data.email);
       this.formValue.controls['mobile'].setValue(data.mobile);
       this.formValue.controls['address'].setValue(data.address);
       this.formValue.controls['service'].setValue(data.service);
    }
    updateRecord() {
      this.restaurantModuleObj.name =  this.formValue.value.name;
      this.restaurantModuleObj.service = this.formValue.value.service;
      this.restaurantModuleObj.address = this.formValue.value.address;
      this.restaurantModuleObj.mobile = this.formValue.value.mobile;
      this.restaurantModuleObj.email = this.formValue.value.email;

      this.api.updateRestaurant(this.restaurantModuleObj, this.restaurantModuleObj.id).subscribe(res=> {
        alert("Record updated successfully")
        let ref= document.getElementById('clear');
       ref?.click();

       this.formValue.reset();
       this.getAllData();
      })
    }
  }


