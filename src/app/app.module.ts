import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TimeSinceNowComponent } from "./time-since-now/time-since-now.component";
import { TimeSinceCustomStartComponent } from "./time-since-custom-start/time-since-custom-start.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TimeSinceNowComponent,
    TimeSinceCustomStartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
