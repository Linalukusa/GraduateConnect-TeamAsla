// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'mat-slider',
//   templateUrl: './mat-slider.component.html',
//   styleUrls: ['./mat-slider.component.css']
// })
// export class MatSliderComponent implements OnInit {

//   

//   ngOnInit() {
//   }

// }
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';

/**
 * @title Configurable slider
 */
@Component({
  selector: 'mat-slider',
  templateUrl: './mat-slider.component.html',
  styleUrls: ['./mat-slider.component.css']
})
export class MatSliderComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;
}
