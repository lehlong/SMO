import { Component, OnInit } from '@angular/core';
import { VendorFilter } from 'src/app/@filter/MD/vendor-filter.model';
import { T_MD_VENDOR } from 'src/app/models/MD/T_MD_VENDOR.model';
import { VendorService } from 'src/app/services/MD/vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html'
})
export class VendorComponent implements OnInit {
  constructor(private _service: VendorService) { }

  listVendor: T_MD_VENDOR[] = [];
  filter: VendorFilter = {
    CurrentPage: 1,
    TotalPage: 0,
    ItemCount: 0,
    PageSize: 15,
    IsLoading: true,
    KeySearch: 'Empty',
    Data: []
  }
  ngOnInit(): void {
    this._service.searchVendor(this.filter)
      .subscribe({
        next: (response) => {
          this.listVendor = response.Data.Data;
          this.filter = response.Data;
        },
        error: (response) => { console.log(response) }
      });
  }
  searchVendor(event: any) {
    this.filter.CurrentPage = 1;
    if (event.target.value) {
      this.filter.KeySearch = event.target.value;
    } else {
      this.filter.KeySearch = "Empty"
    }
    this._service.searchVendor(this.filter)
      .subscribe({
        next: (response) => {
          this.listVendor = response.Data.Data;
          this.filter = response.Data;
        },
        error: (response) => { console.log(response); }
      });
  }
  onChangePage(event: any) {
    this.filter.CurrentPage = event;
    this._service.searchVendor(this.filter)
      .subscribe({
        next: (response) => {
          this.listVendor = response.Data.Data;
          this.filter = response.Data;
        },
        error: (response) => { console.log(response); }
      });
  }

  updateVendor(item : T_MD_VENDOR){
    this._service.updateVendor(item);
  }
}
