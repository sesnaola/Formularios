import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styles: []
})
export class DataComponent {
  forma: FormGroup;

  usuario: Object = {
    nombreCompleto: {
      nombre: "Horse",
      apellido: "Luis"
    },
    correo: "horse_luis@horsemail.com"
  };

  constructor() {
    console.log(this.usuario);

    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl("Horse", [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl("Luis", Validators.required)
      }),
      correo: new FormControl("horse_luis@horsemail.com", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ])
    });
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
  }
}
