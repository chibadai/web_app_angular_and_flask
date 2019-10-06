import { Component, OnInit } from "@angular/core";
import { ButtonService } from "./button.service";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  // get用ボタンラベル
  getButtonLabel: string;
  // get用クリックした回数
  getClickNumber: number;

  // get用ボタンラベル
  postButtonLabel: string;
  // get用クリックした回数
  postClickNumber: number;
  constructor(private buttonService: ButtonService) {}

  ngOnInit() {
    this.getClickNumber = 0;
    this.getButtonLabel = `get Click: ${this.getClickNumber.toString()}`;

    this.postClickNumber = 0;
    this.postButtonLabel = `post Click: ${this.postClickNumber.toString()}`;
  }

  handleOnGetClick(event): void {
    console.log("handleOnGetClick");
    this.getClickNumber += 1;
    this.getButtonLabel = `get Click: ${this.getClickNumber.toString()}`;
  }

  handleOnPostClick(event): void {
    console.log("handleOnPostClick");
    this.postClickNumber += 1;
    this.postButtonLabel = `post Click: ${this.postClickNumber.toString()}`;
  }
}
