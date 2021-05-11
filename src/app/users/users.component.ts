import { Component, OnInit } from '@angular/core';
import { UserinformationService } from '../userinformation.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  searchString: string;
  totalCount: number | undefined;
  usersList: any[] | undefined;
  constructor(private userInfoService: UserinformationService, private router: Router) {
    this.searchString = '';
    this.initVariables();
  }

  ngOnInit(): void {
    this.searchString = '';
    // this.getUserData();
  }
  initVariables(): void {
    this.searchString = '';
    this.totalCount = 0;
    this.usersList = [];
  }



  getUserData(): void {
    console.log(this.searchString);

    const queryParams: any = {};  

    if (this.searchString) { queryParams.q = this.searchString; }

    this.userInfoService.getUserData(queryParams).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.totalCount = res.total_count;
        this.usersList = res.items.slice(0, 10);
      }


    });
  }
  profilepage() {

  }
}
