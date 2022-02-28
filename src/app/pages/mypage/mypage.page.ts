import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.page.html',
  styleUrls: ['./mypage.page.scss'],
})
export class MypagePage implements OnInit {
  constructor(private auth: Auth, private router: Router) {
    console.log(auth.currentUser);
    console.log(this.router.url);
  }

  ngOnInit() {}
}
