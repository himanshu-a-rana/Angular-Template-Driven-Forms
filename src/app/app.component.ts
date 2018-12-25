import { Component } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-template-driven-forms';
  languages = ['English', 'Spanish', 'Other'];
  // model = new Employee('Daria', 'Smith', true, 'w2', 'English');
  model = new Employee('', '', true, 'w2', 'default');
  hasPrimaryLanguageError = false;

  validatePrimaryLanguage(event) {
    if (this.model.primaryLanguage === 'default') {
      this.hasPrimaryLanguageError = true;
    } else {
      this.hasPrimaryLanguageError = false;
    }
  }
}
