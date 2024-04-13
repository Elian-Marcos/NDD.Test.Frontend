import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { CreateClientRequest } from 'src/app/client/interface/CreateClientRequest';
import { UpdateClientCommand } from 'src/app/client/interface/UpdateClientCommand';

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.css']
})
export class AddEditClientComponent implements OnInit{

  constructor(private service: ApiserviceService) { }

  @Input() client: any;
  Client_Id = "";
  Client_Name = "";
  Client_CPF = "";
  Client_Gender = "";
  Client_Phone_Number = "";
  Client_Email = "";
  Client_Birth_Date = "";
  Client_Observation = "";

  ngOnInit(): void {

    this.Client_Id = this.client.Client_Id;
    this.Client_Name = this.client.Client_Name;
    this.Client_CPF = this.client.Client_CPF;
    this.Client_Gender = this.client.Client_Gender;
    this.Client_Phone_Number = this.client.Client_Phone_Number;
    this.Client_Email = this.client.Client_Email;
    this.Client_Birth_Date = this.client.Client_Birth_Date;
    this.Client_Observation = this.client.Client_Observation;
  }

  addClient() {
    var date = this.Client_Birth_Date.substring(0, 2) + "/" + this.Client_Birth_Date.substring(2, 4) + "/" + this.Client_Birth_Date.substring(4);

    var client : CreateClientRequest = {
      Name: this.Client_Name,
      CPF: this.Client_CPF,
      Gender: this.Client_Gender,
      PhoneNumber: this.Client_Phone_Number,
      Email: this.Client_Email,
      BirthDate: new Date(date),
      Observation: this.Client_Observation,
    };
    this.service.addClient(client).subscribe(
      res => {
        if(res.status === 'success')
          alert("Success!");
        else
          alert("Error: " + res.message)
    },
    error => {
      alert("Error: " + error.message);
    }
  );
  }

  updateClient() {
    var client : UpdateClientCommand= {
      Id: this.Client_Id,
      PhoneNumber: this.Client_Phone_Number,
      Email: this.Client_Email,
      Observation: this.Client_Observation,
    };
    this.service.updateClient(client).subscribe(res => {
      alert(res.toString());
    });
  }
}
