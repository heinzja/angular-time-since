import { Component, SimpleChanges } from "@angular/core";
import * as uuid from "uuid";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Time Since";
  title = "time-since";
  item_list: {} = {};
  num_items: number = 0;
  time_now: Date;
  todays_date: any = new Date().toLocaleDateString();

  constructor() {
    this.time_now = new Date();
    setInterval(() => {
      this.time_now = new Date();
    }, 1000);
  }

  ngOnInit(): void {
    const num_items = Number.parseInt(localStorage.getItem("num_items"));

    if (!isNaN(num_items)) {
      this.num_items = num_items;
    }

    console.log("num_items = ", this.num_items);
    localStorage.setItem("num_items", this.num_items.toString());
    this.loadFromLocalStorage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  loadFromLocalStorage() {
    console.log("loading...");
    console.log("this.num_items = ", this.num_items);
    for (var i = 1; i <= this.num_items; i++) {
      console.log("i = " + i);
      this.item_list[i] = JSON.parse(localStorage.getItem("TimeSince-" + i));
      console.log("TimeSince-" + i, localStorage.getItem("TimeSince-" + i));
    }
    console.log("this.item_list ", this.item_list);
    console.log("loading... completed");
  }

  onClearLocalStorage(): void {
    localStorage.clear();
    this.item_list = {};
  }

  onAddNewTimeSinceNow() {
    this.num_items++;
    const time = this.time_now;
    const unique_id = "TimeSince-Now-" + uuid.v4();
    const cookie_key = "TimeSince-" + this.num_items;

    this.item_list[unique_id] = {
      title: "TimeSince Now",
      id: unique_id,
      time_pressed: time
    };

    localStorage.setItem(cookie_key, JSON.stringify(this.item_list[unique_id]));
    localStorage.setItem("num_items", this.num_items.toString());
    // console.log(this.item_list);
  }

  onAddNewTimeSinceCustom() {
    this.num_items++;
    const time = this.time_now;
    const unique_id = "TimeSince-Custom-" + uuid.v4();
    const cookie_key = "TimeSince-" + this.num_items;

    this.item_list[unique_id] = {
      title: "TimeSince Custom",
      id: unique_id,
      time_pressed: time
    };

    localStorage.setItem(cookie_key, JSON.stringify(this.item_list[unique_id]));
    localStorage.setItem("num_items", this.num_items.toString());
    // console.log(this.item_list);
  }

  isTimeSinceNow(value: {}) {
    // console.log("isTimeSinceNow: value['id'] = " + value["id"]);
    var result: boolean = false;

    if (value["id"].includes("TimeSince-Now")) {
      result = true;
    }

    // console.log("isTimeSinceNow: result = " + result);
    return result;
  }

  isTimeSinceCustom(value: {}) {
    // console.log("isTimeSinceCustom: value['id'] = " + value["id"]);
    var result: boolean = false;

    if (value["id"].includes("TimeSince-Custom")) {
      result = true;
    }

    // console.log("isTimeSinceCustom: result = " + result);
    return result;
  }

  onRemoveTime(item_id: string) {
    this.item_list[item_id] = {};
  }

  onDataUpdate(event) {
    console.log(event);
  }
}
