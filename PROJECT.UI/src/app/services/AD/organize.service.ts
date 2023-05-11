import { Injectable } from '@angular/core';
import { CommonService } from '../Common/common.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizeService {
  constructor(private _commonService : CommonService) { }
 
  buildTreeOrganize() {
    return this._commonService.getRequest('/api/Organize/BuildTree')
  }
  getDetailOrganize(pkid: string) {
    return this._commonService.getRequest(`/api/Organize/GetDetail?pkid=${pkid}`)
  }
  updateOrganize(request : any){
    return this._commonService.putRequestWithoutLoading('/api/Organize/Update', request)
  }
  createOrganize(request : any){
    return this._commonService.postRequest('/api/Organize/Create', request)
  }

  updateOrder(request : any){
    return this._commonService.putRequest('/api/Organize/UpdateOrder', request)
  }
}