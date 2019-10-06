import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonComponent } from './button/button.component';
import { HttpComponent } from './http/http.component';
import { BackendComponent } from './backend/backend.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, HttpComponent, BackendComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
