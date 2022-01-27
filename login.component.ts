import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDetails } from 'src/UserDetails';
import { UserDetailsService } from 'src/app/user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: UserDetails = new UserDetails();
  public isValid: boolean = true;
  public registeredUser: boolean = false;
  public isNew: boolean = false;

  username: string = '';
  password: string = '';
  isUsernameValid: boolean = true;
  isValidUser: boolean = true;
 
 


  constructor(private router: Router,
    private userDetailsService: UserDetailsService
    ) { }

  ngOnInit(): void {
  }

  
goToHome() {
  console.log('Hiiiii');
  this.validateUser();
  this.router.navigate(['./home']);
}
register() {
  console.log('Hiiiii');
  this.router.navigate(['./registration']);
 // this.router.navigateByUrl('/registration');
}

reloadPage() {
  this.isValidUser=true;
  this.router.navigateByUrl('');
}

validateUser() {
  if(this.user.username == null || this.user.username == '' || this.user.username == undefined) {
    this.isValidUser = false;
  }
  else if(this.user.password == null || this.user.password == '' || this.user.password == undefined) {
    this.isValidUser = false;
  } else {
    this.isNew = true;
    this.userDetailsService.getUserDetail().subscribe(response => {
      console.log("Registered Users>",response);
      for(let users of response) {
        if(users.username == this.user.username && users.password == this.user.password) {
          this.registeredUser = true;
          this.isNew = false;
          console.log("Registered User");
        }
      }
    });
  }

}

}