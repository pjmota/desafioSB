import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-invalid-form-control",
  templateUrl: "./invalid-form-control.component.html",
  styleUrls: ["./invalid-form-control.component.css"],
})
export class InvalidFormControlComponent implements OnInit {
  @Input() show: boolean;
  @Input() message: string;

  constructor() {}

  ngOnInit() {}
}
