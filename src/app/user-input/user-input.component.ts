import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  @Output() calculate = new EventEmitter<{
    initialInvestment: number; annualInvestment: number; expectedReturn: number; duration: number;
  }>();

  enteredInitialInvestment = "0";
  enteredAnnualInvestment = "0";
  enteredExpectedReturn = "0";
  enteredDuration = "0";

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment, // + is here to turn the string into a number. 
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
    });
  }

}
