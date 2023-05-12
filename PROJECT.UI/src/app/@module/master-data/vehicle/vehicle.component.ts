import { Component, OnInit } from '@angular/core';
import { VehicleFilter } from 'src/app/@filter/MD/vehicle-filter.model';
import { T_MD_VEHICLE } from 'src/app/models/MD/T_MD_VEHICLE.model';
import { VehicleService } from 'src/app/services/MD/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html'
})
export class VehicleComponent implements OnInit {
  constructor(private _service: VehicleService) { }

  listVehicle: T_MD_VEHICLE[] = [];
  filter: VehicleFilter = {
    CurrentPage: 1,
    TotalPage: 0,
    ItemCount: 0,
    PageSize: 15,
    KeySearch: 'Empty',
    Data: []
  }
  ngOnInit(): void {
    this._service.getListVehicle(this.filter)
      .subscribe({
        next: (response) => {
          this.listVehicle = response.Data.Data;
          this.filter = response.Data;
        },
        error: (response) => { console.log(response) }
      });
  }
  searchVehicle(event: any) {
    this.filter.CurrentPage = 1;
    if (event.target.value) {
      this.filter.KeySearch = event.target.value;
    } else {
      this.filter.KeySearch = "Empty"
    }
    this._service.searchVehicle(this.filter)
      .subscribe({
        next: (response) => {
          this.listVehicle = response.Data.Data;
          this.filter = response.Data;
        },
        error: (response) => { console.log(response); }
      });
  }
  onChangePage(event: any) {
    this.filter.CurrentPage = event;
    this._service.searchVehicle(this.filter)
      .subscribe({
        next: (response) => {
          this.listVehicle = response.Data.Data;
          this.filter = response.Data;
        },
        error: (response) => { console.log(response); }
      });
  }

  updateVehicle(item : T_MD_VEHICLE){
    this._service.updateVehicle(item);
  }
}