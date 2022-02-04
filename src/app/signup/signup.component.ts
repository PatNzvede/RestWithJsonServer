import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private fb : FormBuilder, private http : HttpClient, private router :Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [''],
      mobile:[''],
      password:[''],
      email: ['']
    })
  }
  signUp() {
this.http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res=> {
  console.log(res);
  alert("User registered successfully");
  this.signupForm.reset();
  this.router.navigate(['login']);
},err=>{ alert("user registration failed");
})
  }

}
