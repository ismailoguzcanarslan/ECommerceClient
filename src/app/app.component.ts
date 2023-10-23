import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosisiton } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';

  /**
   *
   */
  constructor(toastrService: CustomToastrService) {
    // toastrService.message("Oğuz","Arslan", { messageType: ToastrMessageType.Info, position: ToastrPosisiton.BottomCenter})
    // toastrService.message("Oğuz","Arslan", {messageType: ToastrMessageType.Success, position: ToastrPosisiton.BottomFullWidht} )
    // toastrService.message("Oğuz","Arslan", {messageType: ToastrMessageType.Warning, position: ToastrPosisiton.TopCenter})
    // toastrService.message("Oğuz","Arslan", {messageType: ToastrMessageType.Error, position: ToastrPosisiton.TopFullWidht})    
  }
}


/*
$(document).ready(()=>{
  alert("asd")
})
*/

/*
$.get("https://localhost:7105/api/products", data => {
  console.log(data);
})
*/
