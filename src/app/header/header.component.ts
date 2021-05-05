import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  todays_date: string = new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.todays_date = new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
    }, 1000);
  }

}
