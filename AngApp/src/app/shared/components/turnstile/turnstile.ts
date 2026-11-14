import { HttpClient } from '@angular/common/http';
import { afterNextRender, Component, DOCUMENT, effect, inject, input, OnInit, signal } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';
import { SharedConfigs } from '../../services/shared-configs';

declare const turnstile: any;

@Component({
  imports: [],
  selector: 'app-turnstile',
  styleUrl: './turnstile.css',
  templateUrl: './turnstile.html',
})
export class Turnstile {
  cfTurnstileFieldTree = input.required<FieldTree<string, string, 'writable'>>();

  private readonly httpClient = inject(HttpClient);
  private sharedConfigs = inject(SharedConfigs);
  private readonly document = inject(DOCUMENT);

  private readonly turnstileSiteKey = "0x4AAAAAAAkeZ2wTzJxqgC_K";
  private readonly turnstileUrl = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

  isEnabled = signal(false);
  widgetId = signal("");
  message = signal('');

  constructor() {
    afterNextRender(() => {
      this.checkEnable();
    });
    effect(() => {
      if (this.isEnabled()) {
        this.loadTurnstileScript()
          .then(() => {
            this.initializeWidget();
          })
          .catch((err) => {
            console.error(err);
            this.message.set("An error occurred when loading turnstile widget!");
          });
      }
    });
  }

  checkEnable() {
    this.httpClient.get<{ turnstileEnabled: boolean }>("/api/identity/IsTurnstileEnabled").subscribe({
      next: res => {
        //console.log(res);
        if (res && res.turnstileEnabled === true) {
          this.isEnabled.set(true);
        }
        else {
          this.isEnabled.set(false);
        }
      },
    });
  }

  private loadTurnstileScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Avoid loading duplicate scripts if it's already in the DOM
      if (this.document.querySelector(`script[src="${this.turnstileUrl}"]`)) {
        resolve();
        return;
      }

      const script = this.document.createElement('script');
      script.src = this.turnstileUrl;
      script.type = 'text/javascript';
      script.async = true;

      script.onload = () => resolve();
      script.onerror = (error) => reject(error);

      this.document.head.appendChild(script);
    });
  }

  initializeWidget() {
    this.widgetId.set(
      turnstile.render("#widget-container", {
        sitekey: this.turnstileSiteKey,
        size: "flexible",
        theme: this.sharedConfigs.colorScheme(),
        "response-field": false,
        action: "login",
        "refresh-expired": "manual",
        "refresh-timeout": "manual",
        callback: (token: string) => {
          this.cfTurnstileFieldTree()().value.set(token);
        },
        'error-callback': (errorCode: string) => {
          this.message.set("Turnstile error! error code: " + errorCode);
          console.error("turnstile error-callback: " + errorCode);
        },
        'expired-callback': () => {
          this.message.set("Turnstile expired!");
          console.error("turnstile expired-callback");
        },
        'timeout-callback': () => {
          this.message.set("Turnstile timeouted!")
          console.error("turnstile timeout-callback");
        },
      })
    );
  }

  resetWidget() {
    turnstile.reset(this.widgetId());
  }

  removeTurnstile() {
    turnstile.remove();
  }
}
