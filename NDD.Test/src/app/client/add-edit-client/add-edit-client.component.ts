import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { CreateClientRequest } from 'src/app/client/interface/CreateClientRequest';
import { UpdateClientRequest } from 'src/app/client/interface/UpdateClientRequest';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.css']
})
export class AddEditClientComponent implements OnInit{

  constructor(private service: ApiserviceService, private router: Router) { }

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  @Input() client: any;
  Id = "";
  Name = "";
  CPF = "";
  Gender = "";
  PhoneNumber = "";
  Email = "";
  BirthDate = "";
  Observation = "";

  ngOnInit(): void {

    this.Id = this.client.Id;
    this.Name = this.client.Name;
    this.CPF = this.client.CPF;
    this.Gender = this.client.Gender;
    this.PhoneNumber = this.client.PhoneNumber;
    this.Email = this.client.Email;
    this.BirthDate = this.client.BirthDate;
    this.Observation = this.client.Observation;
  }

  addClient() {
    var date = this.BirthDate.substring(0, 2) + "/" + this.BirthDate.substring(2, 4) + "/" + this.BirthDate.substring(4);

    var client : CreateClientRequest = {
      Name: this.Name,
      CPF: this.CPF,
      Gender: this.Gender,
      PhoneNumber: this.PhoneNumber,
      Email: this.Email,
      BirthDate: new Date(date),
      Observation: this.Observation,
    };
    this.service.addClient(client).subscribe(
      res => {
        if(res != null)
          alert("Success!");
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['']);
        });
    },
    error => {
      alert("Error: " + error.message);
    }
  );
  }

  updateClient() {
    var client : UpdateClientRequest= {
      Id: this.Id,
      PhoneNumber: this.PhoneNumber,
      Email: this.Email,
      Observation: this.Observation,
    };
    this.service.updateClient(client).subscribe(
      res => {
        if(res != null)
          alert("Success!");
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['client']);
        });
    },
    error => {
      alert("Error: " + error.message);
    }
  );
  }
}
