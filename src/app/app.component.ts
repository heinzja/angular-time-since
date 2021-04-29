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
    console.log("test " + localStorage[1]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onAddNewTimeSinceNow() {
    const time = this.time_now;
    const unique_id = "TimeSince-Now-" + uuid.v4();
    this.item_list[unique_id] = {
      title: "TimeSince Now",
      id: unique_id,
      time_pressed: time
    };
    console.log(this.item_list);
    localStorage.setItem(unique_id, this.item_list[unique_id]);
  }

  onAddNewTimeSinceCustom() {
    const time = this.time_now;
    const unique_id = "TimeSince-Custom-" + uuid.v4();
    this.item_list[unique_id] = {
      title: "TimeSince Custom",
      id: unique_id,
      time_pressed: time
    };
    console.log(this.item_list);
    localStorage.setItem(unique_id, this.item_list[unique_id]);
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
