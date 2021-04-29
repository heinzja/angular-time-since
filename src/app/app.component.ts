import { Component, SimpleChanges } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Time Since";
  title = "time-since";
  item_list: Object[] = [];
  // todays_date: any = new Date().toLocaleDateString();

  ngOnInit(): void {
    console.log("test " + localStorage[1]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  addNewTimeSince() {
    const id = "TimeSince" + this.item_list.length;
    this.item_list.push({
      id,
      title: "TimeSince",
      time: new Date(),
    });
    console.log(this.item_list);
    localStorage.setItem(id, this.item_list[id]);
  }

  onRemoveTime(id: number) {
    this.item_list = this.item_list.slice(1, id);
  }

  onDataUpdate(event) {
    console.log(event);
  }
}
