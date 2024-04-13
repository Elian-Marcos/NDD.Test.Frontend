import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateClientRequest } from './client/interface/CreateClientRequest';
import { UpdateClientCommand } from 'src/app/client/interface/UpdateClientCommand';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  readonly baseUrl = 'https://localhost:7168/api/v1/'

  constructor(private http: HttpClient) { }

  getAllClient(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + 'clients/getAll');
  }

  addClient(request: CreateClientRequest): Observable<any>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<CreateClientRequest>(this.baseUrl + 'clients/create', request, httpOptions);
  }

  updateClient(client: UpdateClientCommand): Observable<any>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.baseUrl + 'clients/update', client, httpOptions);
  }

  deleteClient(client: any): Observable<any>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.baseUrl + 'clients/delete', client, httpOptions);
  }
}
