import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCalcExp]'
})
export class CalcExp {

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    console.log('Key pressed:', event.key);
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Backspace', 'Enter'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

}
