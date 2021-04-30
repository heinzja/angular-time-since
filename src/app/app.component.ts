import { Component, SimpleChanges } from "@angular/core";
import { TimeSinceI } from "./time-since/time-since.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Time Since";
  title = "time-since";
  item_list: TimeSinceI[] = [];
  // todays_date: any = new Date().toLocaleDateString();

  ngOnInit(): void {
    this.loadFromLocalStorage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  addNewTimeSince() {
    const id = this.item_list.length;
    const item: TimeSinceI = {
      id,
      title: "TimeSince",
      time: new Date()
    };

    this.item_list.push(item);
    // console.log(this.item_list);
    localStorage.setItem("TimeSince", JSON.stringify(this.item_list));
  }

  loadFromLocalStorage() {
    // console.log("loading...");
    this.item_list = JSON.parse(localStorage.getItem("TimeSince"));
    if (this.item_list === null) {
      this.item_list = [];
    }
    // console.log(this.item_list);
    // console.log("this.item_list ", this.item_list);
    // console.log("loading... completed");
  }

  onClearLocalStorage(): void {
    localStorage.clear();
    this.item_list = [];
  }

  onRemoveTime(id: number) {
    console.log("id: ", id);
    this.item_list = this.item_list.slice(1, id);
    localStorage.setItem("TimeSince", JSON.stringify(this.item_list));
  }

  onDataUpdate(event) {
    console.log(event);
  }
}
