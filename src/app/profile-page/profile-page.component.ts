import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserinformationService } from '../userinformation.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userProfile:any;

  constructor(private activetedRouter: ActivatedRoute,
    private router: Router, private userInfoService: UserinformationService,) { }

  ngOnInit(): void {
    const cID: string = this.activetedRouter.snapshot.paramMap.get('login') || '';
    console.log(cID);
    this.getselectProfilel(cID);

  }


  getselectProfilel(loginid: string) {
    this.userInfoService.getuserProfile(loginid).subscribe(res => {
      console.log(res);
      this.userProfile = res;
      console.log(this.userProfile , 'jjjjjjjjjjjjjjj');
    });
  }


}
