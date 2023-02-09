import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-after-login-nav",
  templateUrl: "./after-login-nav.component.html",
  styleUrls: ["./after-login-nav.component.css"],
})
export class AfterLoginNavComponent implements OnInit {
  @Input() token: any;
  constructor() {}

  ngOnInit(): void {}
}
