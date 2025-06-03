import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'master-angular-tutorial-investment-calculator';

  onInitialInvestment() {

  }

  onAnnualInvestment() {

  }

  onExpectedReturn() {

  }

  onDuration() {

  }

}
