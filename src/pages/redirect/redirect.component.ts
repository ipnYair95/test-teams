import { msalConfig, msalRequest } from './../../app/constants';
import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { PublicClientApplication } from '@azure/msal-browser';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './redirect.html',
  styleUrl: './redirect.component.css',
})
export class RedirectComponent implements OnInit {

  msalInstance: PublicClientApplication | null = null;

  async ngOnInit() {

    try {

      this.msalInstance = new PublicClientApplication(msalConfig);

      await this.msalInstance.initialize();


    } catch (error) {
      console.error(error)
    }


  }

  async login() {

    if (!this.msalInstance) {
      return;
    }


    try {

      await this.msalInstance.handleRedirectPromise();

      const resp = await this.msalInstance.ssoSilent(msalRequest);
      console.log(resp, 'silent');

    } catch (error) {
      console.error(error);
      this.loginWithPopUp();
    }


  }

  async loginWithPopUp() {

    try {
      const resp = await this.msalInstance!.loginPopup(msalRequest);

      this.readRespose(resp, 'popup');

    } catch (error) {
      console.error(error);
    }

  }

  readRespose(resp: any, type: 'popup' | 'silent') {


    console.log({
      type,
      data: resp
    })

  }

}