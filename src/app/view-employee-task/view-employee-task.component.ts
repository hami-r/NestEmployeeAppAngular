import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee-task',
  templateUrl: './view-employee-task.component.html',
  styleUrls: ['./view-employee-task.component.css']
})
export class ViewEmployeeTaskComponent {
  userId:any = ""
  fetchedTasks:any = []
  // constructor(private api:ApiService){
  //   this.userId=localStorage.getItem("userInfo")
  //   let data:any = {
  //     "id":this.userId
  //   }

  //   this.api.viewMyComplaints(data).subscribe(
  //     (response:any) => {
  //       this.fetchedComplaints = response
  //     }
  //   )
  // }
}
