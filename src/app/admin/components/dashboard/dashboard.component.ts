import { Component } from '@angular/core';
import { AlertifyOptions, AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private alertify: AlertifyService) {}
  
  ngOnInit(): void{
  }

  message(){
    this.alertify.message("Success", {
      messageType: MessageType.Warning,
      position: Position.TopCenter,
      delay: 5,
      dismissOthers: false
    });
  }

  dismissAll(){
    this.alertify.dismissAll();
  }
}
