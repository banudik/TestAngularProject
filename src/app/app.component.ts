import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TestAngularProject';

  user: UserModel = new UserModel('', '', '', 0);
  saved=false;

  save() {
    console.log('Saving user information:' ,this.user); // Kullanıcı modelini kaydetmek için kullanılır.
    this.saved=true;
  }

}
interface User {
  firstname: string;
  lastname: string;
  email: string;
  age: number;
}

class UserModel implements User {
  firstname: string;
  lastname: string;
  email: string;
  age: number;

  constructor(firstname: string, lastname: string, email: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
  }
}
