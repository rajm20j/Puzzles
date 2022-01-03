import { Component, OnInit } from '@angular/core';
import { Constants } from '../model/constants';
import { Utils } from '../model/utils';
import { Router } from '@angular/router';
import { Routes } from '../model/routes';
import { EquationService } from '../playground/equation.service';
import { IOptions } from '../model/options';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  initialMinValue: number = 1;
  initialMaxValue: number = 2;
  digitMinLength: number = 1;
  digitMaxLength: number = 5;
  initialAnsChoices: number = 3;
  ansMinChoices: number = 2;
  ansMaxChoices: number = 5;
  options: IOptions = {
    operators: [
      {
        symbol: '+',
        enabled: false
      },
      {
        symbol: '-',
        enabled: true
      },
      {
        symbol: '×',
        enabled: false
      }
    ],
    time: '60',
    lives: 3
  }

  btnStyles!: Record<string, string>;
  constructor(private router: Router, private equationService: EquationService) { }

  ngOnInit(): void {
  }

  setOptions() {

  }

  get setBtnStyles() {
    return {
      'height': '40px',
      'width': '100px',
      'font-size': '0.5em',
      'background-color': 'transparent',
      'cursor': 'pointer'
    }
  }

  get setSaveBtnBackground() {
    return Utils.setButtonBackground(Constants.activeBackground);
  }

  get setCancelBtnBackground() {
    return Utils.setButtonBackground(Constants.cancelBackground);
  }

  get saveBtnTitle() {
    return Constants.saveText;
  }

  get cancelBtnTitle() {
    return Constants.cancelText;
  }

  cancel() {
    this.router.navigateByUrl(Routes.HOME);
  }
}
