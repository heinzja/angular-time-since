import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TimeSince } from "./time-since/time-since.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TimeSince,
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
