import { Component, SimpleChanges } from "@angular/core";

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onAddNewTime() {
    this.num_items++;
    const time = this.time_now;
    this.item_list[this.num_items] = {
      title: "",
      id: this.num_items,
      time_pressed: time
    };
    console.log(this.item_list);
  }

  onRemoveTime(item_id: string) {
    this.item_list[item_id] = {};
  }

  onDataUpdate(event) {
    console.log(event);
  }
}
