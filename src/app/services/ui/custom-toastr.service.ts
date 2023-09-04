import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }

  message(message: string, title: string, toastrOptions: Partial<ToastrOptions>){
    this.toastr[toastrOptions.messageType](message,title, {positionClass: toastrOptions.position})
  }
}

export class ToastrOptions{
  messageType: ToastrMessageType = ToastrMessageType.Info;
  position: ToastrPosisiton = ToastrPosisiton.TopRight
}

export enum ToastrMessageType{
  Success = "success",
  Warning = "warning",
  Error = "error",
  Info = "info"
}

export enum ToastrPosisiton{
  TopRight = "toast-top-right",
  TopCenter = "toast-top-center",
  TopLeft = "toast-top-left",
  BottomRight = "toast-bottom-right",
  BottomCenter = "toast-bottom-center",
  BottomLeft = "toast-bottom-left",
  TopFullWidht = "toast-top-full-width",
  BottomFullWidht = "toast-bottom-full-width"
}