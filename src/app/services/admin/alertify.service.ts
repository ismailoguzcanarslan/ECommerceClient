import { Injectable } from '@angular/core';
declare var alertify: any

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message: string, options: Partial<AlertifyOptions>){
    alertify.set('notifier','position', options.position)
    alertify.set('notifier','delay', options.delay)
    const msg = alertify[options.messageType](message);
    if(options.dismissOthers)
      msg.dismissOthers();
  }

  dismissAll(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions{
  messageType: MessageType = MessageType.Success;
  position: Position = Position.BottomRight;
  delay: number = 1;
  dismissOthers: boolean = false;
}

export enum MessageType{
  Success = "success",
  Error = "error",
  Message = "message",
  Warning = "warning",
  Notify = "notify"
}

export enum Position{
  TopRight = "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft= "bottom-left"
}