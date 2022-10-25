import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Busqueda } from '../models/busqueda';
import { Coche } from '../models/coche';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  busqueda: Busqueda = new Busqueda();
  coche: Coche = new Coche();
  urlEndpoint: string = 'http://localhost:8888/coches/coches-filter';
  httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(
    public httpClient: HttpClient
  ) { }

  public getCoches(busqueda: Busqueda): Observable<Coche[]> {
    return this.httpClient.post<Coche[]>(this.urlEndpoint, busqueda);
  }

}
