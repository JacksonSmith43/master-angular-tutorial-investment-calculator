import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  enteredInitialInvestment = "0";
  enteredAnnualInvestment = "0";
  enteredExpectedReturn = "0";
  enteredDuration = "0";

  @Output() initialInvestmentOutput = new EventEmitter();
  @Output() annualInvestmentOutput = new EventEmitter();
  @Output() expectedreturnOutput = new EventEmitter();
  @Output() durationOutput = new EventEmitter();

  onInitialInvestment() {
    this.initialInvestmentOutput.emit();
  }

  onAnnualInvestment() {
    this.annualInvestmentOutput.emit();
  }

  onExpectedReturn() {
    this.expectedreturnOutput.emit();
  }

  onDuration() {
    this.durationOutput.emit();
  }

  onSubmit() {

  }

}
