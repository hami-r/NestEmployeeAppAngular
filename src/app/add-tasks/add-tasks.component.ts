import { Component } from '@angular/core';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {
  task = ""
  employeeId = ""
  status = "Not completed"
  readValues = () => {
    let data:any = {
      "task":this.task,
      "employeeId":this.employeeId,
      "status":this.status
    }
    console.log(data);
    
    // this.api.addtask(data).subscribe(
    //   (response:any) => {
    //     if(response.status == "success"){
    //       alert("Added successfully")
    //       this.task = ""
    //     } else {
    //       alert("Something went wrong")
    //     }
    //   }
    // )
  }
}
