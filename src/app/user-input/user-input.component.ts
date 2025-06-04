import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  calculate = output<InvestmentInput>();

  enteredInitialInvestment = signal("125");
  enteredAnnualInvestment = signal("17");
  enteredExpectedReturn = signal("34");
  enteredDuration = signal("4");

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(), // + is here to turn the string into a number. 
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    });
    // this.enteredInitialInvestment.set("0"); // Resets the value after the form has been submitted. 
    // this.enteredAnnualInvestment.set("0");
    // this.enteredExpectedReturn.set("0");
    // this.enteredDuration.set("0");

  }

}
