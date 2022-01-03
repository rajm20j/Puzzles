import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonTitle!: String;
  @Input() buttonStyle!: Record<string, string>;
  @Input() buttonBackground!: Record<string, string>;
  @Output() buttonClick = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }
}
