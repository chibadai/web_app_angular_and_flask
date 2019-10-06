import { ButtonService } from "./../button/button.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-backend",
  templateUrl: "./backend.component.html",
  styleUrls: ["./backend.component.scss"]
})
export class BackendComponent implements OnInit {
  // backend用のsubscription
  private backendSubscription$: Subscription;

  // htmlに表示する変数
  backendReturnData: string;

  constructor(private buttonService: ButtonService) {}

  ngOnInit() {
    this.backendReturnData = "loading";
    this.backendSubscription$ = this.buttonService.backend.subscribe(req => {
      this.backendReturnData = req.data;
    });
  }
}
