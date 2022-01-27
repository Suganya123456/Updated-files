import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/users.model';
import { UserDetailsService } from 'src/app/user-details.service';
import { UserDetails } from 'src/UserDetails';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public userDetail: UserDetails = new UserDetails();

  subscription: Subscription = new Subscription();
  loading = false;
  submitted = false;
  constructor(private router: Router,
   private userDetailsService: UserDetailsService
   ) { }

  ngOnInit(): void {
// this.getUserDetails();
  }
  

  getUserDetails() {
    console.log('registered successfully');
      // this.router.navigate(['./login']);
     }

   
  createUser() {
    console.log('Hello :: ');
      // let firstName = (<HTMLInputElement>document.getElementById('firstname')).value;
      // let lastName = (<HTMLInputElement>document.getElementById('lastname')).value;
      // let phoneNo = (<HTMLInputElement>document.getElementById('mobileno')).value;
      // let email = (<HTMLInputElement>document.getElementById('email')).value;
      // let ifscCode = (<HTMLInputElement>document.getElementById('ifsc')).value;
      // let accountNo = (<HTMLInputElement>document.getElementById('accountno')).value;
      // let userdetail = new Users( 0, firstName, lastName, Number(accountNo), ifscCode, Number(phoneNo), email);


      // console.log('1stname: ', firstName);
      // console.log('2ndname: ', lastName);
      // console.log('phone: ', phoneNo);
      // console.log('email: ', email);
     // this.router.navigate(['./login']);
    // this.customerService.createCustomer(this.userDetail).subscribe(response =>
  this.subscription.add(this.userDetailsService.registerUsers(this.userDetail).subscribe(response =>{
    console.log(response);
    console.log(JSON.stringify(response));
   // this.router.navigate(['./login']);
   this.router.navigate(['']);
  }));

  }
     
     
      
  

}