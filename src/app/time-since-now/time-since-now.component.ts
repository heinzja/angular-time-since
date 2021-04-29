import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-time-since-now",
  templateUrl: "./time-since-now.component.html",
  styleUrls: ["./time-since-now.component.scss"]
})
export class TimeSinceNowComponent implements OnInit {
  @Input() id: any;
  @Input() data: {} = {};
  @Output() modified_data: {} = {};
  @Output() isDeleted: EventEmitter<Boolean> = new EventEmitter();
  time_now: Date;
  time_since: string;

  constructor() {}

  ngOnInit() {
    this.updateNowTime();
    setInterval(() => {
      this.updateNowTime();
    }, 1000);
  }

  onDeleteCard() {
    this.isDeleted.emit(true);
  }

  updateNowTime(): void {
    this.time_now = new Date();
    this.time_since = this.calcTimeSince();
  }

  calcTimeSince(): string {
    const time_since: number =
      this.time_now.getTime() - new Date(this.data["time_pressed"]).getTime();
    return (
      new Date(time_since).getUTCHours() +
      " : " +
      new Date(time_since).getUTCMinutes() +
      " : " +
      new Date(time_since).getUTCSeconds()
    );
  }

  updateTitle(new_value) {
    console.log("new", new_value);
    this.data["title"] = new_value;
    this.modified_data["title"] = [...this.data["title"]];
  }
}
