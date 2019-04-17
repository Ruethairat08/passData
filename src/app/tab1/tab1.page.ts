import { StudentService } from './../services/student/student.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
data:any;
  constructor(
    public studentservice:StudentService,
    public route: NavController
  ) {
  }

  listdata(item) {
    this.route.navigateForward(['/profile', { profile: JSON.stringify(item) }]);
    console.log(item)
  }

  ngOnInit() {
    this.getData();
  }
  async getData(){
    this.data= await this.studentservice.getdatastudent()
    console.log(this.data);
  }

}
