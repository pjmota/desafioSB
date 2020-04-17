import { TextMaskModule } from "angular2-text-mask";
import { ModalModule } from "ngx-bootstrap/modal";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { RecaptchaModule } from "ng-recaptcha";

import { AppComponent } from "./app.component";
import { PageComponent } from "./page/page.component";
import { InvalidFormControlComponent } from "./invalid-form-control/invalid-form-control.component";

@NgModule({
  declarations: [AppComponent, PageComponent, InvalidFormControlComponent],
  imports: [
    BrowserModule,
    RecaptchaModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TextMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
