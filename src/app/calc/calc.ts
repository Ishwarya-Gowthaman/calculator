import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Converter } from "../converter/converter";
import { CalcExp } from '../directives/calc-exp';

@Component({
  selector: 'app-calc',
  imports: [FormsModule, CommonModule, Converter, CalcExp],
  templateUrl: './calc.html',
  styleUrl: './calc.scss'
})
export class Calc {
  number1 : string = '';
  number2 : string  = '';
  expression: string = '';
  result : number | null = null;
  items: string[] = ['1', '2', '3', '4', '5','6','7','8','9','0'];
  symbols: string[] = ['+', '-', '*', '/','.'];
  errorMessage : string | null = null;

  // calculate(action: string): void {
  //   if (this.number1 === null ) {
  //     this.result = null;
  //     return;
  //   }

  //   switch (action) {
  //     case 'add':
  //       this.result = this.number1 + this.number2;
  //       break;
  //     case 'sub':
  //       this.result = this.number1 - this.number2;
  //       break;
  //     case 'mul':
  //       this.result = this.number1 * this.number2;
  //       break;
  //     case 'divide':
  //       if (this.number2 !== 0) {
  //         this.result = this.number1 / this.number2;
  //       } else {
  //         this.result = null; // Handle division by zero
  //       }
  //       break;
  //     default:
  //       this.result = null; // Handle unknown action
  //   }
  // }

  addInput(inp: string): void {
        this.number2 = this.number2 + inp;
  }

  addsymbol(inp: string): void {
    if(this.expression == '' && inp != '.')
    {
      this.expression = inp;
      this.number1 = this.number2;
      this.number2 = '';
    }
    else
    {
      if(inp == '.')
      {
        this.number2 = this.number2 + inp;
      }
      else if(inp == '-' && this.number2  == '')
      {
        this.number2 = inp;
      }
      else if(this.number2 != '')
      {
        let sym = inp;
        this.calculate();
        this.number1 = this.result!= undefined && this.result != null ?  this.result.toString() : '';
        this.expression = sym;
        this.number2 = '';
        this.result = null;
      }
    }
    
  }
  
  calculate()
  {
    if(this.number1 === '' || this.number2 === '' || this.expression === '')
    {
      this.errorMessage = 'Please enter valid numbers and an operation';
      this.result = null;
      return;
    }
    switch(this.expression)
    {
      case '+':
        this.result = parseFloat(this.number1) + parseFloat(this.number2);
        this.errorMessage = null;
        break;
      case '-':
        this.result = parseFloat(this.number1) - parseFloat(this.number2);
        this.errorMessage = null;
        break;
      case '*':
        this.result = parseFloat(this.number1) * parseFloat(this.number2);
        this.errorMessage = null;
        break;
      case '/':
        if (parseFloat(this.number2) !== 0) {
          this.result = parseFloat(this.number1) / parseFloat(this.number2);
          this.errorMessage = null;
        } else {
          this.errorMessage = 'Division by zero is not allowed';
          this.result = null;
        }
        break;
      default:
        this.errorMessage = 'Invalid operation';
        this.result = null;
    }
    this.number2 = this.result!= undefined && this.result != null ?  this.result.toString() : '';
    this.expression = '';
    this.number1 = '';
  }

  clear()
  {
    this.number1 = '';
    this.number2 = '';
    this.expression = '';
    this.result = null;
    this.errorMessage = null;
  }
  updateExpression(event : any){
    console.log('Expression updated:', event.key);
    event.preventDefault();
    let key = event.key;
    if(this.symbols.includes(key))
    {
      this.addsymbol(key);
    }
    else if(this.items.includes(key))
    {
      this.addInput(key);
    }
    else if(key == 'Backspace')
    {
      this.number2 = this.number2.slice(0, -1);
    }
    else if(key == 'Enter')
    {
      this.calculate();
      
    }
  }
}
