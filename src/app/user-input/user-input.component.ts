import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  constructor(private investmentService: InvestmentService) {
  } 

  enteredInitialInvestment = signal("125");
  enteredAnnualInvestment = signal("17");
  enteredExpectedReturn = signal("34");
  enteredDuration = signal("4");

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
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
