import { Injectable } from '@angular/core';
  
import { ToastrService } from 'ngx-toastr';
  
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private toastr: ToastrService) { }
  
  notifySuccess(message: string | undefined, title: string | undefined){
    this.toastr.success(message, title,{positionClass: 'toast-bottom-left'})
  }
  
  notifyError(message: string | undefined, title: string | undefined){
    this.toastr.error(message, title,{positionClass: 'toast-bottom-left'})
  }
  
  notifyInfo(message: string | undefined, title: string | undefined){
    this.toastr.info(message, title)
  }
  
  notifyWarning(message: string | undefined, title: string | undefined){
    this.toastr.warning(message, title)
  }
  
}