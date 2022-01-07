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
  
  smallestDigitArray: number[] = [];
  largestDigitArray: number[] = [];
  numberOfChoicesArray: number[] = [];
  smallestDigit: number = 1;
  largestDigit: number = 2;
  maxDigit: number = 4;
  numberOfChoices: number = 5;

  ngOnInit(): void {
      this.updateSmallestDigitArray();
      this.updateLargestDigitArray();
      this.updateNumberOfChoices();
  }
  
  btnStyles!: Record<string, string>;
  constructor(private router: Router, private equationService: EquationService) {
  }

  private updateSmallestDigitArray() {
    for(let i: number = this.smallestDigit; i<=this.maxDigit; i++) {
      this.smallestDigitArray.push(i);
    }
    console.log(this.smallestDigitArray);
  }

  private updateLargestDigitArray() {
    for(let i: number = this.smallestDigit; i<=this.maxDigit; i++) {
      this.largestDigitArray.push(i);
    }
  }

  private updateNumberOfChoices() {
    for(let i: number = 2; i<=this.numberOfChoices; i++) {
      this.numberOfChoicesArray.push(i);
    }
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
