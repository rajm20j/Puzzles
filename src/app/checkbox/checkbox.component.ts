import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constants } from '../model/constants';
import { IOperator } from '../model/options';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() items!: IOperator[];
  selectedCheckboxBack: Record<string, string> = {'background-color': Constants.selectedBackground};
  unselectedCheckboxBack: Record<string, string> = {'background-color': 'transparent'};
  constructor() { }

  ngOnInit(): void {
  }

  checkBoxClicked(): void {
    window.alert("Clicked");
  }
}
