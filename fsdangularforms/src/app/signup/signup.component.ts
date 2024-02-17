import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
constructor(private fb:FormBuilder){}

signupform = this.fb.group(
  {username:['',Validators.required],
  password:['',Validators.required,
               Validators.minLength(6)]

  }
)
onSubmit(){

  alert("validations are succesfull.")
}
get signupformControl(){
  return this.signupform.controls;
}
}