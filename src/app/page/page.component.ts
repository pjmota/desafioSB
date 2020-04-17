import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})
export class PageComponent implements OnInit {
  show: boolean;
  message: string;
  form: FormGroup;
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  observações: string;
  captcha: any;
  politica: any;
  validNome: boolean = false;
  validEmail: boolean = false;
  validTelefone: boolean = false;
  validCidade: boolean = false;
  validCaptcha: boolean = false;
  validPolitica: boolean = false;
  send: boolean = true;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern("^[a-zA-Z]+$"),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, [Validators.required, Validators.pattern("[0-9]+")]],
      cidade: [null, [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      politica: [null],
      observações: [null],
    });
  }

  ngOnInit() {}

  reset(param) {
    if (param == "nome") {
      this.validNome = false;
    }
    if (param == "email") {
      this.validEmail = false;
    }
    if (param == "telefone") {
      this.validTelefone = false;
    }
    if (param == "cidade") {
      this.validCidade = false;
    }
  }
  resetForm() {
    this.form.reset();
    grecaptcha.reset();
  }

  exibeMessage(param: any) {
    if (param == "nome" && this.form.value.nome === null) {
      this.validNome = true;
    }

    if (param == "email" && this.form.value.email === null) {
      this.validEmail = true;
    }

    if (param == "telefone" && this.form.value.telefone == null) {
      this.validTelefone = true;
    }

    if (param == "cidade" && this.form.value.cidade == null) {
      this.validCidade = true;
    }

    if (param == "captcha") {
      this.validCaptcha = true;
    }

    if (param == "politica") {
      this.validPolitica = true;
    }

    if (
      this.validNome !== true &&
      this.validEmail !== true &&
      this.validTelefone !== true &&
      this.validCidade !== true &&
      this.validCaptcha == true &&
      this.validPolitica == true
    ) {
      this.send = false;
    }
  }

  onFieldError(field: string) {
    if (this.onFieldInvalid(field)) {
      return "is-invalid";
    }
    return "";
  }

  onFieldInvalid(field: any) {
    field = this.form.get(field);
    if (field.status == "INVALID") {
      return field.status == "INVALID" && field.touched;
    }
  }

  onFieldRequired(field: string) {
    let required = false;
    let formControl = new FormControl();

    if (this.form.controls[field].validator) {
      let validationResult = this.form.controls[field].validator(formControl);
      if (field == "email") {
        required =
          validationResult !== null &&
          validationResult.required === true &&
          validationResult.email === true;
      } else {
        required =
          validationResult !== null && validationResult.required === true;
      }
    }

    if (required) {
      return "is-required";
    }
  }

  sendEmail() {
    Swal.fire({
      imageUrl: "../../assets/icons/logo.png",
      imageWidth: 200,
      imageHeight: 50,
      icon: "success",
      title: "Email successfully sent!",
    });
  }
}
