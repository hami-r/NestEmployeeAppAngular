import { Component } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  userId:any = ""
  fetchedData:any = []

  // constructor(private api:ApiService){
  //   this.userId = localStorage.getItem("userInfo")
  //   console.log(this.userId);
  //   let data:any = {
  //     "id":this.userId
  //   }
  //   console.log(data);
    
  //   this.api.viewProfile(data).subscribe(
  //     (response:any) => {
  //       this.fetchedData=response
  //     }
  //   )
  // }
}
