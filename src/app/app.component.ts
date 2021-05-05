import { Component, SimpleChanges } from "@angular/core";
import { TimeSinceI } from "./time-since/time-since.component";
import * as uuid from "uuid";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Time Since";
  title = "time-since";
  item_list: TimeSinceI[] = [];
  todays_date: string = new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();

  ngOnInit(): void {
    this.loadFromLocalStorage();
    setInterval(() => {
      this.todays_date = new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  updateTime(event) {
    //TODO: Update cookie and time stuff
    console.log(event);
  }

  addNewTimeSince() {
    const id = uuid.v4();
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

  onRemoveTime(index: number) {
    this.item_list.splice(index, 1);
    localStorage.setItem("TimeSince", JSON.stringify(this.item_list));
  }

  onDataUpdate(event) {
    console.log(event);
    this.item_list[event.index] = {
      id: event.id, 
      title: event.title,
      time: event.time,
    };
    console.log(this.item_list);
    localStorage.setItem("TimeSince", JSON.stringify(this.item_list));
  }
}
