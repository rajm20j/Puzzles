import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../model/routes';
import { Constants } from '../model/constants';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPlay(): void {
    this.router.navigateByUrl(Routes.PLAY);
  }

  navigateToOptions(): void {
    this.router.navigateByUrl(Routes.OPTIONS);
  }

  get buttonTitle() {
    return Constants.startText;
  }

}
