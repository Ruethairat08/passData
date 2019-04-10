import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
data:any;
  constructor(
    public route:NavController,
    public act:ActivatedRoute
    ) { }

  ngOnInit() {let res:any = this.act.snapshot.paramMap.get('profile');
  this.data = JSON.parse(res)
  console.log(this.data)
  }
  backtab1() {
    this.route.navigateForward('/tabs/tab1')
}
}
