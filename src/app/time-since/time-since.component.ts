import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-time-since",
  templateUrl: "./time-since.component.html",
  styleUrls: ["./time-since.component.scss"]
})
export class TimeSince implements OnInit {
  @Input() item: TimeSinceI;
  @Input() id: string;
  @Input() time: Date;
  @Input() title: String;
  @Output() modified_item_ee: EventEmitter<TimeSinceI> = new EventEmitter();
  @Output() on_delete_ee: EventEmitter<TimeSinceI["id"]> = new EventEmitter();
  time_since: string;

  constructor() {}

  ngOnInit() {
    this.calcTimeSince();
    setInterval(() => {
      this.calcTimeSince();
    }, 1000);
  }

  calcTimeSince() {
    // console.log(this.time);
    const current_date = new Date();
    const saved_date = new Date(this.time);
    const time_since: number = current_date.getTime() - saved_date.getTime();
    this.time_since =
      new Date(time_since).getUTCHours() +
      " : " +
      new Date(time_since).getUTCMinutes() +
      " : " +
      new Date(time_since).getUTCSeconds();
  }

  updateTitle(new_value) {
    console.log(
      "new",
      this.id + " renamed from " + this.title + " to " + new_value
    );
    this.title = new_value;
  }

  onDelete(): void {
    this.on_delete_ee.emit(this.id);
  }
}

export interface TimeSinceI {
  id: string;
  title: String;
  time: Date;
}
