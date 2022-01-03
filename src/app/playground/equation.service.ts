import { Injectable } from '@angular/core';
import { IOptions } from '../model/options';

@Injectable({
  providedIn: 'root'
})
export class EquationService {
  private options!: IOptions;
  
  constructor() { }

  setOptions(options: IOptions) {
    this.options = options;
  }

  getOptions() {
    return this.options;
  }
}
