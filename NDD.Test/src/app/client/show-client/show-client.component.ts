import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent implements OnInit{

  constructor(private service: ApiserviceService){}

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
      Client_Id: "0",
      Client_Name: ""
    }
    this.ModalTitle = "Create Client ";
    this.ActivateAddEditClientComp = true;
  }

  editClick(item: any) {
    this.client = item;
    this.ModalTitle = "Edit Client";
    this.ActivateAddEditClientComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteClient(item.Client_Id).subscribe(data => {
        alert(data.toString());
      })
    }
  }

  getAllClient() {
    this.service.getAllClient().subscribe(data => {
      this.ClientList = data;
    });
  }

}
