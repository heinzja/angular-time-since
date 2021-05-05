import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-time-since",
  templateUrl: "./time-since.component.html",
  styleUrls: ["./time-since.component.scss"]
})
export class TimeSince implements OnInit {
  @Input() item: TimeSinceI;
  @Input() id: String;
  @Input() index: number;
  @Input() time: Date;
  @Input() title: String;
  @Output() on_modify_ee: EventEmitter<Object> = new EventEmitter();
  @Output() on_delete_ee: EventEmitter<number> = new EventEmitter();
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
    const difference_in_days = time_since / (1000*3600*24);
    const hours_offset_in_days = difference_in_days * 24;
    this.time_since =
      (new Date(time_since).getUTCHours() + hours_offset_in_days).toFixed(0) +
      " : " +
      new Date(time_since).getUTCMinutes() +
      " : " +
      new Date(time_since).getUTCSeconds()
  }

  updateTime(event) {
    const splitTime = event.split("-");
    let date = new Date();
    date.setFullYear(splitTime[0]);
    date.setMonth(splitTime[1] - 1); //Month goes from 0-11, so -(1) is the offset
    date.setDate(splitTime[2]);
    this.time = date;
    this.on_modify_ee.emit({
      id: this.id,
      title: this.title,
      time: this.time,
      index: this.index,
    })
  }

  updateTitle(new_value) {
    console.log(
      "new",
      this.id + " renamed from " + this.title + " to " + new_value
    );
    this.title = new_value;
  }

  onDelete(): void {
    this.on_delete_ee.emit(this.index);
  }
}

export interface TimeSinceI {
  id: String;
  title: String;
  time: Date;
}
