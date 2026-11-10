import { afterNextRender, AfterViewInit, Component, inject, injectAsync, onIdle, OnInit, signal, viewChild } from '@angular/core';
import { form, FormRoot, FormField, required, minLength, FieldTree, maxLength } from '@angular/forms/signals';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WaitSpinner } from '../../shared/wait-spinner/wait-spinner';
import { NgOptimizedImage } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton, MatFabButton } from '@angular/material/button';
import { firstValueFrom } from 'rxjs';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { IdentityService } from '../identity-service';
import { Turnstile } from '../../shared/turnstile/turnstile';

@Component({
  imports: [FormRoot, MatFormField, MatLabel, MatInput, FormField, MatError, MatIcon, MatSuffix,
    RouterLink, WaitSpinner, NgOptimizedImage, MatTooltip, MatFabButton, MatButton, Turnstile
  ],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements AfterViewInit {
  //_turnstileService = injectAsync(() => import('../../shared/services/turnstile-service').then(m => m.TurnstileService), { prefetch: onIdle });
  //_identityService = injectAsync(()=>import('../identity-service').then(m=>m.IdentityService), {prefetch: onIdle});
  identityService = inject(IdentityService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  turnstileComponent = viewChild(Turnstile);

  generalError = signal('');
  displayWait = signal(false);
  turnstileEnabled = signal(false);

  loginModel = signal<LoginFormModel>({
    CfTurnstileResponse: '',
    Password: '',
    UsernameOrEmail: '',
    ReturnUrl: this.activatedRoute.snapshot.queryParamMap.get("ReturnUrl") || "/",
  });
  loginForm = form(this.loginModel,
    (schemaPath) => {
      required(schemaPath.UsernameOrEmail, { message: "Username or Email is required!" });
      minLength(schemaPath.UsernameOrEmail, 3, { message: "Username or Email must be at least 3 characters!" })
      maxLength(schemaPath.UsernameOrEmail, 128, { message: "Username or Email cannot be more than 128 characters!" })

      required(schemaPath.Password, { message: "Enter your Password!" });
      minLength(schemaPath.Password, 8, { message: "Password must be at least 8 characters!" });
      maxLength(schemaPath.Password, 60, { message: "Password cannot be more than 60 characters!" });
    },
    {
      submission: {
        action: async (field) => {
          //const identityService = await this._identityService();
          this.displayWait.set(true);

          let result: { kind: string, message: string, fieldTree: FieldTree<LoginFormModel | string, string | number, "writable"> }[] | null = null;
          try {
            let res = await firstValueFrom(this.identityService.submitLogin(this.loginModel()));
            if (res.redirected && res.url) {
              const destinationPath = new URL(res.url).pathname;
              this.router.navigateByUrl(destinationPath, { replaceUrl: true });
            }
          }
          catch (err) {
            result ??= [];
            if (err instanceof HttpErrorResponse && err.status == HttpStatusCode.BadRequest) {
              //console.error("BadRequest err: "+err.error);
              if (err.error.UsernameOrEmail || err.error.errors?.UsernameOrEmail) {
                result.push({
                  kind: "UsernameOrEmail",
                  message: err.error.UsernameOrEmail || err.error.errors?.UsernameOrEmail,
                  fieldTree: field.UsernameOrEmail
                });
              }
              if (err.error.Password || err.error.errors?.Password) {
                result.push({
                  kind: "Password",
                  message: err.error.Password || err.error.errors?.Password,
                  fieldTree: field.Password
                });
              }
              if (err.error.CfTurnstileResponse || err.error.errors?.CfTurnstileResponse) {
                result.push({
                  kind: "CfTurnstileResponse",
                  message: err.error.CfTurnstileResponse || err.error.errors?.CfTurnstileResponse,
                  fieldTree: field.CfTurnstileResponse
                });
              }

              result.push({
                kind: "LoginError",
                message: "An error occured during login: " /*+ err.error*/,
                fieldTree: field
              });
            }
            else if (err instanceof HttpErrorResponse && err.status == HttpStatusCode.NotFound) {
              result.push({
                kind: "LoginError",
                message: err.error.message,
                fieldTree: field
              });
            }
            else {
              result.push({
                kind: "LoginError",
                message: "An error occured during login!",
                fieldTree: field
              });
            }
            console.error(err);
          }

          this.displayWait.set(false);
          //const turnstileService = await this._turnstileService();
          if (result) {
            this.turnstileComponent()?.resetWidget();
          }
          return result;
        },
      }
    }
  );

  constructor() {
    this.identityService.getAntiForgeryToken.reload();
  }
  ngAfterViewInit(): void {
    this.loginForm.UsernameOrEmail().focusBoundControl();
  }

}

export interface LoginFormModel {
  UsernameOrEmail: string;
  Password: string;
  CfTurnstileResponse: string;
  ReturnUrl: string;
}
