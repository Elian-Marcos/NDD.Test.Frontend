import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateClientRequest } from './client/interface/CreateClientRequest';
import { DeleteClientRequest } from './client/interface/DeleteClientRequest';
import { UpdateClientRequest } from 'src/app/client/interface/UpdateClientRequest';
import { Client } from 'src/app/client/interface/Client';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  readonly baseUrl = 'https://localhost:7168/api/v1/'

  constructor(private http: HttpClient) { }

  getAllClient(): Observable<any[]>{
    return this.http.get<Client[]>(this.baseUrl + 'clients/getAll');
  }

  addClient(client: CreateClientRequest): Observable<CreateClientRequest>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<CreateClientRequest>(this.baseUrl + 'clients/create', client, httpOptions);
  }

  updateClient(client: UpdateClientRequest): Observable<Client>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Client>(this.baseUrl + 'clients/update', client, httpOptions);
  }

  deleteClient(client: DeleteClientRequest): Observable<DeleteClientRequest>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }, ) };
    return this.http.post<DeleteClientRequest>(this.baseUrl + 'clients/delete', client, httpOptions);
  }
}
