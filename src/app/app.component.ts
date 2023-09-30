import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  template: `
<div>

</div>
`
})
export class LoginPageComponent {
  @Output() login: EventEmitter<any> = new EventEmitter();
}

