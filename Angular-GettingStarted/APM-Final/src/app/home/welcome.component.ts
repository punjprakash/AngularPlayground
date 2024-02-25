import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  templateUrl: './welcome.component.html',
  providers: [CookieService]
})
export class WelcomeComponent implements OnInit{
  constructor(private cookieService:CookieService){

  }
  public pageTitle = 'Welcome';
  cookieValue = '';
  value='Angular '

  doSomething(){
    this.cookieService.deleteAll();
    try {
      this.cookieService.set('X-Auth-Token', this.value.repeat(100));
    } catch (error) {
      console.error(error + ' big*******************************')
    }
   
    this.cookieValue = this.cookieService.get('X-Auth-Token');
  }

  ngOnInit(): void {
    this.cookieService.deleteAll();
    try {
      this.cookieService.set('X-Auth-Token', this.value.repeat(100));
    } catch (error) {
      console.error(error + ' big*******************************')
    }
   
    this.cookieValue = this.cookieService.get('X-Auth-Token');
  }
}
