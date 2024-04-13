import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { DeleteClientRequest } from '../interface/DeleteClientRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent implements OnInit{

  constructor(private service: ApiserviceService, private router: Router){}

  ClientList: any = [];
  ModalTitle = "";
  ActivateAddEditClientComp: boolean = false;
  client: any;

  ClientListWithoutFilter: any = [];
  ClientIdFilter = "";
  ClientNameFilter = "";

  ngOnInit(): void {
  }

  closeClick() {
    this.ActivateAddEditClientComp = false;

  }

  addClick() {
    this.client = {
      Id: "0",
      Name: ""
    }
    this.ModalTitle = "Create Client ";
    this.ActivateAddEditClientComp = true;
  }

  editClick(item: any) {
    this.client = item;
    this.ModalTitle = "Edit Client";
    this.ActivateAddEditClientComp = true;
  }

  deleteClick(item: DeleteClientRequest) {
    if (confirm('Are you sure??')) {
      this.service.deleteClient(item).subscribe(data => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['']);
        });
      });
    }
  }

  getAllClient() {
    this.service.getAllClient().subscribe(data => {
      data = data.map(d =>{
        return{
          Id: d.id,
          Name: d.name,
          Gender: d.gender,
          CPF: d.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'),
          PhoneNumber: d.phoneNumber,
          Email: d.email,
          BirthDate: d.birthDate,
          Observation: d.observation
        };
      });
      this.ClientList = data;
    });
  }

}
