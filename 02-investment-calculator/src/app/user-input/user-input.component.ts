import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  interedInitialInvestment = '0';
  enteredInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10'
  onSubmit(){
    console.log(' VALUE SUMBMITTE');
    console.log(this.interedInitialInvestment);
    console.log(this.enteredInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
  }
}
